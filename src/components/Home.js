import { useEffect, useState } from "react";

export default function HomeSection() {
  const [text, setText] = useState("");
  const fullText = "Welcome to Miguel Ureña's Portfolio";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index)); // Take a slice of the string up to the current index
      index++;
      if (index > fullText.length) {
        clearInterval(timer); // Stop when done
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [fullText]);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-black dark:text-white transition-all duration-500 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix rain effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-500 dark:text-green-400 text-xs font-mono opacity-20 matrix-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['0', '1', '{', '}', '<', '>', '/', '\\', '|', '-'][Math.floor(Math.random() * 10)]}
            </div>
          ))}
        </div>
        
        {/* Geometric tech elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-green-500/30 rotate-12 animate-float"></div>
        
        {/* Scan line effect */}
        <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scan-line"></div>
      </div>
      
      <div className="text-center relative z-10">
        {/* Typing Effect with enhanced styling */}
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          {text}
        </h2>
        <div className="mb-8">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-2">Full-Stack Software Engineer</p>
          <div className="font-mono text-sm text-cyan-600 dark:text-cyan-400">
            <span className="text-green-500">$</span> whoami
            <span className="ml-2">miguel.urena --stack=MERN --passion=code</span>
          </div>
        </div>
        
        {/* Call to action button */}
        <a 
          href="#projects" 
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View My Work
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
