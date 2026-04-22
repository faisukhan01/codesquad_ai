'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
    color: 'bg-blue-500',
  },
  {
    name: 'Michael Chen',
    title: 'CEO',
    company: 'FinanceHub',
    quote:
      'Their team delivered our fintech platform ahead of schedule with exceptional quality. The attention to security compliance and user experience was remarkable. Highly recommended for any financial technology project.',
    rating: 5,
    initials: 'MC',
    color: 'bg-cyan-500',
  },
  {
    name: 'Emily Rodriguez',
    title: 'VP Product',
    company: 'HealthFirst',
    quote:
      'The mobile app they built for us exceeded all expectations. Patient engagement increased by 200% within the first quarter. Their understanding of healthcare regulations was impressive.',
    rating: 5,
    initials: 'ER',
    color: 'bg-teal-500',
  },
  {
    name: 'David Kim',
    title: 'Director of Engineering',
    company: 'DataStream Corp',
    quote:
      'CodeSquad\'s AI solutions helped us reduce operational costs by 40%. Their machine learning models for predictive analytics have become core to our business strategy. Exceptional technical depth.',
    rating: 5,
    initials: 'DK',
    color: 'bg-sky-500',
  },
  {
    name: 'Lisa Thompson',
    title: 'COO',
    company: 'RetailMax',
    quote:
      'Professional, responsive, and incredibly talented team. They delivered our e-commerce platform on time and within budget, handling complex requirements with ease. A true partner in digital transformation.',
    rating: 5,
    initials: 'LT',
    color: 'bg-emerald-500',
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

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="testimonials" className="section-padding bg-white">
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
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg hover:shadow-blue-500/5 transition-shadow duration-300"
                    >
                      {/* Quote icon */}
                      <Quote className="w-8 h-8 text-blue-100 mb-4" />

                      {/* Stars */}
                      <Stars count={testimonial.rating} />

                      {/* Quote */}
                      <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 line-clamp-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className={`${testimonial.color} text-white text-sm font-semibold`}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-sm text-[#0A1628]">
                            {testimonial.name}
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

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
