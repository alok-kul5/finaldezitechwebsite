// src/App.js
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Industries from './components/Industries';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SiteLoader from './components/SiteLoader';
import Section from './components/Section';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';

const metaTitle = 'Dezitech Engineering'; // Source: https://dezitechengineering.com/
const metaDescription =
  'Dezitech Engineering Pvt. Ltd., Karad, India. Your Engineering design/ technology partner!'; // Source: https://dezitechengineering.com/
const LOADER_DURATION_MS = 5000; // Cinematic loader 4-6s window

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
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

  const handleLoaderComplete = () => setShowLoader(false);

  return (
    <>
      <SiteLoader
        active={showLoader}
        onComplete={handleLoaderComplete}
        prefersReducedMotion={prefersReducedMotion}
        duration={LOADER_DURATION_MS}
        skipAnimation={prefersReducedMotion}
      />
      <div className="app-shell">
        <Navbar />
        <main>
          <Hero prefersReducedMotion={prefersReducedMotion} />
          <Services />
          <CaseStudies />
          <Industries />
          <Section id="contact" variant="charcoal" className="dez-section--padded">
            <ContactForm />
            <Footer />
          </Section>
        </main>
      </div>
    </>
  );
}

export default App;
