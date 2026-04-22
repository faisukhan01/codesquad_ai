'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import ScheduleCallModal from '@/components/schedule-call-modal';

export default function CTASection() {
  const [callModalOpen, setCallModalOpen] = useState(false);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#0040A0]" />

      {/* Animated orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 stats-dot-pattern opacity-30" />

      {/* Decorative border */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl border border-white/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-200" />
          <span className="text-sm text-blue-100 font-medium">200+ Projects Successfully Delivered</span>
        </motion.div>

        <AnimatedSection variant="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Something{' '}
            <span className="underline decoration-blue-300/40 decoration-4 underline-offset-8">Amazing?</span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn your vision into reality. Start your project with CodeSquad and join 50+ companies that trust us with their digital transformation.
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="flex items-center gap-1.5 justify-center mb-1">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span className="text-2xl font-bold text-white">99%</span>
              </div>
              <span className="text-xs text-blue-200/60">Satisfaction</span>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">2x</span>
              <p className="text-xs text-blue-200/60">Faster Delivery</p>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">24/7</span>
              <p className="text-xs text-blue-200/60">Support</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white text-[#0066FF] hover:bg-gray-100 rounded-xl px-8 h-13 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCallModalOpen(true)}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-xl px-8 h-13 text-base backdrop-blur-sm transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </AnimatedSection>

        <ScheduleCallModal open={callModalOpen} onOpenChange={setCallModalOpen} />
      </div>
    </section>
  );
}
