// src/components/Industries.jsx
import { motion } from 'framer-motion';
import Section from './Section';
import useStaggered from '../hooks/useStaggered';
import { sectionStagger } from '../lib/framerVariants';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const industries = [
  {
    name: 'Automotive', // Taken from https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/hero-placeholder.png'
    // TODO: Replace with curated Unsplash/Pexels image (query: "automotive engineering", "car manufacturing")
  },
  {
    name: 'Industrial', // Taken from https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/hero-placeholder.png'
    // TODO: Replace with curated Unsplash/Pexels image (query: "industrial machinery", "manufacturing equipment")
  },
  {
    name: 'HVAC & R', // Taken from https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/hero-placeholder.png'
    // TODO: Replace with curated Unsplash/Pexels image (query: "HVAC system", "refrigeration unit")
  },
  {
    name: 'Oil & Gas', // Taken from https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/hero-placeholder.png'
    // TODO: Replace with curated Unsplash/Pexels image (query: "oil and gas industry", "petroleum engineering")
  },
  {
    name: 'Aviation', // Taken from https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/hero-placeholder.png'
    // TODO: Replace with curated Unsplash/Pexels image (query: "aviation engineering", "aircraft manufacturing")
  }
];

const IndustrySlide = ({ industry, index }) => {
  return (
    <motion.div
      className="dez-industry-slide"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="dez-industry-slide__image-wrapper">
        <ImageWithPlaceholder
          src={industry.image}
          alt={`${industry.name} industry`}
          className="dez-industry-slide__image"
          loading="lazy"
          vignette={true}
        />
      </div>
      <div className="dez-industry-slide__tag">{industry.name}</div>
    </motion.div>
  );
};

const Industries = () => {
  const { ref, controls } = useStaggered({ threshold: 0.15 });

  return (
    <Section id="industries" variant="charcoal">
      <motion.div
        ref={ref}
        variants={sectionStagger}
        initial="hidden"
        animate={controls}
        className="dez-section__container"
      >
        <div className="dez-section__header">
          <motion.p className="dez-section__eyebrow" variants={sectionStagger}>
            Industries served {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            We provide end to end service or tailored individual needs world wide to diverse and multidiciplinary
            Industries. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </motion.h2>
        </div>
        <div className="dez-industries__scroll-wrapper">
          <div className="dez-industries__scroll" aria-label="Industries scroll">
            <div className="dez-industries__track">
              {[...industries, ...industries].map((industry, index) => (
                <IndustrySlide key={`${industry.name}-${index}`} industry={industry} index={index} />
              ))}
            </div>
          </div>
          <div className="dez-industries__fade-left" aria-hidden="true" />
          <div className="dez-industries__fade-right" aria-hidden="true" />
        </div>
      </motion.div>
    </Section>
  );
};

export default Industries;
