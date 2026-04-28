'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  ArrowUpRight,
  Heart,
  Cpu,
  Sprout,
  Wrench,
  Microscope,
  Send,
} from 'lucide-react';
import Image from 'next/image';

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
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

const footerResources = [
  { label: 'Articles', href: '#resources' },
  { label: 'White Papers', href: '#resources' },
  { label: 'Podcasts', href: '#resources' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'Free Tools', href: '#resources' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahzaibhamid/' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Mail', href: 'mailto:info@codesquad.ai' },
];

const FooterLink = ({
  children,
  href,
  showArrow = false,
}: {
  children: React.ReactNode;
  href: string;
  showArrow?: boolean;
}) => {
  const scrollTo = (hrefStr: string) => {
    if (hrefStr.startsWith('#') && hrefStr.length > 1) {
      const el = document.querySelector(hrefStr);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.li
      whileHover={{ x: 3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault();
            scrollTo(href);
          }
        }}
        className="group text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5"
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
        )}
      </a>
    </motion.li>
  );
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden mt-48">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071020] via-[#0A1628] to-[#071020]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Top gradient divider */}
      <div className="relative h-px animated-gradient-line" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={160}
                  height={48}
                  className="h-11 w-auto object-contain"
                />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
                Building intelligent software solutions that transform industries.
              </p>

              {/* Social Links */}
              <div className="flex gap-2.5">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                <FooterLink href="#about">About Us</FooterLink>
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#portfolio">Portfolio</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5">
                <FooterLink href="#resources">Articles</FooterLink>
                <FooterLink href="#resources">White Papers</FooterLink>
                <FooterLink href="#resources">Podcasts</FooterLink>
                <FooterLink href="#portfolio">Case Studies</FooterLink>
              </ul>
            </motion.div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                {/* Email */}
                <div>
                  <a
                    href="mailto:info@codesquad.ai"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    info@codesquad.ai
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <a
                    href="tel:+14177645309"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    +1 (417) 764-5309
                  </a>
                </div>

                {/* Offices Label */}
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Offices</p>
                  
                  {/* Pakistan Office */}
                  <a
                    href="https://maps.app.goo.gl/uhAhYB7Ja5REpc3o9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm italic text-gray-400 hover:text-white transition-colors duration-200 block mb-2"
                  >
                    Johar Town J2, Lahore, Pakistan
                  </a>
                  
                  {/* USA Office */}
                  <a
                    href="#"
                    className="text-sm italic text-gray-400 hover:text-white transition-colors duration-200 block leading-relaxed"
                  >
                    8 The Green Ste 14681, Dover, DE 19901, USA
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-gray-500">
            &copy; {new Date().getFullYear()} CodeSquad. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
