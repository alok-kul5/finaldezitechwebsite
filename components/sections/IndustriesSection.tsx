'use client';

import { motion } from 'framer-motion';
import { sectionStagger, borderStrokeVariants } from '@/lib/framerVariants';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
// Note: Using img tag instead of Next Image for placeholder images
// Replace with Next Image when production images are available

const industries = [
  {
    name: 'Automotive',
    image: '/assets/industry-automotive.jpg',
    credit: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
  },
  {
    name: 'Industrial Equipment',
    image: '/assets/industry-industrial.jpg',
    credit: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  },
  {
    name: 'HVAC & Refrigeration',
    image: '/assets/industry-hvac.jpg',
    credit: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
  },
  {
    name: 'Oil & Gas',
    image: '/assets/industry-oilgas.jpg',
    credit: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  },
  {
    name: 'Aviation',
    image: '/assets/industry-aviation.jpg',
    credit: 'https://images.unsplash.com/photo-1502877338535-766e1452684a',
  },
];

/**
 * Scroll-driven SVG border stroke animation component
 */
const ScrollBorder = ({ id }: { id: string }) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateProgress = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const viewProgress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      setProgress(viewProgress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const pathLength = 1000;
  const strokeDashoffset = pathLength * (1 - progress);

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <motion.rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray={pathLength}
        strokeDashoffset={isInView ? strokeDashoffset : pathLength}
        initial="hidden"
        animate={isInView ? 'visible' : 'exit'}
        variants={borderStrokeVariants}
        style={{
          color: 'rgba(225, 6, 0, 0.15)',
        }}
      />
    </svg>
  );
};

/**
 * Scroll indicator dot
 */
const ScrollIndicator = ({ progress }: { progress: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-dezired rounded-full"
      style={{
        left: `${progress * 100}%`,
        top: 0,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

interface IndustryItemProps {
  industry: typeof industries[0];
  index: number;
}

const IndustryItem = ({ industry, index }: IndustryItemProps) => (
  <motion.div
    className="dez-industry-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
  >
    <div className="dez-industry-item__image-wrapper">
      <img
        src={industry.image}
        alt={`${industry.name} programs`}
        className="dez-industry-item__image"
        loading="lazy"
      />
    </div>
    <div className="dez-industry-item__tag">
      {industry.name}
      <span className="sr-only">Image credit {industry.credit}</span>
    </div>
  </motion.div>
);

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const updateProgress = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <AnimatedSection
      id="industries"
      className="dez-section dez-section--industries dez-section--padded relative"
      staggerDelay={0.08}
    >
      <div ref={sectionRef} className="relative">
        <ScrollBorder id="industries-border" />
        {scrollProgress > 0 && scrollProgress < 1 && (
          <ScrollIndicator progress={scrollProgress} />
        )}
      </div>

      <motion.div
        variants={sectionStagger}
        initial="hidden"
        animate="visible"
        className="dez-section__container"
      >
        <div className="dez-section__header">
          <motion.p className="dez-section__eyebrow" variants={sectionStagger}>
            Industries served
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            We provide end to end service or tailored individual needs worldwide to diverse and
            multidisciplinary industries.
          </motion.h2>
        </div>
        <div className="dez-industries__marquee-wrapper">
          <div className="dez-industries__marquee" aria-label="Industries marquee">
            {industries.map((industry, index) => (
              <IndustryItem key={`${industry.name}-${index}`} industry={industry} index={index} />
            ))}
          </div>
          <div className="dez-industries__fade-left" aria-hidden="true" />
          <div className="dez-industries__fade-right" aria-hidden="true" />
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

