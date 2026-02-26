'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface ExtremeTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function ExtremeTilt({ children, className = '', intensity = 20 }: ExtremeTiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const responsiveIntensity = isMobile ? intensity * 0.4 : intensity;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [responsiveIntensity, -responsiveIntensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-responsiveIntensity, responsiveIntensity]), springConfig);

  // For the glint effect
  const glintX = useSpring(useTransform(x, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const glintY = useSpring(useTransform(y, [-0.5, 0.5], ['0%', '100%']), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  // For layered depth effects
  const depthX = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);
  const depthY = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`relative perspective-1000 group/tilt ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          // @ts-expect-error - CSS variables are allowed in style props
          '--tilt-x': depthX,
          '--tilt-y': depthY,
        }}
        className="w-full h-full relative">
        {/* Layered Content System */}
        <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(0px)' }}>{children}</div>

        {/* Dynamic glint/shine layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2) 0%, transparent 70%)`,
            ['--x' as string]: glintX,
            ['--y' as string]: glintY,
            transform: 'translateZ(50px)',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Glow Background for float effect */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-[-20px] rounded-[inherit] bg-teal-500/10 pointer-events-none blur-3xl"
          style={{
            transform: 'translateZ(-40px)',
          }}
        />
      </motion.div>
    </div>
  );
}
