'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Linkedin, Twitter, Github, ArrowUpRight, ArrowUp, Heart, Cpu, Sprout, Wrench, Microscope } from 'lucide-react';

const footerServices = [
  { label: 'Healthcare Solutions', icon: Heart },
  { label: 'Computer Vision', icon: Cpu },
  { label: 'Agriculture Technology', icon: Sprout },
  { label: 'Engineering IoT', icon: Wrench },
  { label: 'Engineering Tech', icon: Microscope },
];

const footerCompany = [
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#resources' },
];

const footerResources = [
  { label: 'Articles', href: '#resources' },
  { label: 'White Papers', href: '#resources' },
  { label: 'Podcasts', href: '#resources' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'Free Tools', href: '#resources' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1628] text-white mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative h-px animated-gradient-line" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Logo */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Code<span className="text-[#338AFF]">Squad</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Specialized in healthcare, agriculture, computer vision, and IoT solutions. We build software that transforms industries.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] transition-all duration-300 text-gray-400 hover:text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group">
                    <span>{service.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={(e) => { if (item.href.startsWith('#')) { e.preventDefault(); scrollTo(item.href); } }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerResources.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={(e) => { if (item.href.startsWith('#')) { e.preventDefault(); scrollTo(item.href); } }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CodeSquad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
