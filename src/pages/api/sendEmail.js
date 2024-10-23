import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Configure your Nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can also try using any other service like "hotmail", "outlook", etc.
      auth: {
        user: "mrurena82@gmail.com", // Your Gmail address
        pass: "gddi nodc heep qxje", // App password or Gmail password (if less secure apps are enabled)
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: "mrurena82@gmail.com", // Your own email
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
    };

    try {
      // Attempt to send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email.", details: error });
    }
  } else {
    res.status(405).json(({ message: "Method not allowed" }));
  }
}