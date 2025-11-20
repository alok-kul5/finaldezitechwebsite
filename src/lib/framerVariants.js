const cinematicEase = [0.22, 1, 0.36, 1];
const floatEase = [0.16, 1, 0.3, 1];
const microEase = [0.4, 0, 0.2, 1];

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

export const navMenuVariants = {
  hidden: { opacity: 0, y: -8, pointerEvents: 'none' },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: 'auto',
    transition: { duration: 0.45, ease: cinematicEase, staggerChildren: 0.06 }
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: cinematicEase } }
};

export const navMenuItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: cinematicEase } }
};

export const heroMotion = {
  container: {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: cinematicEase, when: 'beforeChildren', staggerChildren: 0.14 }
    }
  },
  eyebrow: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cinematicEase } }
  },
  headline: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cinematicEase } }
  },
  subhead: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: cinematicEase, delay: 0.1 } }
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
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.1, ease: cinematicEase, delay: 0.22 } }
  },
  visual: {
    hidden: { opacity: 0, y: 32, scale: 1.04 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.3, ease: cinematicEase, delay: 0.18 }
    }
  },
  accent: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.6, ease: floatEase } }
  }
};

export const sectionStagger = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: cinematicEase, staggerChildren: 0.1 }
  }
};

export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: cinematicEase } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: cinematicEase } }
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.035, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.95, ease: cinematicEase }
  }
};

export const loaderMotion = {
  backdrop: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.6, ease: cinematicEase } }
  },
  stroke: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: cinematicEase }
    }
  },
  planes: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: cinematicEase, delay: 0.4, staggerChildren: 0.08 }
    }
  },
  plane: {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: cinematicEase } }
  },
  wordmark: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cinematicEase, delay: 0.9 } }
  },
  revealMask: {
    hidden: { scaleY: 1 },
    visible: {
      scaleY: 0,
      transition: { duration: 0.6, ease: cinematicEase, delay: 1.4 }
    }
  }
};
