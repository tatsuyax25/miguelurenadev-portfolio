import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
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
        <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 text-black dark:-text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-5000"
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