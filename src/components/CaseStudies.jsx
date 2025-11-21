import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import Section from './Section';

const studies = [
  {
    title: 'Cryogenic Test Loop Digitization',
    summary: 'Deployed IoT / Remote controller with two way communication for precision temperature systems.', // UX POLISH: generated
    badge: 'Process Cooling', // UX POLISH: generated
    tag: 'AI-enabled telemetry' // UX POLISH: generated
  },
  {
    title: 'EV Thermal Module Rapid Design',
    summary: 'Blended mechanical and electrical resources to bridge skill gaps for an automotive launch.', // UX POLISH: generated
    badge: 'Automotive', // UX POLISH: generated
    tag: 'Hybrid resources' // UX POLISH: generated
  },
  {
    title: 'Natural Refrigerant Retrofit',
    summary: 'Converted condensing units to CO2 / propane stacks to meet sustainability goals.', // UX POLISH: generated
    badge: 'Sustainability', // UX POLISH: generated
    tag: 'Natural refrigerants' // UX POLISH: generated
  }
];

const CaseStudies = () => {
  const { ref, controls } = useStaggered({ threshold: 0.25 });

  return (
    <Section id="solutions" variant="black">
      <div id="about" className="sr-only">
        Dezitech Engineering works as an extension of customers engineering team with 20+ years of experience across global programs. {/* Taken from https://dezitechengineering.com/about.html */}
      </div>
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        className="section-shell"
      >
        <div className="section-header">
          <p className="section-eyebrow">
            Solutions in motion {/* UX POLISH: generated */}
          </p>
          <h2 className="section-title">
            Continuous Innovation and technology development keeps organisations profitable and ahead of the competition. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </h2>
          <p className="section-description">
            Without access all the resources, it is inevitable delaying product launch. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </p>
        </div>
        <div className="case-carousel">
          {studies.map((study) => (
            <article key={study.title} className="case-card">
              <span className="case-card__badge">{study.badge}</span>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <p className="case-card__tag">{study.tag}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default CaseStudies;
