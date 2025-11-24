export const heroHeadline = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.95, delay: 0.12, ease: [0.2,0.9,0.2,1] } }
};

export const heroSub = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.95, delay: 0.22, ease: [0.2,0.9,0.2,1] } }
};

export const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i=0) => ({ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.06 * i, ease: [0.22,0.8,0.3,1] } })
};
