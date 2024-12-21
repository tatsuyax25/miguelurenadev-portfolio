import Slider from "react-slick";
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
      className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-20 sm:py-20 transition-colors duration-500"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between p-4 sm:px-6">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg sm:text-lg mb-4">
            As a devoted and driven Software Engineer, I specialize in
            developing innovative and efficient software solutions that drive
            business success. With a strong foundation in both front-end and
            back-end development, I excel in crafting scalable applications
            using the MERN stack (MongoDB, Express, React, Node.js) and other
            cutting-edge technologies.
          </p>
          <p className="text-lg sm:text-lg mb-4">
            My journey in technology has been marked by a commitment to
            continuous learning and a dedication to excellence. From my early
            days providing technical support and managing e-commerce platforms
            to my current focus on full-stack development, I have always
            prioritized user experience, clean code, and impactful results.
          </p>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/HeroImage.png" // Replace with the path to your image
            alt="Miguel Ureña"
            className="rounded-full w-60 sm:w-80 h-60 sm:h-80 object-cover"
          />
        </div>
      </div>

      {/* Skills Carousel */}
      <div className="skills-carousel py-8 sm:py-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
          Skills
        </h3>
        <Slider {...settings}>
          <div className="skill-item flex flex-col items-center">
            <FaHtml5 aria-label="HTML" className="text-red-500" size={40} />
            <p className="text-black dark:text-white">HTML</p>
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
          <div className="skill-item flex flex-col items-center">
            <FaReact aria-label="React" className="text-blue-300" size={40} />
            <p className="text-black dark:text-white">React</p>
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
          <div className="skill-item flex flex-col items-center">
            <FaNodeJs
              aria-label="Node.js"
              className="text-green-500"
              size={40}
            />
            <p className="text-black dark:text-white">Node.js</p>
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
        </Slider>
      </div>
    </section>
  );
}
