import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaCode } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNetlify } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 text-white relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-10 font-mono text-xs transform rotate-12">
          &lt;footer&gt;
        </div>
        <div className="absolute bottom-4 right-10 font-mono text-xs transform -rotate-12">
          &lt;/footer&gt;
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-xs">
          console.log("Thanks for visiting!");
        </div>
      </div>
      
      {/* Gradient border */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Miguel Ureña
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Full-Stack Software Engineer passionate about creating amazing web experiences.
            </p>
            <div className="font-mono text-xs text-cyan-400">
              <span className="text-green-400">const</span> <span className="text-blue-400">status</span> = <span className="text-yellow-400">"Available for hire"</span>;
            </div>
          </div>
          
          {/* Quick links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-gray-200">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3 text-gray-200">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/urena-miguel82/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/tatsuyax25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              Let's build something amazing together!
            </p>
          </div>
        </div>
        
        {/* Built with section */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">Built with</p>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2 text-blue-400">
                <SiReact size={20} className="animate-spin-slow" />
                <span className="text-xs">React</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <SiNextdotjs size={20} />
                <span className="text-xs">Next.js</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <SiTailwindcss size={20} />
                <span className="text-xs">Tailwind</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-400">
                <SiNetlify size={20} />
                <span className="text-xs">Netlify</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © {currentYear} Miguel Ureña. Made with 
            <FaHeart className="text-red-500 mx-1 animate-pulse" size={12} /> 
            and <FaCode className="text-cyan-400 mx-1" size={12} />
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed & Developed by Miguel Ureña
          </p>
        </div>
      </div>
    </footer>
  );
}