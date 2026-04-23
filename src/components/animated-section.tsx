'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'stagger-children' | 'fade-in';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const variantMap: Record<AnimationVariant, Variants> = {
  'fade-up': fadeUpVariants,
  'fade-left': fadeLeftVariants,
  'fade-right': fadeRightVariants,
  'scale-in': scaleInVariants,
  'fade-in': fadeInVariants,
  'stagger-children': staggerContainerVariants,
};

export function AnimatedSection({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  once = true,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variantMap[variant]}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  variant?: Exclude<AnimationVariant, 'stagger-children'>;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={variantMap[variant]}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
