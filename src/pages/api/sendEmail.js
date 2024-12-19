import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    console.log("Form Data Received:", { name, email, subject, message }); // Log the received form data
    console.log("EMAIL:", process.env.EMAIL);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    // Configure your Nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password or Gmail password (if less secure apps are enabled)
      },
      logger: true, // Enable logging
      debug: true, // Enable debug output
    });

    // Define email options
    const mailOptions = {
      from: `${name} <${email}`, // Sender's name and email
      to: process.env.EMAIL, // Your own email
      replyTo: email, // Reply to the user's email
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
    };

    try {
      // Attempt to send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully::", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email.", details: error });
    }
  } else {
    res.status(405).json(({ message: "Method not allowed" }));
  }
}