import { createTransport } from "nodemailer";

const port = parseInt(process.env.MAIL_PORT);

export const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: port,
    auth: {
        user: process.env.SYSTEM_EMAIL,
        pass: process.env.SYSTEM_PASSWORD
    },

});