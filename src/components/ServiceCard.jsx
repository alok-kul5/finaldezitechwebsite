import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ item }) {
  return (
    <motion.article
      whileHover={{ scale: 1.035, y: -6 }}
      transition={{ duration: 0.28, ease: [0.22,0.8,0.3,1] }}
      className="bg-dez-surface p-6 rounded-lg shadow-sm"
      role="article"
      tabIndex={0}
    >
      <motion.img src={item.thumb} alt={item.title} layoutId={`thumb-${item.slug}`} className="w-full h-40 object-cover rounded" />
      <h4 className="mt-4">{item.title}</h4>
      <p className="mt-2 text-dez-muted">{item.summary}</p>
    </motion.article>
  );
}
