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
    stat: '5 people',
  },
  {
    year: '2018',
    title: 'First Enterprise Client',
    description: 'Secured our first Fortune 500 client and delivered a cloud migration platform.',
    icon: Users,
    gradient: 'from-violet-500 to-purple-500',
    stat: 'Fortune 500',
  },
  {
    year: '2020',
    title: 'Expanded Globally',
    description: 'Opened offices in London and Dubai, growing our team to 50+ engineers.',
    icon: Globe,
    gradient: 'from-emerald-500 to-teal-500',
    stat: '50+ engineers',
  },
  {
    year: '2021',
    title: 'AI/ML Division Launch',
    description: 'Launched our AI & Machine Learning practice, delivering intelligent automation solutions.',
    icon: TrendingUp,
    gradient: 'from-amber-500 to-orange-500',
    stat: 'New Division',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Named "Top 10 Software Development Companies" by Clutch for 3 consecutive years.',
    icon: Award,
    gradient: 'from-rose-500 to-pink-500',
    stat: 'Top 10 Award',
  },
  {
    year: '2025',
    title: '200+ Projects Delivered',
    description: 'Surpassed 200 successful project deliveries with 99% client satisfaction rate.',
    icon: Sparkles,
    gradient: 'from-sky-500 to-blue-500',
    stat: '200+ projects',
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

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden">
          <AnimatedSection variant="stagger-children" className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#0066FF] via-blue-200 to-transparent" />

            <div className="space-y-6">
              {milestones.map((milestone) => (
                <AnimatedItem key={milestone.year} variant="fade-up" delay={0.05}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute -left-5 top-1 w-3 h-3 rounded-full bg-gradient-to-br ${milestone.gradient} ring-4 ring-white shadow-sm`} />

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-sm shrink-0`}>
                          <milestone.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full">
                              {milestone.year}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">{milestone.stat}</span>
                          </div>
                          <h3 className="text-sm font-semibold text-[#0A1628] mb-1">{milestone.title}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop: Alternating timeline */}
        <AnimatedSection variant="stagger-children" className="hidden lg:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-px" />

          <div className="space-y-10">
            {milestones.map((milestone, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <AnimatedItem key={milestone.year} variant="fade-up" delay={0.05}>
                  <div className="relative grid grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className={`${isLeft ? 'text-right' : 'order-2'}`}>
                      <motion.div
                        whileHover={{ y: -3 }}
                        className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300 ${isLeft ? 'ml-auto' : ''}`}
                        style={{ maxWidth: '440px' }}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : ''}`}>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-sm shrink-0`}>
                            <milestone.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className={isLeft ? 'text-right' : ''}>
                            <span className="text-xs font-bold text-[#0066FF] bg-blue-50 px-2.5 py-0.5 rounded-full">
                              {milestone.year}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-base font-semibold text-[#0A1628] mb-2">{milestone.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                        <div className={`mt-3 pt-3 border-t border-gray-50 ${isLeft ? 'text-right' : ''}`}>
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{milestone.stat}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${milestone.gradient} ring-4 ring-white shadow-md z-10`} />
                    </div>

                    {/* Right spacer */}
                    <div className={isLeft ? '' : 'order-1'} />
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
