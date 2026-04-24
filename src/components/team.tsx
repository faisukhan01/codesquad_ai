'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';

const teamMembers = [
  {
    name: 'Alex Rivera',
    title: 'CEO & Founder',
    bio: 'Visionary tech leader with 15+ years of experience building enterprise software solutions for Fortune 500 companies.',
    initials: 'AR',
    gradient: 'from-[#0066FF] to-[#0052CC]',
    skills: ['Strategy', 'Leadership', 'Enterprise'],
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    bio: 'Architecture expert specializing in distributed systems, cloud-native technologies, and scalable microservices.',
    initials: 'PS',
    gradient: 'from-violet-500 to-violet-700',
    skills: ['Architecture', 'Cloud', 'DevOps'],
  },
  {
    name: 'Marcus Johnson',
    title: 'Head of Design',
    bio: 'Award-winning designer passionate about creating intuitive user experiences that drive business outcomes.',
    initials: 'MJ',
    gradient: 'from-emerald-500 to-teal-600',
    skills: ['UI/UX', 'Branding', 'Research'],
  },
  {
    name: 'Sarah Mitchell',
    title: 'Head of Delivery',
    bio: 'PMP certified with expertise in agile methodologies, managing cross-functional teams across global offices.',
    initials: 'SM',
    gradient: 'from-amber-500 to-orange-600',
    skills: ['Agile', 'Delivery', 'Scrum'],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Our Team"
          title={<>Meet Our <span className="gradient-text">Leadership</span></>}
          description="The visionaries driving CodeSquad's mission to deliver excellence at every level."
        />

        <AnimatedSection variant="stagger-children" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <AnimatedItem key={member.name} variant="fade-up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)' }}
              >
                {/* Avatar area */}
                <div className="relative h-52 overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-10`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100" />

                  {/* Large initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-400`}>
                      <span className="text-white font-bold text-3xl">{member.initials}</span>
                    </div>
                  </div>

                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {[Linkedin, Twitter, Globe].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/35 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0A1628] group-hover:text-[#0066FF] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0066FF]/70 mb-2.5 mt-0.5">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
