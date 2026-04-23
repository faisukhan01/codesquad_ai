'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ClipboardCheck, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative border */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl border border-white/[0.06]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-blue-100/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn your vision into reality. Start with a free consultation and discover how CodeSquad can accelerate your digital transformation.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://codesquad-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg px-8 h-12 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
              >
                <ClipboardCheck className="w-4 h-4 mr-2.5" />
                Get Free Checklist
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://calendly.com/code_squad/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/25 text-white hover:bg-white/10 hover:border-white/40 rounded-lg px-8 h-12 text-base font-medium backdrop-blur-sm transition-all duration-300 group w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2.5" />
                Book a Free Call
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
