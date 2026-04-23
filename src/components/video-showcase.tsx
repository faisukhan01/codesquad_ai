'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Clock, Video, PlayCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const stats = [
  { value: '50+', label: 'Videos' },
  { value: '10K+', label: 'Views' },
  { value: '4.9', label: 'Rating' },
];

export default function VideoShowcase() {
  return (
    <section id="showcase" className="bg-white section-padding overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-6">
            <AnimatedSection variant="fade-up" delay={0}>
              <SectionHeader
                label="Showcase"
                title="See Our Work in Action"
                description="Watch how we've helped companies transform their digital presence."
                centered={false}
              />
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.15}>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                From project walkthroughs and client testimonials to in-depth case studies, our video library
                showcases the real impact of our work. Explore behind-the-scenes looks at our development
                process and hear directly from the teams we&apos;ve partnered with.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <div className="flex items-center gap-8 mt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-bold text-[#0A1628]">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.45}>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#0066FF] text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 w-fit mt-2"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Watch on YouTube</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Right Side - Video Preview Card */}
          <AnimatedSection variant="fade-left" delay={0.2}>
            <div className="relative">
              {/* Main Video Card */}
              <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1f35] rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Decorative gradient orb */}
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#0066FF]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[#338AFF]/15 rounded-full blur-3xl" />

                {/* Centered Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 shadow-lg shadow-white/10"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.div>

                {/* Play text below button */}
                <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium uppercase tracking-widest z-10">Watch Demo</p>

                {/* Floating Top Right Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg hidden sm:flex items-center gap-2"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-medium">Live</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-white/80 text-xs">Client Interview</span>
                  </div>
                </motion.div>

                {/* Floating Bottom Left Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg hidden sm:flex items-center gap-2"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-[#338AFF]" />
                  <span className="text-white/80 text-xs font-medium">Case Study</span>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3.5 text-white/60" />
                    <span className="text-white/60 text-xs">12:34</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
