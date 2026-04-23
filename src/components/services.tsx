'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Cpu, Sprout, Wrench, Microscope, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const services = [
  {
    icon: Heart,
    title: 'Healthcare Solutions',
    description: 'Transform healthcare delivery with HIPAA-compliant EHR systems, telemedicine platforms, AI-powered diagnostics, and patient engagement tools that improve outcomes and streamline clinical workflows.',
    accent: 'from-[#0066FF] to-[#0052CC]',
    tag: 'Core Service',
    featured: true,
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Leverage cutting-edge computer vision technologies for image recognition, object detection, medical imaging analysis, autonomous systems, and real-time video processing solutions.',
    accent: 'from-[#0066FF] to-[#004FCC]',
    tag: null,
    featured: false,
  },
  {
    icon: Sprout,
    title: 'Agriculture Technology',
    description: 'Empower modern farming with IoT-based precision agriculture, crop monitoring systems, yield prediction models, drone analytics, and smart irrigation management platforms.',
    accent: 'from-emerald-500 to-teal-500',
    tag: null,
    featured: false,
  },
  {
    icon: Wrench,
    title: 'Engineering IoT',
    description: 'Build connected industrial ecosystems with custom IoT hardware integration, real-time sensor monitoring, predictive maintenance systems, and edge computing solutions.',
    accent: 'from-sky-500 to-cyan-500',
    tag: null,
    featured: false,
  },
  {
    icon: Microscope,
    title: 'Engineering Tech',
    description: 'Accelerate engineering workflows with CAD/CAE integrations, simulation platforms, digital twin technology, and automated quality assurance systems for manufacturing excellence.',
    accent: 'from-violet-500 to-purple-500',
    tag: 'Emerging',
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Industry-Focused Software Solutions"
          description="We deliver specialized technology solutions across healthcare, agriculture, IoT, and computer vision to solve real-world challenges."
        />

        {/* Services Grid - First row: 2 large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => (
            <AnimatedItem key={service.title} variant="fade-up" delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:border-[#0066FF]/20 hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.accent}`} />

                <div className="p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-blue-500/15">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    {service.tag && (
                      <span className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-semibold border border-[#0066FF]/15">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                    {service.description}
                  </p>

                  <motion.span
                    className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>

        {/* Services Grid - Second row: 3 smaller cards */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(2).map((service, index) => (
            <AnimatedItem key={service.title} variant="fade-up" delay={0.1 * (index + 2)}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:border-[#0066FF]/20 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${service.accent}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-md shadow-blue-500/10">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.tag && (
                      <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 text-xs font-semibold border border-violet-500/15">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                    {service.description}
                  </p>

                  <motion.span
                    className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
