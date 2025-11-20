import { motion } from 'framer-motion';
import { cardVariants, heroVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';

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
    <section id="services" className="relative bg-charcoalSoft/40 py-24">
      <motion.div
        ref={ref}
        variants={heroVariants.section}
        initial="hidden"
        animate={controls}
        className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6"
      >
        <header className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
            Engineering / Design Services {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-mist">
            We solve technical challenges and provide resources to get new products faster to the market. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </h2>
          <p className="text-base text-neutral-300">
            New products need to be introduced ahead of the competition. Any delay means loosing business and money. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
          </p>
        </header>
        <div
          role="list"
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.article
              key={service.key}
              role="listitem"
              tabIndex={0}
              variants={cardVariants}
              className="group rounded-3xl border border-white/10 bg-charcoal/60 p-6 transition duration-500 hover:-translate-y-2 hover:border-dezired/80 hover:shadow-card-hover focus:outline-none focus-visible:border-dezired"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-mist">{service.titleNode}</h3>
                <p className="text-sm text-neutral-300">{service.descriptionNode}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
