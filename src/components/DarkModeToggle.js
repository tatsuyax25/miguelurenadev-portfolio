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
    <div className="relative">
      <input 
        type="checkbox"
        id="darkModeToggle"
        className="hidden"
        aria-labelledby="darkModeToggleLabel"
        title="Toggle Dark Mode"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label
        htmlFor="darkModeToggle"
        className="bg-gray-800 text-white px-4 py-2 rounded cursor-pointer"
        id="darkModeToggleLabel"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  );
}
