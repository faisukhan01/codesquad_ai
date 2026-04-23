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
    <section id="contact" className="section-padding section-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation."
        />

        {/* ── Contact Method Cards ── */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method, idx) => (
            <AnimatedItem key={method.title} variant="fade-up" delay={idx * 0.08}>
              <motion.a
                href={method.href}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/70 p-5 shadow-sm hover:shadow-md hover:border-[#0066FF]/30 transition-all duration-300"
              >
                {/* Gradient corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0066FF]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-sm shadow-blue-500/15 shrink-0">
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-[#0A1628]">{method.title}</h4>
                  <p className="text-sm text-[#0066FF] font-medium truncate">{method.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{method.description}</p>
                </div>
              </motion.a>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* ── Left: Info Panel ── */}
          <AnimatedSection variant="fade-right" className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628] rounded-2xl p-7 sm:p-8 text-white relative overflow-hidden h-full">
              {/* Background decorations */}
              <div className="absolute inset-0 grid-pattern opacity-15" />
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#0066FF]/8 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Heading */}
                <h3 className="text-2xl font-bold mb-2 leading-tight">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-blue-200/60 text-sm leading-relaxed mb-8">
                  Whether you have a detailed brief or just a rough idea, our team is ready to help
                  you bring your vision to life. No commitment required.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-3 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3.5 bg-white/5 border border-white/8 rounded-xl px-4 py-3 hover:bg-white/8 transition-colors duration-200"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-blue-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-blue-200/40 font-medium">
                          {label}
                        </p>
                        <p className="text-sm text-blue-100 font-medium truncate">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 mb-8">
                  <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-100 mb-2">Working Hours</p>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between gap-6">
                        <span className="text-blue-200/50">Mon – Fri</span>
                        <span className="text-blue-100 font-medium">9 AM – 6 PM PST</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="text-blue-200/50">Saturday</span>
                        <span className="text-blue-100 font-medium">10 AM – 2 PM PST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Indicator */}
                <div className="bg-white/5 rounded-xl border border-white/10 p-4 mb-8">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                    <span className="text-sm font-semibold text-green-300">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-xs text-blue-200/40 mt-1.5 ml-5">
                    Average response time: under 2 hours
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[11px] text-blue-200/40 uppercase tracking-[0.15em] font-medium mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-2.5">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ y: -2 }}
                        className="w-10 h-10 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center hover:bg-white/12 hover:border-white/15 text-blue-200/50 hover:text-white transition-all duration-300"
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
              className="bg-white rounded-2xl border border-gray-200/70 shadow-sm p-6 sm:p-8"
            >
              {/* Form header */}
              <div className="flex items-center gap-3 mb-7 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-sm shadow-blue-500/20">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0A1628]">Send us a message</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    We typically respond within 2 hours
                  </p>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-[#0A1628]"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-white border-gray-200 rounded-xl h-11 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-[#0A1628]"
                  >
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-white border-gray-200 rounded-xl h-11 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium text-[#0A1628]"
                  >
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="bg-white border-gray-200 rounded-xl h-11 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-sm font-medium text-[#0A1628]"
                  >
                    Service Interest
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                  >
                    <SelectTrigger className="bg-white border-gray-200 rounded-xl h-11 text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 w-full placeholder:text-gray-300">
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
              <div className="space-y-2 mb-6">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-[#0A1628]"
                >
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="bg-white border-gray-200 rounded-xl text-sm focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/10 resize-none transition-all placeholder:text-gray-300"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0040A0] text-white rounded-xl h-12 text-[15px] font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </Button>

              {/* Trust badges */}
              <div className="mt-5 flex items-center justify-center gap-5 text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gray-300" />
                  256-bit encryption
                </span>
                <span className="text-gray-200">·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gray-300" />
                  GDPR compliant
                </span>
                <span className="text-gray-200">·</span>
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
