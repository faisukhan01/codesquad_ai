'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Briefcase, Globe, Heart, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Briefcase,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Global Clients',
    icon: Globe,
  },
  {
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Heart,
  },
  {
    value: 8,
    suffix: '+',
    label: 'Years of Excellence',
    icon: Award,
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
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#0040A0]" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 stats-dot-pattern" />

      <AnimatedSection
        variant="fade-up"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative text-center flex flex-col items-center gap-3 group"
            >
              {/* Divider line (not on last item) */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/15" />
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-white/90" />
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-bold text-white">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>

              {/* Label */}
              <p className="text-sm sm:text-base text-blue-100/80 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
