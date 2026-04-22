'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Shield } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setEmail('');
    toast.success('Successfully subscribed! Welcome to our newsletter.');
  };

  return (
    <section
      ref={ref}
      className="relative py-20 bg-[#0A1628] overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 newsletter-pattern opacity-30" />

      {/* Decorative gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-[#0066FF] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#338AFF] rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Mail className="w-7 h-7 text-[#338AFF]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-blue-200/70 mb-8 max-w-xl mx-auto">
            Get the latest insights, industry trends, and company news delivered
            to your inbox.
          </p>
        </motion.div>

          {/* Email Form */}
          <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
        >
          <div className="relative w-full">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-blue-200/40 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
              disabled={submitted}
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 group"
            disabled={submitted}
          >
            {submitted ? (
              'Subscribed!'
            ) : (
              <>
                Subscribe
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.form>

        {/* Privacy text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-1.5 text-sm text-blue-200/50"
        >
          <Shield className="w-3.5 h-3.5" />
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
}
