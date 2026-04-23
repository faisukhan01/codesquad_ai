'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Headphones, Download, ArrowRight, Clock, User } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const tabs = ['All', 'Articles', 'White Papers', 'Podcasts'];

const resources = [
  {
    type: 'Article',
    icon: FileText,
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    description: 'Explore the latest advancements in AI-powered medical imaging and diagnostic tools that are transforming patient care.',
    author: 'Dr. Sarah Mitchell',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    gradient: 'from-blue-500 to-cyan-500',
    tag: 'Healthcare',
  },
  {
    type: 'White Paper',
    icon: BookOpen,
    title: 'The Future of Precision Agriculture: A Comprehensive Guide',
    description: 'An in-depth analysis of how IoT, computer vision, and machine learning are shaping modern farming practices.',
    author: 'James Chen',
    readTime: '15 min read',
    date: 'Jan 8, 2025',
    gradient: 'from-emerald-500 to-teal-500',
    tag: 'Agriculture',
  },
  {
    type: 'Podcast',
    icon: Headphones,
    title: 'TechTalk: Engineering IoT for Smart Manufacturing',
    description: 'Listen to our CTO discuss real-world IoT implementations and their impact on industrial efficiency.',
    author: 'CodeSquad Team',
    readTime: '32 min listen',
    date: 'Dec 28, 2024',
    gradient: 'from-violet-500 to-purple-500',
    tag: 'IoT',
  },
  {
    type: 'Article',
    icon: FileText,
    title: 'Computer Vision in Quality Control: Lessons from 50+ Implementations',
    description: 'Key insights and best practices from deploying computer vision systems across manufacturing facilities.',
    author: 'Alex Rivera',
    readTime: '6 min read',
    date: 'Dec 20, 2024',
    gradient: 'from-sky-500 to-blue-500',
    tag: 'Computer Vision',
  },
  {
    type: 'White Paper',
    icon: BookOpen,
    title: 'HIPAA-Compliant Software Development: A Security-First Approach',
    description: 'Essential guidelines for building healthcare applications that meet regulatory requirements without sacrificing innovation.',
    author: 'Priya Sharma',
    readTime: '12 min read',
    date: 'Dec 12, 2024',
    gradient: 'from-rose-500 to-pink-500',
    tag: 'Healthcare',
  },
  {
    type: 'Podcast',
    icon: Headphones,
    title: 'From Farm to Future: Digital Transformation in Agriculture',
    description: 'Industry leaders share how technology is creating a new era of sustainable and efficient farming.',
    author: 'CodeSquad Team',
    readTime: '28 min listen',
    date: 'Dec 5, 2024',
    gradient: 'from-amber-500 to-orange-500',
    tag: 'Agriculture',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Resources"
          title="Articles, White Papers & Podcasts"
          description="Stay ahead with our latest insights on healthcare, agriculture, computer vision, and IoT technologies."
        />

        {/* Tab filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="px-5 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-[#0066FF]/50 hover:text-[#0066FF] hover:bg-blue-50/50 transition-all duration-300 first:bg-gradient-to-r first:from-[#0066FF] first:to-[#0052CC] first:text-white first:border-transparent first:shadow-md first:shadow-blue-500/20"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <AnimatedItem key={resource.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200"
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${resource.gradient}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center shadow-md`}>
                      <resource.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-semibold">
                        {resource.tag}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        resource.type === 'Podcast' ? 'bg-violet-50 text-violet-600' :
                        resource.type === 'White Paper' ? 'bg-amber-50 text-amber-600' :
                        'bg-gray-50 text-gray-500'
                      }`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-300 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {resource.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {resource.readTime}</span>
                    </div>
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors duration-200">
                      {resource.type === 'Podcast' ? (
                        <><Headphones className="w-3.5 h-3.5" /> Listen</>
                      ) : (
                        <><Download className="w-3.5 h-3.5" /> Read</>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* View All */}
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
