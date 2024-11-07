// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP or another email service
    let transporter = nodemailer.createTransport({
      service: 'gmail', // use your email provider here or SMTP details
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password if using Gmail
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: email, // sender address
        to: 'anisngazou314@gmail.com', // list of receivers
        subject: `New Contact Form Submission from ${name}`, // Subject line
        text: message, // plain text body
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`, // HTML body
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
