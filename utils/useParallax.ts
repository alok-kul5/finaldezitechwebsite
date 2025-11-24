'use client';

import { useEffect, useRef, useState } from 'react';
import { useSpring, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { lerp } from './lerp';

interface UseParallaxConfig {
  multipliers?: number[];
  lerpFactor?: number;
  springConfig?: {
    stiffness: number;
    damping: number;
  };
  prefersReducedMotion?: boolean;
}

/**
 * Parallax hook with exact multipliers [0.01, 0.03, 0.07], lerp=0.12, and spring fallback
 * Returns refs and transform values for multiple parallax layers
 */
export function useParallax(config: UseParallaxConfig = {}) {
  const {
    multipliers = [0.01, 0.03, 0.07],
    lerpFactor = 0.12,
    springConfig = { stiffness: 80, damping: 18 },
    prefersReducedMotion: prefersReducedMotionProp = false,
  } = config;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(prefersReducedMotionProp);
  const refs = multipliers.map(() => useRef<HTMLDivElement>(null));
  const scrollY = useMotionValue(0);
  const targetScrollY = useRef(0);
  const currentScrollY = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches || prefersReducedMotionProp);
      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [prefersReducedMotionProp]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const updateScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    const animate = () => {
      currentScrollY.current = lerp(
        currentScrollY.current,
        targetScrollY.current,
        lerpFactor
      );
      scrollY.set(currentScrollY.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    animate();

    return () => {
      window.removeEventListener('scroll', updateScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [lerpFactor, prefersReducedMotion, scrollY]);

  // Create spring animations for each layer
  const springValues = multipliers.map((multiplier) => {
    const spring = useSpring(scrollY, springConfig);
    return useTransform(spring, (value) => value * multiplier);
  });

  return {
    refs,
    scrollY,
    transforms: springValues,
  };
}

/**
 * Single layer parallax hook (simpler API)
 */
export function useParallaxLayer(
  multiplier: number = 0.03,
  config: Omit<UseParallaxConfig, 'multipliers'> = {}
) {
  const { lerpFactor = 0.12, springConfig = { stiffness: 80, damping: 18 }, prefersReducedMotion = false } = config;
  const ref = useRef<HTMLElement>(null);
  const scrollY = useMotionValue(0);
  const targetScrollY = useRef(0);
  const currentScrollY = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const updateScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    const animate = () => {
      currentScrollY.current = lerp(
        currentScrollY.current,
        targetScrollY.current,
        lerpFactor
      );
      scrollY.set(currentScrollY.current);
      requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    animate();

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [lerpFactor, prefersReducedMotion, scrollY]);

  const spring = useSpring(scrollY, springConfig);
  const y = useTransform(spring, (value) => value * multiplier);

  return { ref, y };
}

