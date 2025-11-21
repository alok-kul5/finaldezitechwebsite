// src/components/Industries.jsx
import { motion } from 'framer-motion';
import Section from './Section';
import useStaggered from '../hooks/useStaggered';
import { sectionStagger } from '../lib/framerVariants';

const industries = [
  'Automotive', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'Industrial', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'HVAC & R', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'Oil & Gas', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'Aviation', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'Marine', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'Energy', // Taken from https://dezitechengineering.com/engineeringdesign.html
  'Manufacturing' // Taken from https://dezitechengineering.com/engineeringdesign.html
];

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
        <div className="dez-industries__marquee-wrapper">
          <div className="dez-industries__marquee" aria-label="Industries marquee">
            <div className="dez-industries__track">
              {[...industries, ...industries, ...industries].map((industry, index) => (
                <span key={`${industry}-${index}`} className="dez-industries__item">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Industries;
