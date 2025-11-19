import { motion } from 'framer-motion';

const svgPaths = [
  'M5 80 Q 52 10 100 80 T 195 80',
  'M5 100 Q 52 30 100 100 T 195 100',
  'M5 120 Q 52 50 100 120 T 195 120',
];

const pulseTransition = {
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 4,
  ease: 'easeInOut',
};

const DezitechHero = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:px-12 lg:flex lg:items-center lg:gap-16 lg:px-20">
      <motion.div
        className="mx-auto max-w-3xl lg:mx-0 lg:flex-1"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">
          Future-ready partners
        </p>
        <motion.h1
          className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        >
          Helping customers grow profitably by providing engineering outsourcing solutions in Design and Product manufacturing.
          {/* https://dezitechengineering.com/ */}
        </motion.h1>
        <p className="mt-6 text-lg text-slate-300">
          Dezitech is your solutions provider in engineering design, products and supply chain.
          {/* https://dezitechengineering.com/about.html */}
        </p>
        <p className="mt-4 text-base text-slate-400">
          Established in 2014, Dezitech Engineering Pvt. Ltd. engineers have extensive experience in engineering design, new product development and supply chain management in diverse industries.
          {/* https://dezitechengineering.com/about.html */}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://dezitechengineering.com/engineeringdesign.html"
            className="inline-flex items-center rounded-full bg-teal-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-300"
          >
            Explore Products
          </a>
          <a
            href="https://dezitechengineering.com/contact.html"
            className="inline-flex items-center rounded-full border border-teal-300/70 px-6 py-3 text-base font-semibold text-teal-200 transition hover:border-teal-100 hover:text-teal-50"
          >
            Contact Sales
          </a>
        </div>

        <div className="mt-12 space-y-6">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-base font-medium text-slate-200">
              We solve technical challenges and provide resources to get new products faster to the market.
              {/* https://dezitechengineering.com/engineeringdesign.html */}
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-base font-medium text-slate-200">
              New products need to be introduced ahead of the competition; any delay means losing business and money.
              {/* https://dezitechengineering.com/engineeringdesign.html */}
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-base font-medium text-slate-200">
              We have many years of experience in design of refrigeration systems and support customised design requirements.
              {/* https://dezitechengineering.com/refrigeration.html */}
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-base font-medium text-slate-200">
              Please do contact us for any further details such as work samples, quotation or discus how we can help you.
              {/* https://dezitechengineering.com/contact.html */}
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 max-w-xl lg:mt-0 lg:flex-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-[32px] border border-teal-400/20 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 shadow-2xl shadow-teal-900/60">
          <motion.div
            className="absolute inset-x-8 -top-6 rounded-full bg-teal-400/60 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-slate-950"
            animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.9] }}
            transition={pulseTransition}
          >
            Dezitech Digital Twin
          </motion.div>
          <motion.svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto block h-64 w-64 text-teal-300"
            initial={{ rotate: -2 }}
            animate={{ rotate: 2 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            {svgPaths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                fill="none"
                stroke="url(#heroGradient)"
                strokeWidth={index === 1 ? 2 : 1.5}
                strokeLinecap="round"
                animate={{ pathLength: [0.6, 1, 0.6], opacity: [0.4, 1, 0.4] }}
                transition={{ ...pulseTransition, delay: index * 0.4 }}
              />
            ))}
            <motion.circle
              cx="100"
              cy="140"
              r="22"
              stroke="url(#heroGradient)"
              strokeWidth="2"
              fill="transparent"
              animate={{ r: [20, 24, 20] }}
              transition={pulseTransition}
            />
            <motion.circle
              cx="100"
              cy="60"
              r="8"
              fill="#5eead4"
              animate={{ y: [55, 65, 55] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </motion.svg>
          <p className="mt-8 text-center text-sm text-slate-300">
            We have expertise in industries: Automotive, Industrial, HVAC, Oil and Gas and have provided engineering / supply chain support to customers in the UK, USA, India and Australia.
            {/* https://dezitechengineering.com/about.html */}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DezitechHero;
