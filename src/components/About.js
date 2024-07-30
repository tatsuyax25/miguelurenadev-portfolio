export default function About() {
  return (
    <section id="about" className="bg-gray-800 text-center py-20">
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
        <div>
          <img
            src="/public/HeroImage.png" // Replace with the path to your image
            alt="Miguel Ureña"
            className="rounded-full w-64 h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}