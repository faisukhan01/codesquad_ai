'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your requirements, goals, and constraints to create a comprehensive project roadmap.',
  },
  {
    number: 2,
    icon: PenTool,
    title: 'Design',
    description: 'Our designers create intuitive interfaces and robust architecture blueprints.',
  },
  {
    number: 3,
    icon: Code2,
    title: 'Development',
    description: 'Agile sprints with continuous integration, code reviews, and quality assurance.',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Delivery',
    description: 'Rigorous testing, deployment, and ongoing support to ensure success.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            A Streamlined Approach to Delivering Excellence
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our proven methodology ensures predictable results and exceptional quality at every stage.
          </p>
        </AnimatedSection>

        {/* Steps - Desktop horizontal, Mobile vertical */}
        <AnimatedSection variant="stagger-children">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px border-t-2 border-dashed border-blue-200" />

            {steps.map((step) => (
              <AnimatedItem key={step.number} variant="fade-up" delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-14 h-14 rounded-full bg-[#0066FF] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20"
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-[#0066FF] flex items-center justify-center text-xs font-bold text-[#0066FF]">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#0A1628] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-12 bottom-12 w-px border-l-2 border-dashed border-blue-200" />

            <div className="space-y-10">
              {steps.map((step) => (
                <AnimatedItem key={step.number} variant="fade-right" delay={0.1}>
                  <div className="flex gap-5">
                    {/* Numbered circle */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[#0066FF] flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <step.icon className="w-6 h-6 text-white" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-[#0066FF] flex items-center justify-center text-xs font-bold text-[#0066FF]">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-lg font-semibold text-[#0A1628] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
