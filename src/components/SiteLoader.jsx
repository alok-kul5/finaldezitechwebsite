import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { loaderMotion } from '../lib/framerVariants';

const DEFAULT_LOADER_DURATION = 2200;

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
          variants={loaderMotion.backdrop}
        >
          <div className="cinematic-loader__noise" aria-hidden="true" />
          <motion.div className="cinematic-loader__motif" variants={loaderMotion.planes}>
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
                variants={loaderMotion.stroke}
              />
            </motion.svg>
            <div className="cinematic-loader__planes">
              {planes.map((plane) => (
                <motion.span
                  key={plane.id}
                  className="cinematic-loader__plane"
                  style={{ width: plane.width }}
                  variants={loaderMotion.plane}
                  transition={{ delay: plane.delay }}
                />
              ))}
            </div>
            <motion.p className="cinematic-loader__label" variants={loaderMotion.wordmark}>
              Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
            </motion.p>
            <motion.p className="cinematic-loader__tagline" variants={loaderMotion.wordmark}>
              Longer reveal to set the premium tone {/* UX POLISH: generated */}
            </motion.p>
            <motion.div
              className="cinematic-loader__reveal-mask"
              variants={loaderMotion.revealMask}
              aria-hidden="true"
            />
          </motion.div>
          {/* To swap timing or motif: adjust DEFAULT_LOADER_DURATION above, update planes[], or replace <motion.path>. */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SiteLoader;
