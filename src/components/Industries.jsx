// src/components/Industries.jsx
import { motion } from 'framer-motion';
import Section from './Section';
import useStaggered from '../hooks/useStaggered';
import { sectionStagger } from '../lib/framerVariants';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const industries = [
  {
    name: 'Automotive', // Source: https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/industry-gearbox.jpg',
    credit: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
  },
  {
    name: 'Industrial Equipment', // Source: https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/hero-industrial.jpg',
    credit: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
  },
  {
    name: 'HVAC & Refrigeration', // Source: https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/industry-refrigeration.jpg',
    credit: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a'
  },
  {
    name: 'Oil & Gas', // Source: https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/industry-control.jpg',
    credit: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'
  },
  {
    name: 'Aviation', // Source: https://dezitechengineering.com/engineeringdesign.html
    image: '/assets/industry-aviation.jpg',
    credit: 'https://images.unsplash.com/photo-1502877338535-766e1452684a'
  }
];

const IndustrySlide = ({ industry, index }) => (
  <motion.div
    className="dez-industry-slide"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay: index * 0.08 }}
  >
    <div className="dez-industry-slide__image-wrapper">
      <ImageWithPlaceholder
        src={industry.image}
        alt={`${industry.name} programs`}
        loading="lazy"
        imgClassName="dez-industry-slide__image"
        tone="steel"
      />
    </div>
    <div className="dez-industry-slide__tag">
      {industry.name}
      <span className="sr-only">Image credit {industry.credit}</span>
    </div>
  </motion.div>
);

const Industries = () => {
  const { ref, controls } = useStaggered({ threshold: 0.15, rootMargin: '-10% 0px' });

  return (
    <Section id="industries" variant="white">
      <motion.div
        ref={ref}
        variants={sectionStagger}
        initial="hidden"
        animate={controls}
        className="dez-section__container"
      >
        <div className="dez-section__header">
          <motion.p className="dez-section__eyebrow" variants={sectionStagger}>
            Industries served {/* Source: https://dezitechengineering.com/engineeringdesign.html */}
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            We provide end to end service or tailored individual needs worldwide to diverse and multidisciplinary
            industries. {/* Source: https://dezitechengineering.com/engineeringdesign.html */}
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
