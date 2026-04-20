import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // System dark mode detection
    const applySystemTheme = (e) => {
      if (e.matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };
    
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    applySystemTheme(darkModeQuery);
    darkModeQuery.addEventListener('change', applySystemTheme);
    
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
      darkModeQuery.removeEventListener('change', applySystemTheme);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Responsive Navbar */}
      {isMobile ? (
        /* Mobile & Tablet Navigation - Bottom */
        <nav
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg px-3 py-3 rounded-2xl shadow-2xl backdrop-blur-md border z-40 flex justify-between items-center transition-all duration-300 safe-area-pb-4 ${
            isScrolled
              ? "bg-white/95 dark:bg-gray-900/95 border-gray-200/60 dark:border-gray-700/60"
              : "bg-white/80 dark:bg-gray-900/80 border-white/40 dark:border-gray-700/40"
          }`}
        >
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
                    ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg scale-105"
                    : "text-gray-600 dark:text-gray-300 hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95"
                }`}
              >
                <Icon size={18} />
                <span className="text-xs font-medium leading-none">
                  {item.label}
                </span>
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
            <span className="text-xs font-medium leading-none">
              Resume
            </span>
          </a>
        </nav>
      ) : (
        /* Desktop Navigation - Top */
        <nav
          className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 flex items-center gap-2 z-40 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 dark:bg-gray-900/95 border-gray-200/60 dark:border-gray-700/60"
              : "bg-white/80 dark:bg-gray-900/80 border-white/40 dark:border-gray-700/40"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon
                  size={16}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </a>
            );
          })}
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
          <a
            href="https://drive.google.com/file/d/10Ii1RTsPF9BtsUYO-m5IEaUWHapT5pFm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <FaFileAlt
              size={16}
              className="transition-transform group-hover:scale-110"
            />
            <span className="text-sm font-medium">Resume</span>
          </a>
        </nav>
      )}
    </>
  );
}
