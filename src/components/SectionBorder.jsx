import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function SectionBorder({ sectionId }) {
  const ref = useRef();
  const [length, setLength] = useState(1000);
  const pathRef = useRef();
  const anim = useAnimation();
  const dotRef = useRef();

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    setLength(total);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anim.start({ strokeDashoffset: 0, transition: { duration: 0.78, delay: 0.06, ease: [0.22,0.8,0.3,1] } });
        } else {
          anim.start({ strokeDashoffset: total, transition: { duration: 0.36, ease: [0.22,0.8,0.3,1] } });
        }
      });
    }, { threshold: [0, 0.1, 0.9, 1] });

    if (ref.current) obs.observe(ref.current);

    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const h = rect.height || 1;
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + h), 0), 1);
      if (dotRef.current) dotRef.current.style.transform = `translateY(${progress * h}px)`;
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      if (ref.current) obs.unobserve(ref.current);
      window.removeEventListener('scroll', onScroll);
    }
  }, [anim]);

  return (
    <div ref={ref} className="absolute left-4 top-0 bottom-0 pointer-events-none">
      <svg width="24" height="100%" viewBox="0 0 24 1000" preserveAspectRatio="none" style={{ height: '100%' }}>
        <motion.path
          ref={pathRef}
          d="M12 0 L12 1000"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray={length}
          strokeDashoffset={length}
          animate={anim}
        />
      </svg>
      <div ref={dotRef} style={{
        width: 8, height: 8, borderRadius: 999, background: 'rgba(38,198,218,0.9)',
        position: 'relative', top: 8, left: 6, transform: 'translateY(0)'
      }} />
    </div>
  );
}
