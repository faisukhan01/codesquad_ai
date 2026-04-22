'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const categories = [
  {
    name: 'Frontend',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'Python', 'Java', '.NET', 'Go'],
  },
  {
    name: 'Cloud',
    techs: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
  },
  {
    name: 'Mobile',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    name: 'Database',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
  },
  {
    name: 'DevOps',
    techs: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions'],
  },
];

const techColors = [
  'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300',
  'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300',
  'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:border-sky-300',
  'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300',
  'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300',
  'bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100 hover:border-violet-300',
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Tech Stack"
          title="Technologies We Master"
          description="We stay at the forefront of technology to deliver the best solutions for your business"
        />

        {/* Tech Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <AnimatedItem key={category.name} variant="fade-up" delay={0.05}>
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base font-semibold text-[#0A1628] mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    catIdx === 0 ? 'bg-blue-500' :
                    catIdx === 1 ? 'bg-cyan-500' :
                    catIdx === 2 ? 'bg-sky-500' :
                    catIdx === 3 ? 'bg-teal-500' :
                    catIdx === 4 ? 'bg-emerald-500' : 'bg-violet-500'
                  }`} />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 cursor-default ${
                        techColors[catIdx % techColors.length]
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
