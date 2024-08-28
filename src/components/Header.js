import { FaFileAlt, FaSun, FaMoon } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100/90 dark:bg-gray-800/90 dark:text-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-xl font-bold">Miguel Ureña Portfolio</h1>

        {/* Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-8">
          <a
            href="#home"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right-side items */}
        <div className="flex items-center space-x-4">
          {/* Resume Button with Icon */}
          <a
            href="/resume.pdf" // Replace with the path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            <FaFileAlt className="mr-2" /> Resume
          </a>

          {/* Dark Mode Toggle with Icon */}
          <div className="flex items-center">
            <input type="checkbox" id="darkModeToggle" className="hidden" onChange={() => document.body.classList.toggle('dark')}/>
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <FaSun className="text-yellow-500" />
              <div className="relative w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full mx-2">
                <div className="dot absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full transition-transform dark:translate-x-4"></div>
              </div>
              <FaMoon className="text-gray-500 dark:text-yellow-400" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
