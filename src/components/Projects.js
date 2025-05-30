import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cinema Search",
      description:
        "A modern movie discovery web app built with React.js, Appwrite, and Tailwind CSS. Cinema Search lets users search and browse movies, featuring a trending algorithm that tracks popular searches. Designed with a clean UI and responsive layout, this project highlights full-stack integration and real-time data handling.",
      live: "https://cinemasearch.vercel.app",
      link: "https://github.com/tatsuyax25/movieapp-reactjs",
      image: "/images/MovieSearch.png",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "I’m excited to unveil my new portfolio, built with Next.js, React, and Tailwind CSS, showcasing a modern, responsive design with smooth transitions and a sleek dark mode. This update replaces my previous portfolio and highlights my skills in web development and UI design.",
      live: "https://miguelurenaportfolio.netlify.app",
      link: "https://github.com/tatsuyax25/miguelurenadev-portfolio",
      image: "/images/portfoliov2.png",
    },
    {
      id: 3,
      title: "Plantivity",
      description:
        "Plantivity motivates users by completing their daily self-care tasks and rewarding them with a badge. They assign themselves their three daily tasks and points, which help your self-care plant grow!",
      live: "https://plantivity.netlify.app",
      link: "https://github.com/tatsuyax25/team6-hackathon-fe",
      image: "/images/Plantivityv3.png",
    },
    {
      id: 4,
      title: "Pocket Web Calculator",
      description:
        "A responsive and accessible calculator built with HTML, CSS, and JavaScript. This project provides a clean user interface and performs basic arithmetic operations.",
      live: "https://pocketwebcalculator.netlify.app",
      link: "https://github.com/tatsuyax25/simplecalculator",
      image: "/images/simplecalculator.png",
    },
    {
      id: 5,
      title: "Snake Web Game JS",
      description:
        "Navigate the snake to eat food, avoid walls and its own body, and achieve the highest score possible. Each piece of food increases the snake's length, adding to the challenge.",
      live: "https://snake-web-game-js.netlify.app",
      link: "https://github.com/tatsuyax25/snake-game-js",
      image: "/images/snakeWebGameJS.png",
    },
    {
      id: 6,
      title: "Connect 4 Web Game",
      description:
        "Connect Four is a game you play against the computer. Take turns dropping colored discs into a vertical grid. The first to get four of their discs in a row, either horizontally, vertically, or diagonally, wins the game.",
      live: "https://connect-four-web-game.netlify.app",
      link: "https://github.com/tatsuyax25/connect-four",
      image: "/images/ConnectFour.png",
    },
  ];

  return (
    <section
      id="projects"
      className="p-8 bg-gray-100 dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <Image
              src={project.image}
              alt={`${project.title} Screenshot`}
              width={400}
              height={300}
              className="rounded-md mb-4"
            />
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
              <p className="text-lg mt-3">{project.description}</p>
            </div>
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
