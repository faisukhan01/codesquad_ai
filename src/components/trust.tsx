'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Lock, FileCheck, CheckCircle, BadgeCheck } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management', icon: Shield },
  { name: 'SOC 2 Type II', description: 'Security & Availability Controls', icon: Lock },
  { name: 'ISO 9001', description: 'Quality Management System', icon: Award },
  { name: 'GDPR', description: 'Data Protection Compliance', icon: FileCheck },
  { name: 'HIPAA', description: 'Healthcare Data Security', icon: Shield },
  { name: 'AWS Partner', description: 'Advanced Tier Partner', icon: BadgeCheck },
];

const guarantees = [
  { label: '99.9% Uptime SLA', icon: CheckCircle },
  { label: 'NDA Protection', icon: Lock },
  { label: 'Dedicated QA Team', icon: Shield },
  { label: 'Source Code Ownership', icon: FileCheck },
];

export default function Trust() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trust & Compliance"
          title="Enterprise-Grade Security"
          description="We take security and compliance seriously. Our certifications and practices ensure your data is always protected."
        />

        {/* Certifications Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {certifications.map((cert) => (
            <AnimatedItem key={cert.name} variant="fade-up" delay={0.05}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group bg-gray-50/80 rounded-2xl border border-gray-100 p-5 text-center hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#0066FF] to-[#338AFF] flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-[#0A1628] mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{cert.description}</p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Guarantees Bar */}
        <AnimatedSection variant="fade-up" delay={0.3}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5 text-center">Our Guarantees</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {guarantees.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <item.icon className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-[#0A1628]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
