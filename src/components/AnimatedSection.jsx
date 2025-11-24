import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({ children, className = '', ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
        hidden: {}
      }}
      className={`section-padding ${className}`}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
