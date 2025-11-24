'use client';

import { motion } from 'framer-motion';
import { sectionStagger, borderStrokeVariants } from '@/lib/framerVariants';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProductCard from '@/components/ui/ProductCard';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const capabilities = [
  {
    key: 'design-expertise',
    title: 'Design Engineering expertise & resources',
    description:
      'We provide engineering expertise and resources to overcome these challenges to get new products faster to the marketplace.',
  },
  {
    key: 'diverse-engineering',
    title: 'Availability of Diverse engineering expertise: Mechanical, electrical/Control engineering, software',
    description: 'We work as an extension of customers engineering team.',
  },
  {
    key: 'cae-fea',
    title: 'CAE- FEA and CFD expert services',
    description: 'QFD, DFMEA, DoE, design for manufacturing / assembly and service.',
  },
  {
    key: 'refrigeration-systems',
    title: 'Refrigeration systems',
    description:
      'We have many years of experience in design of refrigeration systems and support customised design requirements.',
  },
  {
    key: 'natural-refrigerants',
    title: 'Variety of refrigerants – conventional HCFCs to natural refrigerants (CO2, Propane, Ammonia)',
    description: 'Range of applications – from process cooling to complex refrigeration processes.',
  },
  {
    key: 'electrical-control',
    title: 'Electrical / control design engineering expertise',
    description:
      'Detailed control and power design / drawings plus IoT / Remote controller with two way communication.',
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

      // Calculate progress based on viewport intersection
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

  const pathLength = 1000; // Approximate path length
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
 * Scroll indicator dot that moves along the border
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

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      id="capabilities"
      className="dez-section dez-section--capabilities dez-section--padded relative"
      staggerDelay={0.08}
    >
      <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="relative">
        <ScrollBorder id="capabilities-border" />
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
            Engineering / Design Services
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            We solve technical challenges and provide resources to get new products faster to the market.
          </motion.h2>
          <motion.p className="dez-section__description" variants={sectionStagger}>
            New products need to be introduced ahead of the competition. Any delay means losing business and money.
          </motion.p>
        </div>
        <div role="list" className="dez-capabilities__grid">
          {capabilities.map((capability, index) => (
            <ProductCard
              key={capability.key}
              title={capability.title}
              description={capability.description}
              layoutId={`capability-${capability.key}`}
              index={index}
              cardId={capability.key}
            />
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

