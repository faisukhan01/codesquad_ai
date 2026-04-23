'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, DollarSign, Heart, BookOpen, MapPin, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const perks = [
  { icon: Globe, label: 'Remote First' },
  { icon: DollarSign, label: 'Competitive Pay' },
  { icon: Heart, label: 'Health & Wellness' },
  { icon: BookOpen, label: 'Learning Budget' },
];

const jobs = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    technologies: ['React', 'Node.js', 'TypeScript'],
    tag: 'Engineering',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Engineering',
    location: 'Remote/Hybrid',
    technologies: ['AWS', 'Azure', 'GCP'],
    tag: 'Cloud',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    technologies: ['Figma', 'Adobe XD', 'Research'],
    tag: 'Design',
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    technologies: ['Docker', 'K8s', 'CI/CD'],
    tag: 'DevOps',
  },
  {
    title: 'Project Manager',
    department: 'Delivery',
    location: 'Hybrid',
    technologies: ['Agile', 'Scrum', 'PMP'],
    tag: 'Management',
  },
];

export default function Careers() {
  return (
    <section id="careers" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#0066FF]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0066FF]">Careers</span>
            <div className="w-8 h-px bg-[#0066FF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Build the future with us. We&apos;re always looking for talented people to join our growing team.
          </p>
        </AnimatedSection>

        {/* Perks Bar */}
        <AnimatedSection variant="fade-up" className="mb-12">
          <div className="flex flex-wrap justify-center gap-8">
            {perks.map((perk) => (
              <div key={perk.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-sm font-medium text-[#0A1628]">{perk.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Job Listings Grid */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {jobs.map((job) => (
            <AnimatedItem key={job.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: 8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Title + Location Badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#0A1628]">{job.title}</h3>
                  <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                </div>

                {/* Department Tag */}
                <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full mt-2">
                  {job.department}
                </span>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Apply Now */}
                <button className="mt-5 flex items-center gap-1 text-[#0066FF] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bottom CTA */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don&apos;t see the right role? Send us your resume at{' '}
          <a href="mailto:careers@codesquad.dev" className="text-[#0066FF] font-medium hover:underline">
            careers@codesquad.dev
          </a>
        </p>
      </div>
    </section>
  );
}
