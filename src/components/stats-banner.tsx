'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Heart, Award } from 'lucide-react';

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Briefcase,
    description: 'Across 12+ industries',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Global Clients',
    icon: Globe,
    description: 'From startups to Fortune 500',
  },
  {
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Heart,
    description: 'Based on post-project surveys',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Years of Excellence',
    icon: Award,
    description: 'Consistent delivery since 2017',
  },
];

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

function AnimatedCounter({
  target,
  suffix,
  duration = 2,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.round(easedProgress * target);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1628]" />
      {/* Subtle blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/8 via-transparent to-[#338AFF]/6" />
      {/* Dot pattern */}
      <div className="absolute inset-0 stats-dot-pattern opacity-60" />
      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center flex flex-col items-center gap-3 group px-4 lg:px-8"
            >
              {/* Vertical divider */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#0066FF]/20 group-hover:border-[#0066FF]/30 transition-all duration-300">
                <stat.icon className="w-5 h-5 text-blue-300/70 group-hover:text-[#66B2FF] transition-colors duration-300" />
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight stat-number">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
              </div>

              {/* Label */}
              <div>
                <p className="text-sm font-semibold text-blue-100/80">{stat.label}</p>
                <p className="text-xs text-blue-200/35 mt-0.5">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
