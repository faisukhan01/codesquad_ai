'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Landmark,
  ShoppingBag,
  Heart,
  GraduationCap,
  Factory,
  ArrowRight,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const industries = [
  {
    icon: Building2,
    title: 'Fintech & Banking',
    description:
      'Secure, compliant financial platforms with real-time processing, fraud detection, and regulatory compliance.',
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    projects: '40+',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description:
      'HIPAA-compliant healthcare solutions including telemedicine, EHR systems, and patient engagement platforms.',
    gradient: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    projects: '25+',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description:
      'Scalable e-commerce platforms with personalized experiences, inventory management, and payment integration.',
    gradient: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    projects: '35+',
  },
  {
    icon: Landmark,
    title: 'Real Estate',
    description:
      'Property management platforms, virtual tours, CRM solutions, and market analytics dashboards.',
    gradient: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    projects: '20+',
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    description:
      'Interactive learning platforms, LMS systems, virtual classrooms, and skill assessment tools.',
    gradient: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    projects: '15+',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Logistics',
    description:
      'IoT-enabled supply chain management, predictive maintenance, and warehouse automation systems.',
    gradient: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-600',
    projects: '18+',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across diverse sectors, delivering tailored solutions that drive measurable business outcomes."
        />

        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {industries.map((industry) => (
            <AnimatedItem key={industry.title} variant="fade-up" delay={0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-xl hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300 h-full"
              >
                {/* Top section: icon + project count */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-13 h-13 rounded-2xl ${industry.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className={`w-6 h-6 ${industry.textColor}`} />
                  </div>
                  <span
                    className={`text-xs font-bold ${industry.bgColor} ${industry.textColor} px-3 py-1.5 rounded-full`}
                  >
                    {industry.projects} projects
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2.5 group-hover:text-[#0066FF] transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-[#0066FF] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Subtle gradient accent on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
