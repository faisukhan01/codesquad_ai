'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Globe, TrendingUp, CheckCircle, ArrowRight, Award, Shield, Target, Lightbulb } from 'lucide-react';
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
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="About CodeSquad"
          title="Building the Future of Digital Innovation"
          description="We are a team of passionate engineers, designers, and strategists dedicated to building exceptional digital products that drive measurable results."
        />

        {/* Two-Column Layout */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Image with premium treatment */}
          <AnimatedItem key="image" variant="fade-right" delay={0.1}>
            <div className="relative">
              {/* Main image with premium overlay */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 premium-img-overlay">
                <img
                  src="/images/about-team.png"
                  alt="CodeSquad Team collaborating on a project"
                  className="w-full h-auto object-cover"
                />
                {/* Built-in gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/10 via-transparent to-cyan-500/5 pointer-events-none" />
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

              {/* Floating accent shapes */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#0066FF]/10 to-cyan-500/10 rounded-2xl -z-10 rotate-6" />
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-gradient-to-br from-[#338AFF]/10 to-blue-400/10 rounded-xl -z-10 -rotate-3" />

              {/* Decorative dots */}
              <div className="absolute top-1/2 -right-10 w-3 h-3 rounded-full bg-[#0066FF]/20 animate-breathe hidden lg:block" />
              <div className="absolute top-1/3 -left-8 w-2 h-2 rounded-full bg-cyan-400/30 animate-float-delayed hidden lg:block" />
            </div>
          </AnimatedItem>

          {/* Right: Features with premium cards */}
          <AnimatedItem key="features" variant="fade-left" delay={0.2}>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  className="flex gap-4 p-4 sm:p-5 rounded-xl bg-white border border-gray-100/80 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200/50 transition-all duration-300 group premium-card-glow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <feature.icon className="w-5 h-5 text-white icon-hover-float" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-[#0A1628] text-sm">{feature.title}</h4>
                      <span className="text-[11px] font-bold text-[#0066FF]/70 bg-[#0066FF]/5 px-2 py-0.5 rounded-full shrink-0 ml-2">
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
        <AnimatedSection variant="fade-up" className="mb-16">
          <div className="bg-gradient-to-r from-[#0A1628] via-[#0d1f35] to-[#0A1628] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066FF]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {differentiators.map((item, idx) => (
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

        {/* Stats Row */}
        <AnimatedSection variant="stagger-children">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <AnimatedItem key={stat.label} variant="fade-up" delay={0.05}>
                <div className="premium-card rounded-2xl p-5 sm:p-6 text-center overflow-hidden group">
                  <stat.icon className="w-5 h-5 text-[#0066FF]/40 mx-auto mb-3 group-hover:text-[#0066FF] group-hover:scale-110 transition-all duration-300" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                    <span className="gradient-text">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
