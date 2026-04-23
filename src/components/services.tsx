'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Brain, Smartphone, Palette, Settings, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions built with modern architectures. From concept to deployment, we craft scalable applications that solve your unique business challenges and accelerate growth with clean, maintainable code.',
    accent: 'from-[#0066FF] to-[#004FCC]',
    tag: 'Most Popular',
    price: 'Starting from $15K',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and seamless migration services on AWS, Azure, and Google Cloud. We optimize performance, reduce costs, and ensure 99.99% uptime with enterprise-grade security and monitoring.',
    accent: 'from-sky-500 to-cyan-500',
    tag: null,
    price: 'Starting from $10K',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI/ML technologies. We automate complex processes, unlock hidden insights from your data, and build predictive models that drive strategic business decisions.',
    accent: 'from-violet-500 to-purple-500',
    tag: 'Trending',
    price: 'Starting from $20K',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications using React Native and Flutter. We deliver exceptional user experiences across iOS and Android with smooth animations, offline support, and push notifications.',
    accent: 'from-emerald-500 to-teal-500',
    tag: null,
    price: 'Starting from $12K',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive, engaging interfaces. From user research and wireframing to high-fidelity prototypes, we design experiences that drive user satisfaction, retention, and conversions.',
    accent: 'from-rose-500 to-pink-500',
    tag: null,
    price: 'Starting from $5K',
  },
  {
    icon: Settings,
    title: 'DevOps & Automation',
    description: 'Streamline your development pipeline with CI/CD, containerization (Docker/K8s), and infrastructure as code. We reduce deployment time by 80% and eliminate manual errors with automated workflows.',
    accent: 'from-amber-500 to-orange-500',
    tag: null,
    price: 'Starting from $8K',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding section-gradient-bg relative overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="Our Services"
          title="Comprehensive Software Solutions"
          description="Tailored to your business needs, powered by cutting-edge technology"
        />

        {/* Services Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedItem key={service.title} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 h-full overflow-hidden transition-all duration-400 hover:border-gray-200"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.03), 0 20px 48px rgba(0,0,0,0.02)',
                }}
              >
                {/* Blue gradient left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0066FF] to-[#004FCC] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                {/* Subtle gradient corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50/80 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Service number - large subtle */}
                <span className="absolute top-5 right-6 text-5xl font-black text-gray-100/60 group-hover:text-[#0066FF]/8 transition-colors duration-500 leading-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Tag badge */}
                {service.tag && (
                  <div className="absolute top-5 left-5">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      service.tag === 'Most Popular'
                        ? 'bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/15'
                        : 'bg-violet-500/10 text-violet-600 border border-violet-500/15'
                    }`}>
                      {service.tag === 'Trending' && <Sparkles className="w-2.5 h-2.5" />}
                      {service.tag}
                    </span>
                  </div>
                )}

                {/* Dot pattern background on hover */}
                <div className="absolute inset-0 rounded-2xl dot-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon container - larger with enhanced glow */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/15 group-hover:shadow-xl group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-400">
                  <service.icon className="w-8 h-8 text-white icon-hover-float" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-gradient-blue transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-5 text-[15px]">
                    {service.description}
                  </p>

                  {/* Price hint */}
                  <p className="text-sm text-gray-400 font-medium mb-5">
                    {service.price}
                  </p>

                  {/* Learn More Link */}
                  <motion.span
                    className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0066FF]/0 to-transparent group-hover:via-[#0066FF]/15 transition-all duration-500" />
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Bottom decorative separator */}
        <div className="mt-16 lg:mt-20">
          <div className="premium-separator">
            <div className="premium-separator-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
