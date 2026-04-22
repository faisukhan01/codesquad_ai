'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  const [showAnimated, setShowAnimated] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setShowAnimated(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!showAnimated) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15 + 5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [showAnimated]);

  if (!isVisible && showAnimated) {
    return null;
  }

  if (!showAnimated) {
    return (
      <div ref={containerRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A1628]">
        <div className="w-12 h-12 rounded-xl bg-[#0066FF] flex items-center justify-center">
          <Code2 className="w-7 h-7 text-white" />
        </div>
      </div>
    );
  }

  const clampedProgress = Math.min(progress, 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A1628] overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Decorative gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#338AFF]/10 rounded-full blur-3xl" />

          {/* Animated floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-blue-400/20"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: typeof window !== 'undefined' ? window.innerHeight + 20 : 800,
                }}
                animate={{
                  y: -100,
                  opacity: [0, 0.4, 0.4, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-xl shadow-blue-500/30"
              >
                <Code2 className="w-8 h-8 text-white" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-2xl font-bold text-white tracking-tight"
              >
                Code<span className="text-[#338AFF]">Squad</span>
              </motion.span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#0066FF] to-[#338AFF]"
                initial={{ width: '0%' }}
                animate={{ width: `${clampedProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-blue-300/50 tracking-[0.3em] uppercase font-medium"
            >
              Loading experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
