import Image from "next/image";

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
        <Image
          src="/portfolio-logo4.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-10 h-10 bg-white dark:bg-gray-800 border-white dark:border-gray-700"
        />
      </header>

      {/* Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 transform ${
          isMobile ? "px-5 py-2 gap-6" : "px-8 py-3 gap-8"
        } flex items-center z-40 rounded-xl shadow-lg border border-white/30 dark:border-gray-700 text-black dark:text-white backdrop-blur-md bg-white/30 dark:bg-gray-900/30 transition-all`}
      >
        <a
          href="#home"
          aria-label="Home"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaHome size={18} />
          {!isMobile && <span className="text-sm font-medium">Home</span>}
        </a>
        <a
          href="#about"
          aria-label="About"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaUser size={18} />
          {!isMobile && <span className="text-sm font-medium">About</span>}
        </a>
        <a
          href="#projects"
          aria-label="Projects"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaProjectDiagram size={18} />
          {!isMobile && <span className="text-sm font-medium">Projects</span>}
        </a>
        <a
          href="#contact"
          aria-label="Contact"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaEnvelope size={18} />
          {!isMobile && <span className="text-sm font-medium">Contact</span>}
        </a>
        <a
          href="https://drive.google.com/file/d/1pCiMljnegSNSIr2bVuB2TH-HsF1S8Gwb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaFileAlt size={18} />
          {!isMobile && <span className="text-sm font-medium">Resume</span>}
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
    </>
  );
}
