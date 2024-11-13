import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST as string | undefined,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  export async function sendResetEmail(to:string,token:string){
    const resetUrl = `${process.env.BASE_URL}/reset-password?token=${token}`
    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject: 'Reset Password',
        html: `<p>To reset your password, please click the link below:</p><p><a href="${resetUrl}">Reset Password</a></p>`
    })
  }
