'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Award, Globe, Shield, Zap, Database } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const partners = [
  { name: 'AWS', subtitle: 'Advanced Partner', icon: Cloud, color: 'from-orange-400 to-amber-500' },
  { name: 'Microsoft Azure', subtitle: 'Gold Partner', icon: Award, color: 'from-blue-500 to-cyan-500' },
  { name: 'Google Cloud', subtitle: 'Premier Partner', icon: Globe, color: 'from-red-400 to-yellow-500' },
  { name: 'Salesforce', subtitle: 'Certified Partner', icon: Zap, color: 'from-blue-400 to-indigo-500' },
  { name: 'Vercel', subtitle: 'Technology Partner', icon: Database, color: 'from-gray-700 to-gray-900' },
  { name: 'MongoDB', subtitle: 'Atlas Partner', icon: Database, color: 'from-green-500 to-emerald-600' },
];

export default function Partners() {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Partnerships"
          title="Technology Partners"
          description="Strategic alliances with industry leaders to deliver best-in-class solutions"
        />

        {/* Partner Cards Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <AnimatedItem key={partner.name} variant="fade-up" delay={0.05}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <partner.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-[#0A1628] mb-0.5">{partner.name}</h4>
                <p className="text-xs text-gray-400">{partner.subtitle}</p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
