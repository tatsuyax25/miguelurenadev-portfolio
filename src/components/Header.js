import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white">MiguelUreña.Dev</h1>

        {/* Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-8">
          <a
            href="#about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right-side items */}
        <div className="flex items-center space-x-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf" // Replace with the path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Resume
          </a>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
