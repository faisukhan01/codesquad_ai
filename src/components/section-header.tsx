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

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'start 0.15'],
  });

  // Font size: from ~15vw down to 0.7rem (the small label size)
  const rawFontSize = useTransform(
    scrollYProgress,
    [0, 1],
    ['15vw', '0.7rem']
  );

  // Letter spacing: wide when big, tight tracking when small
  const rawLetterSpacing = useTransform(
    scrollYProgress,
    [0, 1],
    ['-0.02em', '0.22em']
  );

  // Opacity: fades in quickly
  const rawOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  // Color: starts as a very light ghost, becomes the brand blue
  const rawColorOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.08, 0.4, 1]);

  // Subtle Y movement
  const rawY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  const fontSize = useSpring(rawFontSize as never, { stiffness: 55, damping: 20, mass: 0.7 });
  const letterSpacing = useSpring(rawLetterSpacing as never, { stiffness: 55, damping: 20, mass: 0.7 });
  const opacity = useSpring(rawOpacity, { stiffness: 55, damping: 20 });
  const y = useSpring(rawY, { stiffness: 55, damping: 20 });

  // Title and description fade in after label has mostly settled
  const rawTitleOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const rawTitleY = useTransform(scrollYProgress, [0.5, 0.85], [20, 0]);
  const titleOpacity = useSpring(rawTitleOpacity, { stiffness: 80, damping: 22 });
  const titleY = useSpring(rawTitleY, { stiffness: 80, damping: 22 });

  const rawDescOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const rawDescY = useTransform(scrollYProgress, [0.7, 1], [14, 0]);
  const descOpacity = useSpring(rawDescOpacity, { stiffness: 80, damping: 22 });
  const descY = useSpring(rawDescY, { stiffness: 80, damping: 22 });

  // The decorative lines beside the label — fade in only when small
  const rawLineOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  const lineOpacity = useSpring(rawLineOpacity, { stiffness: 80, damping: 22 });

  return (
    <div
      ref={containerRef}
      className={`mb-14 lg:mb-20 ${centered ? 'text-center' : ''}`}
      style={{ overflow: 'clip' }}
    >
      {/* ── Animated label: giant → small ─────────────────────────── */}
      <div
        className={`relative flex items-center mb-5 ${
          centered ? 'justify-center' : 'justify-start'
        }`}
      >
        {/* Left line — only visible when label is small */}
        <motion.div
          style={{ opacity: lineOpacity }}
          className={`w-6 h-px mr-3 shrink-0 ${
            light ? 'bg-blue-400/60' : 'bg-[#0066FF]/40'
          }`}
        />

        <motion.span
          style={{
            fontSize,
            letterSpacing,
            opacity,
            y,
          }}
          className={`font-black uppercase whitespace-nowrap will-change-transform block ${
            light ? 'text-blue-300' : 'text-[#0066FF]'
          }`}
        >
          {label}
        </motion.span>

        {/* Right line — only visible when label is small */}
        <motion.div
          style={{ opacity: lineOpacity }}
          className={`w-6 h-px ml-3 shrink-0 ${
            light ? 'bg-blue-400/60' : 'bg-[#0066FF]/40'
          }`}
        />
      </div>

      {/* ── Title ─────────────────────────────────────────────────── */}
      <motion.h2
        style={{ opacity: titleOpacity, y: titleY }}
        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-[1.12] tracking-tight mb-5 will-change-transform ${
          light ? 'text-white' : 'text-[#0A1628]'
        }`}
      >
        {title}
      </motion.h2>

      {/* ── Description ───────────────────────────────────────────── */}
      {description && (
        <motion.p
          style={{ opacity: descOpacity, y: descY }}
          className={`text-base sm:text-lg leading-relaxed max-w-2xl will-change-transform ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-blue-200/60' : 'text-gray-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
