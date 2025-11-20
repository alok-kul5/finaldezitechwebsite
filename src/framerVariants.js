const baseEase = [0.6, 0.01, -0.05, 0.95];

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: baseEase,
      delay: i * 0.08,
    },
  }),
};

export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const navReveal = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: baseEase },
  },
};

export const heroVisualLayer = (offset = 30, delay = 0) => ({
  initial: {
    opacity: 0,
    y: offset,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: baseEase,
      delay,
    },
  },
  hover: {
    y: offset * -0.15,
    transition: { duration: 0.6, ease: baseEase },
  },
});

export const floatingPulse = {
  animate: {
    y: [0, -8, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: baseEase },
  },
  hover: {
    y: -8,
    rotateX: 2,
    rotateY: -1,
    transition: { duration: 0.4, ease: baseEase },
  },
};

export const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 28,
      ease: "linear",
    },
  },
};

export const glowTrace = {
  animate: {
    opacity: [0.2, 0.6, 0.2],
    scale: [0.95, 1.05, 0.95],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
    },
  },
};
