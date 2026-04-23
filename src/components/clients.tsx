'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

interface LogoItem {
  name: string;
  abbr: string;       // 1-2 letter abbreviation shown in the icon box
  color: string;      // brand colour for the icon background
  textColor: string;  // text colour inside the icon box
}

const techCompanies: LogoItem[] = [
  { name: 'Microsoft',    abbr: 'M',  color: '#00A4EF', textColor: '#fff' },
  { name: 'Google Cloud', abbr: 'G',  color: '#4285F4', textColor: '#fff' },
  { name: 'AWS',          abbr: 'A',  color: '#FF9900', textColor: '#fff' },
  { name: 'Oracle',       abbr: 'O',  color: '#F80000', textColor: '#fff' },
  { name: 'SAP',          abbr: 'S',  color: '#0FAAFF', textColor: '#fff' },
  { name: 'Salesforce',   abbr: 'SF', color: '#00A1E0', textColor: '#fff' },
  { name: 'IBM',          abbr: 'I',  color: '#0530AD', textColor: '#fff' },
  { name: 'Adobe',        abbr: 'Ad', color: '#FF0000', textColor: '#fff' },
  { name: 'VMware',       abbr: 'V',  color: '#607078', textColor: '#fff' },
  { name: 'Cisco',        abbr: 'C',  color: '#049FD9', textColor: '#fff' },
];

const techStack: LogoItem[] = [
  { name: 'React',        abbr: 'Re', color: '#61DAFB', textColor: '#20232A' },
  { name: 'Next.js',      abbr: 'N',  color: '#171717', textColor: '#fff' },
  { name: 'Node.js',      abbr: 'No', color: '#339933', textColor: '#fff' },
  { name: 'Python',       abbr: 'Py', color: '#3776AB', textColor: '#FFD43B' },
  { name: 'TypeScript',   abbr: 'TS', color: '#3178C6', textColor: '#fff' },
  { name: 'Docker',       abbr: 'D',  color: '#2496ED', textColor: '#fff' },
  { name: 'Kubernetes',   abbr: 'K',  color: '#326CE5', textColor: '#fff' },
  { name: 'TensorFlow',   abbr: 'TF', color: '#FF6F00', textColor: '#fff' },
  { name: 'Flutter',      abbr: 'Fl', color: '#02569B', textColor: '#fff' },
  { name: 'PostgreSQL',   abbr: 'PG', color: '#4169E1', textColor: '#fff' },
];

/* -------------------------------------------------------------------------- */
/*  Marquee Row                                                               */
/* -------------------------------------------------------------------------- */

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: LogoItem[];
  reverse?: boolean;
}) {
  // Duplicate items so the strip can seamlessly loop (needs ≥ 100% width)
  const doubled = [...items, ...items];

  return (
    <div className="marquee-container">
      <div
        className="flex animate-marquee-slow whitespace-nowrap"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <motion.div
            key={`${item.name}-${i}`}
            whileHover={{ scale: 1.06, y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center gap-3 mx-6 sm:mx-8 lg:mx-10 cursor-default"
          >
            {/* Icon box */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
              style={{ backgroundColor: item.color }}
            >
              <span
                className="text-sm font-bold leading-none"
                style={{ color: item.textColor }}
              >
                {item.abbr}
              </span>
            </div>

            {/* Brand name */}
            <span className="text-base sm:text-lg font-semibold text-gray-400 hover:text-gray-700 transition-colors duration-300 select-none whitespace-nowrap tracking-tight">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Clients Section                                                           */
/* -------------------------------------------------------------------------- */

export default function Clients() {
  return (
    <section className="py-16 md:py-20 bg-gray-50/50 overflow-hidden">
      <AnimatedSection
        variant="fade-up"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          Powering innovation with the world&apos;s leading technologies
        </p>
      </AnimatedSection>

      {/* Row 1 – scrolls left */}
      <AnimatedSection variant="fade-up" delay={0.1}>
        <MarqueeRow items={techCompanies} />
      </AnimatedSection>

      {/* Row 2 – scrolls right */}
      <AnimatedSection variant="fade-up" delay={0.25}>
        <MarqueeRow items={techStack} reverse />
      </AnimatedSection>
    </section>
  );
}
