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
      console.log("Sending Data:", formData);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        setStatus(`Error: ${errorData.message || "Error sending message."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white transition-all duration-500 relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-500/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-500/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 font-mono text-xs text-green-500/30 transform rotate-90">
          console.log(&quot;Let&apos;s connect!&quot;);
        </div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="text-green-500">{"//"}</span> Ready to build something amazing together?
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-300"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              <span className="text-cyan-600 dark:text-cyan-400">01.</span> Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              <span className="text-cyan-600 dark:text-cyan-400">02.</span> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-cyan-600 dark:text-cyan-400">03.</span> Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
              placeholder="What&apos;s this about?"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-cyan-600 dark:text-cyan-400">04.</span> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 resize-none"
              placeholder="Tell me about your project, idea, or just say hello!"
              required
            ></textarea>
          </div>
          <div className="text-center mb-4">
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "Sending..." ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
          {status && (
            <div className={`text-center mt-4 p-3 rounded-lg ${
              status.includes("successfully") 
                ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800" 
                : status.includes("Error") 
                ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800"
                : "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
            }`}>
              <p className="font-medium">{status}</p>
            </div>
          )}
        </form>
        
        {/* Enhanced Social Links */}
        <div className="mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-mono text-sm">
            <span className="text-green-500">{"//"}</span> Or connect with me on social media
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/urena-miguel82/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/tatsuyax25"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
