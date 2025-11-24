'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
  variants?: Variants;
}

/**
 * AnimatedSection with useInView + stagger config
 * Respects prefers-reduced-motion
 */
export default function AnimatedSection({
  children,
  className = '',
  id,
  staggerDelay = 0.08,
  threshold = 0.2,
  rootMargin = '-10% 0px',
  variants,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold, rootMargin, once: true });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.95,
        ease: [0.2, 0.9, 0.2, 1],
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const finalVariants = variants || defaultVariants;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={finalVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.section>
  );
}

