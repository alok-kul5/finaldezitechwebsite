import { ReactNode } from 'react';
import AnimatedSectionClient from './AnimatedSectionClient';
import { Variants } from 'framer-motion';

interface AnimatedSectionProps {
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
 * Server component wrapper for AnimatedSection
 * Uses client component for useInView + stagger config
 */
export default function AnimatedSection(props: AnimatedSectionProps) {
  return <AnimatedSectionClient {...props} />;
}
