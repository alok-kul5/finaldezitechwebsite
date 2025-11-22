// src/lib/framerVariants.js
/* Premium easing curves - inspired by Meridian (trymeridian.com) and Vista Energy (vistaenergy.com) */
const cinematicEase = [0.22, 1, 0.36, 1];
const microEase = [0.4, 0, 0.2, 1];

/* Text reveal variants for chunked word-by-word animations
 * Stagger: 40-80ms per word (configurable per use case)
 * Use opacity + translateY only (GPU-accelerated)
 */
export const textRevealVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, /* 60ms stagger per word - adjust between 0.04-0.08 for 40-80ms range */
        delayChildren: 0.1
      }
    }
  },
  word: {
    hidden: {
      opacity: 0,
      y: 24,
      clipPath: 'inset(0 0 100% 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.55,
        ease: cinematicEase
      }
    }
  },
  line: {
    hidden: {
      opacity: 0,
      y: 28,
      clipPath: 'inset(0 0 100% 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.55,
        ease: cinematicEase
      }
    }
  }
};

/* Nav variants - inspired by Meridian centered nav (trymeridian.com) */
export const navShellVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cinematicEase }
  }
};

export const navLinkVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.01,
    transition: { duration: 0.26, ease: microEase }
  },
  tap: {
    y: -1,
    scale: 0.99,
    transition: { duration: 0.18, ease: microEase }
  }
};

/* Hero variants with text reveal support - spacing inspired by Vista Energy (vistaenergy.com) */
export const heroVariants = {
  container: {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: cinematicEase, when: 'beforeChildren', staggerChildren: 0.16 }
    }
  },
  eyebrow: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cinematicEase } }
  },
  subhead: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: cinematicEase, delay: 0.2 } }
  },
  cta: {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: cinematicEase, delay: 0.3 } }
  },
  visual: {
    hidden: { opacity: 0, y: 32, scale: 1.04 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.6, ease: cinematicEase, delay: 0.25 }
    }
  }
};

/* Section stagger - use IntersectionObserver with useStaggered hook
 * Stagger children by 0.08s
 */
export const sectionStagger = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: cinematicEase, staggerChildren: 0.08 }
  }
};

/* Card variants - static premium cards (NO TILT)
 * Soft hover: translateY(-4px) + scale(1.02) + box-shadow
 * Only if prefers-reduced-motion: no transform
 */
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: cinematicEase
    }
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.28,
      ease: cinematicEase
    }
  }
};

/* Fade in up */
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: cinematicEase } }
};

/* Image reveal - transform + opacity only */
export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.035
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.95, ease: cinematicEase }
  }
};

/* Loader variants - cinematic 3.2s loader
 * Layered shapes + wordmark reveal + slow curtain clip-path
 * Timing inspired by Monads (monads.ch) and Styleframe (styleframe.de)
 */
export const loaderVariants = {
  backdrop: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: cinematicEase }
    }
  },
  sweep: {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '120%',
      opacity: [0, 0.4, 0.4, 0],
      transition: { duration: 1.5, ease: cinematicEase, repeat: Infinity, repeatDelay: 0.8 }
    }
  },
  sweepDelayed: {
    hidden: { x: '-120%', opacity: 0 },
    visible: {
      x: '110%',
      opacity: [0, 0.2, 0.2, 0],
      transition: { duration: 2, ease: cinematicEase, repeat: Infinity, repeatDelay: 1, delay: 0.5 }
    }
  },
  stroke: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: cinematicEase, delay: 0.3 }
    }
  },
  planes: {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: cinematicEase, delay: 0.4, staggerChildren: 0.06 }
    }
  },
  wordmark: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cinematicEase, delay: 1.0 }
    }
  },
  revealMask: {
    hidden: { scaleY: 1 },
    visible: {
      scaleY: 0,
      transition: { duration: 0.6, ease: cinematicEase, delay: 2.2 }
    }
  }
};
