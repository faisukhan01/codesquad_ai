'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
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
  { icon: Mail, label: 'Mail', href: 'mailto:shah@codesquad.ai' },
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
    <footer className="relative overflow-hidden mt-auto">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071020] via-[#0A1628] to-[#071020]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Top gradient divider */}
      <div className="relative h-px animated-gradient-line" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Logo + Description + Socials */}
          <div className="col-span-2 sm:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#0066FF] flex items-center justify-center shadow-lg shadow-blue-600/25">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Code<span className="text-[#338AFF]">Squad</span>
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                Building intelligent software solutions that transform industries -- from healthcare and agriculture to computer vision and IoT.
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

              {/* Newsletter Mini-section */}
              <form
                onSubmit={handleSubscribe}
                className="mt-8 max-w-xs"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">
                  Stay Updated
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 h-9 bg-white/5 border border-white/10 rounded-lg px-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0066FF]/50 focus:ring-1 focus:ring-[#0066FF]/25 transition-all duration-200"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-9 w-9 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] flex items-center justify-center text-white transition-colors duration-200 shadow-lg shadow-blue-600/20 shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Column 2: Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {footerServices.map((service) => (
                  <FooterLink key={service.label} href="#services" showArrow>
                    {service.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerCompany.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 4: Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerResources.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 5: Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-5">
                Contact
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="mailto:shah@codesquad.ai"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <Mail className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#0066FF] transition-colors duration-200" />
                    shah@codesquad.ai
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>
                  <p className="text-sm text-gray-400">
                    Tech Valley, CA 94025
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CodeSquad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
