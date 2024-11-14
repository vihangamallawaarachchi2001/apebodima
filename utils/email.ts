import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: parseInt(process.env.EMAIL_PORT as string, 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
} as SMTPTransport.Options);

export async function sendResetEmail(to: string,id: number) {
  const resetUrl = `${process.env.BASE_URL}/reset-password?id=${id}`;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: to,
    subject: 'Reset Password',
    html: `<p>To reset your password, please click the link below:</p><p><a href="${resetUrl}">Reset Password</a></p>`
  });
}
