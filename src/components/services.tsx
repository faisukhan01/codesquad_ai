'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Workflow,
  FileText,
  UserCheck,
  Repeat2,
  Target,
  Code2,
  CalendarDays,
  BarChart3,
  ClipboardList,
  Sparkles,
  X,
  Building2,
  Stethoscope,
  Smile,
  Rocket,
  CheckCheck,
  MoveUpRight,
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const CARD_BG = 'linear-gradient(135deg, #F0F7FF 0%, #F5FAFF 50%, #FFFFFF 100%)';
const ICON_GRAD = 'linear-gradient(135deg, #0066FF, #338AFF)';
const ACCENT = '#0066FF';
const GLOW = 'rgba(0, 102, 255, 0.08)';
const TAG = 'bg-blue-50/50 text-blue-700 border-blue-100/50';

const services = [
  {
    icon: Search,
    title: 'SEO & Search Optimization',
    description: 'Complete SEO audit, keyword research, and AI-ready schema markup for maximum search visibility.',
    highlights: ['Technical SEO Audit', 'Keyword Research', 'AI Schema Markup'],
    cardGradient: CARD_BG,
    iconGradient: ICON_GRAD,
    accentColor: ACCENT,
    glowColor: GLOW,
    tagBg: TAG,
    modal: {
      headline: 'Dominate Search Results & AI Answers.',
      description: 'We run a full technical SEO audit, research the exact keywords your audience uses, and implement schema markup so you appear in both traditional search and AI-powered answers from ChatGPT, Perplexity, and Google AI.',
      industries: [
        { icon: Smile, label: 'Aesthetic Labs', detail: 'Target high-intent cosmetic searches and appear in AI answers for treatment queries.' },
        { icon: Stethoscope, label: 'Dental Clinics', detail: 'Rank for dental procedures and show up in AI-driven local health searches.' },
        { icon: Building2, label: 'Clinics & MedSpas', detail: 'Dominate local search and AI answers for wellness and beauty services.' },
        { icon: Rocket, label: 'Startups', detail: 'Build search authority and AI visibility from day one.' },
      ],
      includes: ['Full site crawl & technical audit', 'Keyword opportunity report', 'Schema markup implementation', 'AI crawlability optimization'],
    },
  },
  {
    icon: Workflow,
    title: 'Business Automation Setup',
    description: 'Connect your CRM, booking, email, and social tools into one seamless automated workflow.',
    highlights: ['CRM Integration', 'Workflow Automation', 'Multi-tool Sync'],
    cardGradient: CARD_BG,
    iconGradient: ICON_GRAD,
    accentColor: ACCENT,
    glowColor: GLOW,
    tagBg: TAG,
    modal: {
      headline: 'Your Business Runs on Autopilot.',
      description: 'We set up and connect your automation tools so your team stops doing repetitive manual tasks. From auto-confirming appointments to sending review requests after visits — everything is wired up and tested.',
      industries: [
        { icon: Smile, label: 'Aesthetic Labs', detail: 'Auto-send pre-treatment prep, post-care follow-ups, and review requests.' },
        { icon: Stethoscope, label: 'Dental Clinics', detail: 'Automate appointment reminders, recall campaigns, and new patient onboarding.' },
        { icon: Building2, label: 'Clinics & MedSpas', detail: 'Connect booking, billing, and marketing tools with zero manual entry.' },
        { icon: Rocket, label: 'Startups', detail: 'Launch with a fully automated lead-to-customer pipeline from day one.' },
      ],
      includes: ['Platform account setup', 'Tool-to-tool connections', 'Workflow testing & QA', 'Team handover training'],
    },
  },
  {
    icon: FileText,
    title: 'Content Creation & Management',
    description: 'AI-powered content pipeline plus monthly delivery of blogs, social posts, and repurposed assets.',
    highlights: ['AI Content Pipeline', 'Monthly Delivery', 'Multi-format Assets'],
    cardGradient: CARD_BG,
    iconGradient: ICON_GRAD,
    accentColor: ACCENT,
    glowColor: GLOW,
    tagBg: TAG,
    modal: {
      headline: 'Content That Works Around the Clock.',
      description: 'We build an AI-powered pipeline that researches, drafts, and publishes SEO blogs, then repurposes them into social posts, email content, and video scripts. Plus monthly delivery of fresh content across all channels.',
      industries: [
        { icon: Smile, label: 'Aesthetic Labs', detail: 'Weekly treatment content, before/after guides, and Instagram-ready assets.' },
        { icon: Stethoscope, label: 'Dental Clinics', detail: 'Consistent oral health content across blog, email, and social channels.' },
        { icon: Building2, label: 'Clinics & MedSpas', detail: 'Build topical authority with content that feeds your entire marketing strategy.' },
        { icon: Rocket, label: 'Startups', detail: 'Enterprise-level content output without the enterprise headcount.' },
      ],
      includes: ['AI content pipeline setup', '4-8 SEO blogs/month', 'Social media assets', 'Email newsletter content', 'Multi-format repurposing'],
    },
  },
  {
    icon: UserCheck,
    title: 'Quality Control & Compliance',
    description: 'Human review workflows ensuring every AI-generated piece meets your brand and compliance standards.',
    highlights: ['Brand Voice Check', 'Compliance Review', 'Approval Workflow'],
    cardGradient: CARD_BG,
    iconGradient: ICON_GRAD,
    accentColor: ACCENT,
    glowColor: GLOW,
    tagBg: TAG,
    modal: {
      headline: 'AI Speed. Human Accuracy.',
      description: 'We set up review workflows where your team (or ours) checks AI content before it goes live. This catches factual errors, keeps your brand voice consistent, and ensures medical/aesthetic content meets compliance standards.',
      industries: [
        { icon: Smile, label: 'Aesthetic Labs', detail: 'Ensure treatment descriptions are accurate and compliant with advertising standards.' },
        { icon: Stethoscope, label: 'Dental Clinics', detail: 'Medical content reviewed for accuracy before it reaches patients.' },
        { icon: Building2, label: 'Clinics & MedSpas', detail: 'Protect your reputation with a human checkpoint on every published piece.' },
        { icon: Rocket, label: 'Startups', detail: 'Scale content confidently knowing a human approves everything first.' },
      ],
      includes: ['Review stage workflow build', 'Approval notification setup', 'Edit & feedback loop', 'Compliance checking'],
    },
  },
  {
    icon: Target,
    title: 'Ads Management & Tracking',
    description: 'Complete ad tracking setup plus ongoing campaign management with clear ROAS and attribution reporting.',
    highlights: ['Full Tracking Setup', 'Campaign Management', 'ROAS Reporting'],
    cardGradient: CARD_BG,
    iconGradient: ICON_GRAD,
    accentColor: ACCENT,
    glowColor: GLOW,
    tagBg: TAG,
    modal: {
      headline: 'Ads That Actually Drive Results.',
      description: 'We install complete tracking (GTM, GA4, Meta Pixel), then manage your Google and Meta campaigns with a focus on real outcomes — bookings, calls, and enquiries. Monthly reports show exactly what you spent and earned.',
      industries: [
        { icon: Smile, label: 'Aesthetic Labs', detail: 'Track consultation bookings and optimize campaigns for treatment conversions.' },
        { icon: Stethoscope, label: 'Dental Clinics', detail: 'Attribute new patient calls to exact ads and optimize for local acquisition.' },
        { icon: Building2, label: 'Clinics & MedSpas', detail: 'Full funnel tracking from ad impression to appointment confirmation.' },
        { icon: Rocket, label: 'Startups', detail: 'Data-driven ad spend that maximizes every dollar of your budget.' },
      ],
      includes: ['GTM & tracking setup', 'Campaign management', 'Monthly ROAS reports', 'Attribution analysis', 'Budget optimization'],
    },
  },
  {
    icon: ClipboardList,
    title: 'Strategy & Performance Reporting',
    description: 'Monthly strategy sessions with comprehensive reports and 30-day action plans to keep you growing.',
    highlights: ['Monthly Strategy Call', 'Performance Dashboard', '30-Day Action Plan'],
    cardGradient: CARD_BG,
    iconGradient: ICON_GRAD,
    accentColor: ACCENT,
    glowColor: GLOW,
    tagBg: TAG,
    modal: {
      headline: 'Always Know Where You Stand.',
      description: 'Every month you get a comprehensive report and strategy call covering what moved, what didn\'t, and exactly what we\'re doing next. No guesswork — clear data and a prioritized action plan.',
      industries: [
        { icon: Smile, label: 'Aesthetic Labs', detail: 'Track growth in new enquiries, treatment bookings, and content visibility.' },
        { icon: Stethoscope, label: 'Dental Clinics', detail: 'Monthly insight into new patient growth, SEO rankings, and ad ROI.' },
        { icon: Building2, label: 'Clinics & MedSpas', detail: 'Holistic view of your digital performance with clear next steps.' },
        { icon: Rocket, label: 'Startups', detail: 'Stay aligned with your growth targets with monthly founder-level reviews.' },
      ],
      includes: ['Monthly report dashboard', '60-min strategy call', 'KPI tracking', '30-day priority action plan'],
    },
  },
];

const whatYouGet = [
  { label: 'Full Automation Infrastructure', color: '#0066FF' },
  { label: 'Done-For-You Content Engine', color: '#7C3AED' },
  { label: 'Search + AI Visibility', color: '#059669' },
  { label: 'Content Repurposing at Scale', color: '#EC4899' },
  { label: 'Ads Tracking & Attribution', color: '#0EA5E9' },
  { label: 'Monthly Strategy + Reporting', color: '#8B5CF6' },
  { label: 'Brand-Owned Automation Setup', color: '#F97316' },
  { label: 'Unified Messaging Across Channels', color: '#10B981' },
  { label: 'Dedicated Customer Care Support', color: '#DC2626' },
  { label: 'Sales Funnel Optimization', color: '#7C2D12' },
  { label: '24/7 Technical Monitoring', color: '#1E40AF' },
  { label: 'Lead Nurturing Automation', color: '#BE185D' },
];

/* ------------------------------------------------------------------ */
/*  Modal                                                               */
/* ------------------------------------------------------------------ */

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof services)[number] | null;
  onClose: () => void;
}) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 24 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header band */}
          <div className="relative p-8 pb-6 rounded-t-3xl" style={{ background: service.cardGradient }}>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-all hover:scale-105"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
              style={{ background: service.iconGradient }}
            >
              <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: service.accentColor }}>
              {service.title}
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {service.modal.headline}
            </h2>
          </div>

          <div className="p-8 pt-6 space-y-8">
            <p className="text-gray-600 leading-relaxed">{service.modal.description}</p>

            {/* Who it's for */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Who It&apos;s For</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.modal.industries.map((ind) => (
                  <div
                    key={ind.label}
                    className="flex gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: service.iconGradient }}
                    >
                      <ind.icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{ind.label}</p>
                      <p className="text-xs text-gray-500 leading-snug mt-0.5">{ind.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">What&apos;s Included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.modal.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCheck className="w-4 h-4 shrink-0" style={{ color: service.accentColor }} />
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl text-white font-bold text-sm shadow-lg"
              style={{ background: service.iconGradient }}
              onClick={onClose}
            >
              Get Started with This Service
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Service Card                                                        */
/* ------------------------------------------------------------------ */

function ServiceCard({
  service,
  index,
  onLearnMore,
}: {
  service: (typeof services)[number];
  index: number;
  onLearnMore: () => void;
}) {
  return (
    <AnimatedItem variant="fade-up" delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
        className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: service.cardGradient,
          boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)` }}
        />
        {/* Shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
          />
        </div>

        <div className="relative p-7 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
            className="mb-5 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            style={{ background: service.iconGradient }}
          >
            <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.div>

          {/* Featured badge */}
          {service.featured && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 mb-4 w-fit shadow-sm"
            >
              <Sparkles className="w-3 h-3" style={{ color: service.accentColor }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: service.accentColor }}>
                Core Service
              </span>
            </motion.div>
          )}

          {/* Title */}
          <h3 className="font-bold text-gray-900 tracking-tight mb-3 text-lg">{service.title}</h3>

          {/* Short description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.highlights.map((h) => (
              <span
                key={h}
                className={`inline-flex items-center px-3 py-1.5 rounded-xl text-[11px] font-semibold border ${service.tagBg}`}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Learn More CTA */}
          <div className="mt-auto">
            <motion.button
              onClick={onLearnMore}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn relative flex items-center gap-2.5 overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}15, ${service.accentColor}08)`,
                border: `1px solid ${service.accentColor}30`,
                color: service.accentColor,
              }}
            >
              <span>Learn More</span>
              <motion.span
                className="flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <MoveUpRight className="w-3.5 h-3.5" />
              </motion.span>
              {/* Fill on hover */}
              <motion.div
                className="absolute inset-0 -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ background: service.iconGradient }}
              />
              <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 text-white font-semibold text-sm">
                Learn More <MoveUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.button>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: service.iconGradient }}
        />
      </motion.div>
    </AnimatedItem>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                         */
/* ------------------------------------------------------------------ */

export default function Services() {
  const [activeService, setActiveService] = useState<(typeof services)[number] | null>(null);

  return (
    <>
      <section id="services" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title={<>Everything You Need to <span className="gradient-text">Grow & Automate</span></>}
            description="A complete done-for-you system covering SEO, automation, content, ads tracking, and monthly strategy — built for clinics, aesthetic labs, dental practices, and growing startups."
          />

          <AnimatedSection
            variant="stagger-children"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                onLearnMore={() => setActiveService(service)}
              />
            ))}
          </AnimatedSection>

          {/* What You Get */}
          <AnimatedSection variant="fade-up" delay={0.3} className="mt-20">
            <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1f3c] rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">The Full Picture</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">What You Get</h3>
                <p className="text-gray-400 mt-2 text-sm max-w-xl mx-auto">
                  Everything bundled into one system — so your clinic or startup can focus on delivering great service while we handle growth.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {whatYouGet.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.04, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 cursor-default transition-colors"
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
                    />
                    <span className="text-sm font-medium text-gray-200 leading-snug">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </>
  );
}
