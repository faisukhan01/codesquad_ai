'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: '100+ seasoned engineers with deep expertise across technologies and industries.',
  },
  {
    icon: Zap,
    title: 'Agile Methodology',
    description: 'Sprint-based delivery with continuous feedback loops for rapid iteration.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: '24/7 development support across multiple time zones and geographies.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '99% client satisfaction rate with consistent on-time, on-budget delivery.',
  },
];

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Countries Served' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Image */}
          <AnimatedSection variant="fade-right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <img
                  src="/images/about-team.png"
                  alt="CodeSquad Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0066FF] rounded-2xl -z-10 opacity-20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#338AFF] rounded-xl -z-10 opacity-15" />
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection variant="fade-left">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
              About CodeSquad
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
              Building the Future of <span className="gradient-text">Digital Innovation</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We are a team of passionate engineers, designers, and strategists dedicated to
              building exceptional digital products. Our mission is to empower businesses through
              innovative technology solutions that drive measurable results.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 4 }}
                  className="flex gap-3.5 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/80 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A1628] text-sm mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <AnimatedSection variant="stagger-children">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <AnimatedItem key={stat.label} variant="scale-in">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg hover:shadow-blue-500/8 hover:border-blue-100 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="gradient-text">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
