// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { heroVariants, textRevealVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import useParallax from '../hooks/useParallax';
import Section from './Section';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Chunked text reveal for headline (word-by-word with mask)
const ChunkedHeadline = ({ text, prefersReducedMotion }) => {
  const words = text.split(' ');
  const { ref, controls } = useStaggered({ threshold: 0.2 });

  if (prefersReducedMotion) {
    return <>{text}</>;
  }

  return (
    <motion.span ref={ref} variants={textRevealVariants.container} initial="hidden" animate={controls}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={textRevealVariants.word}
          style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Hero visual with placeholder image and decorative SVG
const HeroVisual = ({ prefersReducedMotion }) => {
  const visualRef = useParallax({ strength: 10, scrollStrength: 0.05 });
  const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;

  return (
    <motion.div
      ref={visualRef}
      className="hero-visual"
      variants={heroVariants.visual}
      data-reduced={prefersReducedMotion ? 'true' : 'false'}
      data-touch={isTouch ? 'true' : 'false'}
    >
      <div className="hero-visual__container">
        <img
          src="/assets/hero-placeholder.png"
          alt="Dezitech Engineering solutions"
          className="hero-visual__image"
          loading="eager"
        />
        {/* Placeholder: file:///mnt/data/07e1802d-75c4-4ea5-bbf4-0f9236852a9f.png */}
        {/* TODO: Replace with hero video (16:9 mp4 loop) or high-res engineering renders */}
        <div className="hero-visual__overlay" aria-hidden="true" />
        <svg className="hero-visual__decorative" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(225, 6, 0, 0.15)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

const Hero = ({ prefersReducedMotion: prefersReducedMotionProp }) => {
  const prefersReducedMotion = usePrefersReducedMotion() || prefersReducedMotionProp;
  const { ref, controls } = useStaggered({ threshold: 0.25 });

  const heroTitle = 'Engineering outsourcing solutions in design and product manufacturing'; // Taken from https://dezitechengineering.com/
  const heroSubhead = 'Dezitech is your solutions provider in engineering design, products and supply chain.'; // Taken from https://dezitechengineering.com/about.html

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
            <ChunkedHeadline text={heroTitle} prefersReducedMotion={prefersReducedMotion} />
          </motion.h1>
          <motion.p className="dez-hero__subhead" variants={heroVariants.subhead}>
            {heroSubhead}
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
        </div>
        <HeroVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </Section>
  );
};

export default Hero;
