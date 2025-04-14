import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <>
      {/* Top Left Logo */}
      <header className="fixed top-4 left-4 z-50">
        <img src="/portfolio-logo.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
      </header>

      {/* Navbar */}
      <nav
        className={`fixed ${
          isMobile
            ? "bottom-6 left-1/2 -translate-x-1/2"
            : "top-4 left-1/2 -translate-x-1/2"
        } transform bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg px-6 py-2 flex gap-6 z-40`}
      >
        <a
          href="#home"
          aria-label="Home"
          className="hover:text-blue-500 transition"
        >
          <FaHome size={20} />
        </a>
        <a
          href="#about"
          aria-label="About"
          className="hover:text-blue-500 transition"
        >
          <FaUser size={20} />
        </a>
        <a
          href="#projects"
          aria-label="Projects"
          className="hover:text-blue-500 transition"
        >
          <FaProjectDiagram size={20} />
        </a>
        <a
          href="#contact"
          aria-label="Contact"
          className="hover:text-blue-500 transition"
        >
          <FaEnvelope size={20} />
        </a>
      </nav>

      {/* Dark Mode Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50 flex items-center">
        <input
          type="checkbox"
          id="darkModeToggle"
          className="hidden"
          onChange={toggleDarkMode}
        />
        <label
          htmlFor="darkModeToggle"
          className="flex items-center cursor-pointer"
        >
          <FaSun className="text-yellow-500" />
          <div className="relative w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full mx-2">
            <div className="dot absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full transition-transform dark:translate-x-4"></div>
          </div>
          <FaMoon className="text-gray-500 dark:text-yellow-400" />
        </label>
      </div>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1pCiMljnegSNSIr2bVuB2TH-HsF1S8Gwb/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 bg-blue-500 text-white ${
          isMobile ? "p-3" : "px-4 py-2"
        } rounded-full shadow-lg hover:bg-blue-600 transition z-50 flex items-center justify-center`}
      >
        <FaFileAlt
          size={isMobile ? 20 : 16}
          className={isMobile ? "" : "mr-2"}
        />
        {!isMobile && "Resume"}
      </a>
    </>
  );
}
