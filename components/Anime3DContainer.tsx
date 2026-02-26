'use client';

import React, { useRef, useEffect } from 'react';
import { animate as anime } from 'animejs';

interface Anime3DContainerProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

const Anime3DContainer: React.FC<Anime3DContainerProps> = ({ children, intensity = 15, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [responsiveIntensity, setResponsiveIntensity] = React.useState(intensity);

  useEffect(() => {
    const updateIntensity = () => {
      setResponsiveIntensity(window.innerWidth < 768 ? intensity * 0.3 : intensity);
    };
    updateIntensity();
    window.addEventListener('resize', updateIntensity);
    return () => window.removeEventListener('resize', updateIntensity);
  }, [intensity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / (height / 2)) * -responsiveIntensity;
      const rotateY = (mouseX / (width / 2)) * responsiveIntensity;

      anime(container, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 300,
        easing: 'easeOutQuad',
      });
    };

    const handleMouseLeave = () => {
      anime(container, {
        rotateX: 0,
        rotateY: 0,
        duration: 800,
        easing: 'easeOutElastic(1, .5)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [responsiveIntensity]);

  return (
    <div ref={containerRef} className={`perspective-1000 ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

export default Anime3DContainer;
