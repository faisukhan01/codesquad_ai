'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

interface PortfolioItem {
  title: string;
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'FinTech Dashboard',
    image: '/images/portfolio-fintech.png',
    description: 'Enterprise financial analytics platform',
    longDescription:
      'A comprehensive financial analytics platform that enables real-time monitoring of transactions, portfolio performance, and risk assessment. Built with a modular microservices architecture handling 10M+ daily transactions with 99.99% uptime.',
    tags: ['React', 'Node.js', 'AWS'],
    category: 'Financial Technology',
  },
  {
    title: 'HealthConnect App',
    image: '/images/portfolio-healthcare.png',
    description: 'Patient management and telemedicine',
    longDescription:
      'A HIPAA-compliant telemedicine application connecting patients with healthcare providers. Features include video consultations, electronic health records, prescription management, and AI-powered symptom checking serving 500K+ patients.',
    tags: ['React Native', 'Python', 'Azure'],
    category: 'Healthcare',
  },
  {
    title: 'ShopSphere E-commerce',
    image: '/images/portfolio-ecommerce.png',
    description: 'Omnichannel retail platform',
    longDescription:
      'A scalable e-commerce platform supporting omnichannel retail operations with inventory management, personalized recommendations, and seamless checkout. Processes $50M+ in annual transactions with sub-second page loads.',
    tags: ['Next.js', '.NET', 'Google Cloud'],
    category: 'E-Commerce',
  },
  {
    title: 'AI Insights Engine',
    image: '/images/portfolio-ai.png',
    description: 'Predictive analytics using ML',
    longDescription:
      'An enterprise AI/ML platform providing predictive analytics for supply chain optimization. Uses advanced deep learning models to forecast demand, optimize routes, and reduce operational costs by 40% for Fortune 500 clients.',
    tags: ['Python', 'TensorFlow', 'Kubernetes'],
    category: 'Artificial Intelligence',
  },
];

function PortfolioCard({ item, onOpen }: { item: PortfolioItem; onOpen: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
      onClick={onOpen}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium mb-2">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm text-blue-100/80">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-300">
            {item.title}
          </h3>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0066FF] transition-colors duration-300" />
        </div>
        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-[#0066FF] text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore some of our most impactful projects across diverse industries
          </p>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <AnimatedItem key={item.title} variant="fade-up" delay={0.1}>
              <PortfolioCard item={item} onOpen={() => setSelectedItem(item)} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <AnimatePresence>
          {selectedItem && (
            <DialogContent className="sm:max-w-2xl p-0 overflow-hidden">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                    {selectedItem.category}
                  </span>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedItem.title}
                  </DialogTitle>
                </div>
              </div>
              <div className="p-6">
                <DialogDescription className="text-gray-600 leading-relaxed mb-4">
                  {selectedItem.longDescription}
                </DialogDescription>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-[#0066FF] text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  );
}
