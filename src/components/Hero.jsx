// src/components/Hero.jsx
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { heroVariants, textRevealVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import useParallax from '../animations/useParallax';
import Section from './Section';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const heroImage = '/assets/hero-industrial.jpg';
const heroImageSource = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'; // Image credit

const StaggeredHeadline = ({ text, prefersReducedMotion }) => {
  const words = text.split(' ');
  const { ref, controls } = useStaggered({ threshold: 0.2, rootMargin: '-10% 0px' });

  if (prefersReducedMotion) {
    return <>{text}</>;
  }

  return (
    <motion.span ref={ref} variants={textRevealVariants.container} initial="hidden" animate={controls}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
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
  const visualRef = useParallax({ strength: 12, scrollStrength: 0.04 });
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
          alt="Precision manufacturing floor"
          loading="eager"
          decoding="async"
          sources={heroSources}
          imgClassName="hero-visual__image"
          tone="warm"
        />
        {/* Image source: https://images.unsplash.com/photo-1469474968028-56623f02e42e */}
        <div className="hero-visual__overlay" aria-hidden="true" />
        <svg className="hero-visual__decorative" viewBox="0 0 200 200" aria-hidden="true">
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(225, 6, 0, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          />
        </svg>
      </div>
      <span className="hero-visual__credit" aria-label="Image credit">
        Image credit:{' '}
        <a href={heroImageSource} target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </span>
    </motion.div>
  );
};

const Hero = ({ prefersReducedMotion: prefersReducedMotionProp, centered = false }) => {
  const prefersReducedMotion = usePrefersReducedMotion() || prefersReducedMotionProp;
  const { ref, controls } = useStaggered({ threshold: 0.25 });
  const [matchesCenterBreakpoint, setMatchesCenterBreakpoint] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const handleChange = (event) => setMatchesCenterBreakpoint(event.matches);
    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const heroTitle = 'Engineering outsourcing solutions in design and product manufacturing'; // Source: https://dezitechengineering.com/
  const heroSubhead = 'Dezitech is your solutions provider in engineering design, products and supply chain.'; // Source: https://dezitechengineering.com/about.html
  const shouldCenter = centered || matchesCenterBreakpoint;

  return (
    <Section id="home" variant="maroon" padded={false} className={`dez-hero ${shouldCenter ? 'hero--center' : ''}`}>
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
            Engineering outsourcing solutions {/* Source: https://dezitechengineering.com/ */}
          </motion.p>
          <motion.h1 className="dez-hero__title">
            <StaggeredHeadline text={heroTitle} prefersReducedMotion={prefersReducedMotion} />
          </motion.h1>
          {/* Source: https://dezitechengineering.com/about.html */}
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
              Contact Us {/* Source: https://dezitechengineering.com/contact.html */}
            </motion.a>
          </motion.div>
          <div className="hero-meta">
            <p>20+ years delivering global engineering programs {/* Source: https://dezitechengineering.com/about.html */}</p>
            <p>Karad · Bristol · Global reach {/* Source: https://dezitechengineering.com/contact.html */}</p>
          </div>
        </div>
        <HeroVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </Section>
  );
};

export default Hero;
