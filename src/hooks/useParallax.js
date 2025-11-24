import { useEffect, useRef } from "react";
import { lerp } from "../utils/lerp";

export default function useParallax(multipliers = [0.01,0.03,0.07], lerpFactor = 0.12) {
  const state = useRef({
    pointerX: 0, pointerY: 0,
    targetX: 0, targetY: 0,
    rafId: null
  });

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (e.clientX - w / 2) / (w / 2);
      const y = (e.clientY - h / 2) / (h / 2);
      state.current.targetX = x;
      state.current.targetY = y;
    };

    const loop = () => {
      state.current.pointerX = lerp(state.current.pointerX, state.current.targetX, lerpFactor);
      state.current.pointerY = lerp(state.current.pointerY, state.current.targetY, lerpFactor);
      state.current.rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    state.current.rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(state.current.rafId);
    };
  }, [lerpFactor]);

  return {
    getTransforms() {
      const px = state.current.pointerX;
      const py = state.current.pointerY;
      // returns transform strings for each layer
      return multipliers.map(m => {
        const tx = px * m * 100; // px based
        const ty = py * m * 100;
        return { transform: `translate3d(${tx}px, ${ty}px, 0)` };
      });
    }
  };
}
