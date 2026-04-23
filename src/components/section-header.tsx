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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "start 0.1"],
  });

  // Scale from 1.8x to 1x as heading enters viewport
  const rawScale = useTransform(scrollYProgress, [0, 0.3, 1], [1.8, 1.15, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);
  const rawLabelOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const rawDescOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const scale = useSpring(rawScale, { stiffness: 100, damping: 25, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 100, damping: 25, mass: 0.8 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 25, mass: 0.8 });
  const labelOpacity = useSpring(rawLabelOpacity, { stiffness: 100, damping: 25, mass: 0.8 });
  const descOpacity = useSpring(rawDescOpacity, { stiffness: 100, damping: 25, mass: 0.8 });

  return (
    <div ref={containerRef} className={`mb-14 lg:mb-20 ${centered ? 'text-center' : ''}`}>
      {/* Label */}
      <motion.div
        style={{ opacity: labelOpacity }}
        className={`inline-flex items-center gap-3 mb-5`}
      >
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#0066FF]" />
        <span className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-blue-300' : 'text-[#0066FF]'}`}>
          {label}
        </span>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#0066FF]" />
      </motion.div>

      {/* Title with scroll-responsive scaling */}
      <motion.h2
        style={{ scale, y, opacity }}
        className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 ${light ? 'text-white' : 'text-[#0A1628]'} origin-left ${centered ? 'origin-center' : ''}`}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          style={{ opacity: descOpacity }}
          className={`text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100/70' : 'text-gray-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
