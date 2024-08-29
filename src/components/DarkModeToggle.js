import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for saved mode or use prefers-color-scheme
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setDarkMode(true);
    } 
  }, []);

  // Update localStorage and apply dark mode class on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Logging for debugging
    console.log("Dark Mode:", darkMode);
    console.log("LocalStorage Theme:", localStorage.getItem("theme"));
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-800 text-white px-4 py-2 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
