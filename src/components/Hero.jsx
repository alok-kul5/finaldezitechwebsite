// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { heroVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import useParallax from '../hooks/useParallax';
import Section from './Section';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Staggered line reveal for headline
const StaggeredHeadline = ({ text, prefersReducedMotion }) => {
  const lines = text.split(' in '); // Split at natural break point
  const { ref, controls } = useStaggered({ threshold: 0.2 });

  if (prefersReducedMotion) {
    return <>{text}</>;
  }

  return (
    <motion.span ref={ref} variants={heroVariants.headlineContainer} initial="hidden" animate={controls}>
      {lines.map((line, i) => (
        <motion.span key={i} variants={heroVariants.headlineLine} style={{ display: 'block' }}>
          {i === 0 ? line : ` in ${line}`}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Hero visual with image placeholder
const HeroVisual = ({ prefersReducedMotion }) => {
  const visualRef = useParallax({ strength: 12, scrollStrength: 0.06 });

  return (
    <motion.div
      ref={visualRef}
      className="hero-visual"
      variants={heroVariants.visual}
      data-reduced={prefersReducedMotion ? 'true' : 'false'}
    >
      <div className="hero-visual__container">
        <img
          src="/assets/hero-placeholder.png"
          alt="Dezitech Engineering solutions"
          className="hero-visual__image"
          loading="eager"
        />
        {/* TODO: Replace with hero video (16:9 mp4 loop) or high-res engineering renders */}
        <div className="hero-visual__overlay" aria-hidden="true" />
      </div>
    </motion.div>
  );
};

const Hero = ({ prefersReducedMotion: prefersReducedMotionProp }) => {
  const prefersReducedMotion = usePrefersReducedMotion() || prefersReducedMotionProp;
  const { ref, controls } = useStaggered({ threshold: 0.25 });

  const heroTitle = 'Engineering outsourcing solutions in design and product manufacturing'; // Taken from https://dezitechengineering.com/
  const heroSubhead = 'Dezitech is your solutions provider in engineering design, products and supply chain.'; // Taken from https://dezitechengineering.com/about.html
  const heroBody =
    'Established in 2014, Dezitech Engineering Pvt. Ltd. engineers have extensive experience in engineering design, new product development and supply chain management in diverse industries.'; // Taken from https://dezitechengineering.com/about.html

  return (
    <Section id="home" variant="maroon" padded={false} className="dez-hero">
      <div className="dez-hero__bg-gradient" aria-hidden="true" />
      <motion.div
        ref={ref}
        variants={heroVariants.container}
        initial="hidden"
        animate={controls}
        className="dez-hero__container"
      >
        <div className="dez-hero__content">
          <motion.p className="dez-hero__eyebrow" variants={heroVariants.eyebrow}>
            Engineering outsourcing solutions {/* Taken from https://dezitechengineering.com/ */}
          </motion.p>
          <motion.h1 className="dez-hero__title">
            <StaggeredHeadline text={heroTitle} prefersReducedMotion={prefersReducedMotion} />
          </motion.h1>
          <motion.p className="dez-hero__subhead" variants={heroVariants.subhead}>
            {heroSubhead}
          </motion.p>
          <motion.p className="dez-hero__body" variants={heroVariants.paragraph}>
            {heroBody}
          </motion.p>
          <motion.div className="dez-hero__ctas" variants={heroVariants.cta}>
            <motion.a
              href="#services"
              className="dez-btn dez-btn--primary"
              whileHover={{ y: -2, scale: 1.01 }}
              whileFocus={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Explore Services
            </motion.a>
            <motion.a
              href="mailto:info@dezitechengineering.com"
              className="dez-btn dez-btn--secondary"
              whileHover={{ y: -2, scale: 1.01 }}
              whileFocus={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Contact Us {/* Taken from https://dezitechengineering.com/contact.html */}
            </motion.a>
          </motion.div>
          <motion.div className="dez-hero__meta" variants={heroVariants.meta}>
            <p>
              International delivery: UK · USA · India · Australia {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
            <p>
              Industries: Automotive · Industrial · HVAC · Oil & Gas {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
          </motion.div>
        </div>
        <HeroVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </Section>
  );
};

export default Hero;
