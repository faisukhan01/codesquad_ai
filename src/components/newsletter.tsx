'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Shield, Users, Zap, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const stats = [
  { icon: Users, value: '12,000+', label: 'Subscribers' },
  { icon: Zap, value: 'Weekly', label: 'Delivery' },
  { icon: TrendingUp, value: '95%', label: 'Open Rate' },
];

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
      className="relative py-20 bg-gradient-to-br from-[#0A1628] via-[#0d1f35] to-[#0A1628] overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#338AFF] rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 mb-6 shadow-lg shadow-black/20"
          >
            <Mail className="w-7 h-7 text-[#338AFF]" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-blue-200/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Get the latest insights on software development, AI trends, and digital transformation delivered to your inbox every week.
          </p>
        </motion.div>

        {/* Subscriber stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <stat.icon className="w-4 h-4 text-blue-300" />
                <span className="text-lg sm:text-xl font-bold text-white">{stat.value}</span>
              </div>
              <span className="text-xs text-blue-200/40 font-medium">{stat.label}</span>
            </div>
          ))}
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
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/30" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/10 border-white/15 text-white placeholder:text-blue-200/30 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] focus:bg-white/15 transition-all"
              disabled={submitted}
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#338AFF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group"
            disabled={submitted}
          >
            {submitted ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-green-400" />
                Subscribed!
              </span>
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
          className="mt-5 flex items-center justify-center gap-1.5 text-sm text-blue-200/40"
        >
          <Shield className="w-3.5 h-3.5" />
          We respect your privacy. No spam, unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
}
