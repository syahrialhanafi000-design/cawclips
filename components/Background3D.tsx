'use client';

import React, { useEffect, useRef } from 'react';
import { animate as anime, stagger } from 'animejs';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const isMobile = window.innerWidth < 768;
    const rows = isMobile ? 8 : 15;
    const cols = isMobile ? 12 : 25;
    const dots: SVGCircleElement[] = [];
    const svg = gridRef.current;

    // Clear existing grid if any (for resizing support if needed)
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    // Create dot grid
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', `${(j + 1) * (100 / (cols + 1))}%`);
        dot.setAttribute('cy', `${(i + 1) * (100 / (rows + 1))}%`);
        dot.setAttribute('r', '1');
        dot.setAttribute('fill', 'rgba(20, 184, 166, 0.3)');
        svg.appendChild(dot);
        dots.push(dot);
      }
    }

    // Initial animation
    anime(dots, {
      scale: [0, 1],
      opacity: [0, 0.3],
      delay: stagger(10, { grid: [cols, rows], from: 'center' }),
      duration: 1500,
      easing: 'easeOutElastic(1, .8)',
    });

    const connections: SVGLineElement[] = [];

    // Create line connections (subset for performance)
    for (let i = 0; i < dots.length; i += 3) {
      if (i + 1 < dots.length) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('stroke', 'rgba(20, 184, 166, 0.1)');
        line.setAttribute('stroke-width', '0.5');
        svg.insertBefore(line, dots[0]);
        connections.push(line);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const svgRect = svg.getBoundingClientRect();
      const mouseX = clientX - svgRect.left;
      const mouseY = clientY - svgRect.top;

      dots.forEach((dot, idx) => {
        const cx = parseFloat(dot.getAttribute('cx') || '0') * (svgRect.width / 100);
        const cy = parseFloat(dot.getAttribute('cy') || '0') * (svgRect.height / 100);

        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const depth = (150 - dist) / 150;
          anime(dot, {
            translateZ: depth * 60,
            scale: 1 + depth * 2,
            opacity: 0.3 + depth * 0.7,
            fill: `rgba(20, 184, 166, ${0.4 + depth * 0.6})`,
            duration: 200,
            easing: 'easeOutQuad',
          });

          // Update connections
          const connIdx = Math.floor(idx / 3);
          if (connections[connIdx]) {
            const line = connections[connIdx];
            const nextDot = dots[idx + 1] || dots[0];
            const ncx = parseFloat(nextDot.getAttribute('cx') || '0') * (svgRect.width / 100);
            const ncy = parseFloat(nextDot.getAttribute('cy') || '0') * (svgRect.height / 100);

            line.setAttribute('x1', `${(cx / svgRect.width) * 100}%`);
            line.setAttribute('y1', `${(cy / svgRect.height) * 100}%`);
            line.setAttribute('x2', `${(ncx / svgRect.width) * 100}%`);
            line.setAttribute('y2', `${(ncy / svgRect.height) * 100}%`);
            line.setAttribute('stroke', `rgba(20, 184, 166, ${depth * 0.3})`);
          }
        } else {
          anime(dot, {
            translateZ: 0,
            scale: 1,
            opacity: 0.3,
            fill: 'rgba(20, 184, 166, 0.3)',
            duration: 500,
            easing: 'easeOutQuad',
          });

          const connIdx = Math.floor(idx / 3);
          if (connections[connIdx]) {
            connections[connIdx].setAttribute('stroke', 'rgba(20, 184, 166, 0)');
          }
        }
      });
    };

    const handleClick = () => {
      anime(dots, {
        scale: [
          { value: 2.5, duration: 200, easing: 'easeOutQuad' },
          { value: 1, duration: 600, easing: 'easeInQuad' },
        ],
        opacity: [
          { value: 1, duration: 200, easing: 'easeOutQuad' },
          { value: 0.3, duration: 600, easing: 'easeInQuad' },
        ],
        delay: stagger(15, {
          grid: [cols, rows],
          from: 'center',
          start: 0,
        }),
        duration: 1000,
      });
    };

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Pulse background on scroll
      anime(svg, {
        scale: 1 + scrollVelocity * 0.001,
        duration: 400,
        easing: 'easeOutQuad',
      });

      dots.forEach((dot, idx) => {
        if (idx % 10 === 0) {
          // Only some dots for performance
          anime(dot, {
            translateZ: scrollVelocity * 2,
            opacity: 0.3 + scrollVelocity * 0.01,
            duration: 500,
            easing: 'easeOutQuad',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07111f]" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
      <svg ref={gridRef} className="w-full h-full" style={{ transformStyle: 'preserve-3d' }} />
    </div>
  );
};

export default Background3D;
