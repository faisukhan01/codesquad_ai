'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Clock,
  Headphones,
  Globe2,
  Lightbulb,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const differentiators = [
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description: 'From concept to launch in record time with our accelerated development methodology.',
    stat: '2x',
    statLabel: 'Faster',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption and rigorous security audits.',
    stat: '99.9%',
    statLabel: 'Uptime',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support with dedicated account managers and SLA guarantees.',
    stat: '24/7',
    statLabel: 'Coverage',
  },
  {
    icon: Headphones,
    title: 'Dedicated Teams',
    description: 'Handpicked engineers fully embedded in your team, culture, and workflow.',
    stat: '100+',
    statLabel: 'Engineers',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Serving clients across 15+ countries with localized expertise and delivery.',
    stat: '15+',
    statLabel: 'Countries',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Cutting-edge tech stack with AI-powered solutions and modern architectures.',
    stat: '50+',
    statLabel: 'AI Projects',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#0A1628] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#0066FF]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-[#338AFF]/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why CodeSquad"
          title={
            <span>
              Built Different.{' '}
              <span className="gradient-text">Deliver Better.</span>
            </span>
          }
          description="What sets us apart from the rest — the numbers speak for themselves."
          light
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((item) => (
            <AnimatedItem key={item.title} variant="fade-up" delay={0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF]/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[#338AFF]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-200/60 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Stat */}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-[#338AFF]">
                        {item.stat}
                      </span>
                      <span className="text-xs text-blue-200/50 font-medium uppercase tracking-wider">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
