'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Linkedin, Twitter, Github, Clock, ArrowUpRight } from 'lucide-react';
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
  'Custom Software',
  'Cloud Solutions',
  'AI / ML',
  'Mobile App',
  'UI/UX Design',
  'DevOps',
];

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@codesquad.dev',
    description: 'We reply within 24 hours',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9AM to 6PM PST',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '123 Innovation Drive',
    description: 'Tech Valley, CA 94025',
    color: 'from-violet-500 to-purple-500',
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
        description: 'Unable to reach the server. Please check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation."
        />

        {/* Contact Method Cards */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method) => (
            <AnimatedItem key={method.title} variant="fade-up" delay={0.05}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative bg-gray-50/80 rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-500/5 hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-[#0A1628] text-sm mb-1">{method.title}</h4>
                <p className="text-sm text-[#0066FF] font-medium mb-1">{method.value}</p>
                <p className="text-xs text-gray-400">{method.description}</p>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: Info Panel */}
          <AnimatedSection variant="fade-right" className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1f35] rounded-2xl p-7 sm:p-8 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0066FF]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed mb-8">
                  Whether you have a detailed brief or just a rough idea, our team is ready to help you bring your vision to life.
                </p>

                {/* Working Hours */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-100 mb-2.5">Working Hours</p>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between gap-4">
                          <span className="text-blue-200/60">Mon - Fri</span>
                          <span className="text-blue-100 font-medium">9AM - 6PM PST</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-blue-200/60">Saturday</span>
                          <span className="text-blue-100 font-medium">10AM - 2PM PST</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-blue-200/60">Sunday</span>
                          <span className="text-blue-200/40 font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white/5 rounded-xl border border-white/10 p-4 mb-8">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                    <span className="text-sm font-medium text-green-300">Available for new projects</span>
                  </div>
                  <p className="text-xs text-blue-200/50 ml-5">Average response time: 2 hours</p>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-blue-200/50 uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: 'LinkedIn' },
                      { icon: Twitter, label: 'Twitter' },
                      { icon: Github, label: 'GitHub' },
                    ].map(({ icon: Icon, label }) => (
                      <motion.a
                        key={label}
                        href="#"
                        whileHover={{ y: -2 }}
                        className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/20 text-blue-200/60 hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection variant="fade-left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50/60 rounded-2xl border border-gray-100 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-[#0A1628]">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-white border-gray-200 rounded-xl h-11 focus:border-[#0066FF] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-[#0A1628]">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-white border-gray-200 rounded-xl h-11 focus:border-[#0066FF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-[#0A1628]">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="bg-white border-gray-200 rounded-xl h-11 focus:border-[#0066FF] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-[#0A1628]">
                    Service Interest
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                  >
                    <SelectTrigger className="bg-white border-gray-200 rounded-xl h-11">
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

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-[#0A1628]">
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="bg-white border-gray-200 rounded-xl focus:border-[#0066FF] resize-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0040A0] text-white rounded-xl h-12 text-base font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
