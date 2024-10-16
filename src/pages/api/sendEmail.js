import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Outlook",
      auth: {
        user: "urena_miguel82@outlook.com",
        pass: "0cH4c0x27@",
      },
    });

    const mailOptions = {
      from: email,
      to: "urena_miguel82@outlook.com",
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email." });
    }
  } else {
    res.status(405).json(({ message: "Method not allowed" }));
  }
}