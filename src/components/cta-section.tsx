'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-[#0040A0]" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="fade-up">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
          </motion.div>

          <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s discuss how CodeSquad can help you achieve your digital goals
            and accelerate your growth journey.
          </p>

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
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-xl px-8 h-13 text-base backdrop-blur-sm transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
