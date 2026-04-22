'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Award, Globe, CheckCircle, ShieldCheck } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const partners = [
  { name: 'AWS Partner', icon: Cloud },
  { name: 'Microsoft Gold', icon: Award },
  { name: 'Google Cloud Partner', icon: Globe },
  { name: 'Azure Certified', icon: Shield },
  { name: 'Salesforce Partner', icon: Globe },
];

const certifications = [
  { name: 'ISO 27001', icon: ShieldCheck },
  { name: 'SOC 2 Type II', icon: ShieldCheck },
  { name: 'CMMI Level 5', icon: ShieldCheck },
  { name: 'GDPR Compliant', icon: CheckCircle },
];

export default function Partners() {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
            Partnerships & Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            Trusted Partners & Certifications
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We partner with industry leaders and hold globally recognized
            certifications.
          </p>
        </AnimatedSection>

        {/* Partner Badges */}
        <AnimatedSection variant="fade-up" delay={0.1} className="mb-12">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Technology Partners
          </p>
          <AnimatedSection
            variant="stagger-children"
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {partners.map((partner) => (
              <AnimatedItem key={partner.name} variant="scale-in" delay={0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 group cursor-default"
                >
                  <partner.icon className="w-5 h-5 text-gray-400 group-hover:text-[#0066FF] transition-colors duration-200" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-[#0A1628] transition-colors duration-200 whitespace-nowrap">
                    {partner.name}
                  </span>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </AnimatedSection>

        {/* Certification Badges */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Certifications & Compliance
          </p>
          <AnimatedSection
            variant="stagger-children"
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {certifications.map((cert) => (
              <AnimatedItem key={cert.name} variant="scale-in" delay={0.05}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200 group cursor-default"
                >
                  <cert.icon className="w-5 h-5 text-green-500 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-[#0A1628] transition-colors duration-200 whitespace-nowrap">
                    {cert.name}
                  </span>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}
