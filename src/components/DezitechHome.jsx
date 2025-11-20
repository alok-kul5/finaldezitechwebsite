import Nav from './Nav';
import Hero from './Hero';
import Services from './Services';
import IndustriesStrip from './IndustriesStrip';
import CaseStudies from './CaseStudies';
import ContactForm from './ContactForm';
import Footer from './Footer';

const DezitechHome = () => (
  <div className="bg-charcoal text-mist">
    <Nav />
    <main>
      <Hero />
      <Services />
      {/* TODO: Dedicated Services/Products detail pages mount here when multi-page routing is introduced */}
      <IndustriesStrip />
      <CaseStudies />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default DezitechHome;
