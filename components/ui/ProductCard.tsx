'use client';

import { motion } from 'framer-motion';
import { cardVariants } from '@/lib/framerVariants';
import { useState, useEffect } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  layoutId?: string;
  index?: number;
  cardId?: string;
  onCardClick?: () => void;
}

/**
 * ProductCard with layoutId for morph animation
 * Exact hover specs: scale(1.035), translateY(-6), shadow 0 20px 40px rgba(11,61,145,0.08)
 */
export default function ProductCard({
  title,
  description,
  image,
  layoutId,
  index = 0,
  cardId,
  onCardClick,
}: ProductCardProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const descriptionId = `${cardId || 'product-card'}-description`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <motion.article
      role="listitem"
      aria-describedby={descriptionId}
      layoutId={layoutId}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      onClick={onCardClick}
      className="dez-product-card"
      style={{
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {image && (
        <div className="dez-product-card__image-wrapper">
          <motion.img
            src={image}
            alt={title}
            className="dez-product-card__image"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 0.8, 0.3, 1] }}
          />
        </div>
      )}
      <div className="dez-product-card__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false">
          <path
            d="M4 20 L12 12 L18 18 L28 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="28" cy="8" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="dez-product-card__content">
        <h3 className="dez-product-card__title">{title}</h3>
        <p id={descriptionId} className="dez-product-card__description">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

