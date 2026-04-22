'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Cloud, Brain, Smartphone, Palette, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'About', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resources', href: '#resources' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const servicesDropdown = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent AI/ML powered solutions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design experiences.',
  },
  {
    icon: Settings,
    title: 'DevOps & Automation',
    description: 'CI/CD, containerization, and IaC.',
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
              scrolled ? 'bg-[#0066FF]' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Code2 className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-[#0A1628]' : 'text-white'
            }`}>
              Code<span className="text-[#0066FF]">Squad</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={link.hasDropdown ? handleDropdownEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
              >
                <button
                  onClick={() => {
                    if (!link.hasDropdown) {
                      scrollTo(link.href);
                    }
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                    activeSection === link.href.replace('#', '')
                      ? scrolled ? 'text-[#0066FF]' : 'text-white'
                      : scrolled ? 'text-gray-600 hover:text-[#0066FF] hover:bg-blue-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0066FF] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] rounded-2xl shadow-2xl border p-6 z-50 ${
                          scrolled ? 'bg-white border-gray-100' : 'bg-white border-gray-100'
                        }`}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {servicesDropdown.map((service) => (
                            <button
                              key={service.title}
                              onClick={() => scrollTo('#services')}
                              className="flex items-start gap-3 p-3 rounded-xl text-left transition-colors duration-200 hover:bg-blue-50 group/item"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0066FF] transition-colors duration-200">
                                <service.icon className="w-4.5 h-4.5 text-[#0066FF] group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-[#0A1628] group-hover/item:text-[#0066FF] transition-colors duration-200 leading-tight">
                                  {service.title}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <button
                            onClick={() => scrollTo('#services')}
                            className="flex items-center justify-center gap-2 w-full text-sm font-medium text-[#0066FF] hover:text-[#0052CC] transition-colors py-1"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollTo('#contact')}
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-bold text-[#0A1628]">
                        Code<span className="text-[#0066FF]">Squad</span>
                      </span>
                    </div>
                  </div>

                  {/* Mobile links */}
                  <div className="flex-1 px-4 py-6">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link, i) => (
                        <motion.button
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => scrollTo(link.href)}
                          className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                            activeSection === link.href.replace('#', '')
                              ? 'bg-blue-50 text-[#0066FF]'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {link.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="px-6 py-4 border-t border-gray-100">
                    <Button
                      onClick={() => scrollTo('#contact')}
                      className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl h-12 text-base"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
