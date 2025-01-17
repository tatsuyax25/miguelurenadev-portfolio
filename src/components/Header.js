import { useState } from "react";
import { FaBars, FaTimes, FaFileAlt, FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100/90 dark:bg-gray-800/90 dark:text-white px-4 z-50 shadow-md h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Title */}
        <h1 className="text-lg font-bold whitespace-nowrap">
          Miguel Ureña Portfolio
        </h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-xl"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden sm:flex flex-grow justify-center space-x-8">
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
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
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
            className="hidden sm:flex items-center bg-blue-500 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-600 transition-colors"
          >
            <FaFileAlt className="mr-2 text-base" /> Resume
          </a>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-100 dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64 z-40 sm:hidden`}
      >
        <nav className="flex flex-col items-start p-4 space-y-4">
          <a
            href="#home"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1OLekxMTdoQf1_KWdXwo3XFXcgrExrcmL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            <FaFileAlt className="mr-2" /> Resume
          </a>
        </nav>
      </div>

      {/* Backdrop when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
