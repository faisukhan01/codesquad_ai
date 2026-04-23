'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Verified } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
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
    quote:
      'CodeSquad transformed our entire digital infrastructure. Their team\'s expertise in cloud migration and modern architecture helped us reduce operational costs by 35% while improving system reliability.',
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
    quote:
      'Their team delivered our fintech platform ahead of schedule with exceptional quality. The attention to security compliance and user experience was remarkable. Highly recommended for any financial technology project.',
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
    quote:
      'The mobile app they built for us exceeded all expectations. Patient engagement increased by 200% within the first quarter. Their understanding of healthcare regulations was impressive.',
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
    quote:
      'CodeSquad\'s AI solutions helped us reduce operational costs by 40%. Their machine learning models for predictive analytics have become core to our business strategy. Exceptional technical depth.',
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
    quote:
      'Professional, responsive, and incredibly talented team. They delivered our e-commerce platform on time and within budget, handling complex requirements with ease. A true partner in digital transformation.',
    rating: 5,
    initials: 'LT',
    color: 'from-amber-500 to-orange-500',
    result: 'On-time & on-budget',
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
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the companies we've helped transform"
        />

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
                  delay: 5000,
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
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-7 h-full hover:shadow-xl hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300 flex flex-col"
                    >
                      {/* Top: Quote icon + Verified + Rating */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-sm`}>
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1.5">
                            <Stars count={testimonial.rating} />
                          </div>
                          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                            {testimonial.rating}.0
                          </span>
                        </div>
                      </div>

                      {/* Quote text */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Result badge + Industry */}
                      <div className="flex items-center gap-2 mb-5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-[#0066FF] text-xs font-semibold">
                          ✓ {testimonial.result}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 text-xs font-medium">
                          {testimonial.industry}
                        </span>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                        <Avatar className="h-11 w-11 ring-2 ring-white shadow-sm">
                          <AvatarFallback className={`bg-gradient-to-br ${testimonial.color} text-white text-sm font-semibold`}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-sm text-[#0A1628] truncate">
                              {testimonial.name}
                            </span>
                            <Verified className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          </div>
                          <div className="text-xs text-gray-500">
                            {testimonial.title}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation + Progress Dots */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 text-gray-600 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Progress Dots */}
              <div className="flex gap-2">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === selectedIndex
                        ? 'w-6 bg-[#0066FF]'
                        : 'w-2 bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 text-gray-600 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
