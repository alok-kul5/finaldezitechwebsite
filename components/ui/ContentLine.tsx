'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ContentLineProps {
  className?: string;
  delay?: number;
}

/**
 * Content-line rule (horizontal) that animates scaleX 0->1 origin-left
 * Duration: 0.42s, stagger: 0.06s
 */
export default function ContentLine({ className = '', delay = 0 }: ContentLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className={`content-line ${className}`}>
      <motion.div
        className="content-line__rule"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.42,
          delay,
          ease: [0.22, 0.8, 0.3, 1],
          originX: 0,
        }}
      />
    </div>
  );
}

