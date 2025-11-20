import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { heroVariants } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import Image from './Image';
import heroLayer from '../assets/uploaded_screenshot.png'; // Local test image: /mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png

const accentLayers = [
  { id: 'primary', className: 'hero-shell__wash hero-shell__wash--primary' },
  { id: 'alt', className: 'hero-shell__wash hero-shell__wash--alt' }
];

const HeroVisual = ({ accentMode, prefersReducedMotion }) => {
  const containerRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    if (prefersReducedMotion) {
      layerRefs.current.forEach((layer) => {
        if (layer) layer.style.transform = 'translate3d(0,0,0)';
      });
      return undefined;
    }

    let raf;
    const updateLayers = (xFactor = 0, yFactor = 0, scrollFactor = 0) => {
      layerRefs.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 2.6;
        layer.style.transform = `translate3d(${xFactor * depth}px, ${yFactor * depth + scrollFactor}px, 0)`;
      });
    };

    const handlePointer = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => updateLayers(x, y, window.scrollY * -0.015));
    };

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => updateLayers(0, 0, window.scrollY * -0.03));
    };

    window.addEventListener('mousemove', handlePointer, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="hero-visual" aria-hidden="true">
      {['glow', 'grid', 'image'].map((layer, index) => (
        <div
          key={layer}
          ref={(el) => {
            layerRefs.current[index] = el;
          }}
          className={`hero-visual__layer hero-visual__layer--${layer} hero-visual__layer--${accentMode}`}
        >
          {layer === 'image' && (
            <>
              {/* Swap this <Image> with a Lottie/GLTF scene by lazy-loading the heavy file via React.lazy + Suspense. */}
              <Image
                src={heroLayer}
                alt="Dezitech engineering dashboards preview"
                className="hero-visual__image-frame"
                imgClassName="hero-visual__image"
              />
            </>
          )}
        </div>
      ))}
      <motion.div
        className="hero-visual__orbit"
        animate={{ rotate: accentMode === 'primary' ? 12 : -8 }}
        transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
      />
    </div>
  );
};

const Hero = ({ accentMode = 'primary', accentInterval = 9000, prefersReducedMotion = false }) => {
  const { ref, controls } = useStaggered({ threshold: 0.45 });
  const accentLabel = useMemo(
    () => (accentMode === 'primary' ? 'Dezitech Red' : 'Ivory Accent'),
    [accentMode]
  );

  return (
    <section id="home" className="hero-shell">
      <span className="hero-shell__grid" aria-hidden="true" />
      {accentLayers.map((layer) => (
        <motion.span
          key={layer.id}
          className={layer.className}
          variants={heroVariants.accent}
          initial="hidden"
          animate={accentMode === layer.id ? 'visible' : 'hidden'}
          aria-hidden="true"
        />
      ))}
      <motion.div
        ref={ref}
        variants={heroVariants.section}
        initial="hidden"
        animate={controls}
        className="hero-shell__content"
      >
        <motion.div className="hero-shell__copy" variants={heroVariants.text}>
          <p className="hero-eyebrow">
            Engineering outsourcing solutions {/* Taken from https://dezitechengineering.com/ */}
          </p>
          <h1 className="hero-title">
            Helping customers grow profitably by providing engineering outsourcing solutions Design and Product manufacturing {/* Taken from https://dezitechengineering.com/ */}
          </h1>
          <motion.p className="hero-lede" variants={heroVariants.paragraph}>
            Dezitech is your solutions provider in engineering design, products and supply chain. {/* Taken from https://dezitechengineering.com/about.html */}
          </motion.p>
          <motion.p className="hero-body" variants={heroVariants.paragraph}>
            Established in 2014, Dezitech Engineering Pvt. Ltd. engineers have extensive experience in engineering design, new product development and supply chain management in diverse industries. {/* Taken from https://dezitechengineering.com/about.html */}
          </motion.p>
          <motion.div className="hero-ctas" variants={heroVariants.cta}>
            <motion.a
              href="#services"
              className="hero-cta hero-cta--primary"
              variants={heroVariants.cta}
              whileHover={{ y: -4, scale: 1.01 }}
              whileFocus={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Products {/* UX POLISH: generated — short */}
            </motion.a>
            <motion.a
              href="mailto:info@dezitechengineering.com"
              className="hero-cta hero-cta--ghost"
              variants={heroVariants.cta}
              whileHover={{ y: -4, scale: 1.01 }}
              whileFocus={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales {/* Taken from https://dezitechengineering.com/contact.html */}
            </motion.a>
          </motion.div>
          <div className="hero-meta">
            <p>
              International delivery: UK · USA · India · Australia {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
            <p>
              Industries: Automotive · Industrial · HVAC · Oil & Gas {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
          </div>
          <div className="hero-meta hero-meta--accent">
            <span>{accentLabel}</span>
            <span>
              Cycle ≈ {Math.round(accentInterval / 1000)}s {/* Adjust cadence via ACCENT_INTERVAL_MS in App.js */}
            </span>
          </div>
        </motion.div>
        <motion.div className="hero-shell__visual" variants={heroVariants.visual}>
          <HeroVisual accentMode={accentMode} prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
