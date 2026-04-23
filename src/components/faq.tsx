'use client';

import React from 'react';
import {
  MessageSquare,
  Clock,
  Shield,
  Cpu,
  Wrench,
  Users,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import SectionHeader from '@/components/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'We specialize in healthcare, agriculture, computer vision, engineering IoT, and engineering technology solutions with deep domain expertise. Our teams combine technical excellence with industry-specific knowledge to deliver solutions that truly move the needle.',
    icon: Wrench,
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We assign a dedicated project manager to every engagement and use tools like Slack, Jira, and weekly video calls for full transparency. You\'ll have real-time access to progress dashboards, milestone tracking, and direct communication channels with your engineering team.',
    icon: MessageSquare,
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary by complexity. An MVP typically takes 8-12 weeks, while enterprise solutions may take 3-6 months. We provide detailed estimates and a clear roadmap during the discovery phase so there are never surprises.',
    icon: Clock,
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes, we offer flexible maintenance packages including bug fixes, feature updates, security patches, and 24/7 monitoring. Our support tiers are designed to scale with your needs — from critical production support to ongoing feature development.',
    icon: Shield,
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We specialize in React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, GCP), and modern DevOps practices. We stay on the cutting edge while choosing stable, battle-tested tools that deliver long-term maintainability.',
    icon: Cpu,
  },
  {
    question: 'How do you ensure code quality?',
    answer:
      'We follow strict code reviews, automated testing (unit, integration, E2E), CI/CD pipelines, and coding standards across every project. Our quality assurance process is baked into every sprint — not bolted on at the end.',
    icon: Wrench,
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Yes, our engineers seamlessly integrate with your existing workflows, tools, and development culture. Whether you need staff augmentation, pair programming, or a fully embedded team, we adapt to how you work.',
    icon: Users,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding section-gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with CodeSquad"
        />

        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
            <Accordion type="single" collapsible className="w-full divide-y divide-gray-100">
              {faqs.map((faq, index) => {
                const num = String(index + 1).padStart(2, '0');
                const Icon = faq.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-0 last:border-0"
                  >
                    <AccordionTrigger
                      className="text-left text-[15px] sm:text-base font-medium text-[#0A1628] hover:text-[#0066FF] hover:no-underline py-5 px-6 sm:px-8 group transition-colors duration-200 [&[data-state=open]]:bg-blue-50/40 [&[data-state=open]>svg:last-child]:text-[#0066FF]"
                    >
                      <div className="flex items-center gap-4 sm:gap-5 flex-1 pr-4">
                        {/* Number indicator */}
                        <span className="text-xs font-bold tracking-wider text-gray-300 group-data-[state=open]:text-[#0066FF] transition-colors duration-300 select-none w-6 text-center">
                          {num}
                        </span>

                        {/* Minimal icon */}
                        <Icon className="w-4 h-4 text-gray-300 group-data-[state=open]:text-[#0066FF] shrink-0 transition-colors duration-300" />

                        {/* Question text */}
                        <span className="transition-colors duration-200 leading-snug">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-gray-500 leading-relaxed text-[14px] sm:text-[15px] px-6 sm:px-8 pb-6 pt-0">
                      <div className="border-l-2 border-[#0066FF]/30 pl-5 ml-[1.35rem] sm:ml-[1.85rem]">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
