import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const useStaggered = (disabled = false, baseDelay = 0.2) => {
  return useMemo(
    () => ({
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: disabled ? 0 : baseDelay,
            staggerChildren: disabled ? 0 : 0.1,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: disabled ? 0 : 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      },
    }),
    [disabled, baseDelay]
  );
};

function DezitechHero() {
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const stagger = useStaggered(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsInView(true);
      return undefined;
    }

    const element = heroRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const heroVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    }),
    [prefersReducedMotion]
  );

  const ctaVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
      },
    }),
    [prefersReducedMotion]
  );

  const illustrationVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40, rotate: prefersReducedMotion ? 0 : -3 },
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration: 0.9, ease: 'easeOut', delay: 0.15 },
      },
    }),
    [prefersReducedMotion]
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-dezitech-frost pb-16 pt-12 text-slate-900 dark:bg-dezitech-slate dark:text-white"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-white/40 via-transparent to-transparent dark:from-dezitech-night" />
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16"
      >
        <motion.div
          className="flex-1 space-y-6"
          variants={stagger.container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-dezitech-red"
            variants={stagger.item}
          >
            Helping customers grow profitably by providing engineering outsourcing solutions Design and Product manufacturing
          </motion.p>
          {/* Source: https://www.dezitechengineering.com/ */}

          <motion.h1
            className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl"
            variants={stagger.item}
          >
            Dezitech is your solutions provider in engineering design, products and supply chain.
          </motion.h1>
          {/* Source: https://www.dezitechengineering.com/about.html */}

          <motion.p className="text-base text-slate-600 dark:text-slate-200" variants={stagger.item}>
            Established in 2014 by Highly qualified and experienced Engineering professionals with diversified and global
            engineering experience.
          </motion.p>
          {/* Source: https://www.dezitechengineering.com/ */}

          <motion.ul className="space-y-2" variants={stagger.container}>
            <motion.li className="flex items-start gap-3 text-sm" variants={stagger.item}>
              <span className="mt-1 h-2 w-2 rounded-full bg-dezitech-red" aria-hidden />
              <span>
                We have expertise in industries : Automotive, Industrial, HVAC, Oil and gas and have provided engineering /
                supply chain support to customers in the UK, USA, India and Australia.
              </span>
            </motion.li>
            {/* Source: https://www.dezitechengineering.com/about.html */}

            <motion.li className="flex items-start gap-3 text-sm" variants={stagger.item}>
              <span className="mt-1 h-2 w-2 rounded-full bg-dezitech-red" aria-hidden />
              <span>We work as an extension of customers engineering team.</span>
            </motion.li>
            {/* Source: https://www.dezitechengineering.com/about.html */}

            <motion.li className="flex items-start gap-3 text-sm" variants={stagger.item}>
              <span className="mt-1 h-2 w-2 rounded-full bg-dezitech-red" aria-hidden />
              <span>We provide engineering expertise and resources to overcome these challenges to get new products faster to the marketplace.</span>
            </motion.li>
            {/* Source: https://www.dezitechengineering.com/engineeringdesign.html */}
          </motion.ul>

          <motion.div className="flex flex-wrap gap-4 pt-4" variants={ctaVariants}>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-dezitech-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-dezitech-red/40 transition hover:drop-shadow-glow"
              variants={ctaVariants}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
              whileFocus={prefersReducedMotion ? undefined : { scale: 1.01 }}
            >
              Explore Products
            </motion.a>
            {/* MISSING_ON_SITE: Explore Products CTA label required by project brief */}

            <motion.a
              href="mailto:info@dezitechengineering.com"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:text-dezitech-red dark:border-slate-600 dark:text-white"
              variants={ctaVariants}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              whileFocus={prefersReducedMotion ? undefined : { scale: 1.01 }}
            >
              Contact Sales
            </motion.a>
            {/* MISSING_ON_SITE: Contact Sales CTA label required by project brief */}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex-1"
          role="img"
          aria-label="We provide engineering expertise and resources to overcome these challenges to get new products faster to the marketplace."
          variants={illustrationVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="relative rounded-3xl border border-white/20 bg-white/70 p-6 backdrop-blur dark:bg-dezitech-night/80">
            {/* LOTTIE_PLACEHOLDER: Replace the SVG below with a Lottie animation, e.g.
              import DezitechHeroLottie from '../assets/hero.json';
              <Lottie animationData={DezitechHeroLottie} loop autoplay />
            */}
            <svg
              className="mx-auto h-48 w-full max-w-sm text-dezitech-red"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              />
              <motion.path
                d="M40 120 C60 60, 140 60, 160 120"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                variants={ctaVariants}
              />
              <motion.circle cx="70" cy="90" r="12" fill="currentColor" variants={ctaVariants} />
              <motion.circle cx="130" cy="90" r="12" fill="currentColor" variants={ctaVariants} />
            </svg>
            <img
              src="/assets/uploaded_screenshot.png"
              alt="Dezitech engineering operations and partnership overview"
              className="mt-4 w-full rounded-2xl border border-slate-200 object-cover shadow-xl"
            />
            {/* Local screenshot placeholder: map /mnt/data/673882fb-e478-403d-b063-c6ef7d3d5bdd.png to /public/assets/uploaded_screenshot.png */}
          </div>
        </motion.div>
        {/* Source: https://www.dezitechengineering.com/engineeringdesign.html */}
      </motion.div>
    </section>
  );
}

export default DezitechHero;
