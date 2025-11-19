import { useEffect, useState } from 'react';
import DezitechHero from './components/DezitechHero.jsx';

const metaTitle = 'Dezitech Engineering'; // Source: https://www.dezitechengineering.com/
const metaDescription = 'Dezitech Engineering Pvt. Ltd., Karad, India. Your Engineering design/ technology partner!'; // Source: https://www.dezitechengineering.com/

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.title = metaTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', metaDescription);
  }, []);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <header className="flex justify-end px-6 py-4">
        <button
          type="button"
          onClick={handleThemeToggle}
          aria-pressed={theme === 'dark'}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-dezitech-red hover:text-dezitech-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dezitech-red dark:border-slate-600 dark:text-slate-200"
        >
          <span className="sr-only">We work as an extension of customers engineering team.</span> {/* Source: https://www.dezitechengineering.com/about.html */}
          <span className="h-5 w-10 rounded-full bg-slate-200 transition-all duration-300 dark:bg-slate-700">
            <span
              className={`block h-5 w-5 rounded-full bg-dezitech-red transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}
            />
          </span>
          <span aria-hidden="true" className="text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-300">
            {theme === 'dark' ? '•' : '○'}
          </span>
        </button>
      </header>
      <main>
        <DezitechHero />
      </main>
    </div>
  );
}

export default App;
