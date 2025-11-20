import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import DezitechHome from './components/DezitechHome';
import SiteLoader from './components/SiteLoader';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';

const metaTitle = 'Dezitech Engineering'; // Taken from https://dezitechengineering.com/
const metaDescription = 'Dezitech Engineering Pvt. Ltd., Karad, India. Your Engineering design/ technology partner!'; // Taken from https://dezitechengineering.com/
const ACCENT_INTERVAL_MS = 9000; // Alternates the hero/nav accent roughly every 9 seconds (configurable to stay within the 8–12s spec).
const LOADER_DURATION_MS = 2000; // Keeps the entry loader within the 1.4s–2.2s target window.

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [accentMode, setAccentMode] = useState('primary');
  const [showLoader, setShowLoader] = useState(true);

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

  useEffect(() => {
    document.documentElement.dataset.heroAccent = accentMode;
  }, [accentMode]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setAccentMode('primary');
      setShowLoader(false);
      return undefined;
    }

    if (ACCENT_INTERVAL_MS <= 0) {
      setAccentMode('primary');
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setAccentMode((prev) => (prev === 'primary' ? 'alt' : 'primary'));
    }, ACCENT_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  const handleLoaderComplete = () => setShowLoader(false);

  return (
    <>
      <SiteLoader
        active={showLoader}
        onComplete={handleLoaderComplete}
        prefersReducedMotion={prefersReducedMotion}
        duration={LOADER_DURATION_MS}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DezitechHome
                accentMode={accentMode}
                accentInterval={ACCENT_INTERVAL_MS}
                prefersReducedMotion={prefersReducedMotion}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
