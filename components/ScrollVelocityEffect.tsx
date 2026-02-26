'use client';

import React from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

interface ScrollVelocityEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function ScrollVelocityEffect({ children, className = '', intensity = 20 }: ScrollVelocityEffectProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Map velocity to skew and scale
  const skewRaw = useTransform(scrollVelocity, [-3000, 0, 3000], [-intensity, 0, intensity]);
  const scaleRaw = useTransform(scrollVelocity, [-3000, 0, 3000], [1.1, 1, 1.1]);

  const skew = useSpring(skewRaw, { damping: 30, stiffness: 200 });
  const scale = useSpring(scaleRaw, { damping: 30, stiffness: 200 });

  return (
    <motion.div style={{ skewY: skew, scale }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
}
