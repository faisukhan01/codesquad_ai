'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'Deep-dive into your requirements, market landscape, and technical constraints to build a comprehensive project roadmap.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    deliverables: ['Requirements Document', 'Technical Feasibility', 'Project Roadmap'],
  },
  {
    number: 2,
    icon: PenTool,
    title: 'Design & Architecture',
    description: 'Create intuitive user interfaces and robust system architecture with iterative stakeholder feedback loops.',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    deliverables: ['UI/UX Wireframes', 'System Architecture', 'Design System'],
  },
  {
    number: 3,
    icon: Code2,
    title: 'Development & Testing',
    description: 'Agile sprints with continuous integration, peer code reviews, and comprehensive quality assurance.',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    deliverables: ['Working Software', 'Test Coverage 90%+', 'CI/CD Pipeline'],
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Rigorous deployment, performance monitoring, and dedicated ongoing support to ensure long-term success.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    deliverables: ['Production Deploy', 'Monitoring Setup', 'SLA Support'],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          title="A Streamlined Approach to Excellence"
          description="Our proven methodology ensures predictable results and exceptional quality at every stage."
        />

        <AnimatedSection variant="stagger-children" className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:relative">
          {/* Connecting line - Desktop only */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200" />
          </div>

          {steps.map((step) => (
            <AnimatedItem key={step.number} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="relative bg-gray-50/60 rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 hover:bg-white transition-all duration-300 group lg:text-center"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-5 lg:flex-col lg:items-center">
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2">
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 ${step.textColor} shrink-0`} />
                      <span className="text-xs font-medium text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow - Desktop only, not on last */}
                {step.number < 4 && (
                  <div className="hidden lg:flex justify-center mt-6">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
