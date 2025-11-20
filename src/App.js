import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import DezitechHome from './components/DezitechHome';

const metaTitle = 'Dezitech Engineering'; // Taken from https://dezitechengineering.com/
const metaDescription = 'Dezitech Engineering Pvt. Ltd., Karad, India. Your Engineering design/ technology partner!'; // Taken from https://dezitechengineering.com/

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.title = metaTitle;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', metaDescription);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DezitechHome />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
