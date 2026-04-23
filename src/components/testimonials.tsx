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
    color: 'from-blue-500 to-cyan-500',
    quote: 'CodeSquad transformed our patient management system. Their healthcare expertise and technical delivery exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'James Chen',
    title: 'VP Operations at AgriTech Corp',
    initials: 'JC',
    color: 'from-emerald-500 to-teal-500',
    quote: 'The precision agriculture platform they built reduced our crop monitoring costs by 40%. Outstanding team.',
    rating: 5,
  },
  {
    name: 'Alex Rivera',
    title: 'Director of Engineering at ManuTech',
    initials: 'AR',
    color: 'from-violet-500 to-purple-500',
    quote: 'Their computer vision solution improved our quality inspection accuracy to 99.7%. Truly world-class engineering.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    title: 'CEO at FinEdge Solutions',
    initials: 'PS',
    color: 'from-amber-500 to-orange-500',
    quote: 'From concept to deployment in 10 weeks. CodeSquad\'s agility and quality are unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'David Park',
    title: 'COO at SmartFactory Inc',
    initials: 'DP',
    color: 'from-sky-500 to-blue-600',
    quote: 'The IoT monitoring system they developed has been running flawlessly for 18 months. Highly recommend.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
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

  // Auto-advance every 5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-gray-50/50 relative overflow-hidden">
      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 premium-mesh-bg pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Real results from real partnerships — hear directly from the leaders we've worked with."
        />

        <AnimatedSection variant="fade-up" delay={0.2}>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Testimonial Card */}
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg shadow-black/[0.03] p-8 sm:p-10 min-h-[320px] flex flex-col justify-center">
              {/* Decorative quote icon - top right */}
              <div className="absolute top-6 right-8 opacity-[0.06] pointer-events-none select-none">
                <Quote className="w-20 h-20 fill-[#0066FF] text-[#0066FF]" strokeWidth={1} />
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Stars */}
                  <Stars count={current.rating} />

                  {/* Quote text */}
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic mt-6 mb-8 max-w-2xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    {/* Avatar circle with initials */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center shadow-md`}
                    >
                      <span className="text-white font-bold text-sm">{current.initials}</span>
                    </div>

                    {/* Name + title */}
                    <div>
                      <p className="text-base font-semibold text-[#0A1628]">{current.name}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{current.title}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-5 mt-8">
              {/* Prev button */}
              <button
                onClick={goPrev}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group/btn border border-gray-200 hover:border-transparent"
                aria-label="Previous testimonial"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0052CC] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
                <ChevronLeft className="w-5 h-5 relative z-10" />
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      idx === currentIndex
                        ? 'w-8 bg-gradient-to-r from-[#0066FF] to-[#338AFF]'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={goNext}
                className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group/btn border border-gray-200 hover:border-transparent"
                aria-label="Next testimonial"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0052CC] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
                <ChevronRight className="w-5 h-5 relative z-10" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
