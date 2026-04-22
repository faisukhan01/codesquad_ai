'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Smartphone, Palette, Settings, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions designed to solve your unique business challenges and accelerate growth.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud for optimal performance.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI/ML technologies to automate processes and unlock insights.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive, engaging interfaces driving user satisfaction and retention.',
  },
  {
    icon: Settings,
    title: 'DevOps & Automation',
    description: 'Streamline your development pipeline with CI/CD, containerization, and infrastructure as code solutions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:shadow-xl hover:shadow-blue-500/5 transition-shadow duration-300 shimmer-effect"
              >
                {/* Service number in top-right */}
                <span className="absolute top-4 right-5 text-xs font-semibold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Dot pattern background */}
                <div className="absolute inset-0 rounded-2xl dot-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gradient border overlay on hover */}
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-transparent to-transparent group-hover:from-[#0066FF]/40 group-hover:to-[#338AFF]/20 group-hover:bg-gradient-to-br transition-all duration-500 -z-10">
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#338AFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-[#0A1628] mb-3 group-hover:text-[#0066FF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#0066FF] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
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
