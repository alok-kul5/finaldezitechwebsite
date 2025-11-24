'use client';

import { useMemo, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { heroVariants, heroHeadlineVariants, textRevealVariants } from '@/lib/framerVariants';
import { useParallax } from '@/utils/useParallax';

interface HeroProps {
  prefersReducedMotion?: boolean;
  centered?: boolean;
}

/* Hero visual placeholder - replace with production assets */
const heroImage = '/assets/hero-placeholder.png';

const StaggeredHeadline = ({ text, prefersReducedMotion }: { text: string; prefersReducedMotion: boolean }) => {
  const words = text.split(' ');

  if (prefersReducedMotion) {
    return <>{text}</>;
  }

  return (
    <motion.span variants={textRevealVariants.container as any} initial="hidden" animate="visible">
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          variants={textRevealVariants.word as any}
          style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroVisual = ({ prefersReducedMotion }: { prefersReducedMotion: boolean }) => {
  // 3 parallax layers with exact multipliers [0.01, 0.03, 0.07] and scales [1.01, 1.03, 1.06]
  const { refs, transforms } = useParallax({
    multipliers: [0.01, 0.03, 0.07],
    lerpFactor: 0.12,
    springConfig: { stiffness: 80, damping: 18 },
    prefersReducedMotion,
  });

  const scales = [1.01, 1.03, 1.06];

  return (
    <motion.div className="hero-visual" variants={heroVariants.visual as any}>
      <div className="hero-visual__container" data-reduced={prefersReducedMotion ? 'true' : 'false'}>
        {/* Layer 1 - Background (multiplier 0.01, scale 1.01) */}
        <motion.div
          ref={refs[0] as React.RefObject<HTMLDivElement>}
          className="hero-visual__layer hero-visual__layer--bg"
          style={{ y: transforms[0], scale: scales[0] }}
        >
          <div className="hero-visual__gradient" />
        </motion.div>

        {/* Layer 2 - Mid (multiplier 0.03, scale 1.03) */}
        <motion.div
          ref={refs[1] as React.RefObject<HTMLDivElement>}
          className="hero-visual__layer hero-visual__layer--mid"
          style={{ y: transforms[1], scale: scales[1] }}
        >
          <div className="hero-visual__pattern" />
        </motion.div>

        {/* Layer 3 - Foreground (multiplier 0.07, scale 1.06) */}
        <motion.div
          ref={refs[2] as React.RefObject<HTMLDivElement>}
          className="hero-visual__layer hero-visual__layer--fg"
          style={{ y: transforms[2], scale: scales[2] }}
        >
          <img
            src={heroImage}
            alt="Dezitech Engineering solutions"
            className="hero-visual__image"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <div className="hero-visual__overlay" aria-hidden="true" />
      </div>
    </motion.div>
  );
};

export default function Hero({ prefersReducedMotion: prefersReducedMotionProp, centered = true }: HeroProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(prefersReducedMotionProp || false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const heroTitle = 'Engineering outsourcing solutions in design and product manufacturing';
  const heroSubhead = 'Dezitech is your solutions provider in engineering design, products and supply chain.';

  return (
    <section
      id="home"
      className={`dez-hero ${centered ? 'hero--center' : ''}`}
    >
      <motion.div
        variants={heroVariants.container as any}
        initial="hidden"
        animate="visible"
        className="dez-hero__container"
      >
        <div className="dez-hero__content">
          <motion.p className="dez-hero__eyebrow" variants={heroVariants.eyebrow as any}>
            Engineering outsourcing solutions
          </motion.p>
          <motion.h1 className="dez-hero__title" variants={heroHeadlineVariants as any}>
            <StaggeredHeadline text={heroTitle} prefersReducedMotion={prefersReducedMotion} />
          </motion.h1>
          <motion.p className="dez-hero__subhead" variants={heroVariants.subhead as any}>
            {heroSubhead}
          </motion.p>
          <motion.div className="dez-hero__ctas" variants={heroVariants.cta as any}>
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
              Contact Us
            </motion.a>
          </motion.div>
          <div className="hero-meta">
            <p>20+ years delivering global engineering programs</p>
            <p>Karad · Bristol · Global reach</p>
          </div>
        </div>
        <HeroVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>
    </section>
  );
}

