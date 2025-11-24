import React from "react";
import { motion } from "framer-motion";
import useParallax from "../hooks/useParallax";
import { heroHeadline, heroSub } from "../lib/framerVariants";

export default function Hero() {
  const parallax = useParallax([0.01,0.03,0.07], 0.12);
  const transforms = parallax.getTransforms();

  return (
    <section className="hero-container h-screen relative">
      <div className="hero-layer" style={{
        backgroundImage: 'url(/placeholders/hero-video.mp4)',
        transform: transforms[0]?.transform,
        backgroundSize: 'cover'
      }} aria-hidden="true" />
      <div className="hero-layer" style={{
        backgroundImage: 'url(/placeholders/hero-video.mp4)',
        transform: transforms[1]?.transform,
        mixBlendMode: 'overlay',
        opacity: 0.96,
        backgroundSize: 'cover'
      }} aria-hidden="true" />
      <div className="hero-layer" style={{
        backgroundImage: 'url(/placeholders/hero-video.mp4)',
        transform: transforms[2]?.transform,
        opacity: 0.9,
        backgroundSize: 'cover'
      }} aria-hidden="true" />

      <div style={{
        backgroundImage: 'url(/placeholders/hero-video.mp4)',
        position: 'absolute', inset:0, pointerEvents:'none', opacity:0.04, mixBlendMode:'overlay'
      }} />

      <div className="container mx-auto relative z-20 h-full flex items-end">
        <div className="w-1/2 p-8">
          <motion.h1
            className="display text-[5rem] font-bold leading-tight"
            variants={heroHeadline}
            initial="hidden"
            animate="visible"
          >
            Engineering the future of aging medicine.
          </motion.h1>

          <motion.p className="mt-6 text-xl opacity-90" variants={heroSub} initial="hidden" animate="visible">
            We unravel complex processes with industrial MEI contracting and automated maintenance for industry-scale reliability.
          </motion.p>
        </div>
      </div>
    </section>
);
}
