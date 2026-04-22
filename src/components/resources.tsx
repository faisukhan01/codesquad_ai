'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, BookOpen, ShieldCheck, Layout, Rocket, Download, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const resources = [
  {
    icon: FileText,
    title: 'The Complete Guide to Cloud Migration',
    description: 'A comprehensive roadmap for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
    type: 'PDF Guide',
    downloads: '2.4k downloads',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: '2025 State of Enterprise AI Report',
    description: 'In-depth analysis of AI adoption trends, challenges, and opportunities across enterprise organizations worldwide.',
    type: 'Whitepaper',
    downloads: '1.8k downloads',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: BookOpen,
    title: 'DevOps Best Practices Handbook',
    description: 'Proven strategies and methodologies to streamline your development pipeline and boost team productivity.',
    type: 'eBook',
    downloads: '3.1k downloads',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ShieldCheck,
    title: 'API Security Checklist',
    description: 'Essential security measures and best practices to protect your APIs from common vulnerabilities and threats.',
    type: 'Checklist',
    downloads: '1.5k downloads',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Layout,
    title: 'Microservices Architecture Blueprint',
    description: 'A practical template for designing, implementing, and scaling microservices-based applications effectively.',
    type: 'Template',
    downloads: '2.0k downloads',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Mobile App Launch Playbook',
    description: 'Step-by-step guide to successfully plan, build, and launch your mobile application on any platform.',
    type: 'Playbook',
    downloads: '1.2k downloads',
    gradient: 'from-sky-500 to-blue-500',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Free Resources"
          title="Level Up Your Skills"
          description="Download free guides, reports, and templates to stay ahead in the fast-moving world of software development"
        />

        {/* Resources Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource) => (
            <AnimatedItem key={resource.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 h-full shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon + Type Badge Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${resource.gradient} text-white`}>
                      {resource.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-300">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {resource.description}
                  </p>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-medium">{resource.downloads}</span>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors duration-200">
                      <Download className="w-4 h-4" />
                      Download Free
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* View All Button */}
        <AnimatedSection variant="fade-up" delay={0.3} className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#0066FF] text-[#0066FF] font-semibold text-sm hover:bg-[#0066FF] hover:text-white transition-all duration-300">
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
