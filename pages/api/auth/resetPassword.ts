import { hashPassword } from '@/utils/auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/client';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {  newPassword , id } = req.body

    try {

        const hashedPassword = await hashPassword(newPassword)

        await prisma.user.update({
            where:{
                id:parseInt(id)
            },
            data:{
                password:hashedPassword
            }
        })

      res.status(200).json({ message: 'Password reset successfully' });

    } catch (error) {
      console.error('Error resetting password:', error);
      res.status(500).json({ message: 'Internal server error' });
        
    }
}