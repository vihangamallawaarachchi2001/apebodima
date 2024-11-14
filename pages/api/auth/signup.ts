
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/client'; // Adjust the path to your client file
import { hashPassword } from '@/utils/auth';

interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
  type: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    if (!req.body || !req.body.name || !req.body.email || !req.body.password || !req.body.type) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    const { name, email, password, type } = req.body as SignupRequestBody;

    try {

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

       let isSeller: boolean = false;

      if ( type == 'seller' ) {
            isSeller = true;
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
      if (error instanceof Error) {
        console.error('Error during signup:', error.message);
      } else {
        console.error('Unknown error during signup:', error);
      }
      res.status(500).json({ message: 'Internal server error' });
    }
    
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
