'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  CheckCircle,
  DollarSign,
  TrendingDown,
  Clock,
  Users,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

type EngagementType = 'fixed' | 'dedicated' | 'tm';

interface Results {
  codesquadCost: number;
  inhouseCost: number;
  savings: number;
  savingsPercent: number;
}

function useCountUp(target: number, isActive: boolean, duration: number = 1200): number {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const resetFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      // Reset via rAF to avoid synchronous setState in effect
      resetFrameRef.current = requestAnimationFrame(() => {
        setCount(0);
      });
      return () => {
        if (resetFrameRef.current !== null) {
          cancelAnimationFrame(resetFrameRef.current);
        }
      };
    }

    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, isActive, duration]);

  return count;
}

function formatCurrency(value: number): string {
  return '$' + value.toLocaleString('en-US');
}

const engagementOptions: { value: EngagementType; label: string; description: string }[] = [
  { value: 'fixed', label: 'Fixed Price', description: 'Defined scope & budget' },
  { value: 'dedicated', label: 'Dedicated Team', description: 'Extended team model' },
  { value: 'tm', label: 'T&M', description: 'Time & materials' },
];

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [duration, setDuration] = useState(6);
  const [engagementType, setEngagementType] = useState<EngagementType>('fixed');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Results | null>(null);

  const activeCount = showResults && results !== null;

  const animatedCodesquad = useCountUp(results?.codesquadCost ?? 0, activeCount, 1000);
  const animatedInhouse = useCountUp(results?.inhouseCost ?? 0, activeCount, 1200);
  const animatedSavings = useCountUp(results?.savings ?? 0, activeCount, 1400);

  const calculateSavings = useCallback(() => {
    let codesquadCost = 0;

    switch (engagementType) {
      case 'fixed':
        codesquadCost = teamSize * 5000 * duration * 0.8;
        break;
      case 'dedicated':
        codesquadCost = teamSize * 8000 * duration * 0.6;
        break;
      case 'tm':
        codesquadCost = teamSize * 150 * 160 * duration * 0.7;
        break;
    }

    const inhouseCost = teamSize * 12000 * duration;
    const savings = inhouseCost - codesquadCost;
    const savingsPercent = Math.round((savings / inhouseCost) * 100);

    setResults({
      codesquadCost: Math.round(codesquadCost),
      inhouseCost: Math.round(inhouseCost),
      savings: Math.round(savings),
      savingsPercent,
    });
    setShowResults(true);
  }, [teamSize, duration, engagementType]);

  return (
    <section id="roi" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column — Calculator Form */}
          <div>
            <SectionHeader
              label="ROI Calculator"
              title="Calculate Your Savings"
              description="See how much you could save by partnering with CodeSquad"
              centered={false}
            />

            <div className="space-y-8">
              {/* Team Size Slider */}
              <AnimatedSection variant="fade-up" delay={0.1}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0066FF]" />
                      Team Size
                    </label>
                    <span className="text-sm font-bold text-[#0066FF] bg-[#0066FF]/5 px-3 py-1 rounded-full">
                      {teamSize} developers
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={5}
                    value={teamSize}
                    onChange={(e) => {
                      setTeamSize(Number(e.target.value));
                      setShowResults(false);
                    }}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer
                      bg-gradient-to-r from-[#0066FF]/20 to-[#0066FF]/40
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:h-5
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-[#0066FF]
                      [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-webkit-slider-thumb]:duration-200
                      [&::-webkit-slider-thumb]:hover:shadow-[0_0_0_6px_rgba(0,102,255,0.25)]
                      [&::-webkit-slider-thumb]:hover:scale-110
                      [&::-moz-range-thumb]:w-5
                      [&::-moz-range-thumb]:h-5
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-[#0066FF]
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>5</span>
                    <span>50</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Project Duration Slider */}
              <AnimatedSection variant="fade-up" delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0066FF]" />
                      Project Duration
                    </label>
                    <span className="text-sm font-bold text-[#0066FF] bg-[#0066FF]/5 px-3 py-1 rounded-full">
                      {duration} months
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={24}
                    step={1}
                    value={duration}
                    onChange={(e) => {
                      setDuration(Number(e.target.value));
                      setShowResults(false);
                    }}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer
                      bg-gradient-to-r from-[#0066FF]/20 to-[#0066FF]/40
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:h-5
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-[#0066FF]
                      [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-webkit-slider-thumb]:duration-200
                      [&::-webkit-slider-thumb]:hover:shadow-[0_0_0_6px_rgba(0,102,255,0.25)]
                      [&::-webkit-slider-thumb]:hover:scale-110
                      [&::-moz-range-thumb]:w-5
                      [&::-moz-range-thumb]:h-5
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-[#0066FF]
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>1</span>
                    <span>24</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Engagement Type Radio Cards */}
              <AnimatedSection variant="fade-up" delay={0.3}>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#0066FF]" />
                    Engagement Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {engagementOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setEngagementType(option.value);
                          setShowResults(false);
                        }}
                        className={`relative rounded-xl p-4 border-2 transition-all duration-200 text-left
                          ${
                            engagementType === option.value
                              ? 'border-[#0066FF] bg-[#0066FF]/5 shadow-[0_0_0_1px_rgba(0,102,255,0.1),0_2px_8px_rgba(0,102,255,0.1)]'
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                          }`}
                      >
                        {engagementType === option.value && (
                          <motion.div
                            layoutId="engagement-indicator"
                            className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#0066FF]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                        <span
                          className={`text-xs font-bold block mb-1 ${
                            engagementType === option.value ? 'text-[#0066FF]' : 'text-gray-600'
                          }`}
                        >
                          {option.label}
                        </span>
                        <span className="text-[11px] leading-tight text-gray-400">{option.description}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Calculate Button */}
              <AnimatedSection variant="fade-up" delay={0.4}>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={calculateSavings}
                  className="w-full bg-[#0066FF] hover:bg-[#0055DD] active:bg-[#0044BB] rounded-xl h-12 text-white font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg shadow-[#0066FF]/20 hover:shadow-xl hover:shadow-[#0066FF]/30"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Savings
                </motion.button>
              </AnimatedSection>

              {/* Results Display */}
              <AnimatePresence>
                {showResults && results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-gradient-to-br from-[#0A1628] to-[#0d1f35] rounded-2xl p-6 space-y-6"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Your Estimated Savings
                      </span>
                    </div>

                    <div className="space-y-5">
                      {/* CodeSquad Cost */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-[#0066FF]" />
                          </div>
                          Est. Cost with CodeSquad
                        </span>
                        <span className="text-xl font-bold text-white">
                          {formatCurrency(animatedCodesquad)}
                        </span>
                      </div>

                      <div className="border-t border-white/5" />

                      {/* In-House Cost */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <TrendingDown className="w-4 h-4 text-red-400" />
                          </div>
                          vs. In-House Cost
                        </span>
                        <span className="text-xl font-bold text-gray-300 line-through decoration-red-400/60 decoration-2">
                          {formatCurrency(animatedInhouse)}
                        </span>
                      </div>

                      <div className="border-t border-white/5" />

                      {/* Savings */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-emerald-400" />
                          </div>
                          Your Savings
                        </span>
                        <div className="flex items-center gap-3">
                          <span
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-[#0A1628]"
                          >
                            {results.savingsPercent}% savings
                          </span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            {formatCurrency(animatedSavings)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Savings Bar */}
                    <div className="relative pt-2">
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${results.savingsPercent}%` }}
                          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                        />
                      </div>
                      <div className="flex justify-between mt-1.5 text-[10px] text-gray-500">
                        <span>0%</span>
                        <span>100% savings</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column — Benefits List */}
          <div className="lg:sticky lg:top-28">
            <AnimatedSection variant="fade-right" delay={0.2}>
              <div className="bg-gray-50/60 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#0A1628] mb-8">
                  Why Teams Choose CodeSquad
                </h3>

                <div className="space-y-1">
                  {[
                    '40-60% cost reduction vs in-house teams',
                    '2x faster time-to-market',
                    'Zero recruitment overhead',
                    'Access to 100+ senior engineers',
                    'No long-term commitment required',
                    '99% client satisfaction rate',
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * index,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="flex items-start gap-3 py-3 group"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        </motion.div>
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative accent */}
                <div className="mt-8 pt-6 border-t border-gray-200/60">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A1628] text-sm">
                        Trusted by 200+ companies
                      </p>
                      <p className="text-xs text-gray-400">
                        Calculate your potential savings today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
