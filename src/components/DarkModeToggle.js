import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className='p-2 mt-4 bg-gray-300 dark:bg-gray-700'>Toggle Dark Mode</button>
  );
}