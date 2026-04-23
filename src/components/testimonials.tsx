'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Verified, Award } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO',
    company: 'TechVentures Inc',
    companyInitial: 'T',
    companyColor: 'from-blue-500 to-cyan-500',
    quote:
      'CodeSquad transformed our entire digital infrastructure. Their team\'s expertise in cloud migration and modern architecture helped us reduce operational costs by 35% while improving system reliability to 99.99% uptime. They didn\'t just build software — they became a strategic partner in our growth.',
    rating: 5,
    initials: 'SJ',
    color: 'from-blue-500 to-cyan-500',
    result: '35% cost reduction',
    industry: 'Technology',
  },
  {
    name: 'Michael Chen',
    title: 'CEO',
    company: 'FinanceHub',
    companyInitial: 'F',
    companyColor: 'from-violet-500 to-purple-500',
    quote:
      'Their team delivered our fintech platform ahead of schedule with exceptional quality. The attention to security compliance and user experience was remarkable. We\'ve processed over $2B in transactions on the platform they built. Highly recommended for any financial technology project.',
    rating: 5,
    initials: 'MC',
    color: 'from-violet-500 to-purple-500',
    result: 'Delivered 2 weeks early',
    industry: 'Fintech',
  },
  {
    name: 'Emily Rodriguez',
    title: 'VP Product',
    company: 'HealthFirst',
    companyInitial: 'H',
    companyColor: 'from-emerald-500 to-teal-500',
    quote:
      'The mobile app they built for us exceeded all expectations. Patient engagement increased by 200% within the first quarter. Their deep understanding of healthcare regulations and HIPAA compliance was truly impressive — we never had a single compliance concern.',
    rating: 5,
    initials: 'ER',
    color: 'from-emerald-500 to-teal-500',
    result: '200% engagement boost',
    industry: 'Healthcare',
  },
  {
    name: 'David Kim',
    title: 'Director of Engineering',
    company: 'DataStream Corp',
    companyInitial: 'D',
    companyColor: 'from-sky-500 to-blue-500',
    quote:
      'CodeSquad\'s AI solutions helped us reduce operational costs by 40%. Their machine learning models for predictive analytics have become core to our business strategy. The team\'s technical depth and ability to translate complex requirements into elegant solutions is unmatched.',
    rating: 5,
    initials: 'DK',
    color: 'from-sky-500 to-blue-500',
    result: '40% ops cost savings',
    industry: 'Data Analytics',
  },
  {
    name: 'Lisa Thompson',
    title: 'COO',
    company: 'RetailMax',
    companyInitial: 'R',
    companyColor: 'from-amber-500 to-orange-500',
    quote:
      'Professional, responsive, and incredibly talented team. They delivered our e-commerce platform on time and within budget, handling complex requirements with ease. Our conversion rates jumped 45% post-launch. A true partner in digital transformation.',
    rating: 5,
    initials: 'LT',
    color: 'from-amber-500 to-orange-500',
    result: '45% conversion increase',
    industry: 'E-Commerce',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    setScrollSnaps(api.scrollSnapList());
    api.on('reInit', onSelect);
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-blue-50/20 to-white pointer-events-none" />
      <div className="absolute inset-0 premium-mesh-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Rating Badge */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          <SectionHeader
            label="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from the companies we've helped transform"
          />
          {/* Average Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-3 bg-white border border-amber-200/60 shadow-lg shadow-amber-500/5 rounded-full px-5 py-2.5"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-amber-700">4.9</span>
            <span className="text-sm text-amber-600/70 font-medium">average rating</span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs text-gray-400 font-medium">50+ reviews</span>
          </motion.div>
        </div>

        {/* Carousel */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="relative">
            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 6000,
                  stopOnInteraction: false,
                }),
              ]}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ y: -8, transition: { duration: 0.4 } }}
                      className="group relative bg-white rounded-2xl border border-gray-100 p-7 h-full hover:border-gray-200 transition-all duration-400 flex flex-col overflow-hidden"
                      style={{
                        boxShadow: '0 1px 3px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.02)',
                      }}
                    >
                      {/* Large decorative gradient quote mark - background element */}
                      <div className="absolute top-4 right-4 opacity-[0.04] pointer-events-none">
                        <Quote className="w-24 h-24 fill-[#0066FF] text-[#0066FF]" strokeWidth={1} />
                      </div>

                      {/* Top row: Result badge + Industry */}
                      <div className="flex items-center gap-2 mb-5 relative z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100/60">
                          ✓ {testimonial.result}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-50 text-gray-500 text-xs font-medium border border-gray-100">
                          {testimonial.industry}
                        </span>
                      </div>

                      {/* Quote text - larger, italic, better typography */}
                      <p className="text-gray-600 text-base leading-relaxed flex-1 mb-6 italic max-w-none" style={{ textShadow: '0 0 1px rgba(0,0,0,0.05)' }}>
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-5 relative z-10">
                        <Stars count={testimonial.rating} />
                        <span className="text-sm font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100/60">
                          {testimonial.rating}.0
                        </span>
                      </div>

                      {/* Author with company logo */}
                      <div className="flex items-center gap-3 pt-5 border-t border-gray-100/80 relative z-10">
                        {/* Company logo circle */}
                        <div className="relative">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonial.companyColor} flex items-center justify-center shadow-md`}>
                            <span className="text-white font-bold text-sm">{testimonial.companyInitial}</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm text-[#0A1628] truncate">
                              {testimonial.name}
                            </span>
                            <Verified className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          </div>
                          <p className="text-xs text-gray-500 leading-snug">
                            {testimonial.title} at{' '}
                            <span className="font-medium text-gray-600">{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation + Progress Dots */}
            <div className="flex items-center justify-center gap-5 mt-10">
              {/* Prev button - gradient style */}
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group/btn"
                aria-label="Previous testimonial"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#0052CC] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
                <ChevronLeft className="w-5 h-5 relative z-10" />
              </button>

              {/* Progress Dots */}
              <div className="flex gap-2">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      idx === selectedIndex
                        ? 'w-8 bg-gradient-to-r from-[#0066FF] to-[#338AFF]'
                        : 'w-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next button - gradient style */}
              <button
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group/btn"
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
