import Image from "next/image";

/**
 * Projects Component - Displays portfolio projects in two sections
 * 
 * Structure:
 * 1. Featured Projects - Large cards in 2-column grid (desktop)
 * 2. More Projects - Smaller cards in 3-column grid (desktop)
 * 
 * Features:
 * - Responsive design (mobile-first approach)
 * - Hover animations and effects
 * - Tech stack badges
 * - Live demo and source code links
 * - Dark mode support
 */
export default function Projects() {

  // Project data array - contains all portfolio projects
  const projects = [
    {
      id: 1,
      title: "Cinema Search",
      description:
        "A modern movie discovery web app built with React.js, Appwrite, and Tailwind CSS. Cinema Search lets users search and browse movies, featuring a trending algorithm that tracks popular searches. Designed with a clean UI and responsive layout, this project highlights full-stack integration and real-time data handling.",
      live: "https://cinemasearch.vercel.app",
      link: "https://github.com/tatsuyax25/movieapp-reactjs",
      image: "/images/MovieSearch.png",
      techStack: ["React", "Appwrite", "Tailwind CSS", "JavaScript"],
      featured: true, // This project will appear in the "Featured" section
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "I'm excited to unveil my new portfolio, built with Next.js, React, and Tailwind CSS, showcasing a modern, responsive design with smooth transitions and a sleek dark mode. This update replaces my previous portfolio and highlights my skills in web development and UI design.",
      live: "https://miguelurenaportfolio.netlify.app",
      link: "https://github.com/tatsuyax25/miguelurenadev-portfolio",
      image: "/images/portfoliov2.png",
      techStack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      featured: true, // This project will appear in the "Featured" section
    },
    {
      id: 3,
      title: "Renewable Energy Monitor",
      description:
        "A real-time renewable energy monitoring dashboard that tracks solar production, energy consumption, carbon footprint, and cost savings.",
      live: "https://renewableenergymonitordashboard.onrender.com",
      link: "https://github.com/tatsuyax25/renewable-energy-monitor",
      image: "/images/renewableenergydashboard.png",
      techStack: ["React", "Node.js", "Chart.js", "MongoDB"],
      // No 'featured' property means this goes to "More Projects" section
    },
    {
      id: 4,
      title: "Plantivity",
      description:
        "Plantivity motivates users by completing their daily self-care tasks and rewarding them with a badge. They assign themselves their three daily tasks and points, which help your self-care plant grow!",
      live: "https://plantivity.netlify.app",
      link: "https://github.com/tatsuyax25/team6-hackathon-fe",
      image: "/images/Plantivityv3.png",
      techStack: ["React", "CSS", "JavaScript", "API"],
    },
    {
      id: 5,
      title: "Frontend Dev Quiz",
      description:
        "A modern, interactive quiz application for testing frontend development knowledge across HTML, CSS, JavaScript, and React. Features a beautiful UI with dark/light themes, animated backgrounds, timer functionality, and comprehensive question explanations.",
      live: "https://amazingquizjs.netlify.app",
      link: "https://github.com/tatsuyax25/quiz-app-with-javascript",
      image: "/images/amazingquizjs.png",
      techStack: ["JavaScript", "HTML", "CSS", "React"],
    },
    {
      id: 6,
      title: "Pocket Web Calculator",
      description:
        "A responsive and accessible calculator built with HTML, CSS, and JavaScript. This project provides a clean user interface and performs basic arithmetic operations.",
      live: "https://pocketwebcalculator.netlify.app",
      link: "https://github.com/tatsuyax25/simplecalculator",
      image: "/images/simplewebcalculator.png",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 7,
      title: "Snake Web Game JS",
      description:
        "Navigate the snake to eat food, avoid walls and its own body, and achieve the highest score possible. Each piece of food increases the snake's length, adding to the challenge.",
      live: "https://snake-web-game-js.netlify.app",
      link: "https://github.com/tatsuyax25/snake-game-js",
      image: "/images/snakegamejs.png",
      techStack: ["JavaScript", "HTML", "CSS", "Canvas"],
    },
    {
      id: 8,
      title: "The Great Outdoor Journal",
      description:
        "The Great Outdoor Journal is a CRUD (Create, Read, Update, Delete) web application that allows users to create, edit, and manage their outdoor adventure journals. Users can authenticate via Google OAuth, share their experiences, and explore adventures shared by other outdoor enthusiasts.",
      live: "https://the-great-journal.onrender.com",
      link: "https://github.com/tatsuyax25/Project-2-SEI",
      image: "/images/thegreatoutdoorjournal.png",
      techStack: ["Node.js", "Express", "MongoDB", "OAuth"],
    },
    {
      id: 9,
      title: "Connect 4 Web Game",
      description:
        "Connect Four is a game you play against the computer. Take turns dropping colored discs into a vertical grid. The first to get four of their discs in a row, either horizontally, vertically, or diagonally, wins the game.",
      live: "https://connect-four-web-game.netlify.app",
      link: "https://github.com/tatsuyax25/connect-four",
      image: "/images/ConnectFour.png",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects" // Used for navigation anchor links
      // Responsive padding: small on mobile, medium on tablet, large on desktop
      // Background gradient from light to dark with dark mode variants
      className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white relative"
    >
      {/* Decorative Elements */}
      
      {/* Top gradient line decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      {/* Binary pattern background for tech aesthetic */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {/* "Hello" in binary (top-left, rotated) */}
        <div className="absolute top-10 left-10 font-mono text-xs text-green-500 transform rotate-12">
          01001000 01100101 01101100 01101100 01101111
        </div>
        {/* "World" in binary (bottom-right, rotated) */}
        <div className="absolute bottom-20 right-20 font-mono text-xs text-blue-500 transform -rotate-12">
          01010111 01101111 01110010 01101100 01100100
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10 px-4">
        {/* Main heading with responsive font sizes and gradient text */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        {/* Code comment style subtitle */}
        <div className="font-mono text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-green-500">{"//"}</span> Building the future, one project at a time
        </div>
        
        {/* Decorative gradient line */}
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4"></div>
        
        {/* Section description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Explore my latest work showcasing modern web technologies and innovative solutions
        </p>
      </div>
      
      {/* Projects Container */}
      <div className="space-y-16">
        
        {/* FEATURED PROJECTS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Filter projects to show only featured ones, then map through them */}
          {projects.filter(p => p.featured).map((project, index) => (
            <article
              key={project.id} // Unique key for React rendering
              // Card styling with hover effects and animations
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fadeInUp"
              // Staggered animation delay for each card
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Featured badge (top-right corner) */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                  ⭐ FEATURED
                </span>
              </div>
              
              {/* Project Image Section */}
              <div className="relative overflow-hidden h-64">
                {/* Next.js optimized image component */}
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill // Fills the parent container
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {/* Live Demo Button */}
                    <a
                      href={project.live}
                      target="_blank" // Opens in new tab
                      rel="noopener noreferrer" // Security attributes
                      className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors shadow-lg"
                    >
                      Live Demo
                    </a>
                    {/* Source Code Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900/90 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-lg"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Content Section */}
              <div className="p-4 sm:p-6 lg:p-8 relative z-10">
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      // Badge styling with gradient background and border
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        {/* MORE PROJECTS SECTION */}
        <div>
          {/* Section Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-200 px-4">
            More Projects
          </h3>
          
          {/* Projects Grid - responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Filter non-featured projects and map through them */}
            {projects.filter(p => !p.featured).map((project, index) => (
              <article
                key={project.id}
                // Card with flexbox for equal heights and hover effects
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fadeInUp h-full flex flex-col"
                // Staggered animation (starting after featured projects)
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  
                  {/* Tech Stack Badges (smaller version) */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack?.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Description (truncated to 4 lines) */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-4">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons (pushed to bottom with mt-auto) */}
                  <div className="flex space-x-2 sm:space-x-3 mt-auto">
                    {/* Live Demo Button */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Mobile-friendly button with minimum touch target size (44px)
                      className="flex-1 text-center px-2 sm:px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 min-h-[44px] flex items-center justify-center"
                    >
                      Live Demo
                    </a>
                    {/* Source Code Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-2 sm:px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200 min-h-[44px] flex items-center justify-center"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}