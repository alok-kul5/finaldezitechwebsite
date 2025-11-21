// src/components/ServiceCard.jsx
import { motion } from 'framer-motion';
import { cardVariants } from '../lib/framerVariants';
import useTypewriter from '../animations/typewriter';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const ServiceCard = ({ title, description, sourceUrl, index = 0, cardId }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const displayTitle = useTypewriter(title, { speed: 40, enabled: !prefersReducedMotion });
  const descriptionId = `${cardId || 'service-card'}-description`;

  return (
    <motion.article
      role="listitem"
      aria-describedby={descriptionId}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="dez-service-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="dez-service-card__icon" aria-hidden="true">
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
      <div className="dez-service-card__content">
        <h3 className="dez-service-card__title">{displayTitle}</h3>
        <p id={descriptionId} className="dez-service-card__description">
          {description}
        </p>
        {sourceUrl && (
          <span className="dez-service-card__source" aria-label="Content source">
            {/* Source: {sourceUrl} */}
          </span>
        )}
      </div>
    </motion.article>
  );
};

export default ServiceCard;
