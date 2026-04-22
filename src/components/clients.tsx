'use client';

import React from 'react';
import { AnimatedSection } from '@/components/animated-section';

const clients = [
  'Microsoft', 'Google', 'Amazon', 'Oracle', 'SAP',
  'Salesforce', 'Adobe', 'IBM', 'Deloitte', 'Accenture',
];

export default function Clients() {
  return (
    <section className="py-12 bg-gray-50/80 border-y border-gray-100 overflow-hidden">
      <AnimatedSection variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </AnimatedSection>

      <div className="marquee-container">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center justify-center mx-8 sm:mx-12 lg:mx-16"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 hover:text-gray-500 transition-colors duration-300 select-none tracking-tight">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
