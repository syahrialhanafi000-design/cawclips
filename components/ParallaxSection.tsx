'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate horizontal shift and 3D rotation based on scroll
  // Balanced shift: sublte 2% on mobile, 5% on desktop
  const xRange = isMobile ? ['2%', '-2%'] : ['5%', '-5%'];
  const rotateRange = isMobile ? [8, 0, -8] : [15, 0, -15];

  const xValue = useTransform(scrollYProgress, [0, 1], xRange);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], rotateRange);

  const springX = useSpring(xValue, { damping: 30, stiffness: 200 });
  const springRotate = useSpring(rotateY, { damping: 30, stiffness: 200 });

  return (
    <div ref={containerRef} className={`relative overflow-visible ${className}`}>
      <motion.div
        style={{
          x: springX,
          rotateY: springRotate,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
        className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
