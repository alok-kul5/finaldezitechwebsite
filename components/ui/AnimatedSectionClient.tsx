'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedSectionClientProps {
  children: ReactNode;
  className?: string;
  id?: string;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
  rootMargin?: string;
  variants?: Variants;
}

/**
 * Client component for AnimatedSection with useInView + stagger config
 * Respects prefers-reduced-motion
 */
export default function AnimatedSectionClient({
  children,
  className = '',
  id,
  staggerDelay = 0.08,
  delayChildren = 0.06,
  threshold = 0.2,
  rootMargin = '-10% 0px',
  variants,
}: AnimatedSectionClientProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: threshold, margin: rootMargin as any, once: true });
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
        delayChildren: prefersReducedMotion ? 0 : delayChildren,
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

