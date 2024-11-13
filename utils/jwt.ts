import jwt from 'jsonwebtoken'

export async function generateToken(payload:object, expiresIn:string ='1h'){
    return await jwt.sign(payload,process.env.JWT_SECRET!,{expiresIn})
}

export async function verifyToken(token:string){
    return await jwt.verify(token,process.env.JWT_SECRET!)
}