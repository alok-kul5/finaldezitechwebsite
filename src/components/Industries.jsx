// src/components/Industries.jsx
import { motion } from 'framer-motion';
import Section from './Section';
import useStaggered from '../hooks/useStaggered';
import { sectionStagger } from '../lib/framerVariants';
import ImageWithPlaceholder from './ImageWithPlaceholder';

/* Industries data - all names taken from Dezitech Engineering Design page */
const industries = [
  {
    /* Taken from https://dezitechengineering.com/engineeringdesign.html */
    name: 'Automotive',
    image: '/assets/industry-automotive.jpg',
    /* TODO: Replace with curated Unsplash/Pexels image
     * Query: "automotive engineering", "car manufacturing", "automotive assembly line"
     */
    credit: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
  },
  {
    /* Taken from https://dezitechengineering.com/engineeringdesign.html */
    name: 'Industrial Equipment',
    image: '/assets/industry-industrial.jpg',
    /* TODO: Replace with curated Unsplash/Pexels image
     * Query: "industrial machinery", "manufacturing equipment", "industrial assembly line"
     */
    credit: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
  },
  {
    /* Taken from https://dezitechengineering.com/engineeringdesign.html */
    name: 'HVAC & Refrigeration',
    image: '/assets/industry-hvac.jpg',
    /* TODO: Replace with curated Unsplash/Pexels image
     * Query: "HVAC system", "refrigeration unit", "hvac plant"
     */
    credit: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a'
  },
  {
    /* Taken from https://dezitechengineering.com/engineeringdesign.html */
    name: 'Oil & Gas',
    image: '/assets/industry-oilgas.jpg',
    /* TODO: Replace with curated Unsplash/Pexels image
     * Query: "oil and gas industry", "petroleum engineering", "industrial gearbox"
     */
    credit: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'
  },
  {
    /* Taken from https://dezitechengineering.com/engineeringdesign.html */
    name: 'Aviation',
    image: '/assets/industry-aviation.jpg',
    /* TODO: Replace with curated Unsplash/Pexels image
     * Query: "aviation engineering", "aircraft manufacturing", "assembly line"
     */
    credit: 'https://images.unsplash.com/photo-1502877338535-766e1452684a'
  }
];

/* Industry item component - horizontal snap scroll marquee
 * Layout inspired by Yardsale (yardsale.day) and Integrated Biosciences (integratedbiosciences.com)
 */
const IndustryItem = ({ industry, index }) => (
  <motion.div
    className="dez-industry-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
  >
    <div className="dez-industry-item__image-wrapper">
      <ImageWithPlaceholder
        src={industry.image}
        alt={`${industry.name} programs`}
        loading="lazy"
        imgClassName="dez-industry-item__image"
        tone="steel"
      />
    </div>
    <div className="dez-industry-item__tag">
      {industry.name}
      <span className="sr-only">Image credit {industry.credit}</span>
    </div>
  </motion.div>
);

const Industries = () => {
  const { ref, controls } = useStaggered({ threshold: 0.15, rootMargin: '-10% 0px' });

  return (
    <Section id="industries" variant="dark">
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
            We provide end to end service or tailored individual needs worldwide to diverse and multidisciplinary
            industries. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </motion.h2>
        </div>
        <div className="dez-industries__marquee-wrapper">
          <div className="dez-industries__marquee" aria-label="Industries marquee">
            {[...industries, ...industries].map((industry, index) => (
              <IndustryItem key={`${industry.name}-${index}`} industry={industry} index={index} />
            ))}
          </div>
          <div className="dez-industries__fade-left" aria-hidden="true" />
          <div className="dez-industries__fade-right" aria-hidden="true" />
        </div>
      </motion.div>
    </Section>
  );
};

export default Industries;
