'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const articles = [
  {
    title: 'The Future of AI in Enterprise Software',
    image: '/images/blog-ai.png',
    description:
      'Explore how artificial intelligence is reshaping the enterprise landscape and what it means for your business strategy.',
    author: 'Alex Rivera',
    readTime: '5 min read',
    date: 'Jan 15, 2025',
    category: 'Artificial Intelligence',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Cloud Migration: A Strategic Guide',
    image: '/images/blog-cloud.png',
    description:
      'A comprehensive roadmap for businesses looking to migrate their infrastructure to the cloud with minimal disruption.',
    author: 'Priya Sharma',
    readTime: '8 min read',
    date: 'Jan 10, 2025',
    category: 'Cloud',
    categoryColor: 'bg-cyan-100 text-cyan-700',
  },
  {
    title: 'Agile at Scale: Lessons from 200+ Projects',
    image: '/images/blog-agile.png',
    description:
      'Key insights from our experience delivering large-scale projects using agile methodologies across diverse industries.',
    author: 'Sarah Mitchell',
    readTime: '6 min read',
    date: 'Jan 5, 2025',
    category: 'Methodology',
    categoryColor: 'bg-teal-100 text-teal-700',
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
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <h3 className="text-lg font-semibold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-200 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {article.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {/* Avatar with initials */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#338AFF] flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {getInitials(article.author)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[#0A1628]">
                  {article.author}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </AnimatedItem>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="Our Blog"
          title="Latest Insights"
          description="Stay ahead with our latest thinking on technology, innovation, and digital transformation."
        />

        {/* Blog Cards Grid */}
        <AnimatedSection
          variant="stagger-children"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {articles.map((article, index) => (
            <BlogCard key={article.title} article={article} index={index} />
          ))}
        </AnimatedSection>

        {/* View All Button */}
        <AnimatedSection variant="fade-up" delay={0.3} className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white rounded-xl px-8 h-12 text-base font-medium transition-all duration-300 group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
