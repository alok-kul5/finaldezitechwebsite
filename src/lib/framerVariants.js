const slowEase = [0.33, 1, 0.68, 1];
const hoverEase = [0.215, 0.61, 0.355, 1];

export const navVariants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: slowEase }
  }
};

export const navDrawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150, damping: 22 }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.35, ease: hoverEase }
  }
};

export const linkHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.01,
    transition: { duration: 0.22, ease: hoverEase }
  },
  tap: {
    y: -1,
    scale: 0.995,
    transition: { duration: 0.18, ease: hoverEase }
  }
};

export const heroVariants = {
  section: {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: slowEase,
        when: 'beforeChildren',
        staggerChildren: 0.18
      }
    }
  },
  text: {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: slowEase }
    }
  },
  paragraph: {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: slowEase, delay: 0.08 }
    }
  },
  cta: {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: slowEase }
    }
  },
  visual: {
    hidden: { opacity: 0, scale: 0.94, y: 32 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: slowEase }
    }
  },
  accent: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] }
    }
  }
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: slowEase }
  }
};

export const loaderVariants = {
  backdrop: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: slowEase } }
  },
  motif: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: slowEase }
    },
    exit: { opacity: 0, scale: 1.08, transition: { duration: 0.4, ease: slowEase } }
  },
  wordmark: {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: slowEase, delay: 0.3 }
    }
  }
};

export const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: slowEase }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: slowEase } }
};
