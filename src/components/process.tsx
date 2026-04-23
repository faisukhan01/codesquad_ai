'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Shield, Rocket } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const steps = [
  {
    number: 1,
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We analyze your requirements, map out technical architecture, and define a clear roadmap for success.',
  },
  {
    number: 2,
    icon: Code2,
    title: 'Design & Development',
    description: 'Our engineers build your solution with agile sprints, continuous integration, and iterative feedback loops.',
  },
  {
    number: 3,
    icon: Shield,
    title: 'Testing & QA',
    description: 'Rigorous quality assurance with automated testing, code reviews, and performance optimization.',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Seamless deployment, monitoring setup, and ongoing support to ensure long-term success.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          title="How We Work"
          description="A proven four-step methodology that delivers predictable results and exceptional quality."
        />

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <AnimatedSection variant="stagger-children">
            <div className="relative">
              {/* Connecting line between circles */}
              <div className="absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px] z-0">
                <div className="w-full h-full bg-gradient-to-r from-[#0066FF]/30 via-[#0066FF]/20 to-[#0066FF]/10" />
              </div>

              <div className="grid grid-cols-4 gap-8 relative z-10">
                {steps.map((step) => (
                  <AnimatedItem key={step.number} variant="fade-up" delay={0.12}>
                    <div className="flex flex-col items-center text-center">
                      {/* Step circle */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-[#0066FF]/25"
                        >
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </motion.div>
                      </div>

                      {/* Card */}
                      <motion.div
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="w-full bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-[#0066FF]/8 hover:border-[#0066FF]/20 transition-all duration-300 group"
                      >
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0066FF]/15 transition-colors duration-300">
                          <step.icon className="w-5 h-5 text-[#0066FF]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-semibold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <AnimatedSection variant="stagger-children">
            <div className="relative pl-8">
              {/* Vertical connecting line */}
              <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#0066FF]/30 via-[#0066FF]/20 to-[#0066FF]/10 z-0" />

              <div className="space-y-8 relative z-10">
                {steps.map((step) => (
                  <AnimatedItem key={step.number} variant="fade-up" delay={0.1}>
                    <div className="flex gap-5">
                      {/* Step circle */}
                      <div className="relative shrink-0 -ml-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-md shadow-[#0066FF]/25">
                          <span className="text-white font-bold text-sm">{step.number}</span>
                        </div>
                      </div>

                      {/* Card */}
                      <motion.div
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                        className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-[#0066FF]/5 hover:border-[#0066FF]/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[#0066FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF]/15 transition-colors duration-300">
                            <step.icon className="w-4 h-4 text-[#0066FF]" />
                          </div>
                          <h3 className="text-base font-semibold text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
