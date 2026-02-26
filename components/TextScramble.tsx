'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  autostart?: boolean;
  duration?: number;
  className?: string;
  once?: boolean;
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ text, autostart = true, duration = 800, className = '', once = true }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const hasScrambled = useRef(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (once && hasScrambled.current) return;

    setIsScrambling(true);
    startTimeRef.current = Date.now();

    const update = () => {
      const time = Date.now() - startTimeRef.current;
      const progress = Math.min(time / duration, 1);

      const scrambled = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (progress > i / text.length) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setIsScrambling(false);
        hasScrambled.current = true;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [text, duration, once]);

  useEffect(() => {
    if (autostart) {
      const timer = setTimeout(() => {
        scramble();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [autostart, scramble]);

  return (
    <span className={className} onMouseEnter={() => !isScrambling && scramble()} style={{ display: 'inline-block' }}>
      {displayText}
    </span>
  );
}
