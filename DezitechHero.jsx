// File: DezitechHero.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const heroVariants = {
  rest: { opacity: 0, y: 32, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] } },
};

export const ctaVariants = {
  rest: { opacity: 0, y: 12, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] } },
};

export const illustrationVariants = {
  rest: { opacity: 0, scale: 0.9, rotateX: 8, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.2 },
  },
};

export const useStaggered = (count = 0, step = 0.1) =>
  useMemo(() => Array.from({ length: count }, (_, index) => index * step), [count, step]);

const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event) => setPrefers(event.matches);

    setPrefers(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(updatePreference);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updatePreference);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(updatePreference);
      }
    };
  }, []);

  return prefers;
};

const useHeroInView = (prefersReducedMotion) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsActive(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return { ref, isActive };
};

const metaTitle = 'Dezitech Engineering'; // Title taken from Dezitech home page: https://dezitechengineering.com/
const metaDescription =
  'Dezitech Engineering Pvt. Ltd., Karad, India. Your Engineering design/ technology partner!'; // Meta description taken from Dezitech home page: https://dezitechengineering.com/

const contactEmail = 'info@dezitechengineering.com'; // Contact email sourced from https://dezitechengineering.com/contact.html

const DezitechHero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: heroRef, isActive: heroInView } = useHeroInView(prefersReducedMotion);
  const heroAnimationState = prefersReducedMotion ? 'rest' : heroInView ? 'animate' : 'rest';
  const staggerDelays = useStaggered(3, 0.12);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = metaTitle;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metaDescription);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#050505] text-white"
      aria-label="Dezitech Engineering Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(225,6,0,0.22),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        <nav
          aria-label="Main"
          className="mb-10 flex flex-wrap items-center justify-between gap-4 text-sm text-white/80"
        >
          <span className="font-semibold tracking-wide">
            Dezitech Engineering {/* Brand label taken from Dezitech home page: https://dezitechengineering.com/ */}
          </span>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://dezitechengineering.com/about.html"
              className="transition-colors hover:text-white"
            >
              About Us {/* Nav label taken from Dezitech About page: https://dezitechengineering.com/about.html */}
            </a>
            <a
              href="https://dezitechengineering.com/engineeringdesign.html"
              className="transition-colors hover:text-white"
            >
              Engineering/Design Services {/* Nav label taken from Dezitech Engineering/Design Services page: https://dezitechengineering.com/engineeringdesign.html */}
            </a>
            <a
              href="https://dezitechengineering.com/refrigeration.html"
              className="transition-colors hover:text-white"
            >
              Refrigeration Design {/* Nav label taken from Dezitech Refrigeration page: https://dezitechengineering.com/refrigeration.html */}
            </a>
          </div>
        </nav>

        <div className="grid flex-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-8">
            <motion.div
              initial="rest"
              animate={heroAnimationState}
              variants={heroVariants}
              className="space-y-6"
              style={{ willChange: 'transform, opacity' }}
            >
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Helping customers grow profitably by providing engineering outsourcing solutions Design and Product
                manufacturing{' '}
                {/* Hero headline taken from Dezitech home page: https://dezitechengineering.com/ */}
              </h1>
              <p className="text-lg text-white/80 sm:text-xl">
                Dezitech is your solutions provider in engineering design, products and supply chain.{' '}
                {/* Subhead text taken from Dezitech About page: https://dezitechengineering.com/about.html */}
              </p>
            </motion.div>

            <motion.ul
              initial="rest"
              animate={heroAnimationState}
              variants={heroVariants}
              className="space-y-3 text-base text-white/90"
              style={{ willChange: 'transform, opacity' }}
              aria-live="polite"
            >
              <motion.li
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                initial="rest"
                animate={heroAnimationState}
                variants={heroVariants}
                transition={{ delay: staggerDelays[0] }}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="text-white">
                  We solve technical challenges and provide resources to get new products faster to the market.{' '}
                  {/* Supporting text taken from Dezitech Engineering/Design Services page: https://dezitechengineering.com/engineeringdesign.html */}
                </span>
              </motion.li>
              <motion.li
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                initial="rest"
                animate={heroAnimationState}
                variants={heroVariants}
                transition={{ delay: staggerDelays[1] }}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="text-white">
                  We have many years of experience in design of refrigeration systems and support customised design requirements.{' '}
                  {/* Supporting text taken from Dezitech Refrigeration page: https://dezitechengineering.com/refrigeration.html */}
                </span>
              </motion.li>
              <motion.li
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                initial="rest"
                animate={heroAnimationState}
                variants={heroVariants}
                transition={{ delay: staggerDelays[2] }}
                style={{ willChange: 'transform, opacity' }}
              >
                <span className="text-white">
                  Our Engineers have 20+ years of international working experience and understand the business environment and cultural issues.{' '}
                  {/* Supporting text taken from Dezitech About page: https://dezitechengineering.com/about.html */}
                </span>
              </motion.li>
            </motion.ul>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial="rest"
              animate={heroAnimationState}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.a
                variants={ctaVariants}
                href="https://dezitechengineering.com/engineeringdesign.html"
                className="inline-flex items-center justify-center rounded-full bg-[#E10600] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#E10600]/40 transition hover:-translate-y-0.5 hover:bg-[#ff170d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Explore Dezitech products"
                style={{ willChange: 'transform, opacity' }}
              >
                Explore Products {/* UX polish - CTA leads to Dezitech Engineering/Design Services page: https://dezitechengineering.com/engineeringdesign.html */}
              </motion.a>
              <motion.a
                variants={ctaVariants}
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Contact Dezitech sales via email"
                style={{ willChange: 'transform, opacity' }}
              >
                Contact Sales {/* UX polish - CTA uses Dezitech contact email: https://dezitechengineering.com/contact.html */}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial="rest"
            animate={prefersReducedMotion ? 'rest' : heroInView ? 'animate' : 'rest'}
            variants={illustrationVariants}
            className="relative aspect-square w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#050505] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.65)]"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Visual cues reference uploaded_screenshot (/mnt/data/673882fb-e478-403d-b063-c6ef7d3d5bdd.png) for lighting direction. */}
            {/* Drop immersive animation asset here:
                import heroVisual from './hero-visual.json';
                <Lottie animationData={heroVisual} loop />
            */}
            <motion.svg
              viewBox="0 0 320 320"
              className="h-full w-full"
              aria-hidden="true"
              style={{ willChange: 'transform, opacity' }}
            >
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E10600" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#ff6b4a" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="160"
                cy="160"
                r="120"
                stroke="url(#heroGradient)"
                strokeWidth="2"
                fill="none"
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.5 }
                    : { opacity: [0.4, 0.9, 0.4], scale: [1, 1.05, 1], rotate: [0, 6, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 8, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }
                }
                style={{ willChange: 'transform, opacity' }}
              />
              <motion.circle
                cx="160"
                cy="160"
                r="80"
                fill="url(#heroGradient)"
                fillOpacity="0.08"
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.35 }
                    : { opacity: [0.2, 0.7, 0.2], scale: [0.95, 1.05, 0.95] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 6, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }
                }
                style={{ willChange: 'transform, opacity' }}
              />
              <motion.path
                d="M80 220 Q160 140 240 220"
                stroke="#E10600"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.45 }
                    : { pathLength: [0.6, 1, 0.6], opacity: [0.3, 0.8, 0.3] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 7, repeat: Infinity, ease: 'easeInOut' }
                }
                style={{ willChange: 'transform, opacity' }}
              />
              <motion.rect
                x="110"
                y="110"
                width="100"
                height="100"
                rx="24"
                stroke="url(#heroGradient)"
                strokeWidth="2"
                fill="none"
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.5 }
                    : { rotate: [0, 6, -6, 0], opacity: [0.4, 0.9, 0.4] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 9, repeat: Infinity, ease: 'easeInOut' }
                }
                style={{ willChange: 'transform, opacity' }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
      {/* TODO: Services section -> produce later */}
    </section>
  );
};

export default DezitechHero;
