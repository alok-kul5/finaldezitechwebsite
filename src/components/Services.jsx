import { motion } from 'framer-motion';
import { cardVariants, sectionStagger } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import Section from './Section';

const services = [
  {
    key: 'design-expertise',
    titleNode: (
      <>
        Design Engineering expertise & resources {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    ),
    descriptionNode: (
      <>
        We provide engineering expertise and resources to overcome these challenges to get new products faster to the marketplace. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    key: 'diverse-engineering',
    titleNode: (
      <>
        Availability of Diverse engineering expertise: Mechanical, electrical/Control engineering, software {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    ),
    descriptionNode: (
      <>
        We work as an extension of customers engineering team. {/* Taken from https://dezitechengineering.com/about.html */}
      </>
    )
  },
  {
    key: 'cae-fea',
    titleNode: (
      <>
        CAE- FEA and CFD expert services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    ),
    descriptionNode: (
      <>
        QFD, DFMEA, DoE, design for manufacturing / assembly and service. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
      </>
    )
  },
  {
    key: 'refrigeration-systems',
    titleNode: (
      <>
        Refrigeration systems {/* Taken from https://dezitechengineering.com/refrigeration.html */}
      </>
    ),
    descriptionNode: (
      <>
        We have many years of experience in design of refrigeration systems and support customised design requirements. {/* Taken from https://dezitechengineering.com/refrigeration.html */}
      </>
    )
  },
  {
    key: 'natural-refrigerants',
    titleNode: (
      <>
        Variety of refrigerants – conventional HCFCs to natural refrigerants (CO2, Propane, Ammonia) {/* Taken from https://dezitechengineering.com/refrigeration.html */}
      </>
    ),
    descriptionNode: (
      <>
        Range of applications – from process cooling to complex refrigeration processes. {/* Taken from https://dezitechengineering.com/refrigeration.html */}
      </>
    )
  },
  {
    key: 'electrical-control',
    titleNode: (
      <>
        Electrical / control design engineering expertise {/* Taken from https://dezitechengineering.com/refrigeration.html */}
      </>
    ),
    descriptionNode: (
      <>
        Detailed control and power design / drawings plus IoT / Remote controller with two way communication. {/* Taken from https://dezitechengineering.com/refrigeration.html */}
      </>
    )
  }
];

const Services = () => {
  const { ref, controls } = useStaggered({ threshold: 0.3 });

  return (
    <Section id="services" variant="light">
      <motion.div
        ref={ref}
        variants={sectionStagger}
        initial="hidden"
        animate={controls}
        className="section-shell"
      >
        <div className="section-header">
          <p className="section-eyebrow">
            Engineering / Design Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </p>
          <h2 className="section-title">
            We solve technical challenges and provide resources to get new products faster to the market. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </h2>
          <p className="section-description">
            New products need to be introduced ahead of the competition. Any delay means loosing business and money. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </p>
        </div>
        <div role="list" className="service-grid">
          {services.map((service) => (
            <motion.article key={service.key} role="listitem" variants={cardVariants} className="service-card">
              <div className="service-card__body">
                <h3>{service.titleNode}</h3>
                <p>{service.descriptionNode}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Services;
