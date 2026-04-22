'use client';

import React from 'react';
import { AnimatedSection } from '@/components/animated-section';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean; // for dark backgrounds
}

export default function SectionHeader({ label, title, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <AnimatedSection variant="fade-up" className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center gap-3 mb-4`}>
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#0066FF]" />
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
        </div>
        <span className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-blue-300' : 'text-[#0066FF]'}`}>
          {label}
        </span>
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
        </div>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#0066FF]" />
      </div>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-[#0A1628]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100/70' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
