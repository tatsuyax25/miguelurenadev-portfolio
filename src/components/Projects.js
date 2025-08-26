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
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={project.image}
                alt={`${project.title} Screenshot`}
                width={400}
                height={300}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-grow relative z-10">
              <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            
            {/* Code snippet section */}
            {project.codeSnippet && (
              <div className="mt-4">
                <button 
                  onClick={() => toggleCode(project.id)}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  {showCode[project.id] ? 'Hide Code' : 'View Code Sample'}
                </button>
                {showCode[project.id] && (
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold mb-2 text-cyan-600 dark:text-cyan-400">{project.codeSnippet.title}</h4>
                    <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden code-glow">
                      {/* Terminal header */}
                      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 border-b border-gray-700">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-400 font-mono">code.js</span>
                      </div>
                      <pre className="text-green-400 p-3 text-xs overflow-x-auto font-mono">
                        <code>{project.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Adjusted position and spacing for the icons */}
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 transition-colors text-2xl"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors text-2xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}