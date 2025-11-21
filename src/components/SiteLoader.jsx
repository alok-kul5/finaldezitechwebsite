// src/components/SiteLoader.jsx
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { loaderVariants } from '../lib/framerVariants';

/* Default loader duration: 6 seconds (6000ms)
 * Override via REACT_APP_LOADER_MS environment variable
 * Example: REACT_APP_LOADER_MS=5000 npm start
 */
const DEFAULT_LOADER_DURATION = parseInt(process.env.REACT_APP_LOADER_MS || '6000', 10);

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
          aria-label="Loading Dezitech Engineering"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={loaderVariants.backdrop}
        >
          <div className="cinematic-loader__overlay" aria-hidden="true" />
          <motion.div className="cinematic-loader__sweep cinematic-loader__sweep--one" variants={loaderVariants.sweep} />
          <motion.div className="cinematic-loader__sweep cinematic-loader__sweep--two" variants={loaderVariants.sweepDelayed} />
          <motion.div className="cinematic-loader__motif" variants={loaderVariants.planes}>
            <motion.svg
              className="cinematic-loader__mark"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="var(--clr-mist)"
                strokeWidth="2"
                variants={loaderVariants.stroke}
              />
              <motion.path
                d="M100 20 L100 100 L180 100"
                fill="none"
                stroke="var(--clr-dezired)"
                strokeWidth="2"
                strokeLinecap="round"
                variants={loaderVariants.stroke}
              />
            </motion.svg>
            <motion.p className="cinematic-loader__label" variants={loaderVariants.wordmark}>
              Dezitech Engineering {/* Source: https://dezitechengineering.com/ */}
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
