'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  BookOpen,
  Headphones,
  Download,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  Search,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

// ── Types ───────────────────────────────────────────────────────────────────

type ResourceType = 'Article' | 'White Paper' | 'Podcast';
type FilterTab = 'All' | 'Articles' | 'White Papers' | 'Podcasts';

interface Resource {
  id: number;
  type: ResourceType;
  icon: typeof FileText;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  tag: string;
  tagColor: string;
  iconBg: string;
  iconColor: string;
  actionLabel: string;
}

// ── Data ────────────────────────────────────────────────────────────────────

const resources: Resource[] = [
  {
    id: 1,
    type: 'Article',
    icon: FileText,
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    description:
      'Explore the latest advancements in AI-powered medical imaging and diagnostic tools that are transforming patient care outcomes.',
    author: 'Dr. Sarah Mitchell',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    tag: 'Healthcare',
    tagColor: 'bg-blue-50 text-blue-700',
    iconBg: 'bg-blue-500',
    iconColor: 'text-blue-600',
    actionLabel: 'Read',
  },
  {
    id: 2,
    type: 'Article',
    icon: FileText,
    title: 'Computer Vision in Quality Control: Lessons from 50+ Implementations',
    description:
      'Key insights and best practices from deploying computer vision systems across manufacturing facilities worldwide.',
    author: 'Alex Rivera',
    readTime: '6 min read',
    date: 'Dec 20, 2024',
    tag: 'Computer Vision',
    tagColor: 'bg-violet-50 text-violet-700',
    iconBg: 'bg-sky-500',
    iconColor: 'text-sky-600',
    actionLabel: 'Read',
  },
  {
    id: 3,
    type: 'Article',
    icon: FileText,
    title: 'Building HIPAA-Compliant Applications: A Developer\'s Guide',
    description:
      'Essential guidelines for building healthcare applications that meet regulatory requirements without sacrificing innovation.',
    author: 'Priya Sharma',
    readTime: '10 min read',
    date: 'Dec 12, 2024',
    tag: 'Healthcare',
    tagColor: 'bg-blue-50 text-blue-700',
    iconBg: 'bg-indigo-500',
    iconColor: 'text-indigo-600',
    actionLabel: 'Read',
  },
  {
    id: 4,
    type: 'White Paper',
    icon: BookOpen,
    title: 'The Future of Precision Agriculture: A Comprehensive Guide',
    description:
      'An in-depth analysis of how IoT, computer vision, and machine learning are shaping modern farming practices.',
    author: 'James Chen',
    readTime: '15 min read',
    date: 'Jan 8, 2025',
    tag: 'Agriculture',
    tagColor: 'bg-emerald-50 text-emerald-700',
    iconBg: 'bg-emerald-500',
    iconColor: 'text-emerald-600',
    actionLabel: 'Download',
  },
  {
    id: 5,
    type: 'White Paper',
    icon: BookOpen,
    title: 'Enterprise IoT Security: Threats and Solutions',
    description:
      'A thorough examination of the current threat landscape in enterprise IoT and practical countermeasures for security teams.',
    author: 'CodeSquad Research',
    readTime: '20 min read',
    date: 'Nov 28, 2024',
    tag: 'IoT',
    tagColor: 'bg-amber-50 text-amber-700',
    iconBg: 'bg-amber-500',
    iconColor: 'text-amber-600',
    actionLabel: 'Download',
  },
  {
    id: 6,
    type: 'Podcast',
    icon: Headphones,
    title: 'TechTalk: Engineering IoT for Smart Manufacturing',
    description:
      'Listen to our engineering leads discuss real-world IoT implementations and their impact on industrial efficiency.',
    author: 'CodeSquad Team',
    readTime: '32 min listen',
    date: 'Dec 28, 2024',
    tag: 'IoT',
    tagColor: 'bg-amber-50 text-amber-700',
    iconBg: 'bg-violet-500',
    iconColor: 'text-violet-600',
    actionLabel: 'Listen',
  },
  {
    id: 7,
    type: 'Podcast',
    icon: Headphones,
    title: 'From Farm to Future: Digital Transformation in Agriculture',
    description:
      'Industry leaders share how technology is creating a new era of sustainable and efficient farming operations.',
    author: 'CodeSquad Team',
    readTime: '28 min listen',
    date: 'Dec 5, 2024',
    tag: 'Agriculture',
    tagColor: 'bg-emerald-50 text-emerald-700',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    actionLabel: 'Listen',
  },
];

const filterTabs: FilterTab[] = ['All', 'Articles', 'White Papers', 'Podcasts'];

const ITEMS_PER_PAGE = 3;

// ── Helpers ─────────────────────────────────────────────────────────────────

function tabToType(tab: FilterTab): ResourceType | null {
  if (tab === 'All') return null;
  if (tab === 'Articles') return 'Article';
  if (tab === 'White Papers') return 'White Paper';
  if (tab === 'Podcasts') return 'Podcast';
  return null;
}

function ActionIcon({ type }: { type: ResourceType }) {
  if (type === 'Podcast') return <Headphones className="w-3.5 h-3.5" />;
  if (type === 'White Paper') return <Download className="w-3.5 h-3.5" />;
  return <FileText className="w-3.5 h-3.5" />;
}

// ── Animation variants ──────────────────────────────────────────────────────

const cardVariants = {
  enter: { opacity: 0, y: 24, scale: 0.97 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.97 },
};

// ── Component ───────────────────────────────────────────────────────────────

export default function Resources() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  // Reset page when filters change
  const handleTabChange = useCallback((tab: FilterTab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  }, []);

  // Filtered resources
  const filteredResources = useMemo(() => {
    const typeFilter = tabToType(activeTab);
    const query = searchQuery.toLowerCase().trim();

    return resources.filter((r) => {
      const matchesType = !typeFilter || r.type === typeFilter;
      const matchesSearch =
        !query ||
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.tag.toLowerCase().includes(query) ||
        r.author.toLowerCase().includes(query);
      return matchesType && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredResources.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages - 1);
  const pagedResources = filteredResources.slice(
    safeCurrentPage * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const goToPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(0, p - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  }, [totalPages]);

  return (
    <section id="resources" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          label="Resources"
          title="Articles, White Papers & Podcasts"
          description="Stay ahead with our latest insights on healthcare, agriculture, computer vision, and IoT technologies."
        />

        {/* Search Bar */}
        <AnimatedSection variant="fade-up" className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search resources by title, topic, or author..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all duration-300"
            />
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection variant="fade-up" className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-[#0066FF]/40 hover:text-[#0066FF] hover:bg-blue-50/40'
                  }`}
                >
                  {tab}
                  {!isActive && (
                    <span className="sr-only">– click to filter</span>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Resource Cards */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${searchQuery}-${safeCurrentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {pagedResources.length > 0 ? (
                pagedResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="h-full"
                  >
                    <motion.article
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300"
                    >
                      {/* Top accent line */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#0066FF] to-[#338AFF] opacity-80" />

                      <div className="flex-1 flex flex-col p-6">
                        {/* Top row: type icon + badges */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-11 h-11 rounded-xl ${resource.iconBg} flex items-center justify-center shadow-md`}
                          >
                            <resource.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-semibold ${resource.tagColor}`}
                            >
                              {resource.tag}
                            </span>
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                resource.type === 'Podcast'
                                  ? 'bg-violet-50 text-violet-600'
                                  : resource.type === 'White Paper'
                                    ? 'bg-amber-50 text-amber-600'
                                    : 'bg-gray-50 text-gray-500'
                              }`}
                            >
                              {resource.type}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors duration-300 leading-snug line-clamp-2">
                          {resource.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3 flex-1">
                          {resource.description}
                        </p>

                        {/* Bottom: meta + action */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {resource.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.readTime}
                            </span>
                          </div>
                          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors duration-200">
                            <ActionIcon type={resource.type} />
                            {resource.actionLabel}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  </motion.div>
                ))
              ) : (
                /* Empty state */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Search className="w-7 h-7 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#0A1628] mb-1">
                    No resources found
                  </h4>
                  <p className="text-sm text-gray-400 max-w-md">
                    Try adjusting your search query or changing the filter tab to find what
                    you&apos;re looking for.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {filteredResources.length > ITEMS_PER_PAGE && (
          <AnimatedSection variant="fade-up" className="mt-10">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goToPrev}
                disabled={safeCurrentPage === 0}
                aria-label="Previous page"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-[#0066FF] hover:text-[#0066FF] hover:bg-blue-50/40 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-500 disabled:hover:bg-white transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Page ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === safeCurrentPage
                        ? 'w-7 bg-[#0066FF]'
                        : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                disabled={safeCurrentPage === totalPages - 1}
                aria-label="Next page"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-[#0066FF] hover:text-[#0066FF] hover:bg-blue-50/40 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-500 disabled:hover:bg-white transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        )}

        {/* View All Resources */}
        <AnimatedSection variant="fade-up" delay={0.2} className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#0066FF] text-[#0066FF] font-semibold text-sm hover:bg-[#0066FF] hover:text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
