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
  ArrowUpRight,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

interface Industry {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  tagColor: string;
  ringColor: string;
  tags: string[];
  stat: string;
}

const industries: Industry[] = [
  {
    icon: Heart,
    title: 'Healthcare',
    description:
      'HIPAA-compliant platforms for telemedicine, AI-powered diagnostics, and real-time patient engagement systems.',
    gradient: 'from-blue-500 to-blue-600',
    iconColor: 'text-blue-600',
    tagColor: 'bg-blue-50 text-blue-700 ring-blue-100',
    ringColor: 'group-hover:ring-blue-200/60',
    tags: ['HIPAA', 'AI Diagnostics', 'Telehealth'],
    stat: '30+ Projects',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    description:
      'Precision farming platforms with IoT sensor integration, crop analytics, and automated irrigation systems.',
    gradient: 'from-emerald-500 to-emerald-600',
    iconColor: 'text-emerald-600',
    tagColor: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    ringColor: 'group-hover:ring-emerald-200/60',
    tags: ['IoT Sensors', 'Drone Analytics', 'Precision Ag'],
    stat: '20+ Projects',
  },
  {
    icon: Cpu,
    title: 'Computer Vision',
    description:
      'Image recognition, object detection, and autonomous systems powered by deep learning architectures.',
    gradient: 'from-violet-500 to-violet-600',
    iconColor: 'text-violet-600',
    tagColor: 'bg-violet-50 text-violet-700 ring-violet-100',
    ringColor: 'group-hover:ring-violet-200/60',
    tags: ['Deep Learning', 'OCR', 'Autonomous'],
    stat: '25+ Projects',
  },
  {
    icon: Wrench,
    title: 'Manufacturing',
    description:
      'Industrial automation, digital twins, and predictive maintenance solutions for smart factories.',
    gradient: 'from-amber-500 to-amber-600',
    iconColor: 'text-amber-600',
    tagColor: 'bg-amber-50 text-amber-700 ring-amber-100',
    ringColor: 'group-hover:ring-amber-200/60',
    tags: ['Digital Twins', 'SCADA', 'Predictive Mx'],
    stat: '15+ Projects',
  },
  {
    icon: Building2,
    title: 'Enterprise & Fintech',
    description:
      'Financial analytics, PCI-compliant payment systems, and enterprise resource management platforms.',
    gradient: 'from-sky-500 to-sky-600',
    iconColor: 'text-sky-600',
    tagColor: 'bg-sky-50 text-sky-700 ring-sky-100',
    ringColor: 'group-hover:ring-sky-200/60',
    tags: ['PCI-DSS', 'ERP', 'Analytics'],
    stat: '40+ Projects',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Interactive LMS platforms, virtual classrooms with gamification, and adaptive learning engines.',
    gradient: 'from-rose-500 to-rose-600',
    iconColor: 'text-rose-600',
    tagColor: 'bg-rose-50 text-rose-700 ring-rose-100',
    ringColor: 'group-hover:ring-rose-200/60',
    tags: ['LMS', 'Gamification', 'VR Classrooms'],
    stat: '18+ Projects',
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-gray-50/50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title="Industries We Serve"
          description="Domain expertise driving digital transformation across healthcare, agriculture, AI, and enterprise."
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedItem
                key={industry.title}
                variant="fade-up"
                delay={index * 0.07}
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                  className={`group relative flex h-full flex-col rounded-2xl border border-gray-200/70 bg-white p-5 ring-1 ring-gray-100/50 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-gray-300/80 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08),0_1px_3px_0_rgba(0,0,0,0.04)] hover:ring-gray-200/60 ${industry.ringColor}`}
                >
                  {/* Top gradient accent stripe */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${industry.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Header row: icon + stat */}
                  <div className="mb-3 flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${industry.gradient} shadow-sm`}
                    >
                      <Icon className="h-[18px] w-[18px] text-white" strokeWidth={2} />
                    </div>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      {industry.stat}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 text-[15px] font-semibold text-[#0A1628] leading-snug">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-3.5 text-[13px] leading-relaxed text-gray-500 flex-grow">
                    {industry.description}
                  </p>

                  {/* Tags + arrow */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100/80">
                    <div className="flex flex-wrap gap-1.5">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ${industry.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-400 transition-all duration-300 group-hover:bg-gradient-to-br ${industry.gradient} group-hover:text-white group-hover:shadow-sm`}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
