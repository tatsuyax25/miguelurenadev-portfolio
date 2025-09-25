import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Projects() {
  const [showCode, setShowCode] = useState({});

  const toggleCode = (projectId) => {
    setShowCode(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

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
      featured: true,
      codeSnippet: {
        title: "Movie Search with Trending Algorithm",
        code: `const searchMovies = async (query) => {
  const response = await databases.listDocuments(
    DATABASE_ID, COLLECTION_ID,
    [Query.search('title', query)]
  );
  
  return response.documents.map(movie => ({
    ...movie,
    trending: calculateTrendingScore(movie)
  }));
};`
      }
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
      featured: true,
      codeSnippet: {
        title: "Dark Mode Toggle Implementation",
        code: `const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    'darkMode', 
    document.body.classList.contains('dark')
  );
};`
      }
    },
    {
      id: 3,
      title: "Plantivity",
      description:
        "Plantivity motivates users by completing their daily self-care tasks and rewarding them with a badge. They assign themselves their three daily tasks and points, which help your self-care plant grow!",
      live: "https://plantivity.netlify.app",
      link: "https://github.com/tatsuyax25/team6-hackathon-fe",
      image: "/images/Plantivityv3.png",
      techStack: ["React", "CSS", "JavaScript", "API"],
      codeSnippet: {
        title: "Task Completion Logic",
        code: `const completeTask = (taskId) => {
  setTasks(prev => prev.map(task => 
    task.id === taskId 
      ? { ...task, completed: true }
      : task
  ));
  updatePlantGrowth();
};`
      }
    },
    {
      id: 4,
      title: "Pocket Web Calculator",
      description:
        "A responsive and accessible calculator built with HTML, CSS, and JavaScript. This project provides a clean user interface and performs basic arithmetic operations.",
      live: "https://pocketwebcalculator.netlify.app",
      link: "https://github.com/tatsuyax25/simplecalculator",
      image: "/images/simplecalculator.png",
      codeSnippet: {
        title: "Calculator Logic",
        code: `function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
    addToHistory(display.value + ' = ' + result);
  } catch (error) {
    display.value = 'Error';
  }
}`
      }
    },
    {
      id: 5,
      title: "Snake Web Game JS",
      description:
        "Navigate the snake to eat food, avoid walls and its own body, and achieve the highest score possible. Each piece of food increases the snake's length, adding to the challenge.",
      live: "https://snake-web-game-js.netlify.app",
      link: "https://github.com/tatsuyax25/snake-game-js",
      image: "/images/snakeWebGameJS.png",
      codeSnippet: {
        title: "Snake Movement Logic",
        code: `function moveSnake() {
  const head = { ...snake[0] };
  
  switch(direction) {
    case 'UP': head.y -= 1; break;
    case 'DOWN': head.y += 1; break;
    case 'LEFT': head.x -= 1; break;
    case 'RIGHT': head.x += 1; break;
  }
  
  snake.unshift(head);
  if (!ateFood) snake.pop();
}`
      }
    },
    {
      id: 6,
      title: "Connect 4 Web Game",
      description:
        "Connect Four is a game you play against the computer. Take turns dropping colored discs into a vertical grid. The first to get four of their discs in a row, either horizontally, vertically, or diagonally, wins the game.",
      live: "https://connect-four-web-game.netlify.app",
      link: "https://github.com/tatsuyax25/connect-four",
      image: "/images/ConnectFour.png",
      codeSnippet: {
        title: "Win Detection Algorithm",
        code: `function checkWin(board, row, col, player) {
  const directions = [
    [0, 1], [1, 0], [1, 1], [1, -1]
  ];
  
  return directions.some(([dx, dy]) => {
    let count = 1;
    count += countDirection(board, row, col, dx, dy, player);
    count += countDirection(board, row, col, -dx, -dy, player);
    return count >= 4;
  });
}`
      }
    },
  ];

  return (
    <section
      id="projects"
      className="p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white relative"
    >
      {/* Tech section decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      {/* Binary pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 font-mono text-xs text-green-500 transform rotate-12">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute bottom-20 right-20 font-mono text-xs text-blue-500 transform -rotate-12">
          01010111 01101111 01110010 01101100 01100100
        </div>
      </div>
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="font-mono text-lg text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-green-500">{"//"}</span> Building the future, one project at a time
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my latest work showcasing modern web technologies and innovative solutions
        </p>
      </div>
      
      {/* Featured Projects Grid */}
      <div className="space-y-16">
        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <article
              key={project.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Featured badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                  ⭐ FEATURED
                </span>
              </div>
              
              {/* Image section */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Quick action overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors shadow-lg"
                    >
                      Live Demo
                    </a>
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
              
              {/* Content section */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Code snippet toggle */}
                {project.codeSnippet && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <button 
                      onClick={() => toggleCode(project.id)}
                      className="flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors group/btn"
                    >
                      <span className="mr-2">{showCode[project.id] ? '🔼' : '🔽'}</span>
                      {showCode[project.id] ? 'Hide Code Sample' : 'View Code Sample'}
                      <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                    
                    {showCode[project.id] && (
                      <div className="mt-4 animate-fadeInUp">
                        <h4 className="text-sm font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
                          💻 {project.codeSnippet.title}
                        </h4>
                        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
                          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xs text-gray-400 font-mono">code.js</span>
                          </div>
                          <pre className="text-green-400 p-4 text-sm overflow-x-auto font-mono leading-relaxed">
                            <code>{project.codeSnippet.code}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <article
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  
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
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200"
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