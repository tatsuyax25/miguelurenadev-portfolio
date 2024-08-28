import { useEffect, useState } from "react";

export default function HomeSection() {
  const [text, setText] = useState("");
  const fullText = "Welcome to Miguel Ureña's Portfolio";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index)); // Take a slice of the string up to the current index
      index++;
      if (index > fullText.length) {
        clearInterval(timer); // Stop when done
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [fullText]);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">{text}</h2>
        <p className="text-xl">Full-Stack Software Engineer</p>
      </div>
    </section>
  );
}