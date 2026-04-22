'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

const teamMembers = [
  {
    name: 'Alex Rivera',
    title: 'CEO & Founder',
    image: '/images/team-ceo.png',
    bio: 'Visionary tech leader with 15+ years of experience building enterprise software solutions for Fortune 500 companies.',
    initials: 'AR',
    color: 'bg-blue-500',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    image: '/images/team-cto.png',
    bio: 'Architecture expert specializing in distributed systems, cloud-native technologies, and scalable microservices.',
    initials: 'PS',
    color: 'bg-cyan-500',
  },
  {
    name: 'Marcus Johnson',
    title: 'Head of Design',
    image: '/images/team-lead.png',
    bio: 'Award-winning designer passionate about creating intuitive user experiences that drive business outcomes.',
    initials: 'MJ',
    color: 'bg-teal-500',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Head of Delivery',
    image: '/images/team-pm.png',
    bio: 'PMP certified with expertise in agile methodologies, managing cross-functional teams across global offices.',
    initials: 'SM',
    color: 'bg-sky-500',
  },
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The visionaries driving CodeSquad&apos;s mission to deliver excellence
          </p>
        </AnimatedSection>

        {/* Team Grid */}
        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <AnimatedItem key={member.name} variant="fade-up" delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <motion.a
                      href="#"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Globe className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#0066FF] font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
