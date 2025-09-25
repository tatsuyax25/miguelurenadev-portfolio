import Image from "next/image";
import Slider from "react-slick";
import GitHubStats from "./GitHubStats";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaAws,
  FaGit,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiNpm,
  SiExpress,
  SiGooglecloud,
  SiNetlify,
  SiNextdotjs,
  SiGoogleanalytics,
  SiTypescript,
  SiAppwrite,
  SiChartdotjs,
  SiAuth0,
  SiJson,
  SiGraphql,
  SiNestjs,
  SiFlask,
  SiApache,
  SiApachemaven,
  SiSpring,
  SiVite,
  SiFigma,
  SiRailway,
  SiMongoose,
  SiRender,
  SiVercel,
  SiBabel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";

export default function About() {
  // Slider settings
  const settings = {
    dots: false, // Disable dots if you want a more seamless look
    infinite: true, // Allows the carousel to loop
    speed: 5000, // Slow down the speed for smoother movement
    slidesToShow: 5, // Number of slides visible at once
    slidesToScroll: 1, // Scroll one at a time for a continuous effect
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set the autoplay speed to 0 for continuous effect
    arrows: false, // Disable the arrows
    cssEase: "linear", // This is key to make the transition seamless
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-20 sm:py-20 transition-all duration-500 relative overflow-hidden"
    >
      {/* Tech background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Terminal window mockup */}
        <div className="absolute top-10 right-10 w-64 h-40 bg-gray-900 rounded-lg border border-gray-700 opacity-20 animate-float">
          <div className="flex items-center p-2 border-b border-gray-700">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-2 font-mono text-xs text-green-400">
            <div>$ npm run dev</div>
            <div>$ git commit -m &quot;feat: portfolio&quot;</div>
          </div>
        </div>
        
        {/* Code brackets */}
        <div className="absolute bottom-20 left-10 text-6xl font-mono text-blue-500/20 animate-pulse">{`{}`}</div>
        <div className="absolute top-1/3 left-1/4 text-4xl font-mono text-green-500/20 rotate-12">&lt;/&gt;</div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between p-4 sm:px-6 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="font-mono text-sm text-cyan-600 dark:text-cyan-400 mb-4">
              <span className="text-green-500">const</span> <span className="text-blue-500">developer</span> = {
              <div className="ml-4">
                <span className="text-purple-500">name:</span> <span className="text-yellow-500">&quot;Miguel Ureña&quot;</span>,<br/>
                <span className="text-purple-500">role:</span> <span className="text-yellow-500">&quot;Full-Stack Engineer&quot;</span>,<br/>
                <span className="text-purple-500">passion:</span> <span className="text-yellow-500">&quot;Building amazing apps&quot;</span>
              </div>
              };
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As a devoted and driven <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Software Engineer</span>, I specialize in
              developing innovative and efficient software solutions that drive
              business success. With a strong foundation in both front-end and
              back-end development, I excel in crafting scalable applications
              using the <span className="font-mono text-green-600 dark:text-green-400">MERN stack</span> and other
              cutting-edge technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in technology has been marked by a commitment to
              continuous learning and a dedication to excellence. From my early
              days providing technical support and managing e-commerce platforms
              to my current focus on full-stack development, I have always
              prioritized <span className="text-blue-600 dark:text-blue-400 font-semibold">user experience</span>, <span className="text-purple-600 dark:text-purple-400 font-semibold">clean code</span>, and impactful results.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative">
              <Image
                src="/HeroImage.png"
                alt="Miguel Ureña"
                width={320}
                height={320}
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
              
              {/* Tech overlay */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Stats */}
      <div className="py-6">
        <GitHubStats />
      </div>

      {/* Enhanced Skills Section */}
      <div className="py-12 sm:py-16 relative">
        <div className="text-center mb-12">
          <h3 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Tech Arsenal
          </h3>
          <div className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span className="text-green-500">{"//"}</span> Technologies I master daily
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Skills Categories */}
        <div className="space-y-12">
          {/* Frontend Technologies */}
          <div className="relative">
            <h4 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Frontend</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: FaHtml5, name: "HTML5", color: "text-red-500", bg: "from-red-500/20 to-red-600/20" },
                { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", bg: "from-blue-500/20 to-blue-600/20" },
                { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500", bg: "from-yellow-500/20 to-yellow-600/20" },
                { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", bg: "from-blue-600/20 to-blue-700/20" },
                { icon: FaReact, name: "React", color: "text-blue-400", bg: "from-blue-400/20 to-blue-500/20", animate: "animate-spin-slow" },
                { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white", bg: "from-gray-500/20 to-gray-600/20" },
                { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400", bg: "from-cyan-400/20 to-cyan-500/20" },
                { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600", bg: "from-purple-600/20 to-purple-700/20" },
                { icon: SiChartdotjs, name: "Chart.js", color: "text-pink-500", bg: "from-pink-500/20 to-pink-600/20" },
                { icon: SiVite, name: "Vite", color: "text-purple-500", bg: "from-purple-500/20 to-purple-600/20" }
              ].map((skill, index) => (
                <div key={skill.name} className="group relative">
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.bg} backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:border-white/40 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <skill.icon className={`${skill.color} ${skill.animate || ''} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} size={48} />
                    <p className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="relative">
            <h4 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Backend</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: FaNodeJs, name: "Node.js", color: "text-green-500", bg: "from-green-500/20 to-green-600/20" },
                { icon: SiExpress, name: "Express", color: "text-gray-700 dark:text-gray-300", bg: "from-gray-500/20 to-gray-600/20" },
                { icon: SiNestjs, name: "NestJS", color: "text-red-500", bg: "from-red-500/20 to-red-600/20" },
                { icon: FaPython, name: "Python", color: "text-yellow-500", bg: "from-yellow-500/20 to-yellow-600/20" },
                { icon: SiFlask, name: "Flask", color: "text-gray-800 dark:text-gray-200", bg: "from-gray-600/20 to-gray-700/20" },
                { icon: FaJava, name: "Java", color: "text-orange-600", bg: "from-orange-600/20 to-orange-700/20" },
                { icon: SiSpring, name: "Spring", color: "text-green-600", bg: "from-green-600/20 to-green-700/20" },
                { icon: SiDjango, name: "Django", color: "text-green-600", bg: "from-green-600/20 to-green-700/20" },
                { icon: SiMongodb, name: "MongoDB", color: "text-green-400", bg: "from-green-400/20 to-green-500/20" },
                { icon: SiMongoose, name: "Mongoose", color: "text-red-600", bg: "from-red-600/20 to-red-700/20" },
                { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600", bg: "from-blue-600/20 to-blue-700/20" },
                { icon: SiGraphql, name: "GraphQL", color: "text-pink-600", bg: "from-pink-600/20 to-pink-700/20" },
                { icon: SiAppwrite, name: "Appwrite", color: "text-purple-500", bg: "from-purple-500/20 to-purple-600/20" }
              ].map((skill, index) => (
                <div key={skill.name} className="group relative">
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.bg} backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:border-white/40 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <skill.icon className={`${skill.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} size={48} />
                    <p className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Deployment */}
          <div className="relative">
            <h4 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tools & Cloud</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: FaGit, name: "Git", color: "text-orange-600", bg: "from-orange-600/20 to-orange-700/20" },
                { icon: FaGithub, name: "GitHub", color: "text-gray-800 dark:text-white", bg: "from-gray-500/20 to-gray-600/20" },
                { icon: FaAws, name: "AWS", color: "text-orange-500", bg: "from-orange-500/20 to-orange-600/20" },
                { icon: SiGooglecloud, name: "Google Cloud", color: "text-blue-500", bg: "from-blue-500/20 to-blue-600/20" },
                { icon: DiHeroku, name: "Heroku", color: "text-purple-600", bg: "from-purple-600/20 to-purple-700/20" },
                { icon: SiNetlify, name: "Netlify", color: "text-teal-500", bg: "from-teal-500/20 to-teal-600/20" },
                { icon: SiVercel, name: "Vercel", color: "text-gray-900 dark:text-white", bg: "from-gray-700/20 to-gray-800/20" },
                { icon: SiRender, name: "Render", color: "text-green-500", bg: "from-green-500/20 to-green-600/20" },
                { icon: SiRailway, name: "Railway", color: "text-purple-400", bg: "from-purple-400/20 to-purple-500/20" },
                { icon: SiNpm, name: "NPM", color: "text-red-600", bg: "from-red-600/20 to-red-700/20" },
                { icon: SiApache, name: "Apache", color: "text-red-700", bg: "from-red-700/20 to-red-800/20" },
                { icon: SiApachemaven, name: "Maven", color: "text-orange-700", bg: "from-orange-700/20 to-orange-800/20" },
                { icon: SiBabel, name: "Babel", color: "text-yellow-600", bg: "from-yellow-600/20 to-yellow-700/20" },
                { icon: SiAuth0, name: "OAuth", color: "text-orange-400", bg: "from-orange-400/20 to-orange-500/20" },
                { icon: SiJson, name: "JSON", color: "text-gray-600 dark:text-gray-400", bg: "from-gray-600/20 to-gray-700/20" },
                { icon: SiFigma, name: "Figma", color: "text-purple-500", bg: "from-purple-500/20 to-purple-600/20" }
              ].map((skill, index) => (
                <div key={skill.name} className="group relative">
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${skill.bg} backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:border-white/40 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <skill.icon className={`${skill.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} size={48} />
                    <p className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
