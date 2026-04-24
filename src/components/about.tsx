'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Globe, TrendingUp, CheckCircle, ArrowRight, Award, Shield, Target, Lightbulb, BookOpen, Heart } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: '100+ seasoned engineers with deep expertise across technologies and industries.',
    accent: 'from-blue-500 to-cyan-500',
    stat: '100+ Engineers',
  },
  {
    icon: Zap,
    title: 'Agile Methodology',
    description: 'Sprint-based delivery with continuous feedback loops for rapid iteration.',
    accent: 'from-violet-500 to-purple-500',
    stat: '2x Faster',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: '24/7 development support across multiple time zones and geographies.',
    accent: 'from-emerald-500 to-teal-500',
    stat: '15+ Countries',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '99% client satisfaction rate with consistent on-time, on-budget delivery.',
    accent: 'from-amber-500 to-orange-500',
    stat: '99% Satisfaction',
  },
];

const differentiators = [
  { icon: Shield, text: 'ISO 27001 Certified' },
  { icon: Target, text: 'On-Time Delivery' },
  { icon: Lightbulb, text: 'Innovation-First' },
  { icon: Award, text: 'Award-Winning Team' },
];

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', icon: CheckCircle },
  { value: 50, suffix: '+', label: 'Happy Clients', icon: Users },
  { value: 8, suffix: '+', label: 'Years Experience', icon: TrendingUp },
  { value: 15, suffix: '+', label: 'Countries Served', icon: Globe },
];

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / 2000, 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.round(easedProgress * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/50 via-cyan-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="About CodeSquad"
          title="Building the Future of Digital Innovation"
          description="We are a team of passionate engineers, designers, and strategists dedicated to building exceptional digital products that drive measurable results."
        />

        {/* Our Story Narrative */}
        <AnimatedSection variant="fade-up" className="mb-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-blue-500/15 mx-auto">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2017, CodeSquad began with a simple mission: <span className="font-semibold text-[#0A1628]">bridge the gap between ambitious ideas and world-class technology</span>. What started as a small team of 5 engineers has grown into a 100+ strong global workforce delivering transformative solutions across 15+ countries. We believe in transparent partnerships, relentless innovation, and building software that doesn&apos;t just work — it <span className="text-[#0066FF] font-medium">inspires</span>.
            </p>
          </div>
        </AnimatedSection>

        {/* Two-Column Layout */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          {/* Left: Visual panel */}
          <AnimatedItem key="image" variant="fade-right" delay={0.1}>
            <div className="relative">
              {/* Main visual — dark card with stats */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 bg-gradient-to-br from-[#0A1628] via-[#0d1f3a] to-[#0A1628] aspect-[4/3] relative">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#338AFF]/8 rounded-full blur-[60px]" />
                {/* Content inside */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center mb-4">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs">
                      Founded in 2017 with a mission to bridge the gap between ambitious ideas and world-class technology.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[{ n: '100+', l: 'Engineers' }, { n: '15+', l: 'Countries' }, { n: '200+', l: 'Projects' }, { n: '8+', l: 'Years' }].map((s) => (
                      <div key={s.l} className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-3">
                        <p className="text-2xl font-bold text-white">{s.n}</p>
                        <p className="text-xs text-blue-200/50 mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat card - redesigned */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-100/80 p-4 sm:p-5 premium-card-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-md shadow-blue-500/20">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0A1628] leading-none">99%</p>
                    <p className="text-xs text-gray-500 mt-0.5">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              {/* Second floating card - projects count */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-100/80 p-3 sm:p-4 premium-card-glow hidden sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#0A1628] leading-none">200+</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Projects</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating accent shapes */}
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-gradient-to-br from-[#338AFF]/10 to-blue-400/10 rounded-xl -z-10 -rotate-3" />

              {/* Decorative animated dots */}
              <div className="absolute top-1/2 -right-10 w-3 h-3 rounded-full bg-[#0066FF]/20 animate-breathe hidden lg:block" />
              <div className="absolute top-1/3 -left-8 w-2 h-2 rounded-full bg-cyan-400/30 animate-float-delayed hidden lg:block" />
            </div>
          </AnimatedItem>

          {/* Right: Features with premium cards */}
          <AnimatedItem key="features" variant="fade-left" delay={0.2}>
            <div className="space-y-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex gap-5 p-5 rounded-xl bg-white border border-gray-100/80 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200/50 transition-all duration-300 group premium-card-glow"
                  style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02), 0 4px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Larger icon with gradient bg */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <feature.icon className="w-6 h-6 text-white icon-hover-float" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-[#0A1628] text-[15px]">{feature.title}</h4>
                      <span className="text-[11px] font-bold text-[#0066FF]/70 bg-[#0066FF]/5 px-2.5 py-0.5 rounded-full shrink-0 ml-2">
                        {feature.stat}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm hover:gap-3 transition-all duration-300 group"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Differentiator strip */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <div className="bg-gradient-to-r from-[#0A1628] via-[#0d1f35] to-[#0A1628] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066FF]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {differentiators.map((item) => (
                <div key={item.text} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-blue-300" />
                  </div>
                  <span className="text-sm font-medium text-blue-100/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Row with improved design */}
        <AnimatedSection variant="stagger-children">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((stat) => (
              <AnimatedItem key={stat.label} variant="fade-up" delay={0.05}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-6 sm:p-7 text-center overflow-hidden group border border-gray-100/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/50"
                  style={{
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.03)',
                  }}
                >
                  {/* Animated icon with gradient background */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#338AFF]/10 flex items-center justify-center mx-auto mb-4 group-hover:from-[#0066FF] group-hover:to-[#0052CC] group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-400">
                    <stat.icon className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors duration-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold mb-1.5">
                    <span className="gradient-text counter-glow">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Subtle animated accent element */}
        <div className="mt-20 flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-2 rounded-full bg-[#0066FF]/30"
          />
        </div>
      </div>
    </section>
  );
}
