'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, ShieldCheck, Rocket } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'Deep-dive into your vision, define technical architecture, and chart a clear path forward.',
    color: '#0066FF',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Design & Development',
    description: 'Agile sprints, pixel-perfect design, and iterative builds with continuous feedback.',
    color: '#7C3AED',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Testing & QA',
    description: 'Comprehensive automated testing, code reviews, and performance benchmarking.',
    color: '#059669',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Zero-downtime deployment, monitoring, and dedicated ongoing support.',
    color: '#D97706',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gray-50/50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          title="How We Bring Ideas to Life"
          description="From initial concept to successful launch — a battle-tested four-phase methodology refined across 200+ projects."
        />

        {/* Desktop Layout: 4 columns */}
        <div className="hidden lg:block">
          <AnimatedSection variant="stagger-children">
            <div className="relative">
              {/* Connecting line between steps */}
              <div className="absolute top-[60px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] z-0">
                <div className="h-px w-full bg-gray-200" />
              </div>

              <div className="relative z-10 grid grid-cols-4 gap-6 xl:gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <AnimatedItem key={step.number} variant="fade-up" delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                        className="group relative flex flex-col items-center text-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        {/* Colored icon circle */}
                        <div className="relative mb-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: step.color,
                              boxShadow: `0 6px 16px ${step.color}25`,
                            }}
                          >
                            <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                          </div>
                        </div>

                        {/* Step number */}
                        <span
                          className="text-xs font-bold tracking-wider mb-2"
                          style={{ color: step.color }}
                        >
                          STEP {step.number}
                        </span>

                        {/* Title */}
                        <h3 className="mb-2 text-base font-semibold text-[#0A1628] leading-snug">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </AnimatedItem>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile Layout: 2x2 grid */}
        <div className="lg:hidden">
          <AnimatedSection variant="stagger-children">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimatedItem key={step.number} variant="fade-up" delay={index * 0.08}>
                    <motion.div
                      whileHover={{ y: -3, transition: { duration: 0.25 } }}
                      className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: step.color,
                          boxShadow: `0 4px 12px ${step.color}20`,
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                      </div>
                      <div>
                        <span
                          className="text-[11px] font-bold tracking-wider"
                          style={{ color: step.color }}
                        >
                          STEP {step.number}
                        </span>
                        <h3 className="text-base font-semibold text-[#0A1628] leading-snug mt-0.5">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mt-1">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedItem>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
