'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      setIsVisible(scrollTop > 500);
      setScrollProgress(progress);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // SVG circle parameters
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center group cursor-pointer"
          aria-label="Back to top"
        >
          {/* Background circle with progress ring */}
          <svg
            className="absolute inset-0 w-12 h-12 -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Background circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="#0066FF"
              stroke="none"
            />
            {/* Progress ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={0}
              strokeLinecap="round"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
              style={{
                transition: 'stroke-dashoffset 0.15s ease',
              }}
            />
          </svg>

          {/* Arrow icon */}
          <ArrowUp className="w-5 h-5 text-white relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
