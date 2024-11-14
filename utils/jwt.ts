import jwt from 'jsonwebtoken';

export async function generateToken(payload: number, expiresIn: string = '1h') {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error('JWT_SECRET is not defined in the environment');
    }
    return await jwt.sign({ userId: payload }, secret, { expiresIn });
}


export async function verifyToken(token:string){
    return await jwt.verify(token,process.env.JWT_SECRET!)
}