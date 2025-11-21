// Premium easing curves
const cinematicEase = [0.22, 1, 0.36, 1];
const floatEase = [0.16, 1, 0.3, 1];
const microEase = [0.4, 0, 0.2, 1];

// Text reveal variants for chunked word animations
export const textRevealVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.8,
        ease: cinematicEase
      }
    }
  },
  char: {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cinematicEase
      }
    }
  }
};

// Nav variants
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
    y: -3,
    scale: 1.015,
    transition: { duration: 0.26, ease: microEase }
  },
  tap: {
    y: -1,
    scale: 0.992,
    transition: { duration: 0.18, ease: microEase }
  }
};

// Hero variants with text reveal support
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
  headline: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  },
  headlineContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  },
  headlineLine: {
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
        duration: 0.8,
        ease: cinematicEase
      }
    }
  },
  headlineWord: {
    hidden: {
      opacity: 0,
      y: 32,
      clipPath: 'inset(0 0 100% 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.9,
        ease: cinematicEase
      }
    }
  },
  subhead: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: cinematicEase, delay: 0.2 } }
  },
  paragraph: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: cinematicEase, delay: 0.2 } }
  },
  meta: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: cinematicEase, delay: 0.32 } }
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
  },
  accent: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.6, ease: floatEase } }
  }
};

// Legacy heroMotion for backward compatibility
export const heroMotion = heroVariants;

// Section stagger
export const sectionStagger = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: cinematicEase, staggerChildren: 0.1 }
  }
};

// Card variants with entry animation
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: cinematicEase
    }
  },
  hover: {
    y: -6,
    scale: 1.015,
    transition: {
      duration: 0.5,
      ease: cinematicEase
    }
  }
};

// Fade in up
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: cinematicEase } }
};

// Image reveal (transform + opacity only for GPU acceleration)
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

// Loader variants
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
    hidden: { x: '-100%', opacity: 0.4 },
    visible: {
      x: '120%',
      opacity: 0,
      transition: { duration: 2.6, ease: cinematicEase, repeat: Infinity, repeatDelay: 0.5 }
    }
  },
  sweepDelayed: {
    hidden: { x: '-120%', opacity: 0.2 },
    visible: {
      x: '110%',
      opacity: 0,
      transition: { duration: 3.2, ease: cinematicEase, repeat: Infinity, repeatDelay: 0.8, delay: 0.6 }
    }
  },
  stroke: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.0, ease: cinematicEase }
    }
  },
  planes: {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: cinematicEase, delay: 0.3, staggerChildren: 0.06 }
    }
  },
  plane: {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: cinematicEase }
    }
  },
  wordmark: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cinematicEase, delay: 0.7 }
    }
  },
  revealMask: {
    hidden: { scaleY: 1 },
    visible: {
      scaleY: 0,
      transition: { duration: 0.5, ease: cinematicEase, delay: 1.2 }
    }
  }
};

// Legacy loaderMotion for backward compatibility
export const loaderMotion = loaderVariants;
