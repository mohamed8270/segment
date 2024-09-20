import nodemailer from 'nodemailer';
import Users from '@/lib/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({email, emailType, userId}: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        if(emailType === "VERIFY") {
            await Users.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000});
        } else if(emailType === "RESET") {
            await Users.findByIdAndUpdate(userId, {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000});
        }

        var transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 2525,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.APP_URL}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } catch (e: any) {
        throw new Error(e.message);
    }
}