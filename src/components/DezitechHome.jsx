import { motion, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  fadeInUp,
  navReveal,
  heroVisualLayer,
  floatingPulse,
  cardReveal,
  marqueeVariants,
  glowTrace,
  staggerParent,
} from "../framerVariants";
import useStaggered, { usePrefersReducedMotion } from "../hooks/useStaggered";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const engineeringServices = [
  {
    title: "Engineering/Design Services",
    description:
      "We solve technical challenges and provide resources to get new products faster to the market.",
  },
  {
    title: "3D modelling",
    description: "Design Engineering expertise & resources",
  },
  {
    title: "CAE / FEA",
    description: "CAE- FEA and CFD expert services",
  },
];

const refrigerationServices = [
  {
    title: "Refrigeration systems",
    description:
      "We have many years of experience in design of refrigeration systems and support customised design requirements.",
  },
  {
    title: "Natural refrigerant systems",
    description:
      "Variety of refrigerants – conventional HCFCs to natural refrigerants (CO2, Propane, Ammonia)",
  },
  {
    title: "Condensing units",
    description: "Condensing units, chillers, cold rooms, low temp. systems",
  },
];

const solutionHighlights = [
  "Our Engineers have 20+ years of international working experience and understand the business environment and cultural issues.",
  "We are able to provide tailored and flexible engineering support as the requirement.",
  "We can take concept and develop product and/or add resources to bridge skill gap and/or add resources to complete the not started projects.",
];

const industriesServed = [
  { name: "Automotive" },
  { name: "Industrial" },
  { name: "HVAC" },
  { name: "Oil & Gas" },
  { name: "Aviation" },
];

const DezitechHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const { ref: heroRef, controls: heroControls } = useStaggered({
    threshold: 0.5,
    once: true,
    disabled: reduceMotion,
  });
  const { ref: solutionsRef, controls: solutionsControls } = useStaggered({
    threshold: 0.25,
    once: true,
    disabled: reduceMotion,
  });
  const { ref: servicesRef, controls: servicesControls } = useStaggered({
    threshold: 0.2,
    once: true,
    disabled: reduceMotion,
  });
  const { ref: industriesRef, controls: industriesControls } = useStaggered({
    threshold: 0.15,
    once: true,
    disabled: reduceMotion,
  });
  const { ref: footerRef, controls: footerControls } = useStaggered({
    threshold: 0.2,
    once: true,
    disabled: reduceMotion,
  });

  const parallaxX = useSpring(0, { stiffness: 120, damping: 20 });
  const parallaxY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleParallax = (event) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX =
      (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
    const relativeY =
      (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
    parallaxX.set(relativeX * 40);
    parallaxY.set(relativeY * 25);
  };

  const resetParallax = () => {
    parallaxX.set(0);
    parallaxY.set(0);
  };

  const services = useMemo(
    () => [...engineeringServices, ...refrigerationServices],
    [],
  );

  return (
    <div className="relative min-h-screen bg-darkbg text-[#F1F1F1]">
      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-darkbg/80 backdrop-blur-xl border-b border-stroke"
            : "bg-transparent"
        }`}
        variants={navReveal}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <div>
            {/* Taken from https://dezitechengineering.com/ */}
            <span className="text-lg font-semibold tracking-tight text-[#F1F1F1]">
              Dezitech Engineering
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {/* Taken from https://dezitechengineering.com/ */}
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative pb-1 text-[#E5E5E5] transition-colors duration-300 hover:text-white"
              >
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-dezired after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@dezitechengineering.com"
              className="hidden rounded-full border border-stroke/80 px-6 py-2 text-sm font-semibold text-[#F1F1F1]/80 transition hover:text-white lg:inline-flex"
            >
              {/* Taken from https://dezitechengineering.com/contact.html */}
              Contact Sales
            </a>
          </div>
        </div>
      </motion.nav>

      <main className="relative isolate">
        <section
          id="home"
          className="relative flex min-h-screen items-center bg-gradient-to-b from-darkbg via-darkbg2 to-[#171717] pt-28"
        >
          <div
            className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 lg:flex-row lg:items-center lg:px-12"
            onMouseMove={handleParallax}
            onMouseLeave={resetParallax}
          >
            <div className="flex-1" ref={heroRef}>
              <motion.div
                variants={staggerParent}
                initial="hidden"
                animate={heroControls}
                className="space-y-6"
              >
                <motion.p
                  className="text-sm uppercase tracking-[0.3em] text-[#B0B0B0]"
                  variants={fadeInUp}
                  custom={0}
                >
                  {/* Taken from https://dezitechengineering.com/about.html */}
                  An end to end engineering solutions provider
                </motion.p>
                <motion.h1
                  className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                  variants={fadeInUp}
                  custom={1}
                >
                  {/* Taken from https://dezitechengineering.com/ */}
                  Helping customers grow profitably by providing engineering
                  outsourcing solutions Design and Product manufacturing
                </motion.h1>
                <motion.p
                  className="max-w-2xl text-base text-[#CFCFCF]"
                  variants={fadeInUp}
                  custom={2}
                >
                  {/* Taken from https://dezitechengineering.com/about.html */}
                  Dezitech is your solutions provider in engineering design,
                  products and supply chain.
                </motion.p>
                <motion.p
                  className="max-w-2xl text-base text-[#CFCFCF]"
                  variants={fadeInUp}
                  custom={3}
                >
                  {/* Taken from https://dezitechengineering.com/about.html */}
                  Established in 2014, Dezitech engineering pvt. Ltd engineers
                  have extensive experience in engineering design, new product
                  development and supply chain management in diverse industries.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  variants={fadeInUp}
                  custom={4}
                >
                  <a
                    href="#services"
                    className="group inline-flex items-center rounded-full bg-dezired px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dezired/60"
                  >
                    {/* Taken from https://dezitechengineering.com/about.html */}
                    Explore Products
                    <span className="ml-3 inline-block transition group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                  <a
                    href="mailto:info@dezitechengineering.com"
                    className="inline-flex items-center rounded-full border border-stroke px-6 py-3 text-sm font-semibold text-[#F1F1F1]/80 transition hover:border-dezired/60 hover:text-white"
                  >
                    {/* Taken from https://dezitechengineering.com/contact.html */}
                    Contact Sales
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <div className="flex-1">
              <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-[32px] border border-stroke/80 bg-gradient-to-br from-[#111111] to-[#1d1d1d] p-6 shadow-2xl">
                {/* Placeholder for animated Lottie/GLTF scene */}
                <motion.div
                  className="absolute inset-0 rounded-[32px] border border-white/5"
                  variants={glowTrace}
                  animate={reduceMotion ? undefined : "animate"}
                />
                <motion.div
                  className="absolute inset-10 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(225,6,0,0.45),_transparent)] blur-3xl"
                  variants={floatingPulse}
                  animate={reduceMotion ? undefined : "animate"}
                />
                <motion.div
                  className="relative h-full w-full"
                  style={{
                    x: reduceMotion ? 0 : parallaxX,
                    y: reduceMotion ? 0 : parallaxY,
                  }}
                >
                  <motion.div
                    className="absolute inset-12 rounded-3xl border border-white/5 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                    {...heroVisualLayer(40, 0.1)}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-gradient-to-tr from-[#1f1f1f] to-[#2e2e2e]"
                    {...heroVisualLayer(60, 0.2)}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-dezired/40 bg-gradient-to-br from-transparent via-dezired/20 to-transparent backdrop-blur"
                    {...heroVisualLayer(80, 0.3)}
                  />
                  <motion.div
                    className="absolute inset-x-16 bottom-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    {...heroVisualLayer(20, 0.4)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="relative bg-[#0C0C0C] py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div
              ref={solutionsRef}
              variants={staggerParent}
              initial="hidden"
              animate={solutionsControls}
              className="rounded-3xl border border-stroke bg-white/5 p-8 backdrop-blur-2xl"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#B0B0B0]"
                variants={fadeInUp}
                custom={0}
              >
                {/* Taken from https://dezitechengineering.com/about.html */}
                Engineering outsourcing
              </motion.p>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {solutionHighlights.map((text, index) => (
                  <motion.article
                    key={text}
                    className="rounded-2xl border border-white/5 bg-black/30 p-6 shadow-soft-inner"
                    variants={fadeInUp}
                    custom={index + 1}
                  >
                    {/* Taken from https://dezitechengineering.com/about.html */}
                    <p className="text-base text-[#DFDFDF]">{text}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          className="relative bg-gradient-to-b from-[#0B0B0B] via-[#0F0F0F] to-[#141414] py-24"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div
              ref={servicesRef}
              initial="hidden"
              animate={servicesControls}
              variants={staggerParent}
              className="space-y-10"
            >
              <motion.div className="space-y-4" variants={fadeInUp} custom={0}>
                <p className="text-sm uppercase tracking-[0.3em] text-[#B0B0B0]">
                  {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
                  Services
                </p>
                <h2 className="text-4xl font-semibold text-white">
                  {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
                  We provide engineering expertise and resources to overcome
                  these challenges to get new products faster to the
                  marketplace.
                </h2>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 3).map((service, index) => (
                  <motion.article
                    key={service.title}
                    className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition duration-500 hover:-translate-y-2 hover:border-dezired/50 hover:bg-white/[0.08]"
                    variants={cardReveal}
                    custom={index + 1}
                    whileHover={reduceMotion ? undefined : "hover"}
                  >
                    {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
                    <p className="mt-4 text-sm text-[#D6D6D6]">
                      {service.description}
                    </p>
                  </motion.article>
                ))}
                {services.slice(3).map((service, index) => (
                  <motion.article
                    key={service.title}
                    className="group rounded-3xl border border-white/5 bg-white/5 p-6 transition duration-500 hover:-translate-y-2 hover:border-dezired/50 hover:bg-white/[0.08]"
                    variants={cardReveal}
                    custom={index + 4}
                    whileHover={reduceMotion ? undefined : "hover"}
                  >
                    {/* Taken from https://dezitechengineering.com/refrigeration.html */}
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    {/* Taken from https://dezitechengineering.com/refrigeration.html */}
                    <p className="mt-4 text-sm text-[#D6D6D6]">
                      {service.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="industries"
          className="relative overflow-hidden bg-[#0B0B0B] py-20"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div
              ref={industriesRef}
              initial="hidden"
              animate={industriesControls}
              variants={staggerParent}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} custom={0}>
                <p className="text-sm uppercase tracking-[0.3em] text-[#B0B0B0]">
                  {/* Taken from https://dezitechengineering.com/about.html */}
                  Industries served
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-white">
                  {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
                  We provide end to end service or tailored individual needs
                  world wide to diverse and multidiciplinary Industries
                </h2>
              </motion.div>
              <div className="relative overflow-x-auto">
                <motion.div
                  className="flex min-w-max gap-6 py-6"
                  variants={marqueeVariants}
                  animate={reduceMotion ? undefined : "animate"}
                >
                  {industriesServed.map((industry) => (
                    <div
                      key={industry.name}
                      className="relative min-w-[200px] rounded-2xl border border-white/10 bg-gradient-to-br from-[#111] to-[#181818] p-6 shadow-card-hover"
                    >
                      {/* Taken from https://dezitechengineering.com/about.html */}
                      <p className="text-lg font-semibold text-white">
                        {industry.name}
                      </p>
                      <div className="mt-3 text-xs text-[#B5B5B5]">
                        {/* Taken from https://dezitechengineering.com/about.html */}
                        We have expertise in industries : Automotive,
                        Industrial, HVAC, Oil and gas and have provided
                        engineering / supply chain support to customers in the
                        UK, USA, India and Australia.
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#080808] py-16">
        <motion.div
          ref={footerRef}
          initial="hidden"
          animate={footerControls}
          variants={staggerParent}
          className="mx-auto flex max-w-6xl flex-col gap-12 px-6 text-sm text-[#C5C5C5] lg:flex-row lg:px-12"
        >
          <motion.div
            className="flex-1 space-y-4"
            variants={fadeInUp}
            custom={0}
          >
            <h3 className="text-base font-semibold text-white">
              {/* Taken from https://dezitechengineering.com/contact.html */}
              Contact Details
            </h3>
            <p className="text-sm text-[#B5B5B5]">
              {/* Taken from https://dezitechengineering.com/contact.html */}
              Please do contact us for any further details such as work samples,
              quotation or discus how we can help you.
            </p>
            <a
              href="mailto:info@dezitechengineering.com"
              className="text-lg font-semibold text-white transition hover:text-dezired"
            >
              {/* Taken from https://dezitechengineering.com/contact.html */}
              info@dezitechengineering.com
            </a>
          </motion.div>
          <motion.div
            className="flex-1 space-y-4"
            variants={fadeInUp}
            custom={1}
          >
            <h3 className="text-base font-semibold text-white">
              {/* Taken from https://dezitechengineering.com/contact.html */}
              Locations
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-[#B5B5B5]">
                {/* Taken from https://dezitechengineering.com/contact.html */}
                Karad, India
              </p>
              <p className="text-sm text-[#B5B5B5]">
                {/* Taken from https://dezitechengineering.com/contact.html */}
                Bristol, UK
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 space-y-4"
            variants={fadeInUp}
            custom={2}
          >
            <h3 className="text-base font-semibold text-white">
              {/* Taken from https://dezitechengineering.com/ */}
              Quick Links
            </h3>
            <div className="grid gap-2 text-sm text-[#B5B5B5]">
              {/* Taken from https://dezitechengineering.com/about.html */}
              <a
                className="transition hover:text-white"
                href="https://dezitechengineering.com/about.html"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
              {/* Taken from https://dezitechengineering.com/engineeringdesign.html */}
              <a
                className="transition hover:text-white"
                href="https://dezitechengineering.com/engineeringdesign.html"
                target="_blank"
                rel="noreferrer"
              >
                Engineering/Design Services
              </a>
              {/* Taken from https://dezitechengineering.com/refrigeration.html */}
              <a
                className="transition hover:text-white"
                href="https://dezitechengineering.com/refrigeration.html"
                target="_blank"
                rel="noreferrer"
              >
                Refrigeration Design
              </a>
              {/* Taken from https://dezitechengineering.com/heatpump.html */}
              <a
                className="transition hover:text-white"
                href="https://dezitechengineering.com/heatpump.html"
                target="_blank"
                rel="noreferrer"
              >
                Heat pump Design
              </a>
              {/* Taken from https://dezitechengineering.com/supplychain.html */}
              <a
                className="transition hover:text-white"
                href="https://dezitechengineering.com/supplychain.html"
                target="_blank"
                rel="noreferrer"
              >
                Manufacturing
              </a>
              {/* Taken from https://dezitechengineering.com/contact.html */}
              <a
                className="transition hover:text-white"
                href="https://dezitechengineering.com/contact.html"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-12 text-center text-xs text-[#7A7A7A]">
          {/* Taken from https://dezitechengineering.com/ */}
          Copyright © 2024 - All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default DezitechHome;
