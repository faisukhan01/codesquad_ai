'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const articles = [
  {
    title: 'The Future of AI in Enterprise Software',
    image: '/images/blog-ai.png',
    description:
      'Explore how artificial intelligence is reshaping the enterprise landscape and what it means for your business strategy.',
    author: 'Shahzaib Hamid',
    readTime: '5 min read',
    date: 'Mar 15, 2026',
    category: 'Artificial Intelligence',
    accent: 'from-blue-600 to-indigo-600',
    accentLight: 'bg-blue-50 text-blue-700 border border-blue-100',
    featured: true,
  },
  {
    title: 'Cloud Migration: A Strategic Guide',
    image: '/images/blog-cloud.png',
    description:
      'A comprehensive roadmap for businesses looking to migrate their infrastructure to the cloud with minimal disruption.',
    author: 'Shahzaib Hamid',
    readTime: '8 min read',
    date: 'Feb 10, 2026',
    category: 'Cloud',
    accent: 'from-cyan-500 to-blue-500',
    accentLight: 'bg-cyan-50 text-cyan-700 border border-cyan-100',
    featured: false,
  },
  {
    title: 'Agile at Scale: Lessons from 200+ Projects',
    image: '/images/blog-agile.png',
    description:
      'Key insights from our experience delivering large-scale projects using agile methodologies across diverse industries.',
    author: 'Shahzaib Hamid',
    readTime: '6 min read',
    date: 'Jan 5, 2026',
    category: 'Methodology',
    accent: 'from-teal-500 to-emerald-500',
    accentLight: 'bg-teal-50 text-teal-700 border border-teal-100',
    featured: false,
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function BlogCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  return (
    <AnimatedItem variant="fade-up" delay={index * 0.15}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100/80 hover:border-transparent"
        style={{ willChange: 'transform' }}
      >
        {/* Glow border on hover */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${article.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Rich gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${article.accentLight}`}>
              {article.category}
            </span>
          </div>

          {/* Read time pill on image */}
          <div className="absolute bottom-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/40 text-white backdrop-blur-sm border border-white/10">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6 pb-5">
          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-[1.05rem] font-bold text-[#0A1628] mb-3 leading-snug group-hover:text-[#0066FF] transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
            {article.description}
          </p>

          {/* Divider */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${article.accent} flex items-center justify-center shadow-sm`}>
                  <span className="text-white text-xs font-bold">
                    {getInitials(article.author)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#0A1628]">
                  {article.author}
                </span>
              </div>

              {/* Read more CTA */}
              <motion.div
                className={`flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${article.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#0066FF]" />
                <span className="text-[#0066FF]">Read more</span>
                <ArrowRight className="w-3 h-3 text-[#0066FF] group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${article.accent} transition-all duration-500 ease-out`} />
      </motion.article>
    </AnimatedItem>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Our Blog"
          title="Latest Insights"
          description="Expert perspectives, in-depth research, and actionable ideas — curated by our team to keep you ahead of the curve."
        />

        {/* Blog Cards Grid */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
        >
          {articles.map((article, index) => (
            <BlogCard key={article.title} article={article} index={index} />
          ))}
        </AnimatedSection>

        {/* View All Button */}
        <AnimatedSection variant="fade-up" delay={0.3} className="text-center mt-14">
          <Button
            variant="outline"
            className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white rounded-xl px-8 h-12 text-base font-medium transition-all duration-300 group shadow-sm hover:shadow-blue-200 hover:shadow-lg"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
