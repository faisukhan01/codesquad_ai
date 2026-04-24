'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

interface PortfolioItem {
  title: string;
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  result: string;
  year?: string;
}

const categories = ['All', 'Financial Technology', 'Healthcare', 'E-Commerce', 'Artificial Intelligence', 'Cloud & DevOps'];

const portfolioItems: PortfolioItem[] = [
  {
    title: 'FinTech Dashboard',
    image: '/images/portfolio-fintech.png',
    description: 'Enterprise financial analytics platform',
    longDescription:
      'A comprehensive financial analytics platform that enables real-time monitoring of transactions, portfolio performance, and risk assessment. Built with a modular microservices architecture handling 10M+ daily transactions with 99.99% uptime.',
    tags: ['React', 'Node.js', 'AWS'],
    category: 'Financial Technology',
    result: '35% cost reduction',
    year: '2024',
  },
  {
    title: 'HealthConnect App',
    image: '/images/portfolio-healthcare.png',
    description: 'Patient management and telemedicine',
    longDescription:
      'A HIPAA-compliant telemedicine application connecting patients with healthcare providers. Features include video consultations, electronic health records, prescription management, and AI-powered symptom checking serving 500K+ patients.',
    tags: ['React Native', 'Python', 'Azure'],
    category: 'Healthcare',
    result: '200% engagement increase',
    year: '2024',
  },
  {
    title: 'ShopSphere E-commerce',
    image: '/images/portfolio-ecommerce.png',
    description: 'Omnichannel retail platform',
    longDescription:
      'A scalable e-commerce platform supporting omnichannel retail operations with inventory management, personalized recommendations, and seamless checkout. Processes $50M+ in annual transactions with sub-second page loads.',
    tags: ['Next.js', '.NET', 'Google Cloud'],
    category: 'E-Commerce',
    result: '$50M+ annual GMV',
    year: '2023',
  },
  {
    title: 'AI Insights Engine',
    image: '/images/portfolio-ai.png',
    description: 'Predictive analytics using ML',
    longDescription:
      'An enterprise AI/ML platform providing predictive analytics for supply chain optimization. Uses advanced deep learning models to forecast demand, optimize routes, and reduce operational costs by 40% for Fortune 500 clients.',
    tags: ['Python', 'TensorFlow', 'Kubernetes'],
    category: 'Artificial Intelligence',
    result: '40% cost reduction',
    year: '2024',
  },
  {
    title: 'CloudVault Platform',
    image: '/images/portfolio-fintech.png',
    description: 'Enterprise cloud migration & management',
    longDescription:
      'A comprehensive cloud management platform enabling enterprises to migrate, manage, and optimize multi-cloud infrastructure. Features automated scaling, cost optimization, and security compliance monitoring across AWS, Azure, and GCP.',
    tags: ['Go', 'Terraform', 'AWS'],
    category: 'Cloud & DevOps',
    result: '60% faster deployments',
    year: '2023',
  },
  {
    title: 'SmartLedger Pro',
    image: '/images/portfolio-healthcare.png',
    description: 'Blockchain-based financial settlement',
    longDescription:
      'A distributed ledger solution for real-time financial settlements between institutions. Reduces reconciliation time from days to minutes while maintaining complete audit trails and regulatory compliance with SEC and FINRA standards.',
    tags: ['Solidity', 'Node.js', 'PostgreSQL'],
    category: 'Financial Technology',
    result: '99.7% settlement accuracy',
    year: '2024',
  },
];

function PortfolioCard({ item, onOpen }: { item: PortfolioItem; onOpen: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
        className="group relative rounded-2xl overflow-hidden cursor-pointer border border-gray-100/80 bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200/50 transition-all duration-400 h-full premium-card-glow"
        onClick={onOpen}
      >
        {/* Image with enhanced overlay */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          />
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
          {/* Blue tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium mb-2 border border-white/10">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm text-blue-100/80 line-clamp-2">{item.description}</p>
          </div>

          {/* Result badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] backdrop-blur-sm text-white text-xs font-bold shadow-lg shadow-blue-500/25">
              {item.result}
            </span>
          </div>

          {/* View project arrow */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
            <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-[#0A1628] group-hover:text-gradient-blue transition-all duration-300">
              {item.title}
            </h3>
            <div className="flex items-center gap-2">
              {item.year && (
                <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                  {item.year}
                </span>
              )}
              <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-lg bg-gray-50/80 border border-gray-100 text-gray-600 text-xs font-medium group-hover:bg-blue-50/80 group-hover:text-[#0066FF] group-hover:border-blue-100/50 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding premium-mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="Portfolio"
          title="Our Work"
          description="Explore some of our most impactful projects across diverse industries"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0066FF]/50 hover:text-[#0066FF] hover:bg-blue-50/50 hover:shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <AnimatedItem key={item.title} variant="fade-up" delay={0.08}>
                <PortfolioCard item={item} onOpen={() => setSelectedItem(item)} />
              </AnimatedItem>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />
                {/* Blue accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium mb-2 border border-white/10">
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
                {/* Result highlight */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 border border-blue-100/50 rounded-xl px-4 py-3 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Key Result</p>
                    <p className="text-sm font-bold text-[#0A1628]">{selectedItem.result}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50/80 text-[#0066FF] text-sm font-medium"
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
