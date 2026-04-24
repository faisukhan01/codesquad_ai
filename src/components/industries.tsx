'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Sprout,
  Cpu,
  Wrench,
  Building2,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

interface Industry {
  icon: React.ElementType;
  title: string;
  description: string;
  cardGradient: string;
  iconGradient: string;
  accentColor: string;
  glowColor: string;
  tagBg: string;
  tags: string[];
  stat: string;
}

const industries: Industry[] = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant platforms for telemedicine, AI-powered diagnostics, and real-time patient engagement systems.',
    cardGradient: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0066FF, #338AFF)',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.08)',
    tagBg: 'bg-blue-50/50 text-blue-700 border-blue-100/50',
    tags: ['HIPAA', 'AI Diagnostics', 'Telehealth'],
    stat: '30+ Projects',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'Precision farming platforms with IoT sensor integration, crop analytics, and automated irrigation systems.',
    cardGradient: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0066FF, #338AFF)',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.08)',
    tagBg: 'bg-blue-50/50 text-blue-700 border-blue-100/50',
    tags: ['IoT Sensors', 'Drone Analytics', 'Precision Ag'],
    stat: '20+ Projects',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and autonomous systems powered by deep learning architectures.',
    cardGradient: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0066FF, #338AFF)',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.08)',
    tagBg: 'bg-blue-50/50 text-blue-700 border-blue-100/50',
    tags: ['Deep Learning', 'OCR', 'Autonomous'],
    stat: '25+ Projects',
  },
  {
    icon: Wrench,
    title: 'Manufacturing',
    description: 'Industrial automation, digital twins, and predictive maintenance solutions for smart factories.',
    cardGradient: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0066FF, #338AFF)',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.08)',
    tagBg: 'bg-blue-50/50 text-blue-700 border-blue-100/50',
    tags: ['Digital Twins', 'SCADA', 'Predictive Mx'],
    stat: '15+ Projects',
  },
  {
    icon: Building2,
    title: 'Enterprise & Fintech',
    description: 'Financial analytics, PCI-compliant payment systems, and enterprise resource management platforms.',
    cardGradient: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0066FF, #338AFF)',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.08)',
    tagBg: 'bg-blue-50/50 text-blue-700 border-blue-100/50',
    tags: ['PCI-DSS', 'ERP', 'Analytics'],
    stat: '40+ Projects',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Interactive LMS platforms, virtual classrooms with gamification, and adaptive learning engines.',
    cardGradient: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)',
    iconGradient: 'linear-gradient(135deg, #0066FF, #338AFF)',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.08)',
    tagBg: 'bg-blue-50/50 text-blue-700 border-blue-100/50',
    tags: ['LMS', 'Gamification', 'VR Classrooms'],
    stat: '18+ Projects',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title={<>Industries <span className="gradient-text">We Serve</span></>}
          description="Deep domain expertise across the sectors that matter most — delivering solutions that understand your industry's unique challenges."
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedItem key={industry.title} variant="fade-up" delay={index * 0.08}>
                <motion.div
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
                  }}
                  className="group relative flex h-full flex-col rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    background: industry.cardGradient,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Animated glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${industry.glowColor}, transparent 70%)`,
                    }}
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-7 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-5 flex items-start justify-between">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        style={{ background: industry.iconGradient }}
                      >
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm"
                      >
                        <TrendingUp className="w-3 h-3" style={{ color: industry.accentColor }} />
                        <span className="text-[11px] font-bold" style={{ color: industry.accentColor }}>
                          {industry.stat}
                        </span>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-bold text-gray-900 leading-snug group-hover:text-gray-900 transition-colors duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-gray-600 flex-grow">
                      {industry.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {industry.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className={`inline-flex items-center rounded-xl px-3 py-1.5 text-[11px] font-semibold border backdrop-blur-sm ${industry.tagBg}`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                  </div>

                  {/* Bottom accent bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: industry.iconGradient }}
                  />
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
