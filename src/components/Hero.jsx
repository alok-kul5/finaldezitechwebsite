// src/components/Hero.jsx
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { heroVariants, textRevealVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import useParallax from '../animations/useParallax';
import Section from './Section';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import ImageWithPlaceholder from './ImageWithPlaceholder';

/* Hero visual placeholder - Lottie/GLTF scene or layered SVG
 * TODO: Replace with production hero video (16:9 mp4 loop) or high-res engineering renders
 * Suggested Unsplash queries: "automotive engineering", "industrial factory interior", "ev thermal module"
 */
const heroImage = '/assets/hero.png';

const StaggeredHeadline = ({ text, prefersReducedMotion }) => {
  /* Chunked word-by-word reveal with mask per word
   * Stagger: 40-80ms per word (configurable in textRevealVariants.container.staggerChildren)
   * Use opacity + translateY only (GPU-accelerated)
   */
  const words = text.split(' ');
  const { ref, controls } = useStaggered({ threshold: 0.2, rootMargin: '-10% 0px' });

  if (prefersReducedMotion) {
    return <>{text}</>;
  }

  return (
    <motion.span ref={ref} variants={textRevealVariants.container} initial="hidden" animate={controls}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          variants={textRevealVariants.word}
          style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroVisual = ({ prefersReducedMotion }) => {
  /* Parallax for hero visual only - transform: translate3d() with throttling
   * Respect prefers-reduced-motion (disable parallax)
   * Visual layout inspired by Vision Avatr (vision.avatr.com) and Osmo Supply (osmo.supply)
   */
  const visualRef = useParallax({ strength: 8, scrollStrength: 0.03 });
  const heroSources = useMemo(
    () => [
      {
        srcSet: `${heroImage} 1600w`,
        media: '(min-width: 768px)'
      }
    ],
    []
  );

  return (
    <motion.div ref={visualRef} className="hero-visual" variants={heroVariants.visual}>
      <div className="hero-visual__container" data-reduced={prefersReducedMotion ? 'true' : 'false'}>
        {/* Placeholder for Lottie/GLTF scene */}
        <ImageWithPlaceholder
          src={heroImage}
          alt="Dezitech Engineering solutions"
          loading="eager"
          decoding="async"
          sources={heroSources}
          imgClassName="hero-visual__image"
          tone="warm"
        />
        <div className="hero-visual__overlay" aria-hidden="true" />
        <svg className="hero-visual__decorative" viewBox="0 0 200 200" aria-hidden="true">
          <motion.polygon
            points="100,20 180,100 100,180 20,100"
            fill="none"
            stroke="rgba(225, 6, 0, 0.15)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

const Hero = ({ prefersReducedMotion: prefersReducedMotionProp, centered = true }) => {
  const prefersReducedMotion = usePrefersReducedMotion() || prefersReducedMotionProp;
  const { ref, controls } = useStaggered({ threshold: 0.25 });

  /* Taken from https://dezitechengineering.com/ */
  const heroTitle = 'Engineering outsourcing solutions in design and product manufacturing';
  /* Taken from https://dezitechengineering.com/about.html */
  const heroSubhead = 'Dezitech is your solutions provider in engineering design, products and supply chain.';

  return (
    <Section id="home" variant="dark" padded={false} className={`dez-hero ${centered ? 'hero--center' : ''}`}>
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
          <motion.div className="dez-hero__ctas" variants={heroVariants.cta}>
            <motion.a
              href="#services"
              className="dez-btn dez-btn--primary"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Explore Services
            </motion.a>
            <motion.a
              href="mailto:info@dezitechengineering.com"
              className="dez-btn dez-btn--secondary"
              whileHover={{ opacity: 0.8 }}
              whileFocus={{ opacity: 0.8 }}
            >
              Contact Us {/* Taken from https://dezitechengineering.com/contact.html */}
            </motion.a>
          </motion.div>
          <div className="hero-meta">
            <p>20+ years delivering global engineering programs {/* Taken from https://dezitechengineering.com/about.html */}</p>
            <p>Karad · Bristol · Global reach {/* Taken from https://dezitechengineering.com/contact.html */}</p>
          </div>
        </div>
        <HeroVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </Section>
  );
};

export default Hero;
