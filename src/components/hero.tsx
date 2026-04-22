'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/particle-background';

const stats = [
  { value: 200, suffix: '+', label: 'Projects' },
  { value: 50, suffix: '+', label: 'Clients' },
  { value: 8, suffix: '+', label: 'Years' },
  { value: 99, suffix: '%', label: 'Satisfaction' },
];

const headingWords = ['Engineering', 'Digital', 'Excellence'];

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center px-4 sm:px-6"
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          {value}
        </motion.span>
        <span className="text-[#338AFF]">{suffix}</span>
      </div>
      <div className="text-sm text-blue-200/70 mt-1">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0d2137]/90 to-[#0A1628]/95" />
      </div>

      {/* Particle animation */}
      <ParticleBackground />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#338AFF]/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-blue-100">Trusted by 50+ companies worldwide</span>
          </motion.div>

          {/* Headline with word-by-word animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {headingWords.map((word, i) => (
              <span key={word}>
                {i === 2 ? (
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                    className="gradient-text"
                    style={{
                      background: 'linear-gradient(135deg, #338AFF, #66B2FF, #99CCFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {word}
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                    className="text-white"
                  >
                    {word}
                  </motion.span>
                )}
                {i < headingWords.length - 1 && ' '}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build world-class software solutions that transform businesses
            and drive innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl px-8 h-13 text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-xl px-8 h-13 text-base backdrop-blur-sm transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <CounterStat key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 animate-bounce-scroll"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-blue-200/60 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-blue-200/60" />
        </div>
      </motion.div>
    </section>
  );
}
