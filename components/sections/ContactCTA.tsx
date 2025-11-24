'use client';

import { motion } from 'framer-motion';
import { sectionStagger } from '@/lib/framerVariants';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContentLine from '@/components/ui/ContentLine';

export default function ContactCTA() {
  return (
    <AnimatedSection
      id="contact"
      className="dez-section dez-section--contact relative"
      staggerDelay={0.08}
      delayChildren={0.06}
    >
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        animate="visible"
        className="dez-section__container"
      >
        <div className="dez-section__header">
          <motion.p className="dez-section__eyebrow" variants={sectionStagger}>
            Get in Touch
          </motion.p>
          <motion.h2 className="dez-section__title" variants={sectionStagger}>
            Ready to transform your engineering projects?
          </motion.h2>
          <motion.p className="dez-section__description" variants={sectionStagger}>
            Partner with Dezitech Engineering for world-class MEI contracting, industrial maintenance, and EPC solutions.
          </motion.p>
        </div>

        <ContentLine delay={0.06} className="my-8" />

        <motion.div className="dez-contact-cta__actions" variants={sectionStagger}>
          <motion.a
            href="mailto:info@dezitechengineering.com"
            className="dez-btn dez-btn--primary"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Contact Us
          </motion.a>
          <motion.a
            href="#services"
            className="dez-btn dez-btn--secondary"
            whileHover={{ opacity: 0.8 }}
            whileFocus={{ opacity: 0.8 }}
          >
            View Services
          </motion.a>
        </motion.div>

        <div className="dez-contact-cta__info">
          <p>Karad, India · Bristol, UK · Global Reach</p>
          <p>20+ years of engineering excellence</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

