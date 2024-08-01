'use client';

import { motion } from 'framer-motion';

const ScrollMotion = ({ duration, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: 'easeInOut',
        duration: duration || 0.5,
        y: { duration: duration || 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
