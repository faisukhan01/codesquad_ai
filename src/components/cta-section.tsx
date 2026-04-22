'use client';

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

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
        <SectionHeader
          label="Get Started"
          title="Ready to Build Something Amazing?"
          description="Let's turn your vision into reality. Start your project with CodeSquad today."
          light
        />

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
