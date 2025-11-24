import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CapabilitiesSection />
        <IndustriesSection />
        <ContactCTA />
      </main>
    </>
  );
}

