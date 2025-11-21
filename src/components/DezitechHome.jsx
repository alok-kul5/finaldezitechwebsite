import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Industries from './Industries';
import CaseStudies from './CaseStudies';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Section from './Section';

const DezitechHome = ({ prefersReducedMotion }) => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero prefersReducedMotion={prefersReducedMotion} />
        <Services />
        <CaseStudies />
        <Industries />
        <Section id="contact" variant="dark" className="premium-section--padded">
          <ContactForm />
          <Footer />
        </Section>
      </main>
    </div>
  );
};

export default DezitechHome;
