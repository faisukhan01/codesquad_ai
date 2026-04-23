'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  ClipboardCheck,
  Sparkles,
  FolderCheck,
  ThumbsUp,
  Headphones,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

const trustIndicators = [
  { icon: FolderCheck, label: '200+ Projects Delivered' },
  { icon: ThumbsUp, label: '99% Client Satisfaction' },
  { icon: Headphones, label: '24/7 Support' },
];

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative radial gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#338AFF]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative inner border */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl border border-white/[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <AnimatedSection variant="fade-up" delay={0}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#338AFF]" />
            <span className="text-xs font-medium text-blue-100/80 tracking-wide">
              Start Your Project Today
            </span>
          </motion.div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Ready to Transform Your Business?
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection variant="fade-up" delay={0.15}>
          <p className="text-lg text-blue-100/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            From concept to deployment, we deliver cutting-edge software solutions
            that drive real results. Start your digital transformation journey with
            a free consultation.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://codesquad-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl px-8 h-12 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 w-full sm:w-auto"
            >
              <ClipboardCheck className="w-4 h-4" />
              Get Free Checklist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="https://calendly.com/code_squad/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/35 rounded-xl px-8 h-12 text-base font-medium backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Book a Free Call
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection variant="fade-up" delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {trustIndicators.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2.5 text-blue-100/40"
              >
                <Icon className="w-4 h-4 text-[#338AFF]/60" />
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
