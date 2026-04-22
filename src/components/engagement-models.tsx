'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Clock, CheckCircle } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const plans = [
  {
    icon: Target,
    title: 'Fixed Price Projects',
    description: 'Best for well-defined projects with clear scope, timeline, and deliverables.',
    features: [
      'Defined scope & deliverables',
      'Fixed timeline & budget',
      'Milestone-based payments',
      'Regular progress reports',
    ],
    price: 'Starting from $25K',
    buttonLabel: 'Get a Quote',
    buttonStyle: 'bg-[#0066FF] text-white',
    featured: false,
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Full-time dedicated development team embedded into your workflow.',
    features: [
      'Dedicated engineers & designers',
      'Monthly retainer pricing',
      'Direct team communication',
      'Flexible scaling up/down',
    ],
    price: 'Starting from $15K/mo',
    buttonLabel: 'Talk to Us',
    buttonStyle: 'bg-[#0066FF] text-white',
    featured: true,
  },
  {
    icon: Clock,
    title: 'Time & Material',
    description: 'Ideal for evolving projects requiring flexibility and rapid iteration.',
    features: [
      'Pay per hour/sprint',
      'Maximum flexibility',
      'Adaptable scope',
      'Transparent reporting',
    ],
    price: 'Starting from $120/hr',
    buttonLabel: 'Contact Us',
    buttonStyle: 'border border-[#0066FF] text-[#0066FF] bg-transparent',
    featured: false,
  },
];

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#0066FF]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0066FF]">Engagement Models</span>
            <div className="w-8 h-px bg-[#0066FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Flexible engagement options tailored to your project needs and business goals
          </p>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {plans.map((plan) => (
            <AnimatedItem key={plan.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                  plan.featured
                    ? 'border-2 border-[#0066FF]/20 shadow-lg shadow-blue-500/10 scale-[1.02] md:scale-105'
                    : 'border border-gray-100'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#338AFF] flex items-center justify-center mb-6">
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#0A1628] mb-2">{plan.title}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <p className="text-2xl font-bold text-[#0A1628] mb-6">{plan.price}</p>

                {/* CTA Button */}
                <button
                  className={`w-full rounded-xl px-6 h-11 text-sm font-semibold transition-all duration-300 ${plan.buttonStyle} hover:opacity-90`}
                >
                  {plan.buttonLabel}
                </button>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
