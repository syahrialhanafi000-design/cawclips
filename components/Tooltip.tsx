'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function Tooltip({ content, children, position = 'top', delay = 0.2, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const animations = {
    top: { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 5 } },
    bottom: { initial: { opacity: 0, y: -5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -5 } },
    left: { initial: { opacity: 0, x: 5 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 5 } },
    right: { initial: { opacity: 0, x: -5 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -5 } },
  };

  return (
    <div className={`relative flex items-center ${className}`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={animations[position].initial}
            animate={animations[position].animate}
            exit={animations[position].exit}
            transition={{ duration: 0.15, delay }}
            className={`absolute ${positions[position]} z-100 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl whitespace-nowrap pointer-events-none`}>
            <p className="text-[8px] text-slate-100 lowercase tracking-wider">{content}</p>
            {/* Tooltip Arrow */}
            <div
              className={`absolute w-2 h-2 bg-slate-900 border-white/10 rotate-45 ${
                position === 'top'
                  ? 'bottom-[-4px] left-1/2 -translate-x-1/2 border-r border-b'
                  : position === 'bottom'
                    ? 'top-[-4px] left-1/2 -translate-x-1/2 border-l border-t'
                    : position === 'left'
                      ? 'right-[-4px] top-1/2 -translate-y-1/2 border-r border-t'
                      : 'left-[-4px] top-1/2 -translate-y-1/2 border-l border-b'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
