import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CapabilitiesSection />
        <IndustriesSection />
      </main>
    </>
  );
}

