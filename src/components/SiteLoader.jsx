import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { loaderVariants } from '../lib/framerVariants';

const DEFAULT_LOADER_DURATION = 2000;

const planes = [
  { id: 'alpha', width: '42%', delay: 0 },
  { id: 'beta', width: '26%', delay: 0.08 },
  { id: 'gamma', width: '58%', delay: 0.16 }
];

const SiteLoader = ({
  active,
  onComplete,
  prefersReducedMotion,
  duration = DEFAULT_LOADER_DURATION,
  skipAnimation = false
}) => {
  const shouldSkip = prefersReducedMotion || skipAnimation;

  useEffect(() => {
    if (!active) return undefined;
    if (shouldSkip) {
      onComplete?.();
      return undefined;
    }

    const timeout = window.setTimeout(() => onComplete?.(), duration);
    return () => window.clearTimeout(timeout);
  }, [active, duration, onComplete, shouldSkip]);

  if (!active || shouldSkip) {
    return null;
  }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="cinematic-loader"
          role="status"
          aria-live="polite"
          aria-label="Preparing Dezitech experience"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={loaderVariants.backdrop}
        >
          <div className="cinematic-loader__overlay" aria-hidden="true" />
          <div className="cinematic-loader__noise" aria-hidden="true" />
          <motion.div className="cinematic-loader__motif" variants={loaderVariants.planes}>
            <motion.svg
              className="cinematic-loader__mark"
              viewBox="0 0 320 140"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.path
                d="M30 100V40H140C210 40 275 70 275 100C275 120 230 100 175 100H30Z"
                stroke="var(--color-loader-stroke)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                variants={loaderVariants.stroke}
              />
            </motion.svg>
            <div className="cinematic-loader__planes">
              {planes.map((plane) => (
                <motion.span
                  key={plane.id}
                  className="cinematic-loader__plane"
                  style={{ width: plane.width }}
                  variants={loaderVariants.plane}
                  transition={{ delay: plane.delay }}
                />
              ))}
            </div>
            <motion.p className="cinematic-loader__label" variants={loaderVariants.wordmark}>
              Dezitech Engineering {/* Source: https://dezitechengineering.com/ */}
            </motion.p>
            <motion.p className="cinematic-loader__tagline" variants={loaderVariants.wordmark}>
              Engineering Excellence {/* Source: https://dezitechengineering.com/ */}
            </motion.p>
            <motion.div
              className="cinematic-loader__reveal-mask"
              variants={loaderVariants.revealMask}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SiteLoader;
