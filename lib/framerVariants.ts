import { Variants } from 'framer-motion';

/* Exact easing curves from specs */
const easeMain = [0.2, 0.9, 0.2, 1] as const; // cubic-bezier(.2,.9,.2,1)
const easeMicro = [0.22, 0.8, 0.3, 1] as const; // cubic-bezier(.22,.8,.3,1)
const cinematicEase = [0.22, 1, 0.36, 1] as const;

/* Text reveal variants */
export const textRevealVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  },
  word: {
    hidden: {
      opacity: 0,
      y: 24,
      clipPath: 'inset(0 0 100% 0)',
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.55,
        ease: cinematicEase,
      },
    },
  },
  line: {
    hidden: {
      opacity: 0,
      y: 28,
      clipPath: 'inset(0 0 100% 0)',
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.55,
        ease: cinematicEase,
      },
    },
  },
};

/* Hero headline animation - exact specs */
export const heroHeadlineVariants = {
  hidden: {
    y: 24,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.95,
      delay: 0.12,
      ease: easeMain,
    },
  },
};

/* Nav variants */
export const navShellVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cinematicEase },
  },
};

export const navLinkVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -2,
    scale: 1.01,
    transition: { duration: 0.26, ease: easeMicro },
  },
  tap: {
    y: -1,
    scale: 0.99,
    transition: { duration: 0.18, ease: easeMicro },
  },
};

/* Hero variants */
export const heroVariants = {
  container: {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: cinematicEase, when: 'beforeChildren', staggerChildren: 0.16 },
    },
  },
  eyebrow: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cinematicEase } },
  },
  subhead: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: cinematicEase, delay: 0.22 } },
  },
  cta: {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: cinematicEase, delay: 0.3 } },
  },
  visual: {
    hidden: { opacity: 0, y: 32, scale: 1.04 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.6, ease: cinematicEase, delay: 0.25 },
    },
  },
};

/* Section stagger */
export const sectionStagger = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: cinematicEase, staggerChildren: 0.08 },
  },
};

/* Card variants - exact hover specs */
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: cinematicEase,
    },
  },
  hover: {
    scale: 1.035,
    y: -6,
    transition: {
      duration: 0.28,
      ease: easeMicro,
    },
  },
};

/* Border stroke animation variants */
export const borderStrokeVariants = {
  hidden: {
    strokeDashoffset: 1000,
    opacity: 0,
  },
  visible: {
    strokeDashoffset: 0,
    opacity: 1,
    transition: {
      duration: 0.78,
      delay: 0.06,
      ease: easeMicro,
    },
  },
  exit: {
    strokeDashoffset: 1000,
    opacity: 0,
    transition: {
      duration: 0.36,
      ease: easeMicro,
    },
  },
};

/* Fade in up */
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: cinematicEase } },
};

/* Image reveal */
export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.035,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.95, ease: cinematicEase },
  },
};

