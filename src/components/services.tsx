'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Cpu,
  Sprout,
  Wrench,
  Microscope,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const services = [
  {
    icon: Heart,
    title: 'Healthcare Solutions',
    description:
      'HIPAA-compliant EHR systems, telemedicine platforms, and AI-powered diagnostics that improve clinical outcomes and patient care.',
    highlights: ['HIPAA Compliant', 'AI Diagnostics', 'Telemedicine'],
    featured: true,
    cardGradient: 'linear-gradient(135deg, #FAFCFE 0%, #F8FBFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0EA5E9, #3B82F6)',
    accentColor: '#0EA5E9',
    glowColor: 'rgba(14, 165, 233, 0.08)',
    tagBg: 'bg-sky-50/50 text-sky-700 border-sky-100/50',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description:
      'Image recognition, object detection, medical imaging analysis, and real-time video processing solutions.',
    highlights: ['Object Detection', 'Medical Imaging', 'Real-time Processing'],
    cardGradient: 'linear-gradient(135deg, #FDFAFF 0%, #FCF9FF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #A855F7, #C084FC)',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.08)',
    tagBg: 'bg-purple-50/50 text-purple-700 border-purple-100/50',
  },
  {
    icon: Sprout,
    title: 'Agriculture Technology',
    description:
      'IoT-based precision agriculture, crop monitoring, yield prediction models, and smart irrigation management.',
    highlights: ['IoT Sensors', 'Yield Prediction', 'Smart Irrigation'],
    cardGradient: 'linear-gradient(135deg, #FAFEFB 0%, #F7FEF9 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #10B981, #34D399)',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.08)',
    tagBg: 'bg-emerald-50/50 text-emerald-700 border-emerald-100/50',
  },
  {
    icon: Wrench,
    title: 'Engineering IoT',
    description:
      'Connected industrial ecosystems with sensor monitoring, predictive maintenance, and edge computing.',
    highlights: ['Predictive Maintenance', 'Edge Computing', 'SCADA'],
    cardGradient: 'linear-gradient(135deg, #FFFCF5 0%, #FFFBF0 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.08)',
    tagBg: 'bg-amber-50/50 text-amber-700 border-amber-100/50',
  },
  {
    icon: Microscope,
    title: 'Engineering Tech',
    description:
      'CAD/CAE integrations, simulation platforms, digital twin technology, and automated quality assurance.',
    highlights: ['Digital Twins', 'CAD/CAE', 'Quality Automation'],
    cardGradient: 'linear-gradient(135deg, #FFFAFC 0%, #FFF8FB 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
    accentColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.08)',
    tagBg: 'bg-pink-50/50 text-pink-700 border-pink-100/50',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <AnimatedItem variant="fade-up" delay={index * 0.08}>
      <motion.div
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
        }}
        className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: service.cardGradient,
          boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {/* Animated glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)`,
          }}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div 
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
          />
        </div>

        <div className="relative p-7 h-full flex flex-col">
          {/* Icon with floating animation */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
            className="mb-5 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            style={{ background: service.iconGradient }}
          >
            <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.div>

          {/* Featured badge */}
          {service.featured && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 mb-4 w-fit shadow-sm"
            >
              <Sparkles className="w-3 h-3" style={{ color: service.accentColor }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: service.accentColor }}>
                Core Service
              </span>
            </motion.div>
          )}

          {/* Title */}
          <h3 className="font-bold text-gray-900 tracking-tight mb-3 text-lg group-hover:text-gray-900 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.highlights.map((h) => (
              <motion.span
                key={h}
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold border backdrop-blur-sm ${service.tagBg}`}
              >
                <CheckCircle2 className="w-3 h-3" />
                {h}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 mt-auto group/cta">
            <span className="text-sm font-semibold text-gray-700 group-hover/cta:text-gray-900 transition-colors duration-300">
              Explore solution
            </span>
            <motion.div
              whileHover={{ x: 3, y: -3 }}
              className="w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
              style={{ background: service.iconGradient }}
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: service.iconGradient }}
        />
      </motion.div>
    </AnimatedItem>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title={<>Industry-Focused <span className="gradient-text">Software Solutions</span></>}
          description="We combine deep domain expertise with cutting-edge technology to deliver solutions that create real, measurable impact."
        />

        {/* Services Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
