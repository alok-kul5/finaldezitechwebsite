// src/components/ServiceCard.jsx
import { motion } from 'framer-motion';
import { cardVariants } from '../lib/framerVariants';
import useTypewriter from '../animations/typewriter';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const ServiceCard = ({ title, description, sourceUrl, index = 0 }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const displayTitle = useTypewriter(title, { speed: 35, enabled: !prefersReducedMotion });

  return (
    <motion.article
      role="listitem"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      whileHover="hover"
      className="dez-service-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="dez-service-card__content">
        <h3 className="dez-service-card__title">{displayTitle}</h3>
        <p className="dez-service-card__description">{description}</p>
        {sourceUrl && (
          <span className="dez-service-card__source" aria-label="Content source">
            {/* Source: {sourceUrl} */}
          </span>
        )}
      </div>
      <div className="dez-service-card__hover-border" aria-hidden="true" />
    </motion.article>
  );
};

export default ServiceCard;
