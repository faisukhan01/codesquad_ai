'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Gem,
  Users,
  MessageSquare,
  Zap,
  GraduationCap,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'We push boundaries and embrace new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.',
  },
  {
    icon: Gem,
    title: 'Quality Obsessed',
    description:
      'Every line of code, every pixel, every interaction is crafted with meticulous attention to detail and quality standards.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description:
      "We don't just build software — we build relationships. Your success is our success, and we're invested for the long term.",
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description:
      'Open, honest, and frequent communication ensures everyone stays aligned throughout the project lifecycle.',
  },
  {
    icon: Zap,
    title: 'Agile Excellence',
    description:
      'Our battle-tested agile processes ensure rapid delivery, continuous improvement, and adaptive problem-solving.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      "We invest in our team's growth through training, conferences, and knowledge sharing to stay at the industry forefront.",
  },
];

export default function CompanyValues() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#0066FF]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
              Our Values
            </span>
            <div className="w-8 h-px bg-[#0066FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The core principles that guide everything we do at CodeSquad
          </p>
        </AnimatedSection>

        {/* Values Grid */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <AnimatedItem key={value.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 h-full hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Number badge in top-right corner */}
                <span className="absolute top-4 right-5 text-xs font-semibold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#338AFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#0A1628] mb-3 group-hover:text-[#0066FF] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
