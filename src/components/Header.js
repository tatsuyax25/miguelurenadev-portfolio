
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
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  };

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Load dark mode preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
      document.body.classList.add('dark');
    }
    
    // Handle scroll for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Handle active section detection
    const handleActiveSection = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveSection);
    handleActiveSection(); // Initial check
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl p-2 border border-white/30 dark:border-gray-700">
          <div className="flex items-center">
            <FaSun className="text-yellow-500 w-4 h-4" />
            <div className="relative w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mx-2">
              <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform dark:translate-x-4"></div>
            </div>
            <FaMoon className="text-gray-500 dark:text-yellow-400 w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>


      {/* Responsive Navbar */}
      {isMobile ? (
        /* Mobile & Tablet Navigation - Bottom */
        <nav className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg px-3 py-3 rounded-2xl shadow-2xl backdrop-blur-md border z-40 flex justify-between items-center transition-all duration-300 safe-area-pb-4 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 border-gray-200/60 dark:border-gray-700/60' 
            : 'bg-white/80 dark:bg-gray-900/80 border-white/40 dark:border-gray-700/40'
        }`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-label={item.label}
                className={`relative flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-300 min-w-[44px] min-h-[44px] justify-center ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg scale-105' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
                }`}
              >
                <Icon size={18} />
                <span className="text-xs font-medium leading-none">{item.label}</span>
                {isActive && (
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1pCiMljnegSNSIr2bVuB2TH-HsF1S8Gwb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="flex flex-col items-center gap-1 p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 min-w-[44px] min-h-[44px] justify-center active:scale-95"
          >
            <FaFileAlt size={18} />
            <span className="text-xs font-medium leading-none">Resume</span>
          </a>
        </nav>
      ) : (
        /* Desktop Navigation - Top */
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 flex items-center gap-2 z-40 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 border-gray-200/60 dark:border-gray-700/60' 
            : 'bg-white/80 dark:bg-gray-900/80 border-white/40 dark:border-gray-700/40'
        }`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon size={16} className="transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </a>
            );
          })}
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
          <a
            href="https://drive.google.com/file/d/1pCiMljnegSNSIr2bVuB2TH-HsF1S8Gwb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <FaFileAlt size={16} className="transition-transform group-hover:scale-110" />
            <span className="text-sm font-medium">Resume</span>
          </a>
        </nav>
      )}

      {/* Responsive Dark Mode Toggle */}
      <div className={`fixed z-50 ${
        isMobile ? 'top-4 right-4' : 'top-4 right-4'
      }`}>
        <div className={`backdrop-blur-md rounded-2xl border transition-all duration-300 hover:shadow-lg ${
          isMobile 
            ? 'p-2.5' 
            : 'p-3'
        } ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-800/95 border-gray-200/60 dark:border-gray-700/60 shadow-lg' 
            : 'bg-white/80 dark:bg-gray-800/80 border-white/40 dark:border-gray-700/40'
        }`}>
          <input
            type="checkbox"
            id="darkModeToggle"
            className="hidden"
            onChange={toggleDarkMode}
            defaultChecked={typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'true'}
          />
          <label
            htmlFor="darkModeToggle"
            className="flex items-center cursor-pointer group min-w-[44px] min-h-[44px] justify-center"
          >
            {isMobile ? (
              /* Mobile: Compact toggle */
              <div className="relative w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors">
                <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300 dark:translate-x-4 shadow-md flex items-center justify-center">
                  {typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'true' ? (
                    <FaMoon className="text-gray-600 w-2 h-2" />
                  ) : (
                    <FaSun className="text-yellow-500 w-2 h-2" />
                  )}
                </div>
              </div>
            ) : (
              /* Desktop: Full toggle with icons */
              <>
                <FaSun className="text-yellow-500 w-4 h-4 transition-transform group-hover:scale-110" />
                <div className="relative w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full mx-3 transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 dark:translate-x-5 shadow-md"></div>
                </div>
                <FaMoon className="text-gray-500 dark:text-yellow-400 w-4 h-4 transition-all group-hover:scale-110" />
              </>
            )}
          </label>
        </div>
      </div>
    </>
  );
}
