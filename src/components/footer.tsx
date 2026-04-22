'use client';

import React from 'react';
import { Code2, Linkedin, Twitter, Github, ArrowUpRight, ArrowUp } from 'lucide-react';

const footerServices = [
  'Custom Software',
  'Cloud Solutions',
  'AI & Machine Learning',
  'Mobile Development',
  'UI/UX Design',
  'DevOps & Automation',
];

const footerCompany = [
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1628] text-white mt-auto relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient line at top */}
      <div className="relative h-px animated-gradient-line" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-12 group cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
          <span className="text-sm">Back to Top</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#0066FF] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Code<span className="text-[#338AFF]">Squad</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building world-class software solutions that transform businesses
              and drive innovation since 2016.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] transition-all duration-300 text-gray-400 hover:text-white social-glow"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="gradient-underline">{service}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        scrollTo(item.href);
                      }
                    }}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 gradient-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>123 Innovation Drive<br />Tech Valley, CA 94025</p>
              <p>hello@codesquad.dev</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Crafted with <span className="text-red-400">❤️</span> by CodeSquad &middot; &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors gradient-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors gradient-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
