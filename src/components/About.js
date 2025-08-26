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
} from "react-icons/si";
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

      {/* Skills Carousel */}
      <div className="skills-carousel py-8 sm:py-10 relative">
        <div className="text-center mb-8">
          <h3 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h3>
          <div className="font-mono text-sm text-gray-600 dark:text-gray-400">
            <span className="text-green-500">{"//"}</span> Technologies I work with daily
          </div>
        </div>
        
        {/* Skills container with tech styling */}
        <div className="relative bg-gray-900/5 dark:bg-gray-800/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <Slider {...settings}>
          <div className="skill-item flex flex-col items-center group cursor-pointer">
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <FaHtml5 aria-label="HTML" className="text-red-500 group-hover:text-red-400" size={40} />
            </div>
            <p className="text-black dark:text-white mt-2 text-sm font-medium">HTML</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <FaCss3Alt aria-label="CSS" className="text-blue-500" size={40} />
            <p className="text-black dark:text-white">CSS</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <FaJsSquare
              aria-label="JavaScript"
              className="text-yellow-500"
              size={40}
            />
            <p className="text-black dark:text-white">JavaScript</p>
          </div>
          <div className="skill-item flex flex-col items-center group cursor-pointer">
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <FaReact aria-label="React" className="text-blue-400 group-hover:text-blue-300 animate-spin-slow" size={40} />
            </div>
            <p className="text-black dark:text-white mt-2 text-sm font-medium">React</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <FaBootstrap
              aria-label="Bootstrap"
              className="text-purple-600"
              size={40}
            />
            <p className="text-black dark:text-white">Bootstrap</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiTailwindcss
              aria-label="Tailwind CSS"
              className="text-blue-400"
              size={40}
            />
            <p className="text-black dark:text-white">Tailwind CSS</p>
          </div>
          <div className="skill-item flex flex-col items-center group cursor-pointer">
            <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <FaNodeJs
                aria-label="Node.js"
                className="text-green-500 group-hover:text-green-400"
                size={40}
              />
            </div>
            <p className="text-black dark:text-white mt-2 text-sm font-medium">Node.js</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiExpress
              aria-label="Express.js"
              className="text-black dark:text-white"
              size={40}
            />
            <p className="text-black dark:text-white">Express.js</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiNpm aria-label="NPM" className="text-red-600" size={40} />
            <p className="text-black dark:text-white">NPM</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiMongodb
              aria-label="MongoDB"
              className="text-green-400"
              size={40}
            />
            <p className="text-black dark:text-white">MongoDB</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <FaPython
              aria-label="Python"
              className="text-yellow-500"
              size={40}
            />
            <p className="text-black dark:text-white">Python</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiDjango
              aria-label="Django"
              className="text-black dark:text-white"
              size={40}
            />
            <p className="text-black dark:text-white">Django</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiPostgresql
              aria-label="PostgreSQL"
              className="text-blue-600"
              size={40}
            />
            <p className="text-black dark:text-white">PostgreSQL</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <FaGithub
              aria-label="GitHub"
              className="text-black dark:text-white"
              size={40}
            />
            <p className="text-black dark:text-white">GitHub</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <FaAws aria-label="AWS" className="text-orange-500" size={40} />
            <p className="text-black dark:text-white">AWS</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <DiHeroku
              aria-label="Heroku"
              className="text-purple-800"
              size={40}
            />
            <p className="text-black dark:text-white">Heroku</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiGooglecloud
              aria-label="Google Cloud"
              className="text-blue-600"
              size={40}
            />
            <p className="text-black dark:text-white">Google Cloud</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiNextdotjs
              aria-label="Next.js"
              className="text-black dark:text-white"
              size={40}
            />
            <p className="text-black dark:text-white">Next.js</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiGoogleanalytics
              aria-label="Google Analytics"
              className="text-yellow-500"
              size={40}
            />
            <p className="text-black dark:text-white">Google Analytics</p>
          </div>
          <div className="skill-item flex flex-col items-center">
            <SiNetlify
              aria-label="Netlify"
              className="text-teal-500"
              size={40}
            />
            <p className="text-black dark:text-white">Netlify</p>
          </div>
          </Slider>
        </div>
      </div>


    </section>
  );
}
