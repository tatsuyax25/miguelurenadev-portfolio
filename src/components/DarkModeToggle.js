import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className='ml-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors'>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
  );
}