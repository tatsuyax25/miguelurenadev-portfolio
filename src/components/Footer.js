import { FaLinkedin, FaGithub, FaHeart, FaCode } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute bottom-6 left-10 font-mono text-sm text-cyan-600 dark:text-cyan-300 transform rotate-12 animate-pulse">
          &lt;/html&gt;
        </div>
        <div className="absolute top-6 right-10 font-mono text-sm text-green-600 dark:text-green-300 transform -rotate-12 animate-bounce">
          console.log("Thanks!");
        </div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-600 dark:bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 font-mono text-sm text-purple-600 dark:text-purple-300 animate-pulse">
          {"{ }"}
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-12 bg-gradient-to-t from-transparent to-cyan-600 dark:to-cyan-300 animate-pulse"></div>
      </div>
      
      {/* Gradient border */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col items-center space-y-4">
          {/* Built with */}
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
            <span className="text-sm">Built with</span>
            <div className="flex items-center space-x-3">
              <SiReact className="text-blue-500 dark:text-blue-400" size={16} />
              <SiNextdotjs className="text-gray-800 dark:text-white" size={16} />
              <SiTailwindcss className="text-cyan-500 dark:text-cyan-400" size={16} />
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/urena-miguel82/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/tatsuyax25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center border-t border-gray-300 dark:border-gray-700 pt-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center">
              © {currentYear} Miguel Ureña. Made with 
              <FaHeart className="text-red-500 mx-1 animate-pulse" size={12} /> 
              and <FaCode className="text-cyan-500 dark:text-cyan-400 mx-1" size={12} />
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              Designed & Developed by Miguel Ureña
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}