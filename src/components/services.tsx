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
    themeColor: '#0066FF',
    gradientFrom: '#0066FF',
    gradientTo: '#4da3ff',
  },
  {
    icon: Sprout,
    title: 'Agriculture Technology',
    description:
      'Empower modern farming with IoT-based precision agriculture, crop monitoring systems, yield prediction models, drone analytics, and smart irrigation management.',
    themeColor: '#16a34a',
    gradientFrom: '#16a34a',
    gradientTo: '#4ade80',
  },
  {
    icon: Wrench,
    title: 'Engineering IoT',
    description:
      'Build connected industrial ecosystems with custom IoT hardware integration, real-time sensor monitoring, predictive maintenance systems, and edge computing solutions.',
    themeColor: '#f59e0b',
    gradientFrom: '#f59e0b',
    gradientTo: '#fbbf24',
  },
  {
    icon: Microscope,
    title: 'Engineering Tech',
    description:
      'Accelerate engineering workflows with CAD/CAE integrations, simulation platforms, digital twin technology, and automated quality assurance systems.',
    themeColor: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#a78bfa',
  },
];

/* ------------------------------------------------------------------ */
/*  Featured Card                                                      */
/* ------------------------------------------------------------------ */

function FeaturedCard() {
  return (
    <AnimatedItem variant="fade-up" delay={0}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -8, transition: { duration: 0.4, ease: 'easeOut' } }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
      >
        {/* Animated glowing border */}
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-[-1px] rounded-2xl overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-50%]"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, #0066FF 15%, transparent 30%, transparent 70%, #0066FF 85%, transparent 100%)',
                opacity: 0.4,
              }}
            />
          </div>
        </div>

        {/* Inner border mask */}
        <div className="absolute inset-[1px] rounded-2xl bg-[#0A1628] z-[1]" />

        {/* Dark navy gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628] z-[2]" />

        {/* Animated blue glow orbs */}
        <motion.div
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -10, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0066FF]/10 blur-3xl pointer-events-none z-[3]"
        />
        <motion.div
          animate={{
            x: [0, -12, 8, 0],
            y: [0, 12, -8, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0066FF]/8 blur-3xl pointer-events-none z-[3]"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0066FF]/5 blur-3xl pointer-events-none z-[3]"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-[4]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-[5] flex flex-col lg:flex-row items-stretch">
          {/* Image / Visual placeholder */}
          <div className="relative w-full lg:w-5/12 min-h-[220px] lg:min-h-[340px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#0066FF]/5 flex items-center justify-center">
              {/* Abstract medical visual placeholder with floating animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="w-40 h-40 lg:w-56 lg:h-56 rounded-full border border-[#0066FF]/20"
                />
                {/* Dashed middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 lg:inset-6 rounded-full border border-[#0066FF]/15 border-dashed"
                />
                {/* Pulsing inner ring */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-10 lg:inset-14 rounded-full border border-[#0066FF]/25"
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0,102,255,0.3)',
                        '0 0 40px rgba(0,102,255,0.5)',
                        '0 0 20px rgba(0,102,255,0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-[#0066FF]/30"
                  >
                    <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </motion.div>
                </div>

                {/* Floating orbital dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2.5 h-2.5 rounded-full bg-[#0066FF]/60 shadow-lg shadow-[#0066FF]/40" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-[#4da3ff]/50 shadow-lg shadow-[#4da3ff]/30" />
                </motion.div>
              </motion.div>
            </div>
            {/* Fade overlay on the right edge for visual blending */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0d1f35] to-transparent z-[6]" />
          </div>

          {/* Content */}
          <div className="relative z-[5] flex-1 p-8 lg:p-12 flex flex-col justify-center">
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
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0,102,255,0.5)' }}
                  className="px-3 py-1 rounded-full bg-white/5 text-blue-200/80 text-xs font-medium border border-white/10 transition-colors duration-300"
                >
                  {item}
                </motion.span>
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

        {/* Bottom accent line with glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-[5]">
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-full bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"
          />
        </div>
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
  const numberLabel = `0${index + 1}`;

  return (
    <AnimatedItem variant="fade-up" delay={0.1 + index * 0.08}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1 + index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.35, ease: 'easeOut' },
        }}
        className="group relative h-full rounded-2xl border border-gray-200/80 bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066FF]/[0.08]"
        style={{
          ['--card-theme' as string]: service.themeColor,
          ['--card-gradient-from' as string]: service.gradientFrom,
          ['--card-gradient-to' as string]: service.gradientTo,
        }}
      >
        {/* Large background number indicator */}
        <span
          className="absolute -right-4 -top-6 text-[120px] lg:text-[140px] font-black leading-none pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
          style={{ color: service.themeColor }}
        >
          {numberLabel}
        </span>

        {/* Left gradient border — appears on hover */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent, ${service.gradientFrom}, ${service.gradientTo}, transparent)`,
          }}
        />

        {/* Top accent bar — changes color on hover */}
        <div
          className="h-[3px] w-full transition-all duration-500"
          style={{
            background: `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientFrom}33)`,
          }}
        />

        <div className="p-7 lg:p-8 flex flex-col h-full relative">
          {/* Icon + header row */}
          <div className="flex items-start justify-between mb-5">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                boxShadow: `0 8px 24px -4px ${service.themeColor}25`,
              }}
            >
              <service.icon className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300 group-hover:border-transparent"
              style={{
                backgroundColor: 'transparent',
              }}
            >
              <motion.div
                className="rounded-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: service.themeColor }}
              />
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300 relative z-10" />
            </motion.div>
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
            className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
            style={{ color: service.themeColor }}
            whileHover={{ x: 4 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </div>

        {/* Corner glow on hover */}
        <div
          className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-tr-2xl"
          style={{
            background: `radial-gradient(circle at top right, ${service.themeColor}0D, transparent 70%)`,
          }}
        />

        {/* Bottom-left subtle glow on hover */}
        <div
          className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-bl-2xl"
          style={{
            background: `radial-gradient(circle at bottom left, ${service.themeColor}08, transparent 70%)`,
          }}
        />
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
      {/* Layered background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/50" />

      {/* Gradient mesh — multiple blurred shapes for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0066FF]/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0066FF]/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#4da3ff]/[0.015] blur-[80px] pointer-events-none" />

      {/* Subtle moving accent */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0066FF]/[0.015] blur-3xl pointer-events-none"
      />

      {/* Thin decorative lines */}
      <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Industry-Focused Software Solutions"
          description="We deliver specialized technology solutions across healthcare, agriculture, IoT, and computer vision to solve real-world challenges at scale."
        />

        {/* Featured Healthcare card — full width */}
        <div className="mb-10 lg:mb-12">
          <FeaturedCard />
        </div>

        {/* Secondary services — 2×2 grid on desktop, stacked on mobile */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7"
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
