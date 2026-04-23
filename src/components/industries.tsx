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
  FolderKanban,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

interface Industry {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
  iconBg: string;
  iconColor: string;
  projects: string;
}

const industries: Industry[] = [
  {
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description:
      'HIPAA-compliant telemedicine, EHR systems, AI diagnostics, and patient engagement platforms.',
    accent: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    projects: '25+',
  },
  {
    icon: Sprout,
    title: 'Agriculture & AgriTech',
    description:
      'Precision agriculture, crop monitoring, IoT-based irrigation, and drone analytics.',
    accent: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    projects: '15+',
  },
  {
    icon: Cpu,
    title: 'Computer Vision & AI',
    description:
      'Image recognition, object detection, medical imaging, and autonomous systems.',
    accent: 'from-violet-500 to-violet-600',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    projects: '20+',
  },
  {
    icon: Wrench,
    title: 'Manufacturing & IoT',
    description:
      'Industrial IoT, predictive maintenance, digital twins, and quality inspection.',
    accent: 'from-amber-500 to-amber-600',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    projects: '18+',
  },
  {
    icon: Building2,
    title: 'Enterprise & Fintech',
    description:
      'Financial analytics, secure payment systems, and enterprise resource planning.',
    accent: 'from-sky-500 to-sky-600',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    projects: '30+',
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    description:
      'Interactive learning platforms, LMS systems, and virtual classrooms.',
    accent: 'from-rose-500 to-rose-600',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    projects: '12+',
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="group relative h-full rounded-xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-900/[0.06] hover:border-gray-200"
    >
      {/* Accent gradient bar */}
      <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-xl bg-gradient-to-r ${industry.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />

      <div className="p-6 pt-7 sm:p-7 sm:pt-8">
        {/* Header row: icon + badge */}
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${industry.iconBg} transition-transform duration-300 group-hover:scale-105`}
          >
            <Icon className={`h-5 w-5 ${industry.iconColor}`} strokeWidth={1.8} />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-500 ring-1 ring-inset ring-gray-200/60">
            <FolderKanban className="h-3 w-3" />
            {industry.projects} projects
          </span>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-[15px] font-semibold leading-snug text-[#0A1628] transition-colors duration-200 group-hover:text-[#0066FF]">
          {industry.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-500">
          {industry.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-gradient-to-b from-gray-50/50 to-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across healthcare, agriculture, AI, and enterprise sectors."
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <AnimatedItem key={industry.title} variant="fade-up">
              <IndustryCard industry={industry} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
