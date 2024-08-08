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
  ];
  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-4">This is the Projects section.</p>
    </section>
  );
}