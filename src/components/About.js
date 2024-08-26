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
import { SiMongodb, SiTailwindcss, SiPostgresql, SiDjango } from "react-icons/si";
import { DiHeroku } from "react-icons/di";

export default function About() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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
    <section id="about" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between p-4">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            As a devoted and driven Software Engineer, I specialize in
            developing innovative and efficient software solutions that drive
            business success. With a strong foundation in both front-end and
            back-end development, I excel in crafting scalable applications
            using the MERN stack (MongoDB, Express, React, Node.js) and other
            cutting-edge technologies.
          </p>
          <p className="text-lg">
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
            className="rounded-full w-80 h-80 object-cover"
          />
        </div>
      </div>

      {/* Skills Carousel */}
      <div className="skills-carousel py-10">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <Slider {...settings}>
          <div className="skill-item">
            <FaHtml5 size={50} />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <FaCss3Alt size={50} />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <FaJsSquare size={50} />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <FaReact size={50} />
            <p>React</p>
          </div>
          <div className="skill-item">
            <FaBootstrap size={50} />
            <p>Bootstrap</p>
          </div>
          <div className="skill-item">
            <SiTailwindcss size={50} />
            <p>Tailwind CSS</p>
          </div>
          <div className="skill-item">
            <FaNodeJs size={50} />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
            <SiMongodb size={50} />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <FaPython size={50} />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <SiDjango size={50} />
            <p>Django</p>
          </div>
          <div className="skill-item">
            <SiPostgresql size={50} />
            <p>Postgres</p>
          </div>
          <div className="skill-item">
            <FaGithub size={50} />
            <p>GitHub</p>
          </div>
          <div className="skill-item">
            <FaAws size={50} />
            <p>AWS</p>
          </div>
          <div className="skill-item">
            <DiHeroku size={50} />
            <p>Heroku</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}