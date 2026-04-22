'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Server,
  Cloud,
  Smartphone,
  Database,
  Settings,
  Code2,
  Cpu,
  Globe,
  Shield,
  GitBranch,
  Container,
  Zap,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const categories = [
  {
    name: 'Frontend',
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    description: 'Modern frameworks & responsive interfaces',
    techs: [
      { name: 'React', popular: true },
      { name: 'Next.js', popular: true },
      { name: 'Vue.js', popular: false },
      { name: 'Angular', popular: false },
      { name: 'TypeScript', popular: true },
      { name: 'Tailwind CSS', popular: true },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    gradient: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    description: 'Scalable APIs & microservices architecture',
    techs: [
      { name: 'Node.js', popular: true },
      { name: 'Python', popular: true },
      { name: 'Java', popular: false },
      { name: '.NET', popular: false },
      { name: 'Go', popular: false },
      { name: 'GraphQL', popular: true },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    gradient: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-100',
    description: 'Multi-cloud infrastructure & CI/CD',
    techs: [
      { name: 'AWS', popular: true },
      { name: 'Azure', popular: true },
      { name: 'Google Cloud', popular: false },
      { name: 'Docker', popular: true },
      { name: 'Kubernetes', popular: true },
      { name: 'Terraform', popular: false },
    ],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    gradient: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    description: 'Cross-platform & native mobile apps',
    techs: [
      { name: 'React Native', popular: true },
      { name: 'Flutter', popular: true },
      { name: 'Swift', popular: false },
      { name: 'Kotlin', popular: false },
      { name: 'iOS', popular: false },
      { name: 'Android', popular: false },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    gradient: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    description: 'Relational, NoSQL & caching solutions',
    techs: [
      { name: 'PostgreSQL', popular: true },
      { name: 'MongoDB', popular: true },
      { name: 'Redis', popular: true },
      { name: 'MySQL', popular: false },
      { name: 'Elasticsearch', popular: false },
      { name: 'Firebase', popular: true },
    ],
  },
  {
    name: 'AI & Data',
    icon: Cpu,
    gradient: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    description: 'Machine learning & intelligent automation',
    techs: [
      { name: 'TensorFlow', popular: true },
      { name: 'PyTorch', popular: true },
      { name: 'OpenAI', popular: true },
      { name: 'LangChain', popular: false },
      { name: 'Pandas', popular: false },
      { name: 'Spark', popular: false },
    ],
  },
];

const secondaryTechs = [
  { name: 'Git', icon: GitBranch },
  { name: 'CI/CD', icon: Settings },
  { name: 'REST APIs', icon: Code2 },
  { name: 'Microservices', icon: Globe },
  { name: 'Security', icon: Shield },
  { name: 'Containers', icon: Container },
  { name: 'Performance', icon: Zap },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Tech Stack"
          title="Technologies We Master"
          description="We stay at the forefront of technology to deliver the best solutions for your business"
        />

        {/* Tech Category Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {categories.map((category, catIdx) => (
            <AnimatedItem key={category.name} variant="fade-up" delay={0.05}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:shadow-blue-500/5 hover:${category.borderColor} transition-all duration-300 relative overflow-hidden`}
              >
                {/* Subtle gradient corner accent */}
                <div className={`absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-500`} />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#0A1628]">{category.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {category.techs.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 cursor-default ${
                        tech.popular
                          ? `${category.bgColor} border-gray-200/60 text-[#0A1628]`
                          : 'bg-gray-50 border-gray-100 text-gray-500'
                      }`}
                    >
                      {tech.name}
                      {tech.popular && (
                        <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                      )}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Secondary Tech Bar */}
        <AnimatedSection variant="fade-up" delay={0.3}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5 text-center">Also Expert In</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {secondaryTechs.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group cursor-default"
                >
                  <tech.icon className="w-4 h-4 text-gray-400 group-hover:text-[#0066FF] transition-colors duration-300" />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-[#0A1628] transition-colors duration-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
