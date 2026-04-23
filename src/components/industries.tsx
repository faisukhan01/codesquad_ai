'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Sprout,
  Cpu,
  Wrench,
  Building2,
  ShoppingBag,
  GraduationCap,
  Landmark,
  ArrowRight,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const industries = [
  {
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant telemedicine, EHR systems, AI diagnostics, and patient engagement platforms serving hospitals and clinics.',
    gradient: 'from-[#0066FF] to-[#0052CC]',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    projects: '25+',
    featured: true,
  },
  {
    icon: Sprout,
    title: 'Agriculture & AgriTech',
    description: 'Precision agriculture, crop monitoring, IoT-based irrigation, drone analytics, and yield prediction systems.',
    gradient: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    projects: '15+',
    featured: true,
  },
  {
    icon: Cpu,
    title: 'Computer Vision & AI',
    description: 'Image recognition, object detection, medical imaging, autonomous systems, and real-time video processing.',
    gradient: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    projects: '20+',
    featured: true,
  },
  {
    icon: Wrench,
    title: 'Manufacturing & IoT',
    description: 'Industrial IoT, predictive maintenance, digital twins, quality inspection, and smart factory automation.',
    gradient: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    projects: '18+',
    featured: false,
  },
  {
    icon: Building2,
    title: 'Enterprise & Fintech',
    description: 'Financial analytics, secure payment systems, enterprise resource planning, and regulatory compliance tools.',
    gradient: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-600',
    projects: '30+',
    featured: false,
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    description: 'Interactive learning platforms, LMS systems, virtual classrooms, and skill assessment tools.',
    gradient: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    projects: '12+',
    featured: false,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across healthcare, agriculture, and technology sectors."
        />

        {/* Featured industries - larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {industries.filter(i => i.featured).map((industry, idx) => (
            <AnimatedItem key={industry.title} variant="fade-up" delay={0.1 * idx}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${industry.gradient}`} />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl ${industry.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className={`w-6 h-6 ${industry.textColor}`} />
                    </div>
                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                      {industry.projects} projects
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2.5 group-hover:text-[#0066FF] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#0066FF] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </div>

        {/* Other industries - smaller grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.filter(i => !i.featured).map((industry, idx) => (
            <AnimatedItem key={industry.title} variant="fade-up" delay={0.1 * (idx + 3)}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${industry.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${industry.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className={`w-5 h-5 ${industry.textColor}`} />
                    </div>
                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                      {industry.projects}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#0066FF] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
