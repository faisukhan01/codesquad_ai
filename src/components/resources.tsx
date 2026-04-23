'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  BookOpen,
  Headphones,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

// ── Types ───────────────────────────────────────────────────────────────────

type ResourceType = 'Article' | 'White Paper' | 'Podcast';
type FilterTab = 'Articles' | 'White Papers' | 'Podcasts';

interface Resource {
  id: number;
  type: ResourceType;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  tag: string;
}

// ── Config ───────────────────────────────────────────────────────────────────

const typeConfig: Record<ResourceType, { icon: typeof FileText; gradient: string; badgeBg: string; badgeText: string }> = {
  Article: {
    icon: FileText,
    gradient: 'from-[#0066FF] to-[#338AFF]',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-[#0066FF]',
  },
  'White Paper': {
    icon: BookOpen,
    gradient: 'from-[#0066FF] to-[#338AFF]',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-[#0066FF]',
  },
  Podcast: {
    icon: Headphones,
    gradient: 'from-emerald-500 to-emerald-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-600',
  },
};

const filterTabs: FilterTab[] = ['Articles', 'White Papers', 'Podcasts'];

const tabToType: Record<FilterTab, ResourceType> = {
  Articles: 'Article',
  'White Papers': 'White Paper',
  Podcasts: 'Podcast',
};

// ── Data ────────────────────────────────────────────────────────────────────

const resources: Resource[] = [
  {
    id: 1,
    type: 'Article',
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    description: 'Explore the latest advancements in AI-powered medical imaging and diagnostic tools transforming patient care.',
    author: 'Dr. Sarah Mitchell',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    tag: 'Healthcare',
  },
  {
    id: 2,
    type: 'Article',
    title: 'Computer Vision in Quality Control: Lessons from 50+ Implementations',
    description: 'Key insights and battle-tested best practices from deploying computer vision systems worldwide.',
    author: 'Alex Rivera',
    readTime: '6 min read',
    date: 'Dec 20, 2024',
    tag: 'Computer Vision',
  },
  {
    id: 3,
    type: 'Article',
    title: "Building HIPAA-Compliant Applications: A Developer's Guide",
    description: 'Essential guidelines for building healthcare applications that meet regulatory requirements.',
    author: 'Priya Sharma',
    readTime: '10 min read',
    date: 'Dec 12, 2024',
    tag: 'Healthcare',
  },
  {
    id: 4,
    type: 'White Paper',
    title: 'The Future of Precision Agriculture: A Comprehensive Guide',
    description: 'An in-depth analysis of how IoT, computer vision, and machine learning are shaping modern farming.',
    author: 'James Chen',
    readTime: '15 min read',
    date: 'Jan 8, 2025',
    tag: 'Agriculture',
  },
  {
    id: 5,
    type: 'White Paper',
    title: 'Enterprise IoT Security: Threats and Solutions',
    description: 'A thorough examination of the current threat landscape in enterprise IoT and countermeasures.',
    author: 'CodeSquad Research',
    readTime: '20 min read',
    date: 'Nov 28, 2024',
    tag: 'IoT',
  },
  {
    id: 6,
    type: 'Podcast',
    title: 'TechTalk: Engineering IoT for Smart Manufacturing',
    description: 'Our engineering leads discuss real-world IoT implementations and their impact on industrial efficiency.',
    author: 'CodeSquad Team',
    readTime: '32 min listen',
    date: 'Dec 28, 2024',
    tag: 'IoT',
  },
];

// ── Animation variants ──────────────────────────────────────────────────────

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  exit: { opacity: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

// ── Component ───────────────────────────────────────────────────────────────

export default function Resources() {
  const [activeTab, setActiveTab] = useState<FilterTab>('Articles');

  const handleTabChange = useCallback((tab: FilterTab) => {
    setActiveTab(tab);
  }, []);

  const filteredResources = useMemo(() => {
    const typeFilter = tabToType[activeTab];
    return resources.filter((r) => r.type === typeFilter);
  }, [activeTab]);

  return (
    <section id="resources" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Knowledge Hub"
          title="Latest Insights"
          description="Expert perspectives, in-depth research, and actionable ideas — curated by our team to keep you ahead of the curve."
        />

        {/* Filter Tabs — no "All" option */}
        <AnimatedSection variant="fade-up" className="mb-10">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-500 hover:text-[#0066FF] hover:bg-blue-50/40'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Resource Cards Grid */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredResources.map((resource) => {
                const config = typeConfig[resource.type];
                const Icon = config.icon;

                return (
                  <motion.article
                    key={resource.id}
                    variants={cardVariants}
                    whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    {/* Top visual area */}
                    <div className={`relative h-36 bg-gradient-to-br ${config.gradient} overflow-hidden`}>
                      {/* Decorative pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                      {/* Tag badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/20">
                          {resource.tag}
                        </span>
                      </div>
                      {/* Type badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/95 text-gray-700 shadow-sm">
                          {resource.type}
                        </span>
                      </div>
                      {/* Bottom fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                      <h3 className="text-[15px] font-bold text-[#0A1628] mb-2 leading-snug line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-300">
                        {resource.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                        {resource.description}
                      </p>

                      {/* Meta row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-700">{resource.author}</span>
                          <span className="text-gray-200">·</span>
                          <span className="text-xs text-gray-400">{resource.date}</span>
                        </div>
                        <span className="hidden sm:flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {resource.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <AnimatedSection variant="fade-up" delay={0.1} className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl border-2 border-[#0066FF]/20 text-[#0066FF] font-semibold text-sm hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 bg-white/60 backdrop-blur-sm cursor-pointer">
            View All {activeTab}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
