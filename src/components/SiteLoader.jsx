import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { loaderVariants } from '../lib/framerVariants';

const DEFAULT_LOADER_DURATION = 1900; // Adjust this to lengthen/shorten the entry sequence.

const SiteLoader = ({ active, onComplete, prefersReducedMotion, duration = DEFAULT_LOADER_DURATION }) => {
  useEffect(() => {
    if (!active) return undefined;

    if (prefersReducedMotion) {
      onComplete?.();
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [active, duration, prefersReducedMotion, onComplete]);

  if (!active || prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="site-loader"
          role="status"
          aria-label="Calibrating Dezitech experience"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={loaderVariants.backdrop}
        >
          <motion.div className="site-loader__motif" variants={loaderVariants.motif}>
            <motion.svg
              width="260"
              height="120"
              viewBox="0 0 260 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Swap the motif by replacing this stroke or swap the SVG entirely for a Lottie clip. */}
              <motion.path
                d="M20 90V30H90C140 30 190 60 190 90C190 115 150 90 110 90H20Z"
                stroke="var(--accent-active, #E10600)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, scaleX: 0.6 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 1.08 }}
                style={{ transformOrigin: 'left center' }}
                transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              />
            </motion.svg>
            <motion.span className="site-loader__wordmark" variants={loaderVariants.wordmark}>
              Dezitech Engineering {/* Taken from https://dezitechengineering.com/ */}
            </motion.span>
            <p className="site-loader__hint">
              Precision systems // human collaboration {/* UX POLISH: generated — short */}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SiteLoader;
