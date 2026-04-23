'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';

const clients = [
  { name: 'Microsoft', icon: 'M' },
  { name: 'Google', icon: 'G' },
  { name: 'Amazon', icon: 'A' },
  { name: 'Oracle', icon: 'O' },
  { name: 'SAP', icon: 'S' },
  { name: 'Salesforce', icon: 'Sf' },
  { name: 'Adobe', icon: 'Ad' },
  { name: 'IBM', icon: 'I' },
  { name: 'Deloitte', icon: 'D' },
  { name: 'Accenture', icon: 'Ac' },
];

export default function Clients() {
  return (
    <section className="py-14 bg-white border-b border-gray-100 overflow-hidden">
      <AnimatedSection variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
          Trusted by Industry Leaders Worldwide
        </p>
      </AnimatedSection>

      {/* Logo Marquee */}
      <div className="marquee-container">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <motion.div
              key={`${client.name}-${i}`}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5 mx-6 sm:mx-10 lg:mx-14 cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-gray-400">{client.icon}</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-300 hover:text-gray-500 transition-colors duration-300 select-none tracking-tight whitespace-nowrap">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
