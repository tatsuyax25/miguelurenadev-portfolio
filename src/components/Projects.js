export default function Projects() {
  const projects = [
    {
      title: "Plantivity",
      description:
        "Plantivity motivates users by completing their daily self-care tasks and rewarding them with a badge. They assign themselves their three daily tasks and points, which help your self-care plant grow!",
      live: "https://plantivity.netlify.app",
      link: "https://github.com/tatsuyax25/team6-hackathon-fe",
      image: "/images/PlantivityV2.png",
    },
    {
      title: "Snake Web Game JS",
      description:
        "Navigate the snake to eat food, avoid walls and its own body, and achieve the highest score possible. Each piece of food increases the snake's length, adding to the challenge.",
      live: "https://snake-web-game-js.netlify.app",
      link: "https://github.com/tatsuyax25/snake-game-js",
      image: "/images/snakeWebGameJS.png",
    },
    {
      title: "Connect 4 Web Game",
      description:
        "Connect Four is a game you play against the computer. Take turns dropping colored discs into a vertical grid. The first to get four of thier discs in a row, either horizontally, vertically, or diagonally, wins the game.",
      live: "https://connect-four-web-game.netlify.app",
      link: "https://github.com/tatsuyax25/connect-four",
      image: "/images/ConnectFour.png",
    },
  ];
  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}