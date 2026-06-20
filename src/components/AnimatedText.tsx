import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import React from 'react';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

function AnimatedChar({ char, progress, index, total }: CharProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to maintain layout */}
      <span aria-hidden className="invisible">
        {char === ' ' ? '\u00A0' : char}
      </span>
      {/* Animated character */}
      <motion.span aria-hidden className="absolute inset-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={`relative ${className}`} aria-label={text} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          progress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </p>
  );
}
