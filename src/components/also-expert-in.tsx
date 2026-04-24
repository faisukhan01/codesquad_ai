'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GitBranch,
  Settings,
  Code2,
  Globe,
  Shield,
  Container,
  Zap,
  Activity,
  Target,
  Server,
  Lock,
  Wifi,
  Database,
  Boxes,
  Radio,
  Search,
  BarChart3,
  Flame,
  GitFork,
  FileCheck,
  Bug,
  Terminal,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

/* ── Row 1: Core Practices ── */
const row1 = [
  { name: 'Git', icon: GitBranch },
  { name: 'CI/CD', icon: Settings },
  { name: 'REST APIs', icon: Code2 },
  { name: 'Microservices', icon: Globe },
  { name: 'Security', icon: Shield },
  { name: 'Containers', icon: Container },
  { name: 'Performance', icon: Zap },
  { name: 'Agile', icon: Activity },
  { name: 'Scrum', icon: Target },
  { name: 'DevOps', icon: Server },
  { name: 'TDD', icon: Bug },
  { name: 'WebSocket', icon: Wifi },
];

/* ── Row 2: Infrastructure & Tooling ── */
const row2 = [
  { name: 'Redis', icon: Database },
  { name: 'Nginx', icon: Server },
  { name: 'Kafka', icon: Radio },
  { name: 'Elasticsearch', icon: Search },
  { name: 'Grafana', icon: BarChart3 },
  { name: 'Prometheus', icon: Flame },
  { name: 'Jenkins', icon: GitFork },
  { name: 'GitHub Actions', icon: FileCheck },
  { name: 'SonarQube', icon: Bug },
  { name: 'OWASP', icon: Lock },
  { name: 'Docker Compose', icon: Boxes },
  { name: 'Linux', icon: Terminal },
];

function Chip({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center gap-2.5 mx-3 sm:mx-4 py-3 px-6 rounded-full bg-white border border-gray-200/80 text-gray-600 text-sm font-medium select-none cursor-default shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#0066FF]/40 hover:shadow-[0_4px_12px_rgba(0,102,255,0.08)] hover:text-[#0066FF] transition-colors duration-300 whitespace-nowrap"
    >
      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center shrink-0">
        <Icon className="h-3.5 w-3.5 text-blue-500" />
      </span>
      {name}
    </motion.div>
  );
}

export default function AlsoExpertIn() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <AnimatedSection variant="fade-up" className="mb-10 md:mb-12">
          <SectionHeader
            label="Technologies"
            title="Expert In"
          />
        </AnimatedSection>

        {/* ── Row 1: Left → Right ── */}
        <AnimatedSection variant="fade-up" delay={0.1} className="mb-4">
          <div className="marquee-container">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...row1, ...row1, ...row1].map((item, i) => (
                <Chip key={`r1-${item.name}-${i}`} name={item.name} Icon={item.icon} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Row 2: Right → Left (reverse direction) ── */}
        <AnimatedSection variant="fade-up" delay={0.2} className="mb-10 md:mb-12">
          <div className="marquee-container">
            <div
              className="flex animate-marquee-slow whitespace-nowrap"
              style={{ animationDirection: 'reverse' }}
            >
              {[...row2, ...row2, ...row2].map((item, i) => (
                <Chip key={`r2-${item.name}-${i}`} name={item.name} Icon={item.icon} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
