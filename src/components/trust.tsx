'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Lock,
  FileCheck,
  CheckCircle,
  BadgeCheck,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const certifications = [
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    icon: Shield,
  },
  {
    name: 'SOC 2 Type II',
    description: 'Security & Availability Controls',
    icon: Lock,
  },
  {
    name: 'ISO 9001',
    description: 'Quality Management System',
    icon: Award,
  },
  {
    name: 'GDPR',
    description: 'Data Protection Compliance',
    icon: FileCheck,
  },
  {
    name: 'HIPAA',
    description: 'Healthcare Data Security',
    icon: Shield,
  },
  {
    name: 'AWS Partner',
    description: 'Advanced Tier Partner',
    icon: BadgeCheck,
  },
];

const guarantees = [
  {
    label: '99.9% Uptime SLA',
    icon: CheckCircle,
    subtext: 'Enterprise-grade reliability',
  },
  {
    label: 'NDA Protection',
    icon: Lock,
    subtext: 'Full data confidentiality',
  },
  {
    label: 'Dedicated QA Team',
    icon: Shield,
    subtext: 'Quality at every step',
  },
  {
    label: 'Source Code Ownership',
    icon: FileCheck,
    subtext: 'Your code, your IP',
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="section-padding bg-gradient-to-b from-gray-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trust & Compliance"
          title="Enterprise-Grade Security"
          description="We take security and compliance seriously. Our certifications and practices ensure your data is always protected."
        />

        {/* ── Certifications Grid (3-column) ── */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {certifications.map((cert) => (
            <AnimatedItem key={cert.name} variant="fade-up" delay={0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-blue-100/60 p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/8 hover:border-blue-200/60 transition-all duration-300 flex flex-col"
                style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)' }}
              >
                {/* Gradient icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#338AFF] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-5 h-5 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-[#0A1628] mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {cert.description}
                </p>

                {/* Verified badge */}
                <div className="mt-auto pt-5 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-emerald-600">
                    Certified
                  </span>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* ── Guarantees Section ── */}
        <AnimatedSection variant="fade-up" delay={0.3}>
          <p className="text-sm text-gray-400 uppercase tracking-widest text-center mb-8">
            Our Guarantees
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-[#0A1628] to-[#0d1f35] rounded-2xl p-6 text-center text-white cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-blue-300" />
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-blue-100 mb-1">
                  {item.label}
                </p>

                {/* Subtext */}
                <p className="text-xs text-blue-200/50">{item.subtext}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
