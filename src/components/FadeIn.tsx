import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import React from 'react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  /** Use true for scroll-triggered animation (whileInView). Default animates on mount. */
  scroll?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView' | 'transition' | 'viewport'>;

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as: Tag = 'div',
  style,
  scroll = false,
  ...rest
}: FadeInProps) {
  const MotionTag = motion.create(Tag as any);

  const scrollProps = scroll
    ? {
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: '50px', amount: 0 as const },
      }
    : {
        animate: { opacity: 1, x: 0, y: 0 },
      };

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...scrollProps}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
