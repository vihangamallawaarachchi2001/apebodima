import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;

    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }

        await prisma.user.delete({
            where: { id }
        });

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
