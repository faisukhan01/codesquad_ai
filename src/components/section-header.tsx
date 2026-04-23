'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ label, title, description, centered = true, light = false }: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the container element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.15"],
  });

  // Scale heading from 1.5x to 1x as it scrolls through viewport
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15], [0.5, 1]);
  const rawLabelOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Spring physics for smooth animation
  const scale = useSpring(rawScale, { stiffness: 120, damping: 28, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 120, damping: 28, mass: 0.8 });
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 28, mass: 0.8 });
  const labelOpacity = useSpring(rawLabelOpacity, { stiffness: 120, damping: 28, mass: 0.8 });

  return (
    <div ref={containerRef} className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      {/* Label - fades in as heading shrinks */}
      <motion.div
        style={{ opacity: labelOpacity }}
        className={`inline-flex items-center gap-3 mb-4`}
      >
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#0066FF]" />
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
        </div>
        <span className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-blue-300' : 'text-[#0066FF]'}`}>
          {label}
        </span>
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
        </div>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#0066FF]" />
      </motion.div>

      {/* Title with scroll-responsive scaling */}
      <motion.h2
        style={{ scale, y, opacity }}
        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight mb-5 ${light ? 'text-white' : 'text-[#0A1628]'} text-glow-subtle`}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          style={{ opacity: labelOpacity }}
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100/70' : 'text-gray-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
