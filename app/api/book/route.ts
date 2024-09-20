import { NextRequest } from "next/server";
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 0;
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || '';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
    },
    tls: {
        ciphers: 'TLSv1.2'
    }
});

export async function POST(req: NextRequest) {
    try {
        const { firstname, email, tel, age, lastname} = await req.json();

        const mailOptions = {
            from: SMTP_FROM_EMAIL,
            to: SMTP_USER,
            subject: 'The GoodCraft Co Contact Submission Form',
            html: `
                <html>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
                        <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                                <h2 style="margin-top: 0;">Contact Form Submission</h2>
                                <div style="margin-bottom: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 4px; background-color: #f9f9f9;">
                                    <p style="margin: 0;"><strong>Name:</strong> ${firstname}</p>
                                    <p style="margin: 0;"><strong>Pronoun:</strong> ${lastname}</p>
                                    <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
                                    <p style="margin: 0;"><strong>Mobile No:</strong> ${tel}</p>
                                    <p style="margin: 0;"><strong>Age:</strong> ${age}</p>
                                </div>
                                <hr style="border: 1px solid #ddd; margin: 20px 0;">
                            </div>
                        </div>
                    </body>
                </html>
            `,
        };
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, mailSend: true }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
}
