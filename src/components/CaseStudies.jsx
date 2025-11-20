import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';

const studies = [
  {
    title: 'Cryogenic Test Loop Digitization',
    summary: 'Deployed IoT / Remote controller with two way communication for precision temperature systems.',
    badge: 'Process Cooling',
    tag: 'AI-enabled telemetry'
  },
  {
    title: 'EV Thermal Module Rapid Design',
    summary: 'Blended mechanical and electrical resources to bridge skill gaps for an automotive launch.',
    badge: 'Automotive',
    tag: 'Hybrid resources'
  },
  {
    title: 'Natural Refrigerant Retrofit',
    summary: 'Converted condensing units to CO2 / propane stacks to meet sustainability goals.',
    badge: 'Sustainability',
    tag: 'Natural refrigerants'
  }
];

const CaseStudies = () => {
  const { ref, controls } = useStaggered({ threshold: 0.25 });

  return (
    <section id="solutions" className="bg-charcoalSoft/30 py-24">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
          Solutions in motion {/* UX POLISH: generated — short */}
        </p>
        <h2 className="text-3xl font-semibold text-mist">
          Continuous Innovation and technology development keeps organisations profitable and ahead of the competition. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
        </h2>
        <p className="max-w-3xl text-base text-neutral-300">
          Without access all the resources, it is inevitable delaying product launch. {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
        </p>
        <div className="overflow-x-auto pb-6">
          <div className="flex snap-x snap-mandatory gap-6">
            {studies.map((study) => (
              <article
                key={study.title}
                className="min-w-[280px] max-w-sm snap-center rounded-3xl border border-white/10 bg-charcoal/60 p-6 shadow-card-hover"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-dezired">{study.badge} {/* UX POLISH: generated — short */}</span>
                <h3 className="mt-4 text-2xl font-semibold text-mist">
                  {study.title} {/* UX POLISH: generated — short */}
                </h3>
                <p className="mt-3 text-sm text-neutral-300">
                  {study.summary} {/* UX POLISH: generated — short */}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {study.tag} {/* UX POLISH: generated — short */}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
