'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Heart,
  Sprout,
  Cpu,
  Wrench,
  Building2,
  GraduationCap,
  FolderKanban,
  TrendingUp,
  ArrowUpRight,
  Users,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

interface Industry {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  glowColor: string;
  iconFrom: string;
  iconTo: string;
  projects: string;
  clients: string;
  growth: string;
  tags: string[];
}

const industries: Industry[] = [
  {
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description:
      'HIPAA-compliant telemedicine, EHR systems, AI diagnostics, and patient engagement platforms.',
    gradient: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    iconFrom: '#3B82F6',
    iconTo: '#22D3EE',
    projects: '25+',
    clients: '18',
    growth: '+40%',
    tags: ['HIPAA', 'AI Diagnostics', 'Telehealth'],
  },
  {
    icon: Sprout,
    title: 'Agriculture & AgriTech',
    description:
      'Precision agriculture, crop monitoring, IoT-based irrigation, and drone analytics.',
    gradient: 'from-emerald-500 to-green-400',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    iconFrom: '#10B981',
    iconTo: '#4ADE80',
    projects: '15+',
    clients: '12',
    growth: '+35%',
    tags: ['IoT Sensors', 'Drone Analytics', 'Precision Ag'],
  },
  {
    icon: Cpu,
    title: 'Computer Vision & AI',
    description:
      'Image recognition, object detection, medical imaging, and autonomous systems.',
    gradient: 'from-violet-500 to-purple-400',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    iconFrom: '#8B5CF6',
    iconTo: '#C084FC',
    projects: '20+',
    clients: '15',
    growth: '+55%',
    tags: ['Deep Learning', 'OCR', 'Autonomous'],
  },
  {
    icon: Wrench,
    title: 'Manufacturing & IoT',
    description:
      'Industrial IoT, predictive maintenance, digital twins, and quality inspection.',
    gradient: 'from-amber-500 to-orange-400',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    iconFrom: '#F59E0B',
    iconTo: '#FB923C',
    projects: '18+',
    clients: '14',
    growth: '+30%',
    tags: ['Digital Twins', 'SCADA', 'Predictive Mx'],
  },
  {
    icon: Building2,
    title: 'Enterprise & Fintech',
    description:
      'Financial analytics, secure payment systems, and enterprise resource planning.',
    gradient: 'from-sky-500 to-blue-400',
    glowColor: 'rgba(14, 165, 233, 0.15)',
    iconFrom: '#0EA5E9',
    iconTo: '#60A5FA',
    projects: '30+',
    clients: '22',
    growth: '+45%',
    tags: ['PCI-DSS', 'ERP', 'Analytics'],
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    description:
      'Interactive learning platforms, LMS systems, and virtual classrooms.',
    gradient: 'from-rose-500 to-pink-400',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    iconFrom: '#F43F5E',
    iconTo: '#FB7185',
    projects: '12+',
    clients: '9',
    growth: '+60%',
    tags: ['LMS', 'Gamification', 'VR Classrooms'],
  },
];

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = industry.icon;

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 800 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ z: 30 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
      >
        {/* Animated gradient border on hover */}
        <motion.div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${industry.iconFrom}40, transparent 40%, transparent 60%, ${industry.iconTo}40)`,
          }}
        />

        {/* Top gradient accent bar */}
        <div className="absolute inset-x-0 top-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`h-full w-full bg-gradient-to-r ${industry.gradient}`} />
        </div>

        {/* Background decorative gradient orb */}
        <div
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${industry.iconFrom}, transparent 70%)`,
          }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${industry.iconTo}, transparent 70%)`,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-7 flex flex-col h-full">
          {/* Header: Icon + Project Badge */}
          <div className="flex items-start justify-between mb-5">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Icon glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${industry.iconFrom}, ${industry.iconTo})`,
                }}
              />
              {/* Icon container */}
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${industry.iconFrom}20, ${industry.iconTo}15)`,
                  border: `1px solid ${industry.iconFrom}30`,
                }}
              >
                <Icon
                  className="h-7 w-7"
                  style={{ color: industry.iconFrom }}
                  strokeWidth={1.5}
                />
              </div>
            </motion.div>

            <div className="flex flex-col items-end gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/70 ring-1 ring-inset ring-white/[0.08]">
                <FolderKanban className="h-3 w-3" />
                {industry.projects} projects
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400/80">
                <TrendingUp className="h-3 w-3" />
                {industry.growth} YoY
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2.5 text-lg font-semibold leading-snug text-white group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300" style={{
            // @ts-expect-error -- bgClip is valid CSS
            '--hover-gradient': `linear-gradient(135deg, ${industry.iconFrom}, ${industry.iconTo})`,
          }}>
            <span className="group-hover:hidden">{industry.title}</span>
            <span
              className="hidden group-hover:inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${industry.iconFrom}, ${industry.iconTo})`,
              }}
            >
              {industry.title}
            </span>
          </h3>

          {/* Description */}
          <p className="mb-5 text-[13px] leading-relaxed text-white/45 flex-grow">
            {industry.description}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-2.5 group-hover:bg-white/[0.06] transition-colors duration-300">
              <div className="flex items-center gap-1.5 mb-1">
                <FolderKanban className="h-3 w-3 text-white/30" />
                <span className="text-[10px] uppercase tracking-wider text-white/30 font-medium">Projects</span>
              </div>
              <span className="text-lg font-bold text-white/90">{industry.projects}</span>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-2.5 group-hover:bg-white/[0.06] transition-colors duration-300">
              <div className="flex items-center gap-1.5 mb-1">
                <Users className="h-3 w-3 text-white/30" />
                <span className="text-[10px] uppercase tracking-wider text-white/30 font-medium">Clients</span>
              </div>
              <span className="text-lg font-bold text-white/90">{industry.clients}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {industry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md px-2 py-0.5 text-[10px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] group-hover:text-white/55 group-hover:border-white/[0.1] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Learn more link */}
          <div className="mt-auto pt-3 border-t border-white/[0.06] group-hover:border-white/[0.1] transition-colors duration-300">
            <motion.div
              className="flex items-center gap-1.5 text-[12px] font-medium"
              style={{ color: `${industry.iconFrom}90` }}
            >
              <span className="group-hover:underline underline-offset-2">Explore solutions</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0D1F3C] to-[#0A1628] py-20 md:py-28 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left gradient orb */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0066FF]/[0.04] blur-[100px]" />
        {/* Bottom-right gradient orb */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#0066FF]/[0.03] blur-[100px]" />
        {/* Center subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#0066FF]/[0.02] blur-[120px]" />
      </div>

      {/* Section-wide grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across healthcare, agriculture, AI, and enterprise sectors — delivering solutions that drive measurable outcomes."
          light
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => (
            <AnimatedItem key={industry.title} variant="fade-up" delay={index * 0.08}>
              <IndustryCard industry={industry} index={index} />
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bottom summary bar */}
        <AnimatedSection variant="fade-up" delay={0.6} className="mt-12 lg:mt-16">
          <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-5 sm:px-8 sm:py-6 overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-20 rounded-full bg-[#0066FF]/[0.08] blur-[60px]" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20">
                  <TrendingUp className="h-5 w-5 text-[#0066FF]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">
                    Delivering across 6+ industries with 120+ successful projects
                  </p>
                  <p className="text-[12px] text-white/40 mt-0.5">
                    Average client satisfaction score of 4.9/5.0
                  </p>
                </div>
              </div>
              <a
                href="https://calendly.com/code_squad/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 px-5 py-2.5 text-[13px] font-semibold text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss Your Industry</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}
