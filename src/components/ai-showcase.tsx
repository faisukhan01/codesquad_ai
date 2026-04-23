'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Sparkles, Database, Bot, Zap } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const aiServices = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models that learn from your data',
    tags: ['Predictive Analytics', 'NLP', 'Computer Vision'],
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Build with GPT, LLMs and creative AI',
    tags: ['ChatBots', 'Content Generation', 'Code Assist'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into business insights',
    tags: ['ETL Pipelines', 'Real-time Analytics', 'Data Lakes'],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Automate workflows with intelligent agents',
    tags: ['RPA', 'Smart Workflows', 'Decision Engine'],
  },
];

const readinessCategories = [
  { label: 'Data Infrastructure', percentage: 85 },
  { label: 'Team Expertise', percentage: 92 },
  { label: 'Cloud Readiness', percentage: 88 },
  { label: 'Process Maturity', percentage: 76 },
  { label: 'Budget Allocation', percentage: 70 },
];

function AnimatedProgressBar({ label, percentage, delay }: { label: string; percentage: number; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const increment = percentage / steps;
    const interval = duration / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        current += increment;
        if (current >= percentage) {
          setCount(percentage);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);
      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-blue-100/70 font-medium">{label}</span>
        <span className="text-sm font-bold text-white tabular-nums">{count}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-[#0066FF] to-[#338AFF]"
        />
      </div>
    </div>
  );
}

export default function AIShowcase() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#338AFF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/3 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Innovation"
          title="AI-Powered Solutions"
          description="Leveraging cutting-edge artificial intelligence to transform your business operations and unlock unprecedented growth opportunities."
          light
        />

        {/* AI Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 lg:mb-20">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.1} variant="fade-up">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="group p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full"
                >
                  {/* Gradient Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#338AFF]/10 flex items-center justify-center mb-5 group-hover:from-[#0066FF]/30 group-hover:to-[#338AFF]/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#338AFF] group-hover:text-[#66AAFF] transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-blue-200/60 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-blue-200/80 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* AI Readiness Score Widget */}
        <AnimatedSection delay={0.4} variant="fade-up">
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-8 lg:gap-12 items-start">
              {/* Left: Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#338AFF]/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#338AFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">Check Your AI Readiness</h3>
                  </div>
                </div>
                <p className="text-blue-200/60 text-sm leading-relaxed">
                  Discover how prepared your organization is to adopt AI-driven solutions. Our assessment evaluates five key dimensions of readiness.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-3xl font-bold text-white">82</span>
                  <span className="text-lg text-blue-200/60">/ 100</span>
                  <span className="text-xs bg-[#0066FF]/20 text-[#338AFF] px-2.5 py-0.5 rounded-full font-semibold ml-2">
                    Above Average
                  </span>
                </div>
              </div>

              {/* Right: Progress Bars */}
              <div className="space-y-4">
                {readinessCategories.map((category, index) => (
                  <AnimatedProgressBar
                    key={category.label}
                    label={category.label}
                    percentage={category.percentage}
                    delay={0.1 + index * 0.12}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
