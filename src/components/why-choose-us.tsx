'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap, Users, Shield, Headphones } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const differentiators = [
  {
    icon: Target,
    title: 'Industry Expertise',
    description: 'Deep domain knowledge across healthcare, agriculture, and computer vision.',
    stat: '5+ Industries',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '200+ projects delivered with 99% client satisfaction rate.',
    stat: '200+ Projects',
  },
  {
    icon: Zap,
    title: 'Agile Development',
    description: 'Sprint-based delivery with continuous feedback and rapid iteration.',
    stat: '2x Faster',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Experienced engineers fully embedded in your project.',
    stat: '100+ Engineers',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'HIPAA-compliant practices with enterprise-grade security.',
    stat: 'SOC 2 Ready',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support across time zones.',
    stat: '24/7 Coverage',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0066FF]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#338AFF]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="Built for Excellence"
          description="The competitive advantages that make CodeSquad the right technology partner for your business."
          light
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((item) => (
            <AnimatedItem key={item.title} variant="fade-up" delay={0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-7 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 h-full cursor-default"
              >
                {/* Icon container with gradient */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/25 to-[#0066FF]/10 flex items-center justify-center mb-5 group-hover:from-[#0066FF]/35 group-hover:to-[#0066FF]/15 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-[#338AFF] group-hover:text-[#66A5FF] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-blue-200/60 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Stat badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/20">
                  <span className="text-xs font-bold text-[#66B2FF] tracking-wide">
                    {item.stat}
                  </span>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
