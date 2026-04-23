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

const services = [
  {
    icon: Heart,
    title: 'Healthcare Solutions',
    description:
      'HIPAA-compliant EHR systems, telemedicine platforms, and AI-powered diagnostics that improve clinical outcomes and patient care.',
    featured: true,
    gradient: 'from-[#0066FF] to-[#338AFF]',
    cardBg: 'bg-white',
    iconBg: 'bg-gradient-to-br from-[#0066FF] to-[#338AFF]',
    borderHover: 'hover:border-[#0066FF]/30',
    accentColor: '#0066FF',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description:
      'Image recognition, object detection, medical imaging analysis, and real-time video processing solutions.',
    gradient: 'from-emerald-500 to-emerald-600',
    cardBg: 'bg-white',
    iconBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    borderHover: 'hover:border-emerald-300/60',
    accentColor: '#10B981',
  },
  {
    icon: Sprout,
    title: 'Agriculture Technology',
    description:
      'IoT-based precision agriculture, crop monitoring, yield prediction models, and smart irrigation management.',
    gradient: 'from-[#0066FF] to-[#338AFF]',
    cardBg: 'bg-white',
    iconBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderHover: 'hover:border-[#0066FF]/30',
    accentColor: '#0066FF',
  },
  {
    icon: Wrench,
    title: 'Engineering IoT',
    description:
      'Connected industrial ecosystems with sensor monitoring, predictive maintenance, and edge computing.',
    gradient: 'from-emerald-500 to-emerald-600',
    cardBg: 'bg-white',
    iconBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    borderHover: 'hover:border-emerald-300/60',
    accentColor: '#10B981',
  },
  {
    icon: Microscope,
    title: 'Engineering Tech',
    description:
      'CAD/CAE integrations, simulation platforms, digital twin technology, and automated quality assurance.',
    gradient: 'from-[#0066FF] to-[#338AFF]',
    cardBg: 'bg-white',
    iconBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderHover: 'hover:border-[#0066FF]/30',
    accentColor: '#0066FF',
  },
];

/* ------------------------------------------------------------------ */
/*  Service Card                                                       */
/* ------------------------------------------------------------------ */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const isFeatured = service.featured;

  return (
    <AnimatedItem
      variant="fade-up"
      delay={index * 0.08}
      className={isFeatured ? 'md:col-span-1 lg:col-span-1' : ''}
    >
      <motion.div
        whileHover={{
          y: -4,
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
        className={`group relative h-full rounded-2xl border border-gray-200/80 ${service.cardBg} p-6 sm:p-7 transition-all duration-300 ${service.borderHover} hover:shadow-lg cursor-pointer overflow-hidden`}
      >
        {/* Top gradient accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Icon */}
        <div className={`mb-5 w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105`}>
          <service.icon className={`w-6 h-6 ${isFeatured ? 'text-white' : service.accentColor === '#0066FF' ? 'text-[#0066FF]' : 'text-emerald-600'}`} strokeWidth={1.8} />
        </div>

        {/* Featured badge */}
        {isFeatured && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-[#0066FF] border border-blue-100 mb-3">
            Primary Service
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-gray-900 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Learn more link */}
        <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.accentColor === '#0066FF' ? 'text-gray-400 group-hover:text-[#0066FF]' : 'text-gray-400 group-hover:text-emerald-600'} transition-colors duration-300`}>
          Learn more
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </motion.div>
    </AnimatedItem>
  );
}

/* ------------------------------------------------------------------ */
/*  Services Section                                                   */
/* ------------------------------------------------------------------ */

export default function Services() {
  const featured = services[0];
  const second = services[1];
  const remaining = services.slice(2);

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Clean subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Industry-Focused Software Solutions"
          description="We build transformative technology solutions tailored to the unique challenges of each industry we serve."
        />

        {/* Top row: Featured Healthcare + Computer Vision */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-5 lg:mb-6"
        >
          <ServiceCard service={featured} index={0} />
          <ServiceCard service={second} index={1} />
        </AnimatedSection>

        {/* Bottom row: 3 equal cards */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {remaining.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 2} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
