import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const defaultConfig = {
  strength: 14,
  scrollStrength: 0.12,
  axis: 'both'
};

const useParallax = (config = {}) => {
  const { strength, scrollStrength, axis } = { ...defaultConfig, ...config };
  const layerRef = useRef(null);
  const frameRef = useRef(null);
  const vectorRef = useRef({ x: 0, y: 0, scroll: 0 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    if (prefersReducedMotion) {
      layer.style.transform = 'translate3d(0, 0, 0)';
      return undefined;
    }

    const updateTransform = () => {
      frameRef.current = null;
      const { x, y, scroll } = vectorRef.current;
      layer.style.transform = `translate3d(${x}px, ${y + scroll}px, 0)`;
    };

    const queueUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(updateTransform);
    };

    const handlePointer = (event) => {
      if (!layer) return;
      const rect = layer.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;

      vectorRef.current = {
        ...vectorRef.current,
        x: axis === 'y' ? 0 : relX * strength,
        y: axis === 'x' ? 0 : relY * strength
      };
      queueUpdate();
    };

    const handleScroll = () => {
      vectorRef.current = {
        ...vectorRef.current,
        scroll: window.scrollY * -scrollStrength
      };
      queueUpdate();
    };

    window.addEventListener('mousemove', handlePointer, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    queueUpdate();

    return () => {
      window.removeEventListener('mousemove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [axis, prefersReducedMotion, scrollStrength, strength]);

  return layerRef;
};

export default useParallax;
