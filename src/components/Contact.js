import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Log the data being sent for debugging
      console.log("Sending Data:", formData);

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await res.json(); // Parse error response
        console.error("Error response:", errorData); // Log error details
        setStatus(`Error: ${errorData.message || "Error sending email."}`);
      }
    } catch (error) {
      console.error("Error:", error); // Log unexpected errors
      setStatus("Error sending email.");
    }
  };
  
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to reach out to me through any of the platforms below:
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-lg font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="social-icons mt-8 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/urena-miguel82/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl dark:text-blue-300 text-blue-700 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tatsuyax25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl dark:text-white text-black hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}