'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Github,
  Clock,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Lock,
  Zap,
  MessageSquareText,
  FileLock,
  Timer,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import { useToast } from '@/hooks/use-toast';

const serviceOptions = [
  'Healthcare Solutions',
  'Computer Vision',
  'Agriculture Technology',
  'Engineering IoT',
  'Engineering Tech',
];

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@codesquad.dev',
    description: 'We reply within 24 hours',
    href: 'mailto:hello@codesquad.dev',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Mon–Fri, 9AM to 6PM PST',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '123 Innovation Drive',
    description: 'Tech Valley, CA 94025',
    href: '#',
  },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@codesquad.dev' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Office', value: 'Tech Valley, CA 94025' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

const quickResponseBadges = [
  {
    icon: Timer,
    title: '2hr Response',
    description: 'Average reply time',
  },
  {
    icon: MessageSquareText,
    title: 'Free Consultation',
    description: 'No strings attached',
  },
  {
    icon: FileLock,
    title: 'NDA Protection',
    description: 'Your ideas are safe',
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in your name, email, and message.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast({
          title: 'Submission failed',
          description: data.message || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
        return;
      }

      setFormData({ name: '', email: '', company: '', service: '', message: '' });

      toast({
        title: 'Message sent successfully!',
        description: data.summary || "We'll get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: 'Network error',
        description:
          'Unable to reach the server. Please check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      {/* Background decorative mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent" />
        <div className="absolute -top-48 -left-48 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-50/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-[26rem] h-[26rem] bg-gradient-to-tl from-blue-50/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-[#0066FF]/15" />
        <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 rounded-full bg-[#338AFF]/15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24 lg:py-28">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation."
        />

        {/* ── Contact Method Cards ── */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {contactMethods.map((method, idx) => (
            <AnimatedItem key={method.title} variant="fade-up" delay={idx * 0.08}>
              <motion.a
                href={method.href}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-5 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/[0.08] hover:border-blue-200/60 transition-all duration-400 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0066FF]/[0.06] to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 group-hover:scale-110 transition-all duration-400 shrink-0 p-3">
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <div className="relative min-w-0">
                  <h4 className="text-sm font-bold text-[#0A1628] tracking-tight">{method.title}</h4>
                  <p className="text-sm text-[#0066FF] font-semibold truncate mt-0.5">{method.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{method.description}</p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-gray-300 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </motion.a>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* ── Left: Info Panel ── */}
          <AnimatedSection variant="fade-right" className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-[#06101e] via-[#0A1628] to-[#0d1f3a] rounded-3xl p-7 sm:p-8 text-white overflow-hidden h-full">
              {/* Circuit board / tech grid pattern */}
              <div className="absolute inset-0 opacity-[0.07]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,102,255,0.5)" strokeWidth="0.5" />
                      <circle cx="20" cy="20" r="1.5" fill="rgba(0,102,255,0.6)" />
                      <circle cx="0" cy="0" r="1" fill="rgba(0,102,255,0.4)" />
                      <circle cx="40" cy="40" r="1" fill="rgba(0,102,255,0.4)" />
                    </pattern>
                    <pattern id="circuit-lines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M 0 20 L 20 20 L 20 40 L 40 40" fill="none" stroke="rgba(0,102,255,0.3)" strokeWidth="0.3" />
                      <path d="M 60 0 L 60 20 L 80 20" fill="none" stroke="rgba(0,102,255,0.3)" strokeWidth="0.3" />
                      <path d="M 40 60 L 60 60 L 60 80" fill="none" stroke="rgba(0,102,255,0.3)" strokeWidth="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit-grid)" />
                  <rect width="100%" height="100%" fill="url(#circuit-lines)" />
                </svg>
              </div>

              {/* Gradient glow orbs */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#0066FF]/[0.08] rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/[0.05] rounded-full blur-[60px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#0066FF]/[0.04] rounded-full blur-[50px]" />

              {/* Animated floating dots */}
              <motion.div
                animate={{ y: [-8, 8, -8], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-16 right-12 w-1.5 h-1.5 rounded-full bg-[#0066FF]/40"
              />
              <motion.div
                animate={{ y: [6, -6, 6], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-24 left-10 w-1 h-1 rounded-full bg-cyan-400/40"
              />
              <motion.div
                animate={{ y: [-5, 10, -5], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full bg-blue-300/30"
              />

              <div className="relative z-10">
                {/* Heading with gradient text */}
                <div className="mb-2">
                  <h3 className="text-3xl font-bold leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                      Let&apos;s Start a
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[#0066FF] to-[#338AFF] bg-clip-text text-transparent">
                      Conversation
                    </span>
                  </h3>
                </div>
                <p className="text-blue-200/50 text-sm leading-relaxed mb-8">
                  Whether you have a detailed brief or just a rough idea, our team is ready to help
                  you bring your vision to life. No commitment required.
                </p>

                {/* Quick Response Promise Badges */}
                <div className="grid grid-cols-3 gap-2.5 mb-8">
                  {quickResponseBadges.map((badge) => {
                    const BIcon = badge.icon;
                    return (
                      <motion.div
                        key={badge.title}
                        whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                        className="relative group text-center bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5 hover:bg-white/[0.07] hover:border-[#0066FF]/20 transition-all duration-300 cursor-default"
                      >
                        <div className="w-8 h-8 mx-auto rounded-lg bg-gradient-to-br from-[#0066FF]/20 to-[#0066FF]/5 border border-[#0066FF]/20 flex items-center justify-center mb-2 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
                          <BIcon className="w-4 h-4 text-[#338AFF]" />
                        </div>
                        <p className="text-[11px] font-semibold text-blue-100 leading-tight">{badge.title}</p>
                        <p className="text-[9px] text-blue-200/35 mt-0.5 leading-snug">{badge.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-2.5 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-3.5 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3.5 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-all duration-300">
                        <Icon className="w-4 h-4 text-blue-300/70 group-hover:text-[#338AFF] transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-blue-200/30 font-semibold">
                          {label}
                        </p>
                        <p className="text-sm text-blue-100/80 font-medium truncate">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Working Hours with visual indicator */}
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-blue-300/70" />
                    </div>
                    <p className="text-sm font-semibold text-blue-100/80">Working Hours</p>
                  </div>

                  <div className="space-y-3 ml-12">
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-blue-200/40 font-medium">Mon – Fri</span>
                        <span className="text-xs text-blue-100/70 font-semibold">9 AM – 6 PM PST</span>
                      </div>
                      {/* Visual time bar */}
                      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '75%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="h-full rounded-full bg-gradient-to-r from-[#0066FF] to-[#338AFF]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-blue-200/40 font-medium">Saturday</span>
                        <span className="text-xs text-blue-100/70 font-semibold">10 AM – 2 PM PST</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '33%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="h-full rounded-full bg-gradient-to-r from-[#0066FF]/60 to-[#338AFF]/60"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Indicator */}
                <div className="bg-gradient-to-r from-green-500/[0.08] to-green-500/[0.03] border border-green-500/[0.12] rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400 shadow-lg shadow-green-400/30" />
                    </span>
                    <span className="text-sm font-bold text-green-300">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-200/30 mt-1.5 ml-5">
                    Average response time: under 2 hours
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <p className="text-[10px] text-blue-200/30 uppercase tracking-[0.2em] font-semibold mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-2.5">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center hover:bg-[#0066FF]/20 hover:border-[#0066FF]/30 text-blue-200/30 hover:text-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Contact Form ── */}
          <AnimatedSection variant="fade-left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 lg:p-10"
            >
              {/* Subtle corner gradient accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50/60 to-transparent rounded-bl-[4rem] pointer-events-none" />

              {/* Form header */}
              <div className="relative flex items-center gap-4 mb-8 pb-7 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0A1628] tracking-tight">Send us a message</h4>
                  <p className="text-sm text-gray-400 mt-0.5">
                    We typically respond within{' '}
                    <span className="text-[#0066FF] font-semibold">2 hours</span>
                  </p>
                </div>
              </div>

              {/* Name & Email with floating label styling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <Label
                    htmlFor="name"
                    className={`absolute left-3.5 z-10 transition-all duration-200 pointer-events-none text-sm
                      ${focusedField === 'name' || formData.name
                        ? '-top-2.5 text-[10px] font-semibold bg-white px-1.5 rounded text-[#0066FF]'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white border-gray-200 rounded-xl h-12 text-sm pt-2 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 transition-all placeholder:text-transparent"
                  />
                </div>
                <div className="relative">
                  <Label
                    htmlFor="email"
                    className={`absolute left-3.5 z-10 transition-all duration-200 pointer-events-none text-sm
                      ${focusedField === 'email' || formData.email
                        ? '-top-2.5 text-[10px] font-semibold bg-white px-1.5 rounded text-[#0066FF]'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white border-gray-200 rounded-xl h-12 text-sm pt-2 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 transition-all placeholder:text-transparent"
                  />
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="relative">
                  <Label
                    htmlFor="company"
                    className={`absolute left-3.5 z-10 transition-all duration-200 pointer-events-none text-sm
                      ${focusedField === 'company' || formData.company
                        ? '-top-2.5 text-[10px] font-semibold bg-white px-1.5 rounded text-[#0066FF]'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder=" "
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white border-gray-200 rounded-xl h-12 text-sm pt-2 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 transition-all placeholder:text-transparent"
                  />
                </div>
                <div className="relative">
                  <Label
                    htmlFor="service"
                    className={`absolute left-3.5 z-10 transition-all duration-200 pointer-events-none text-sm
                      ${focusedField === 'service' || formData.service
                        ? '-top-2.5 text-[10px] font-semibold bg-white px-1.5 rounded text-[#0066FF]'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Service Interest
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                    onOpenChange={(open) => setFocusedField(open ? 'service' : null)}
                  >
                    <SelectTrigger className="bg-white border-gray-200 rounded-xl h-12 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="relative mb-7">
                <Label
                  htmlFor="message"
                  className={`absolute left-3.5 z-10 transition-all duration-200 pointer-events-none text-sm
                    ${focusedField === 'message' || formData.message
                      ? '-top-2.5 text-[10px] font-semibold bg-white px-1.5 rounded text-[#0066FF]'
                      : 'top-3 text-gray-400'
                    }`}
                >
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder=" "
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white border-gray-200 rounded-xl text-sm pt-4 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 resize-none transition-all placeholder:text-transparent"
                />
              </div>

              {/* Submit Button with gradient and glow */}
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="relative w-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0040A0] text-white rounded-xl h-13 text-[15px] font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300 group overflow-hidden"
                >
                  {/* Glow effect layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#338AFF] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="relative flex items-center justify-center gap-2.5">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gray-300" />
                  256-bit encryption
                </span>
                <span className="w-px h-3 bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gray-300" />
                  GDPR compliant
                </span>
                <span className="w-px h-3 bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gray-300" />
                  No spam, ever
                </span>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
