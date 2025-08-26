export default function TechnicalChallenges() {
  const challenges = [
    {
      problem: "Email delivery failing in production environment",
      solution: "Implemented Nodemailer with Gmail SMTP, proper authentication, and comprehensive error handling",
      tech: ["Node.js", "Nodemailer", "Gmail API", "Error Handling"],
      impact: "100% email delivery success rate"
    },
    {
      problem: "Slow image loading affecting user experience", 
      solution: "Integrated Next.js Image optimization with lazy loading and WebP format conversion",
      tech: ["Next.js", "Image Optimization", "WebP", "Lazy Loading"],
      impact: "40% faster page load times"
    },
    {
      problem: "Dark mode preference not persisting across sessions",
      solution: "Implemented localStorage with system preference detection and smooth transitions",
      tech: ["JavaScript", "localStorage", "CSS Transitions", "Media Queries"],
      impact: "Improved user experience and retention"
    },
    {
      problem: "Movie search results not showing trending content first",
      solution: "Built custom trending algorithm based on search frequency and user interactions",
      tech: ["React", "Algorithm Design", "State Management", "API Integration"],
      impact: "Enhanced content discovery and user engagement"
    }
  ];

  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Technical Challenges Solved</h3>
      <div className="max-w-4xl mx-auto space-y-6">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-lg">
            <div className="mb-3">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">Problem:</h4>
              <p className="text-gray-700 dark:text-gray-300">{challenge.problem}</p>
            </div>
            
            <div className="mb-3">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">Solution:</h4>
              <p className="text-gray-700 dark:text-gray-300">{challenge.solution}</p>
            </div>
            
            <div className="mb-3">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {challenge.tech.map(tech => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                <span className="text-purple-600 dark:text-purple-400">Impact:</span> {challenge.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}