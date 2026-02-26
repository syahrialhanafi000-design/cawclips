'use client';

import React, { useRef, useState, ReactNode } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  distance?: number;
}

export default function MagneticButton({ children, className = '', distance = 0.4 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dX = clientX - centerX;
    const dY = clientY - centerY;

    // Apply movement
    x.set(dX * distance);
    y.set(dY * distance);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`relative inline-block ${className}`}>
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        {children}
      </motion.div>
    </div>
  );
}
