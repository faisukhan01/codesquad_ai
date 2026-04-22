'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your requirements, goals, and constraints to create a comprehensive project roadmap.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: 2,
    icon: PenTool,
    title: 'Design',
    description: 'Our designers create intuitive interfaces and robust architecture blueprints.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    number: 3,
    icon: Code2,
    title: 'Development',
    description: 'Agile sprints with continuous integration, code reviews, and quality assurance.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Delivery',
    description: 'Rigorous testing, deployment, and ongoing support to ensure success.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Our Process"
          title="A Streamlined Approach to Excellence"
          description="Our proven methodology ensures predictable results and exceptional quality at every stage."
        />

        {/* Steps - Desktop horizontal, Mobile vertical */}
        <AnimatedSection variant="stagger-children">
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative">
            {/* Connecting line with gradient */}
            <div className="absolute top-[3.25rem] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200" />

            {steps.map((step) => (
              <AnimatedItem key={step.number} variant="fade-up" delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  {/* Numbered circle with gradient */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg"
                    style={{
                      background: step.number === 1
                        ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                        : step.number === 2
                          ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                          : step.number === 3
                            ? 'linear-gradient(135deg, #10b981, #14b8a6)'
                            : 'linear-gradient(135deg, #f97316, #ef4444)',
                    }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
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

          {/* Tablet Layout (md) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <AnimatedItem key={step.number} variant="fade-up" delay={0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex gap-5 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: step.number === 1
                        ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                        : step.number === 2
                          ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                          : step.number === 3
                            ? 'linear-gradient(135deg, #10b981, #14b8a6)'
                            : 'linear-gradient(135deg, #f97316, #ef4444)',
                    }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-[#0A1628] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-12 bottom-12 w-px bg-gradient-to-b from-blue-200 via-violet-200 to-emerald-200" />

            <div className="space-y-8">
              {steps.map((step) => (
                <AnimatedItem key={step.number} variant="fade-right" delay={0.1}>
                  <div className="flex gap-5">
                    {/* Numbered circle */}
                    <div
                      className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: step.number === 1
                          ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                          : step.number === 2
                            ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                            : step.number === 3
                              ? 'linear-gradient(135deg, #10b981, #14b8a6)'
                              : 'linear-gradient(135deg, #f97316, #ef4444)',
                      }}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
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
