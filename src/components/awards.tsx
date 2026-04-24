'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Star,
  Shield,
  Cloud,
  TrendingUp,
  Heart,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const awards = [
  {
    icon: Trophy,
    title: 'Clutch Top Developer 2024',
    description:
      'Recognized as a top B2B software development company by Clutch',
    year: '2024',
  },
  {
    icon: Star,
    title: 'Gartner Cool Vendor',
    description:
      "Named in Gartner's Cool Vendor report for software engineering",
    year: '2024',
  },
  {
    icon: Shield,
    title: 'ISO 27001 Certified',
    description:
      'Enterprise-grade security and information management standards',
    year: '2023',
  },
  {
    icon: Cloud,
    title: 'AWS Advanced Partner',
    description:
      'Advanced tier partnership with Amazon Web Services',
    year: '2023',
  },
  {
    icon: TrendingUp,
    title: 'Inc. 5000 Fastest Growing',
    description:
      'Ranked among the fastest-growing private companies in America',
    year: '2024',
  },
  {
    icon: Heart,
    title: 'Best Workplace Award',
    description:
      'Recognized for our exceptional company culture and employee satisfaction',
    year: '2023',
  },
];

export default function Awards() {
  return (
    <section className="section-padding bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-amber-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Recognition
            </span>
            <div className="w-8 h-px bg-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            Awards &amp; Achievements
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our dedication to excellence has been recognized by industry leaders
          </p>
        </AnimatedSection>

        {/* Awards Grid */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {awards.map((award, index) => (
            <AnimatedItem key={award.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group relative rounded-2xl border border-blue-100/60 shadow-sm p-6 hover:shadow-xl hover:shadow-blue-500/8 hover:border-blue-200/60 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)' }}
              >
                {/* Icon with muted amber/gold gradient */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #0066FF, #338AFF)' }}>
                  <award.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-semibold text-[#0A1628] group-hover:text-amber-700 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <span className="shrink-0 text-xs font-bold text-amber-600/70 bg-amber-50 px-2 py-0.5 rounded-full">
                    {award.year}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
