'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Linkedin, Twitter, Github } from 'lucide-react';
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
import { AnimatedSection } from '@/components/animated-section';
import { useToast } from '@/hooks/use-toast';

const serviceOptions = [
  'Custom Software',
  'Cloud Solutions',
  'AI / ML',
  'Mobile App',
  'UI/UX Design',
  'DevOps',
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <AnimatedSection variant="fade-right" className="lg:col-span-2">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Have a project in mind? We&apos;d love to hear about it. Drop us a message
              and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1628] text-sm mb-1">Office Address</h4>
                  <p className="text-gray-500 text-sm">
                    123 Innovation Drive, Tech Valley, CA 94025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1628] text-sm mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">hello@codesquad.dev</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1628] text-sm mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-xl border border-blue-100/60 p-5">
              <h4 className="text-sm font-semibold text-[#0A1628] mb-3">Working Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday - Friday</span>
                  <span className="font-medium text-[#0A1628]">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Saturday</span>
                  <span className="font-medium text-[#0A1628]">10:00 AM - 2:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="font-medium text-gray-400">Closed</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-blue-200/40 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs text-green-700 font-medium">Available for new projects</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-sm font-semibold text-[#0A1628] mb-4">Follow Us</h4>
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
                    className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-[#0066FF] transition-colors text-gray-500"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection variant="fade-left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50/80 rounded-2xl border border-gray-100 p-6 sm:p-8"
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
                    className="bg-white border-gray-200 rounded-xl h-11 focus:border-[#0066FF]"
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
                    className="bg-white border-gray-200 rounded-xl h-11 focus:border-[#0066FF]"
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
                    className="bg-white border-gray-200 rounded-xl h-11 focus:border-[#0066FF]"
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
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="bg-white border-gray-200 rounded-xl focus:border-[#0066FF] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl h-12 text-base font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
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
