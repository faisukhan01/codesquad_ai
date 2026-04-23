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
  Search,
  FolderSearch,
  Sparkles,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

// ── Types ───────────────────────────────────────────────────────────────────

type ResourceType = 'Article' | 'White Paper' | 'Podcast';
type FilterTab = 'All' | 'Articles' | 'White Papers' | 'Podcasts';

interface Resource {
  id: number;
  type: ResourceType;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  tag: string;
  actionLabel: string;
}

// ── Color Mapping ───────────────────────────────────────────────────────────

const typeColors: Record<ResourceType, { accent: string; gradient: string; badge: string; badgeText: string; iconBg: string }> = {
  Article: {
    accent: 'bg-[#0066FF]',
    gradient: 'from-blue-500/90 via-blue-600/80 to-[#0066FF]/70',
    badge: 'bg-blue-50/80 border-blue-100/60',
    badgeText: 'text-blue-700',
    iconBg: 'bg-blue-500/10 text-blue-600',
  },
  'White Paper': {
    accent: 'bg-amber-500',
    gradient: 'from-amber-400/90 via-amber-500/80 to-orange-500/70',
    badge: 'bg-amber-50/80 border-amber-100/60',
    badgeText: 'text-amber-700',
    iconBg: 'bg-amber-500/10 text-amber-600',
  },
  Podcast: {
    accent: 'bg-violet-500',
    gradient: 'from-violet-500/90 via-purple-500/80 to-fuchsia-500/70',
    badge: 'bg-violet-50/80 border-violet-100/60',
    badgeText: 'text-violet-700',
    iconBg: 'bg-violet-500/10 text-violet-600',
  },
};

const typeIcons: Record<ResourceType, typeof FileText> = {
  Article: FileText,
  'White Paper': BookOpen,
  Podcast: Headphones,
};

// ── Data ────────────────────────────────────────────────────────────────────

const resources: Resource[] = [
  {
    id: 1,
    type: 'Article',
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    description:
      'Explore the latest advancements in AI-powered medical imaging and diagnostic tools that are transforming patient care outcomes across hospitals worldwide.',
    author: 'Dr. Sarah Mitchell',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    tag: 'Healthcare',
    actionLabel: 'Read Article',
  },
  {
    id: 2,
    type: 'Article',
    title: 'Computer Vision in Quality Control: Lessons from 50+ Implementations',
    description:
      'Key insights and battle-tested best practices from deploying computer vision systems across manufacturing facilities worldwide.',
    author: 'Alex Rivera',
    readTime: '6 min read',
    date: 'Dec 20, 2024',
    tag: 'Computer Vision',
    actionLabel: 'Read Article',
  },
  {
    id: 3,
    type: 'Article',
    title: "Building HIPAA-Compliant Applications: A Developer's Guide",
    description:
      'Essential guidelines for building healthcare applications that meet regulatory requirements without sacrificing innovation or speed.',
    author: 'Priya Sharma',
    readTime: '10 min read',
    date: 'Dec 12, 2024',
    tag: 'Healthcare',
    actionLabel: 'Read Article',
  },
  {
    id: 4,
    type: 'White Paper',
    title: 'The Future of Precision Agriculture: A Comprehensive Guide',
    description:
      'An in-depth analysis of how IoT, computer vision, and machine learning are shaping modern farming practices and boosting yields.',
    author: 'James Chen',
    readTime: '15 min read',
    date: 'Jan 8, 2025',
    tag: 'Agriculture',
    actionLabel: 'Download PDF',
  },
  {
    id: 5,
    type: 'White Paper',
    title: 'Enterprise IoT Security: Threats and Solutions',
    description:
      'A thorough examination of the current threat landscape in enterprise IoT and practical countermeasures for security teams.',
    author: 'CodeSquad Research',
    readTime: '20 min read',
    date: 'Nov 28, 2024',
    tag: 'IoT',
    actionLabel: 'Download PDF',
  },
  {
    id: 6,
    type: 'Podcast',
    title: 'TechTalk: Engineering IoT for Smart Manufacturing',
    description:
      'Listen to our engineering leads discuss real-world IoT implementations and their measurable impact on industrial efficiency.',
    author: 'CodeSquad Team',
    readTime: '32 min listen',
    date: 'Dec 28, 2024',
    tag: 'IoT',
    actionLabel: 'Listen Now',
  },
  {
    id: 7,
    type: 'Podcast',
    title: 'From Farm to Future: Digital Transformation in Agriculture',
    description:
      'Industry leaders share how technology is creating a new era of sustainable and efficient farming operations globally.',
    author: 'CodeSquad Team',
    readTime: '28 min listen',
    date: 'Dec 5, 2024',
    tag: 'Agriculture',
    actionLabel: 'Listen Now',
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

function getCountForTab(tab: FilterTab): number {
  if (tab === 'All') return resources.length;
  const type = tabToType(tab);
  return type ? resources.filter((r) => r.type === type).length : 0;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// ── Animation variants ──────────────────────────────────────────────────────

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotVariants = {
  inactive: { width: 8, backgroundColor: '#e2e8f0' },
  active: { width: 32, backgroundColor: '#0066FF' },
};

// ── Component ───────────────────────────────────────────────────────────────

export default function Resources() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset page when filters change
  const handleTabChange = useCallback((tab: FilterTab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  }, []);

  const goToPage = useCallback(
    (page: number) => {
      setDirection(page > currentPage ? 1 : -1);
      setCurrentPage(page);
    },
    [currentPage],
  );

  const goToPrev = useCallback(() => {
    if (currentPage > 0) goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

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

  // Slide animation direction
  const slideX = direction >= 0 ? 60 : -60;

  return (
    <section
      id="resources"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-gray-50/40 pointer-events-none" />
      {/* Decorative top-right glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0066FF]/[0.03] rounded-full blur-3xl pointer-events-none" />
      {/* Decorative bottom-left glow */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-sm text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF]/50 shadow-sm focus:shadow-md focus:shadow-blue-500/5 transition-all duration-300"
            />
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection variant="fade-up" className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab;
              const count = getCountForTab(tab);
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-lg shadow-blue-500/20 scale-[1.02]'
                      : 'bg-white/70 backdrop-blur-sm text-gray-500 border border-gray-200/80 hover:border-[#0066FF]/30 hover:text-[#0066FF] hover:bg-blue-50/30 hover:shadow-sm'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {tab}
                    <span
                      className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-md text-xs font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Resource Cards Grid */}
        <div className="relative min-h-[460px]">
          <AnimatePresence mode="wait" custom={slideX}>
            <motion.div
              key={`${activeTab}-${searchQuery}-${safeCurrentPage}`}
              custom={slideX}
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            >
              {pagedResources.length > 0 ? (
                pagedResources.map((resource) => {
                  const colors = typeColors[resource.type];
                  const Icon = typeIcons[resource.type];
                  const initials = getInitials(resource.author);

                  return (
                    <motion.article
                      key={resource.id}
                      variants={cardVariants}
                      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
                      className="group relative bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-black/[0.08] border border-gray-100/80 hover:border-gray-200/80 transition-shadow duration-300 cursor-pointer"
                    >
                      {/* Left accent strip */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.accent} z-20 rounded-l-2xl`} />

                      {/* Top thumbnail area with gradient */}
                      <div className="relative h-44 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}
                        />
                        {/* Decorative pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id={`grid-${resource.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="1" fill="white" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#grid-${resource.id})`} />
                          </svg>
                        </div>
                        {/* Floating icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Type badge positioned top-right */}
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-wide uppercase">
                            <Icon className="w-3 h-3" />
                            {resource.type}
                          </span>
                        </div>
                        {/* Bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col px-5 pt-5 pb-5">
                        {/* Tag + Date */}
                        <div className="flex items-center gap-2.5 mb-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-xs font-semibold ${colors.badge} ${colors.badgeText}`}
                          >
                            {resource.tag}
                          </span>
                          <span className="text-xs text-gray-400 font-medium">
                            {resource.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#0A1628] mb-2.5 leading-snug line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-300">
                          {resource.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                          {resource.description}
                        </p>

                        {/* Bottom section: author + read time + CTA */}
                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            {/* Author avatar with initials */}
                            <div
                              className={`w-8 h-8 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0`}
                            >
                              <span className={`text-xs font-bold ${colors.badgeText}`}>
                                {initials}
                              </span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-semibold text-[#0A1628] truncate max-w-[120px]">
                                {resource.author}
                              </span>
                              <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {resource.readTime}
                              </span>
                            </div>
                          </div>

                          {/* CTA button */}
                          <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0066FF]/[0.06] text-[#0066FF] text-xs font-semibold hover:bg-[#0066FF] hover:text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex-shrink-0">
                            {resource.type === 'Podcast' ? (
                              <Headphones className="w-3.5 h-3.5" />
                            ) : resource.type === 'White Paper' ? (
                              <Download className="w-3.5 h-3.5" />
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5" />
                            )}
                            {resource.actionLabel}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })
              ) : (
                /* Empty state */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center py-24 text-center"
                >
                  {/* Illustration */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-inner">
                      <FolderSearch className="w-9 h-9 text-[#0066FF]/40" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#0A1628] mb-2">
                    No resources found
                  </h4>
                  <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                    We couldn&apos;t find anything matching your search. Try adjusting your query or changing the filter to discover more content.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {filteredResources.length > ITEMS_PER_PAGE && (
          <AnimatedSection variant="fade-up" className="mt-12">
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={goToPrev}
                disabled={safeCurrentPage === 0}
                aria-label="Previous page"
                className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur-sm text-gray-400 hover:border-[#0066FF]/30 hover:text-[#0066FF] hover:bg-blue-50/30 hover:shadow-sm disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-gray-200/80 disabled:hover:text-gray-400 disabled:hover:bg-white/70 disabled:hover:shadow-none transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots with slide animation */}
              <div className="flex items-center gap-2.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goToPage(i)}
                    aria-label={`Page ${i + 1}`}
                    variants={dotVariants}
                    animate={i === safeCurrentPage ? 'active' : 'inactive'}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[8px] rounded-full cursor-pointer"
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                disabled={safeCurrentPage === totalPages - 1}
                aria-label="Next page"
                className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur-sm text-gray-400 hover:border-[#0066FF]/30 hover:text-[#0066FF] hover:bg-blue-50/30 hover:shadow-sm disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-gray-200/80 disabled:hover:text-gray-400 disabled:hover:bg-white/70 disabled:hover:shadow-none transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        )}

        {/* View All CTA */}
        <AnimatedSection variant="fade-up" delay={0.2} className="mt-14 text-center">
          <button className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl border-2 border-[#0066FF]/20 text-[#0066FF] font-semibold text-sm hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 bg-white/50 backdrop-blur-sm">
            View All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
