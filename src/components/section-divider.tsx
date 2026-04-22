'use client';

import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'angled';
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export default function SectionDivider({
  variant = 'wave',
  colorFrom = 'white',
  colorTo = '#f9fafb',
  className = '',
}: SectionDividerProps) {
  const renderSVG = () => {
    switch (variant) {
      case 'wave':
        return (
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-20 lg:h-24 block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill={colorTo}
            />
          </svg>
        );
      case 'curve':
        return (
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16 lg:h-20 block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L1440,0 L1440,40 C1200,100 720,80 360,40 C180,20 0,30 0,30 Z"
              fill={colorTo}
            />
          </svg>
        );
      case 'angled':
        return (
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-10 md:h-12 lg:h-16 block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L1440,0 L1440,40 L0,80 Z"
              fill={colorTo}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ backgroundColor: colorFrom }}
    >
      {renderSVG()}
    </div>
  );
}
