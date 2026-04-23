'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, ClipboardCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroSlides = [
  {
    image: '/images/hero-bg-1.jpg',
    heading: 'Engineering Digital Excellence',
    subheading: 'We build world-class software solutions that transform businesses and drive innovation across industries.',
  },
  {
    image: '/images/hero-bg-2.jpg',
    heading: 'Powering Innovation with Technology',
    subheading: 'From healthcare to agriculture, our cutting-edge solutions empower organizations to thrive in the digital age.',
  },
  {
    image: '/images/hero-bg-3.jpg',
    heading: 'Your Trusted Technology Partner',
    subheading: 'Partner with a team of 200+ experts delivering scalable, reliable, and future-ready solutions.',
  },
  {
    image: '/images/hero-bg-4.jpg',
    heading: 'Scaling Businesses with AI',
    subheading: 'Leverage machine learning, computer vision, and intelligent automation to unlock new levels of efficiency and growth.',
  },
  {
    image: '/images/hero-bg-5.jpg',
    heading: 'End-to-End Product Development',
    subheading: 'From ideation and design to development and deployment — we handle the full lifecycle so you can focus on what matters most.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-blue-100/80 font-medium">Trusted by 50+ companies worldwide</span>
          </motion.div>

          {/* Headline - Rotating */}
          <div className="relative min-h-[5rem] sm:min-h-[6rem] lg:min-h-[7rem] mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                {heroSlides[currentSlide].heading.split(' ').map((word, i) => (
                  <span key={i}>
                    {i >= heroSlides[currentSlide].heading.split(' ').length - 2 ? (
                      <span
                        className="text-transparent bg-clip-text"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #0066FF 0%, #338AFF 50%, #66B2FF 100%)',
                        }}
                      >
                        {word}
                      </span>
                    ) : (
                      <span className="text-white">{word}</span>
                    )}
                    {i < heroSlides[currentSlide].heading.split(' ').length - 1 && ' '}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle - Rotating */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-base sm:text-lg lg:text-xl text-blue-100/60 max-w-xl mb-10 leading-relaxed font-light"
            >
              {heroSlides[currentSlide].subheading}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="https://codesquad-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg px-8 h-12 text-base font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all duration-300 group w-full sm:w-auto"
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
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-lg px-8 h-12 text-base font-medium backdrop-blur-sm transition-all duration-300 group w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2.5" />
                Book a Free Call
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 mt-12"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? 'w-10 bg-[#0066FF]'
                      : 'w-5 bg-white/25 hover:bg-white/40'
                  }`}
                />
              </button>
            ))}
            <span className="ml-3 text-xs text-blue-200/40 font-mono">
              {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent z-[11]" />
    </section>
  );
}
