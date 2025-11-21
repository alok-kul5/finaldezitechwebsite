import { useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const useStaggered = ({ threshold = 0.35, once = true, rootMargin = '0px' } = {}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.start('visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
            if (once && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls, threshold, rootMargin, once, prefersReducedMotion]);

  return { ref, controls };
};

export default useStaggered;
