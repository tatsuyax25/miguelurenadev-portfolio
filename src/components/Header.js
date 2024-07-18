import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-between items-center z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white">MiguelUreña.Dev</h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <a
            href="#about"
            className="text-white transition-colors  hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white transition-colors  hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white transition-colors  hover:text-gray-300"
          >
            Contact
          </a>
        </nav>
        {/* Resume Button */}
        <a
          href="" // Replace with the path to your resume
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Resume
        </a>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>
    </header>
  );
}