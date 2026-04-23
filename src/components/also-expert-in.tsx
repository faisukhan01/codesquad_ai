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
      className="inline-flex items-center gap-2.5 mx-3 sm:mx-4 py-2.5 px-5 rounded-full bg-white border border-gray-200/80 text-gray-600 text-sm font-medium select-none cursor-default shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#0066FF]/40 hover:shadow-[0_4px_12px_rgba(0,102,255,0.08)] hover:text-[#0066FF] transition-colors duration-300 whitespace-nowrap"
    >
      <Icon className="h-4 w-4 shrink-0 opacity-70" />
      {name}
    </motion.div>
  );
}

export default function AlsoExpertIn() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* ── Section Header ── */}
      <AnimatedSection variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-14">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Also Expert In
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
            Complementary technologies we master
          </p>
        </div>
      </AnimatedSection>

      {/* ── Row 1: Left → Right ── */}
      <AnimatedSection variant="fade-up" delay={0.15} className="mb-5">
        <div className="marquee-container">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((item, i) => (
              <Chip key={`r1-${item.name}-${i}`} name={item.name} Icon={item.icon} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Row 2: Right → Left (reverse direction) ── */}
      <AnimatedSection variant="fade-up" delay={0.3}>
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
    </section>
  );
}
