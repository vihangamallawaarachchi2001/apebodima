import bcrypt from "bcryptjs"

export async function hashPassword(password: string): Promise<string> {
    if (!password) throw new Error("Password cannot be empty");
    return bcrypt.hash(password, 12); // Adjust according to your hashing library
  }
  

export async function verifyPassword(password:string,hash:string){
    return await bcrypt.compare(password,hash)
}

