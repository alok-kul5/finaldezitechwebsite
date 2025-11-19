import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const navVariants = {
  top: { backgroundColor: 'rgba(5, 6, 8, 0.15)', opacity: 0.95 },
  scrolled: {
    backgroundColor: 'rgba(5, 6, 8, 0.85)',
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const useStaggered = (count = 3, baseDelay = 0.08, disabled = false) =>
  useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: disabled ? 0 : baseDelay,
          delayChildren: disabled ? 0 : 0.15,
        },
      },
    }),
    [count, baseDelay, disabled],
  );

const useReveal = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isActive) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.28 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isActive]);

  return { ref, isActive };
};

/*
JSON-LD Organization Snippet
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dezitech Engineering Pvt. Ltd.",
  "url": "https://dezitechengineering.com/",
  "email": "info@dezitechengineering.com",
  "address": [
    { "@type": "PostalAddress", "addressLocality": "Karad", "addressCountry": "IN" },
    { "@type": "PostalAddress", "addressLocality": "Bristol", "addressCountry": "UK" }
  ]
}
</script>
*/

/*
Tailwind Palette Snippet
// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         dezitech: {
//           red: '#E10600',
//           ink: '#050608',
//           charcoal: '#0F1115',
//           slate: '#1B1F27',
//           smoke: '#5F6571',
//           frost: '#F3F4F6',
//         },
//       },
//     },
//   },
// };
*/

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E10600]';

const DezitechHome: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [navSolid, setNavSolid] = useState(false);

  const heroSection = useReveal();
  const servicesSection = useReveal();
  const industriesSection = useReveal();
  const contactSection = useReveal();

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroSection.ref,
    offset: ['start start', 'end start'],
  });

  const floatOneY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const floatTwoY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const floatThreeY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  const servicesStagger = useStaggered(6, 0.12, prefersReducedMotion);

  const initialState = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050608] via-[#080B10] to-[#050608] text-white">
      <motion.nav
        aria-label="Primary"
        variants={navVariants}
        initial="top"
        animate={navSolid ? 'scrolled' : 'top'}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/5 px-6 py-3 text-sm transition-colors backdrop-blur-xl"
        style={{ willChange: 'transform, opacity' }}
      >
        <a href="#home" className="font-semibold tracking-wide text-white">
          Dezitech Engineering
          {/* Content Source: https://dezitechengineering.com/ */}
        </a>
        <div className="flex items-center gap-6">
          <a href="#home" className="text-white/80 transition hover:text-white">
            Home
            {/* Content Source: https://dezitechengineering.com/ */}
          </a>
          <a href="#services" className="text-white/80 transition hover:text-white">
            Engineering Design
            {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
          </a>
          <a href="#industries" className="text-white/80 transition hover:text-white">
            Industries
            {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
          </a>
          <a href="#contact" className="text-white/80 transition hover:text-white">
            Contact
            {/* Content Source: https://dezitechengineering.com/contact.html */}
          </a>
          <a
            href="mailto:info@dezitechengineering.com"
            className={`rounded-full border border-[#E10600]/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#E10600] ${focusRing}`}
          >
            info@dezitechengineering.com
            {/* Content Source: https://dezitechengineering.com/contact.html */}
          </a>
        </div>
      </motion.nav>

      <main className="mx-auto flex max-w-6xl flex-col gap-32 px-6 pb-24 pt-32 md:pt-40">
        <section
          id="home"
          ref={heroSection.ref}
          className="relative grid min-h-[80vh] gap-16 overflow-hidden rounded-3xl border border-white/5 bg-[#0B0D12]/60 px-8 py-14 md:grid-cols-2 md:px-12"
        >
          <motion.div
            variants={heroVariants}
            initial={initialState}
            animate={heroSection.isActive ? 'visible' : 'hidden'}
            className="flex flex-col gap-8"
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Engineering Outsourcing Partner
              {/* Content Source: https://dezitechengineering.com/ */}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Helping customers grow profitably by providing engineering outsourcing solutions in design and product manufacturing.
              {/* Content Source: https://dezitechengineering.com/ */}
            </h1>
            <p className="text-lg text-white/80">
              Dezitech is your solutions provider in engineering design, products and supply chain, working as an extension of customers&apos; engineering teams.
              {/* Content Source: https://dezitechengineering.com/about.html */}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className={`rounded-full bg-[#E10600] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_40px_rgba(225,6,0,0.35)] transition ${focusRing}`}
              >
                Explore Products
                {/* Content Source: https://dezitechengineering.com/ */}
              </motion.a>
              <motion.a
                href="mailto:info@dezitechengineering.com?subject=Dezitech%20Engineering%20Inquiry"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className={`rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/50 ${focusRing}`}
              >
                Contact Sales
                {/* Content Source: https://dezitechengineering.com/contact.html */}
              </motion.a>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#E10600]/60 via-transparent to-white/10 blur-3xl"
              style={{ opacity: prefersReducedMotion ? 0.3 : 0.6, willChange: 'opacity' }}
            />
            <motion.div
              className="relative h-72 w-72 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#12151C] to-[#0B0E12] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              style={{ willChange: 'transform, opacity' }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotateX: [0, 6, 0], rotateY: [0, -6, 0], transition: { repeat: Infinity, duration: 12 } }
              }
            >
              <div className="absolute inset-6 rounded-[24px] border border-white/5 bg-[#050608]/80 backdrop-blur-xl" />
              <motion.div
                className="absolute -right-8 top-6 h-32 w-32 rounded-3xl border border-[#E10600]/40 bg-[#E10600]/20"
                style={{ y: prefersReducedMotion ? 0 : floatOneY, willChange: 'transform, opacity' }}
              />
              <motion.div
                className="absolute -left-10 bottom-8 h-28 w-28 rounded-full border border-white/10 bg-white/5"
                style={{ y: prefersReducedMotion ? 0 : floatTwoY, willChange: 'transform, opacity' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/20 bg-[#E10600]/30"
                style={{ y: prefersReducedMotion ? 0 : floatThreeY, willChange: 'transform, opacity' }}
              />
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          ref={servicesSection.ref}
          className="space-y-10 rounded-3xl border border-white/5 bg-[#090B11]/70 px-8 py-14"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Capabilities
              {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
            </p>
            <h2 className="text-3xl font-semibold">
              We solve technical challenges and provide resources to get new products faster to the market.
              {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
            </h2>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={servicesStagger}
            initial={initialState}
            animate={servicesSection.isActive ? 'visible' : 'hidden'}
          >
            <motion.article
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6 transition hover:border-[#E10600]/50 hover:shadow-[0_20px_45px_rgba(225,6,0,0.15)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold">
                3D modelling
                {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
              </h3>
              <p className="mt-3 text-white/80">
                We solve technical challenges and provide resources to get new products faster to the market.
                {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
              </p>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6 transition hover:border-[#E10600]/50 hover:shadow-[0_20px_45px_rgba(225,6,0,0.15)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold">
                CAE / FEA
                {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
              </h3>
              <p className="mt-3 text-white/80">
                CAE- FEA and CFD expert services.
                {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
              </p>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6 transition hover:border-[#E10600]/50 hover:shadow-[0_20px_45px_rgba(225,6,0,0.15)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold">
                Electricals
                {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
              </h3>
              <p className="mt-3 text-white/80">
                Availability of diverse engineering expertise: Mechanical, electrical/control engineering, software.
                {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
              </p>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6 transition hover:border-[#E10600]/50 hover:shadow-[0_20px_45px_rgba(225,6,0,0.15)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold">
                Refrigeration systems
                {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
              </h3>
              <p className="mt-3 text-white/80">
                We have many years of experience in design of refrigeration systems and support customised design requirements.
                {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
              </p>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6 transition hover:border-[#E10600]/50 hover:shadow-[0_20px_45px_rgba(225,6,0,0.15)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold">
                Condensing units
                {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
              </h3>
              <p className="mt-3 text-white/80">
                Range of applications – from process cooling to complex refrigeration processes.
                {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
              </p>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6 transition hover:border-[#E10600]/50 hover:shadow-[0_20px_45px_rgba(225,6,0,0.15)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-xl font-semibold">
                Natural refrigerant systems
                {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
              </h3>
              <p className="mt-3 text-white/80">
                Variety of refrigerants – conventional HCFCs to natural refrigerants (CO2, Propane, Ammonia).
                {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
              </p>
            </motion.article>
          </motion.div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/5 bg-[#0B0D12]/70 px-8 py-14 md:grid-cols-2">
          <motion.div
            variants={heroVariants}
            initial={initialState}
            animate="visible"
            className="space-y-6"
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              About
              {/* Content Source: https://dezitechengineering.com/about.html */}
            </p>
            <h3 className="text-3xl font-semibold">
              Dezitech is your solutions provider in engineering design, products and supply chain.
              {/* Content Source: https://dezitechengineering.com/about.html */}
            </h3>
            <p className="text-white/80">
              Established in 2014, Dezitech Engineering Pvt. Ltd. engineers have extensive experience in engineering design, new product development and supply chain management in diverse industries.
              {/* Content Source: https://dezitechengineering.com/about.html */}
            </p>
            <p className="text-white/80">
              We have expertise in industries: Automotive, Industrial, HVAC, Oil and gas and have provided engineering / supply chain support to customers in the UK, USA, India and Australia. We work as an extension of customers engineering team.
              {/* Content Source: https://dezitechengineering.com/about.html */}
            </p>
          </motion.div>

          <motion.div
            variants={heroVariants}
            initial={initialState}
            animate="visible"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#12151C] to-[#090B11] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            style={{ willChange: 'transform, opacity' }}
          >
            <h4 className="text-xl font-semibold">
              Why us?
              {/* Content Source: https://dezitechengineering.com/about.html */}
            </h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                Local presence and nimble, flexible hands-on team.
                {/* Content Source: https://dezitechengineering.com/about.html */}
              </li>
              <li>
                Diverse engineering experience with in-depth technical understanding.
                {/* Content Source: https://dezitechengineering.com/about.html */}
              </li>
              <li>
                Multidisciplinary engineering resources with awareness of international quality and standards.
                {/* Content Source: https://dezitechengineering.com/about.html */}
              </li>
              <li>
                Experience of making outsourcing profitable with excellent understanding of international cultural issues.
                {/* Content Source: https://dezitechengineering.com/about.html */}
              </li>
            </ul>
          </motion.div>
        </section>

        <section
          id="industries"
          ref={industriesSection.ref}
          className="space-y-10 rounded-3xl border border-white/5 bg-[#090B11]/70 px-8 py-14"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Industries served
              {/* Content Source: https://dezitechengineering.com/ */}
            </p>
            <h3 className="text-3xl font-semibold">
              We provide end to end service or tailored individual needs worldwide to diverse and multidisciplinary industries.
              {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
            </h3>
          </div>
          <motion.ul
            variants={servicesStagger}
            initial={initialState}
            animate={industriesSection.isActive ? 'visible' : 'hidden'}
            className="grid gap-6 md:grid-cols-3"
          >
            {['Oil and gas', 'Automotive', 'Industrial', 'Aviation', 'HVAC & R'].map((industry) => (
              <motion.li
                key={industry}
                variants={cardVariants}
                className="rounded-2xl border border-white/10 bg-[#0F1118]/70 p-5 text-lg font-semibold text-white/90"
                style={{ willChange: 'transform, opacity' }}
              >
                {industry}
                {/* Content Source: https://dezitechengineering.com/ */}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section
          id="contact"
          ref={contactSection.ref}
          className="grid gap-8 rounded-3xl border border-white/5 bg-[#0B0D12]/70 px-8 py-14 md:grid-cols-[1.1fr,0.9fr]"
        >
          <motion.div
            variants={heroVariants}
            initial={initialState}
            animate={contactSection.isActive ? 'visible' : 'hidden'}
            className="space-y-6"
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Contact
              {/* Content Source: https://dezitechengineering.com/contact.html */}
            </p>
            <h3 className="text-3xl font-semibold">
              Please do contact us for work samples, quotations, or to discuss how we can help you.
              {/* Content Source: https://dezitechengineering.com/contact.html */}
            </h3>
            <div className="space-y-4 text-white/80">
              <p>
                Karad, India · Bristol, UK
                {/* Content Source: https://dezitechengineering.com/contact.html */}
              </p>
              <a
                href="mailto:info@dezitechengineering.com"
                className={`inline-flex items-center gap-2 text-lg font-semibold text-[#E10600] ${focusRing}`}
              >
                info@dezitechengineering.com
                {/* Content Source: https://dezitechengineering.com/contact.html */}
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial={initialState}
            animate={contactSection.isActive ? 'visible' : 'hidden'}
            className="rounded-2xl border border-white/10 bg-[#0F1118]/70 p-6"
            style={{ willChange: 'transform, opacity' }}
          >
            <h4 className="text-xl font-semibold">
              Quick links
              {/* Content Source: https://dezitechengineering.com/contact.html */}
            </h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a href="#home" className="transition hover:text-white">
                  About Us
                  {/* Content Source: https://dezitechengineering.com/ */}
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Engineering/Design Services
                  {/* Content Source: https://dezitechengineering.com/engineeringdesign.html */}
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Refrigeration Design
                  {/* Content Source: https://dezitechengineering.com/refrigeration.html */}
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact Us
                  {/* Content Source: https://dezitechengineering.com/contact.html */}
                </a>
              </li>
            </ul>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/60">
        <p>
          Copyright © 2024 - All Rights Reserved
          {/* Content Source: https://dezitechengineering.com/ */}
        </p>
      </footer>
    </div>
  );
};

export default DezitechHome;
