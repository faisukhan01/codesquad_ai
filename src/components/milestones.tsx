'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Award, Globe, TrendingUp, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const milestones = [
  {
    year: '2017',
    title: 'Founded in Silicon Valley',
    description: 'Started with a 5-person team and a vision to transform how businesses build software.',
    icon: Rocket,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2018',
    title: 'First Enterprise Client',
    description: 'Secured our first Fortune 500 client and delivered a cloud migration platform.',
    icon: Users,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    year: '2020',
    title: 'Expanded Globally',
    description: 'Opened offices in London and Dubai, growing our team to 50+ engineers.',
    icon: Globe,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2021',
    title: 'AI/ML Division Launch',
    description: 'Launched our AI & Machine Learning practice, delivering intelligent automation solutions.',
    icon: TrendingUp,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Named "Top 10 Software Development Companies" by Clutch for 3 consecutive years.',
    icon: Award,
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    year: '2025',
    title: '200+ Projects Delivered',
    description: 'Surpassed 200 successful project deliveries with 99% client satisfaction rate.',
    icon: Sparkles,
    gradient: 'from-sky-500 to-blue-500',
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="section-padding bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#0066FF]/3 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#338AFF]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Our Journey"
          title="Milestones That Define Us"
          description="A look back at the key moments that shaped CodeSquad into what it is today"
        />

        <AnimatedSection variant="stagger-children" className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <AnimatedItem key={milestone.year} variant="fade-up" delay={0.05}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
                    {/* Content */}
                    <div className={`flex items-start gap-5 lg:gap-0 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'}`}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300 flex-1"
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-sm shrink-0`}>
                            <milestone.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-[#0A1628] mb-2">{milestone.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline dot - Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0066FF] shadow-md shadow-blue-500/20 z-10" />

                    {/* Spacer for the other column */}
                    <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : ''}`} />
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
