'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Cpu,
  Sprout,
  Wrench,
  Microscope,
  ArrowRight,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const featuredService = {
  icon: Heart,
  title: 'Healthcare Solutions',
  description:
    'Transform healthcare delivery with HIPAA-compliant EHR systems, telemedicine platforms, AI-powered diagnostics, and patient engagement tools that improve clinical outcomes and streamline operational workflows.',
  highlights: [
    'HIPAA-Compliant EHR Systems',
    'Telemedicine Platforms',
    'AI-Powered Diagnostics',
    'Patient Engagement Tools',
  ],
  tag: 'Core Service',
};

const secondaryServices = [
  {
    icon: Cpu,
    title: 'Computer Vision',
    description:
      'Leverage cutting-edge computer vision for image recognition, object detection, medical imaging analysis, autonomous systems, and real-time video processing.',
  },
  {
    icon: Sprout,
    title: 'Agriculture Technology',
    description:
      'Empower modern farming with IoT-based precision agriculture, crop monitoring systems, yield prediction models, drone analytics, and smart irrigation management.',
  },
  {
    icon: Wrench,
    title: 'Engineering IoT',
    description:
      'Build connected industrial ecosystems with custom IoT hardware integration, real-time sensor monitoring, predictive maintenance systems, and edge computing solutions.',
  },
  {
    icon: Microscope,
    title: 'Engineering Tech',
    description:
      'Accelerate engineering workflows with CAD/CAE integrations, simulation platforms, digital twin technology, and automated quality assurance systems.',
  },
];

/* ------------------------------------------------------------------ */
/*  Featured Card                                                      */
/* ------------------------------------------------------------------ */

function FeaturedCard() {
  return (
    <AnimatedItem variant="fade-up" delay={0}>
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
        className="group relative overflow-hidden rounded-2xl border border-[#0066FF]/20 cursor-pointer"
      >
        {/* Dark navy gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />

        {/* Decorative blue glow orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0066FF]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0066FF]/8 blur-3xl pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative flex flex-col lg:flex-row items-stretch">
          {/* Image / Visual placeholder */}
          <div className="relative w-full lg:w-5/12 min-h-[220px] lg:min-h-[340px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#0066FF]/5 flex items-center justify-center">
              {/* Abstract medical visual placeholder */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="w-40 h-40 lg:w-56 lg:h-56 rounded-full border border-[#0066FF]/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 lg:inset-6 rounded-full border border-[#0066FF]/15 border-dashed"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-[#0066FF]/30">
                    <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Fade overlay on the right edge for visual blending */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0d1f35] to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 p-8 lg:p-12 flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066FF]/15 text-[#4da3ff] text-xs font-bold uppercase tracking-wider border border-[#0066FF]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                {featuredService.tag}
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {featuredService.title}
            </h3>

            <p className="text-blue-200/70 leading-relaxed mb-8 max-w-xl text-[15px] lg:text-base">
              {featuredService.description}
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredService.highlights.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-white/5 text-blue-200/80 text-xs font-medium border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div>
              <motion.span
                className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 4 }}
              >
                Explore Healthcare Solutions
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0066FF]/60 to-transparent" />
      </motion.div>
    </AnimatedItem>
  );
}

/* ------------------------------------------------------------------ */
/*  Service Card (secondary)                                           */
/* ------------------------------------------------------------------ */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof secondaryServices)[number];
  index: number;
}) {
  return (
    <AnimatedItem variant="fade-up" delay={0.15 + index * 0.1}>
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full rounded-2xl border border-gray-200/80 bg-white overflow-hidden transition-all duration-300 hover:border-[#0066FF]/25 hover:shadow-2xl hover:shadow-[#0066FF]/[0.08]"
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#0066FF] to-[#0066FF]/30" />

        <div className="p-7 lg:p-8 flex flex-col h-full">
          {/* Icon + header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-[#0066FF]/15 shrink-0">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#0066FF]/30 group-hover:text-[#0066FF] transition-colors duration-300">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#0A1628] mb-3 tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed text-[15px] mb-6 flex-1">
            {service.description}
          </p>

          {/* Learn More */}
          <motion.span
            className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
            whileHover={{ x: 4 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </div>

        {/* Subtle corner glow on hover */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0066FF]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tr-2xl" />
      </motion.div>
    </AnimatedItem>
  );
}

/* ------------------------------------------------------------------ */
/*  Services Section                                                   */
/* ------------------------------------------------------------------ */

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/50" />

      {/* Decorative blurred shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0066FF]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Industry-Focused Software Solutions"
          description="We deliver specialized technology solutions across healthcare, agriculture, IoT, and computer vision to solve real-world challenges at scale."
        />

        {/* Featured Healthcare card — full width */}
        <div className="mb-8">
          <FeaturedCard />
        </div>

        {/* Secondary services — 2×2 grid on desktop, stacked on mobile */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {secondaryServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
