
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/client'; // Adjust the path to your client file
import redis from '@/redis'; // Assuming redis.ts is in the root
import { hashPassword } from '@/utils/auth';

interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
  isSeller: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password, isSeller } = req.body as SignupRequestBody;

    try {
      // Rate limit by IP address
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const attempts = await redis.incr(`signup_attempts_${ip}`);
      if (attempts > 5) {
        return res.status(429).json({ message: 'Too many requests. Please try again later.' });
      }
      await redis.expire(`signup_attempts_${ip}`, 3600); // Set expiry for 1 hour

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password and create new user
      const hashedPassword = await hashPassword(password);
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          isSeller,
        },
      });

      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
