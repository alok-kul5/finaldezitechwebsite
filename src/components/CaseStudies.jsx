// src/components/CaseStudies.jsx
import { motion } from 'framer-motion';
import { sectionStagger } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import Section from './Section';

const CaseStudies = () => {
  const { ref, controls } = useStaggered({ threshold: 0.25 });

  return (
    <Section id="solutions" variant="white">
      <div id="about" className="sr-only">
        Dezitech Engineering works as an extension of customers engineering team with 20+ years of experience across
        global programs. {/* Source: https://dezitechengineering.com/about.html */}
      </div>
      <motion.div
        ref={ref}
        variants={sectionStagger}
        initial="hidden"
        animate={controls}
        className="dez-section__container"
      >
        <div className="dez-section__header">
          <motion.p className="dez-section__eyebrow" variants={sectionStagger}>
            Solutions {/* Source: https://dezitechengineering.com/engineeringdesign.html */}
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            Continuous Innovation and technology development keeps organisations profitable and ahead of the competition.{' '}
            {/* Source: https://dezitechengineering.com/engineeringdesign.html */}
          </motion.h2>
          <motion.p className="dez-section__description" variants={sectionStagger}>
            Without access all the resources, it is inevitable delaying product launch.{' '}
            {/* Source: https://dezitechengineering.com/engineeringdesign.html */}
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
};

export default CaseStudies;
