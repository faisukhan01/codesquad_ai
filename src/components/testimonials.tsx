'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'CTO at HealthFirst',
    initials: 'SM',
    color: 'from-[#0066FF] to-[#338AFF]',
    quote: 'CodeSquad transformed our patient management system. Their healthcare expertise and technical delivery exceeded all expectations.',
    rating: 5,
    company: 'HealthFirst',
    result: 'Patient engagement up 200%',
  },
  {
    name: 'James Chen',
    title: 'VP Operations at AgriTech Corp',
    initials: 'JC',
    color: 'from-emerald-500 to-teal-500',
    quote: 'The precision agriculture platform they built reduced our crop monitoring costs by 40%. Outstanding team with deep domain knowledge.',
    rating: 5,
    company: 'AgriTech Corp',
    result: '40% cost reduction',
  },
  {
    name: 'Alex Rivera',
    title: 'Director of Engineering at ManuTech',
    initials: 'AR',
    color: 'from-violet-500 to-purple-600',
    quote: 'Their computer vision solution improved our quality inspection accuracy to 99.7%. Truly world-class engineering.',
    rating: 5,
    company: 'ManuTech',
    result: '99.7% inspection accuracy',
  },
  {
    name: 'Priya Sharma',
    title: 'CEO at FinEdge Solutions',
    initials: 'PS',
    color: 'from-amber-500 to-orange-500',
    quote: "From concept to deployment in 10 weeks. CodeSquad's agility and quality are unmatched in the industry.",
    rating: 5,
    company: 'FinEdge Solutions',
    result: '10-week delivery',
  },
  {
    name: 'David Park',
    title: 'COO at SmartFactory Inc',
    initials: 'DP',
    color: 'from-sky-500 to-blue-600',
    quote: 'The IoT monitoring system they developed has been running flawlessly for 18 months. Highly recommend.',
    rating: 5,
    company: 'SmartFactory Inc',
    result: '18 months zero downtime',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      setDirection(newIndex > currentIndex ? 1 : -1);
      setCurrentIndex(newIndex);
    },
    [currentIndex, totalSlides],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50/60 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-50/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title={<>What Our <span className="gradient-text">Clients Say</span></>}
          description="Real results from real partnerships — hear directly from the leaders we've worked with."
        />

        <AnimatedSection variant="fade-up" delay={0.2}>
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main card */}
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Top accent */}
              <div className={`h-1 w-full bg-gradient-to-r ${current.color} transition-all duration-500`} />

              <div className="p-8 sm:p-10 md:p-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 280, damping: 28 },
                      opacity: { duration: 0.18 },
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                      {/* Left: Author info */}
                      <div className="flex flex-col items-center md:items-start gap-4 md:w-48 shrink-0">
                        {/* Avatar */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-xl">{current.initials}</span>
                        </div>

                        {/* Name + title */}
                        <div className="text-center md:text-left">
                          <p className="text-base font-bold text-[#0A1628]">{current.name}</p>
                          <p className="text-sm text-gray-500 mt-0.5 leading-snug">{current.title}</p>
                        </div>

                        {/* Stars */}
                        <Stars count={current.rating} />

                        {/* Result badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-[11px] font-semibold text-gray-600">{current.result}</span>
                        </div>
                      </div>

                      {/* Right: Quote */}
                      <div className="flex-1 relative">
                        {/* Large quote mark */}
                        <Quote className="absolute -top-2 -left-2 w-10 h-10 text-gray-100 fill-gray-100" strokeWidth={0} />
                        <p className="relative text-lg sm:text-xl text-gray-700 leading-relaxed font-light italic pt-4">
                          &ldquo;{current.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 px-1">
              {/* Prev */}
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-gray-200 hover:border-[#0066FF] hover:bg-[#0066FF] transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      idx === currentIndex
                        ? 'w-8 bg-[#0066FF]'
                        : 'w-3 bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white border border-gray-200 hover:border-[#0066FF] hover:bg-[#0066FF] transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
