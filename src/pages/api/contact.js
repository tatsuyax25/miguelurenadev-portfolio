import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Handle OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }

  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    try {
      // Configure Nodemailer transport
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Replace with your SMTP server (e.g., "smtp.gmail.com" for Gmail)
        port: 587, // Usually 587 for secure connections
        auth: {
          user: process.env.EMAIL_USER, // Use your environment variable for the email user
          pass: process.env.EMAIL_PASS, // Use your environment variable for the email password (or app password for Gmail)
        },
      });

      // Send the email
      const info = await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Sender's email
        to: process.env.EMAIL_USER, // Recipient's email (could be the same as the sender)
        subject: `New Contact Form Submission: ${subject}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      });

      console.log("Email sent successfully", info.response);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("SMTP error:", error.message, error.stack);

      // More detailed error logging
      console.error("Error details:", error.response || error.message || error);

      res.status(500).json({
        message: "Failed to send message",
        error: error.message || "Unknown error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Method not allowed" });
  }
}
