'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Smartphone, Palette, Settings, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions designed to solve your unique business challenges and accelerate growth.',
    accent: 'from-[#0066FF] to-[#004FCC]',
    tag: 'Most Popular',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud for optimal performance.',
    accent: 'from-sky-500 to-cyan-500',
    tag: null,
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI/ML technologies to automate processes and unlock insights.',
    accent: 'from-violet-500 to-purple-500',
    tag: 'Trending',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    accent: 'from-emerald-500 to-teal-500',
    tag: null,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive, engaging interfaces driving user satisfaction and retention.',
    accent: 'from-rose-500 to-pink-500',
    tag: null,
  },
  {
    icon: Settings,
    title: 'DevOps & Automation',
    description: 'Streamline your development pipeline with CI/CD, containerization, and infrastructure as code solutions.',
    accent: 'from-amber-500 to-orange-500',
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding section-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="Our Services"
          title="Comprehensive Software Solutions"
          description="Tailored to your business needs, powered by cutting-edge technology"
        />

        {/* Services Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedItem key={service.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group relative premium-card rounded-2xl p-8 h-full overflow-hidden"
              >
                {/* Subtle gradient corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50/80 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Service number in top-right */}
                <span className="absolute top-4 right-5 text-xs font-bold text-gray-200/80 group-hover:text-[#0066FF]/20 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Tag badge */}
                {service.tag && (
                  <div className="absolute top-5 left-5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      service.tag === 'Most Popular'
                        ? 'bg-[#0066FF]/10 text-[#0066FF]'
                        : 'bg-violet-500/10 text-violet-600'
                    }`}>
                      {service.tag === 'Trending' && <Sparkles className="w-2.5 h-2.5" />}
                      {service.tag}
                    </span>
                  </div>
                )}

                {/* Dot pattern background on hover */}
                <div className="absolute inset-0 rounded-2xl dot-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container with enhanced hover */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-400">
                  <service.icon className="w-7 h-7 text-white icon-hover-float" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-gradient-blue transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.span
                    className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0066FF]/0 to-transparent group-hover:via-[#0066FF]/15 transition-all duration-500" />
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bottom decorative separator */}
        <div className="mt-16 lg:mt-20">
          <div className="premium-separator">
            <div className="premium-separator-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
