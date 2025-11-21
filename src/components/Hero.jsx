// src/components/Hero.jsx
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { heroVariants, textRevealVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import useParallax from '../animations/useParallax';
import Section from './Section';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import ImageWithPlaceholder from './ImageWithPlaceholder';

/* Local hero image asset: /mnt/data/cd2e0d22-07a3-4e6f-aa63-9b6eb0df7d28.png
 * Copied to /public/assets/hero.png for use in production
 * TODO: Replace with production hero video (16:9 mp4 loop) or high-res engineering renders
 * Suggested Unsplash queries: "automotive engineering", "industrial factory interior", "ev thermal module"
 */
const heroImage = '/assets/hero.png';

const StaggeredHeadline = ({ text, prefersReducedMotion }) => {
  /* Split by common sentence breaks and create line-by-line reveal */
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

  /* Taken from Dezitech homepage: https://dezitechengineering.com/ */
  const heroTitle = 'Engineering outsourcing solutions in design and product manufacturing';
  /* Taken from Dezitech About page: https://dezitechengineering.com/about.html */
  const heroSubhead = 'Dezitech is your solutions provider in engineering design, products and supply chain.';

  return (
    <Section id="home" variant="white" padded={false} className={`dez-hero ${centered ? 'hero--center' : ''}`}>
      <motion.div
        ref={ref}
        variants={heroVariants.container}
        initial="hidden"
        animate={controls}
        className="dez-hero__container"
      >
        <div className="dez-hero__content">
          <motion.p className="dez-hero__eyebrow" variants={heroVariants.eyebrow}>
            Engineering outsourcing solutions {/* Taken from Dezitech homepage: https://dezitechengineering.com/ */}
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
              Contact Us {/* Taken from Dezitech Contact page: https://dezitechengineering.com/contact.html */}
            </motion.a>
          </motion.div>
          <div className="hero-meta">
            <p>20+ years delivering global engineering programs {/* Taken from Dezitech About page: https://dezitechengineering.com/about.html */}</p>
            <p>Karad · Bristol · Global reach {/* Taken from Dezitech Contact page: https://dezitechengineering.com/contact.html */}</p>
          </div>
        </div>
        <HeroVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </Section>
  );
};

export default Hero;
