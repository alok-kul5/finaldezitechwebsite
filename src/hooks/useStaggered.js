import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const getMediaPreference = () => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getMediaPreference);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReducedMotion;
};

const useStaggered = ({
  threshold = 0.25,
  once = true,
  delay = 0.08,
  disabled = false,
} = {}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const target = ref.current;
    if (!target) return undefined;

    if (prefersReducedMotion || disabled) {
      controls.set({ opacity: 1, y: 0 });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start((index = 0) => ({
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                ease: [0.6, 0.01, -0.05, 0.95],
                delay: index * delay,
              },
            }));
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            controls.start({ opacity: 0, y: 30 });
          }
        });
      },
      { threshold },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [controls, delay, once, prefersReducedMotion, threshold, disabled]);

  return { ref, controls, prefersReducedMotion };
};

export default useStaggered;
