import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { heroContainer, heroItem } from '../lib/framerVariants';
import useStaggered from '../hooks/useStaggered';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import heroLayer from '../assets/uploaded_screenshot.png'; // local screenshot asset: /mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png

const HeroIllustration = () => {
  const containerRef = useRef(null);
  const layerRefs = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let raf;
    const animateLayers = (xFactor = 0, yFactor = 0, scrollFactor = 0) => {
      layerRefs.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 4;
        layer.style.transform = `translate3d(${xFactor * depth}px, ${yFactor * depth + scrollFactor}px, 0)`;
      });
    };

    const handlePointer = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => animateLayers(x, y, window.scrollY * -0.01));
    };

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => animateLayers(0, 0, window.scrollY * -0.02));
    };

    window.addEventListener('mousemove', handlePointer, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      layerRefs.current.forEach((layer) => {
        if (layer) layer.style.transform = 'translate3d(0,0,0)';
      });
    }
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-charcoal via-charcoalSoft to-charcoalMuted shadow-floating"
    >
      {['glow', 'grid', 'card'].map((id, index) => (
        <div
          key={id}
          ref={(el) => {
            layerRefs.current[index] = el;
          }}
          className={`parallax-layer absolute inset-0 ${
            id === 'glow'
              ? 'bg-[radial-gradient(circle_at_30%_30%,rgba(225,6,0,0.45),transparent)]'
              : ''
          } ${id === 'grid' ? 'opacity-60 mix-blend-screen' : ''}`}
          style={
            id === 'card'
              ? {
                  backgroundImage: `linear-gradient(120deg, rgba(10,10,10,0.2), rgba(16,16,16,0.85)), url(${heroLayer})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }
              : id === 'grid'
                ? {
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                  }
                : undefined
          }
          aria-hidden="true"
        />
      ))}
      {/* To swap with Lottie/GLTF, lazy-load heavy visuals: const Scene = React.lazy(() => import('../visuals/AdvancedScene')); <Suspense fallback={<div />}> <Scene /> </Suspense> */}
    </div>
  );
};

const Hero = () => {
  const { ref, controls } = useStaggered({ threshold: 0.45 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-gradient-to-b from-transparent via-charcoalSoft/30 to-charcoalMuted/60 pb-24 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,6,0,0.12),transparent_55%)]" aria-hidden="true" />
      <motion.div
        ref={ref}
        variants={heroContainer}
        initial="hidden"
        animate={controls}
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <motion.div className="space-y-8" variants={heroItem}>
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
            Future-Ready Engineering Partners {/* UX POLISH: generated — short */}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-mist sm:text-5xl">
            Helping customers grow profitably by providing engineering outsourcing solutions Design and Product manufacturing {/* Taken from https://dezitechengineering.com/ */}
          </h1>
          <p className="max-w-2xl text-lg text-neutral-300">
            Dezitech is your solutions provider in engineering design, products and supply chain. {/* Taken from https://dezitechengineering.com/about.html */}
          </p>
          <p className="max-w-2xl text-base text-neutral-400">
            Established in 2014, Dezitech Engineering Pvt. Ltd. engineers have extensive experience in engineering design, new product development and supply chain management in diverse industries. {/* Taken from https://dezitechengineering.com/about.html */}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-dezired/40 bg-dezired px-6 py-3 text-base font-semibold text-mist shadow-border-glow"
            >
              Explore Products {/* UX POLISH: generated — short */}
            </a>
            <a
              href="mailto:info@dezitechengineering.com"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-mist"
            >
              Contact Sales {/* UX POLISH: generated — short. Email from https://dezitechengineering.com/contact.html */}
            </a>
          </div>
          <div className="grid gap-4 text-sm text-neutral-400 md:grid-cols-2">
            <p>
              We have expertise in industries : Automotive, Industrial, HVAC, Oil and gas and have provided engineering / supply chain support to customers in the UK, USA, India and Australia. {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
            <p>
              We work as an extension of customers engineering team. Our Engineers have 20+ years of international working experience and understand the business environment and cultural issues. {/* Taken from https://dezitechengineering.com/about.html */}
            </p>
          </div>
        </motion.div>
        <motion.div variants={heroItem} className="pointer-events-auto">
          <HeroIllustration />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
