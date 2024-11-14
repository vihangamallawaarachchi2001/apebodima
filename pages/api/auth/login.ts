import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/client';
import { verifyPassword } from '@/utils/auth';
import { generateToken } from '@/utils/jwt';

interface LoginRequestBody {
    email: string;
    password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email,password} = req.body as LoginRequestBody

    try{

        const existingUser = await prisma.user.findUnique({where:{email}})
        if (!existingUser) return res.status(400).json({message:'User not found'})

   
      const isPasswordValid = await verifyPassword(password, existingUser.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = await generateToken(existingUser.id)
      res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}