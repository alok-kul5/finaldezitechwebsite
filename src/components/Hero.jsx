import { motion } from 'framer-motion';
import { memo } from 'react';
import { heroMotion } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import useParallax from '../hooks/useParallax';
import Section from './Section';
import Image from './Image';
import heroLayer from '../assets/uploaded_screenshot.png'; // Local test image: /mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png

const AccentWash = memo(({ isActive }) => (
  <motion.span
    className="hero-accent"
    variants={heroMotion.accent}
    initial="hidden"
    animate={isActive ? 'visible' : 'hidden'}
    aria-hidden="true"
  />
));

const Hero = ({ accentMode = 'primary', accentInterval = 9000, prefersReducedMotion = false }) => {
  const { ref, controls } = useStaggered({ threshold: 0.4 });
  const visualRef = useParallax({ strength: 12, scrollStrength: 0.06 });

  return (
    <Section id="home" variant="red" padded={false} className="hero-panel">
      <div className="hero-panel__backdrop" aria-hidden="true" />
      <AccentWash isActive={accentMode === 'primary'} />
      <AccentWash isActive={accentMode !== 'primary'} />
      <motion.div
        ref={ref}
        variants={heroMotion.container}
        initial="hidden"
        animate={controls}
        className="hero-grid"
      >
        <div className="hero-copy">
          <motion.p className="hero-copy__eyebrow" variants={heroMotion.eyebrow}>
            Engineering outsourcing solutions {/* Taken from https://dezitechengineering.com/ */}
          </motion.p>
          <motion.h1 className="hero-copy__title" variants={heroMotion.headline}>
            Engineering outsourcing solutions in design and product manufacturing {/* Taken from https://dezitechengineering.com/ */}
          </motion.h1>
          <motion.p className="hero-copy__lede" variants={heroMotion.subhead}>
            Dezitech is your solutions provider in engineering design, products and supply chain. {/* Taken from https://dezitechengineering.com/about.html */}
          </motion.p>
          <motion.p className="hero-copy__body" variants={heroMotion.paragraph}>
            Established in 2014, Dezitech Engineering Pvt. Ltd. engineers have extensive experience in engineering design, new product development and supply chain management in diverse industries. {/* Taken from https://dezitechengineering.com/about.html */}
          </motion.p>
          <motion.div className="hero-copy__ctas" variants={heroMotion.cta}>
            <motion.a
              href="#services"
              className="hero-cta hero-cta--primary"
              whileHover={{ y: -4, scale: 1.01 }}
              whileFocus={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
            >
              Explore Products {/* UX POLISH: generated */}
            </motion.a>
            <motion.a
              href="mailto:info@dezitechengineering.com"
              className="hero-cta hero-cta--ghost"
              whileHover={{ y: -4, scale: 1.01 }}
              whileFocus={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
            >
              Contact {/* Taken from https://dezitechengineering.com/contact.html */}
            </motion.a>
          </motion.div>
          <motion.div className="hero-copy__meta" variants={heroMotion.meta}>
            <p>
              International delivery: UK · USA · India · Australia {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
            <p>
              Industries: Automotive · Industrial · HVAC · Oil & Gas {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
            <p className="hero-copy__cadence">
              Accent pulse ≈ {Math.round(accentInterval / 1000)}s {/* UX POLISH: generated */}
            </p>
          </motion.div>
        </div>
        <motion.div className="hero-visual-block" variants={heroMotion.visual}>
          <div
            ref={visualRef}
            className="hero-visual-block__inner"
            data-reduced={prefersReducedMotion ? 'true' : 'false'}
          >
            <div className="hero-visual-block__glass" aria-hidden="true" />
            <Image
              src={heroLayer}
              alt="Dezitech engineering interface montage"
              className="hero-visual-block__image"
              imgClassName="hero-visual-block__img"
              tone="warm"
              loading="lazy"
            />
            {/* Future visual slot for Lottie/GLTF sequences; lazy-load heavy assets before replacing <Image>. */}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
