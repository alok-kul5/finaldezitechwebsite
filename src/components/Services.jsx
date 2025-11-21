// src/components/Services.jsx
import { motion } from 'framer-motion';
import { sectionStagger } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import Section from './Section';
import ServiceCard from './ServiceCard';

const services = [
  {
    key: 'design-expertise',
    title: 'Design Engineering expertise & resources', // Taken from https://dezitechengineering.com/engineeringdesign.html
    description:
      'We provide engineering expertise and resources to overcome these challenges to get new products faster to the marketplace.', // Taken from https://dezitechengineering.com/engineeringdesign.html
    sourceUrl: 'https://dezitechengineering.com/engineeringdesign.html'
  },
  {
    key: 'diverse-engineering',
    title: 'Availability of Diverse engineering expertise: Mechanical, electrical/Control engineering, software', // Taken from https://dezitechengineering.com/engineeringdesign.html
    description: 'We work as an extension of customers engineering team.', // Taken from https://dezitechengineering.com/about.html
    sourceUrl: 'https://dezitechengineering.com/engineeringdesign.html'
  },
  {
    key: 'cae-fea',
    title: 'CAE- FEA and CFD expert services', // Taken from https://dezitechengineering.com/engineeringdesign.html
    description: 'QFD, DFMEA, DoE, design for manufacturing / assembly and service.', // Taken from https://dezitechengineering.com/engineeringdesign.html
    sourceUrl: 'https://dezitechengineering.com/engineeringdesign.html'
  },
  {
    key: 'refrigeration-systems',
    title: 'Refrigeration systems', // Taken from https://dezitechengineering.com/refrigeration.html
    description:
      'We have many years of experience in design of refrigeration systems and support customised design requirements.', // Taken from https://dezitechengineering.com/refrigeration.html
    sourceUrl: 'https://dezitechengineering.com/refrigeration.html'
  },
  {
    key: 'natural-refrigerants',
    title: 'Variety of refrigerants – conventional HCFCs to natural refrigerants (CO2, Propane, Ammonia)', // Taken from https://dezitechengineering.com/refrigeration.html
    description: 'Range of applications – from process cooling to complex refrigeration processes.', // Taken from https://dezitechengineering.com/refrigeration.html
    sourceUrl: 'https://dezitechengineering.com/refrigeration.html'
  },
  {
    key: 'electrical-control',
    title: 'Electrical / control design engineering expertise', // Taken from https://dezitechengineering.com/refrigeration.html
    description:
      'Detailed control and power design / drawings plus IoT / Remote controller with two way communication.', // Taken from https://dezitechengineering.com/refrigeration.html
    sourceUrl: 'https://dezitechengineering.com/refrigeration.html'
  }
];

const Services = () => {
  const { ref, controls } = useStaggered({ threshold: 0.2 });

  return (
    <Section id="services" variant="white">
      <motion.div
        ref={ref}
        variants={sectionStagger}
        initial="hidden"
        animate={controls}
        className="dez-section__container"
      >
        <div className="dez-section__header">
          <motion.p className="dez-section__eyebrow" variants={sectionStagger}>
            Engineering / Design Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            We solve technical challenges and provide resources to get new products faster to the market. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </motion.h2>
          <motion.p className="dez-section__description" variants={sectionStagger}>
            New products need to be introduced ahead of the competition. Any delay means loosing business and money. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </motion.p>
        </div>
        <div role="list" className="dez-services__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.key}
              title={service.title}
              description={service.description}
              sourceUrl={service.sourceUrl}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Services;
