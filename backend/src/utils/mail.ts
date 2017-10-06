import { transporter } from "../config/mailer";
import { SendMailOptions } from "nodemailer";

export const buildOTPMail = (receiver: string, token: string) => <SendMailOptions>{
    from: process.env.SYSTEM_EMAIL,
    to: receiver,
    subject: "Your P2X Token",
    text: token
};

export const sendTokenMail = (receiver: string, token: string) => {
    return transporter.sendMail(buildOTPMail(receiver, token));
};