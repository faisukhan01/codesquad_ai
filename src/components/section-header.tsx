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
    offset: ['start 0.85', 'start 0.25'],
  });

  // Font size: from very large (matching screenshot) down to 0.7rem (the small label size)
  // Mobile: starts at 6rem (96px), Desktop: scales up to 70vw with max 60rem (960px) - DOUBLE SIZE!
  const rawFontSize = useTransform(
    scrollYProgress,
    [0, 1],
    ['clamp(6rem, 70vw, 60rem)', '0.7rem']
  );

  // Letter spacing: wide when big, tight tracking when small
  const rawLetterSpacing = useTransform(
    scrollYProgress,
    [0, 1],
    ['0.05em', '0.22em']
  );

  // Opacity: starts visible, stays visible
  const rawOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 1]);

  // Subtle Y movement for smooth transition
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Faster, snappier spring settings - no lag!
  const fontSize = useSpring(rawFontSize as never, { stiffness: 200, damping: 40, mass: 0.3 });
  const letterSpacing = useSpring(rawLetterSpacing as never, { stiffness: 200, damping: 40, mass: 0.3 });
  const opacity = useSpring(rawOpacity, { stiffness: 200, damping: 40 });
  const y = useSpring(rawY, { stiffness: 200, damping: 40 });

  // Title and description are always visible, just subtle fade
  const rawTitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const rawTitleY = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const titleOpacity = useSpring(rawTitleOpacity, { stiffness: 200, damping: 40 });
  const titleY = useSpring(rawTitleY, { stiffness: 200, damping: 40 });

  const rawDescOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const rawDescY = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const descOpacity = useSpring(rawDescOpacity, { stiffness: 200, damping: 40 });
  const descY = useSpring(rawDescY, { stiffness: 200, damping: 40 });

  // The decorative lines beside the label — fade in only when small
  const rawLineOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const lineOpacity = useSpring(rawLineOpacity, { stiffness: 200, damping: 40 });

  return (
    <div
      ref={containerRef}
      className={`mb-10 sm:mb-14 lg:mb-20 ${centered ? 'text-center' : ''}`}
      style={{ overflow: 'visible', minHeight: 'clamp(150px, 30vh, 300px)' }}
    >
      {/* ── Animated label: giant → small ─────────────────────────── */}
      <div
        className={`relative flex items-center mb-6 sm:mb-8 ${
          centered ? 'justify-center' : 'justify-start'
        }`}
      >
        {/* Left line — only visible when label is small */}
        <motion.div
          style={{ opacity: lineOpacity }}
          className={`w-4 sm:w-6 h-px mr-2 sm:mr-3 shrink-0 ${
            light ? 'bg-blue-400/60' : 'bg-[#0066FF]/40'
          }`}
        />

        <motion.span
          style={{
            fontSize,
            letterSpacing,
            opacity,
            y,
            willChange: 'transform, font-size',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          className={`font-black uppercase whitespace-nowrap block leading-none ${
            light ? 'text-blue-300' : 'text-[#0066FF]'
          }`}
        >
          {label}
        </motion.span>

        {/* Right line — only visible when label is small */}
        <motion.div
          style={{ opacity: lineOpacity }}
          className={`w-4 sm:w-6 h-px ml-2 sm:ml-3 shrink-0 ${
            light ? 'bg-blue-400/60' : 'bg-[#0066FF]/40'
          }`}
        />
      </div>

      {/* ── Title ─────────────────────────────────────────────────── */}
      <motion.h2
        style={{ 
          opacity: titleOpacity, 
          y: titleY,
          willChange: 'transform, opacity',
          transform: 'translateZ(0)', // Force GPU acceleration
        }}
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-[1.12] tracking-tight mb-4 sm:mb-5 ${
          light ? 'text-white' : 'text-[#0A1628]'
        }`}
      >
        {title}
      </motion.h2>

      {/* ── Description ───────────────────────────────────────────── */}
      {description && (
        <motion.p
          style={{ 
            opacity: descOpacity, 
            y: descY,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl px-4 sm:px-0 ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-blue-200/60' : 'text-gray-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
