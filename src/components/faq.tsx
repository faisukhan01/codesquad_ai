'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare,
  Clock,
  Shield,
  Cpu,
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
    icon: Cpu,
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
      'Yes, we offer flexible maintenance packages including bug fixes, feature updates, security patches, and 24/7 monitoring. Our support tiers are designed to scale with your needs.',
    icon: Shield,
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Yes, our engineers seamlessly integrate with your existing workflows, tools, and development culture. Whether you need staff augmentation, pair programming, or a fully embedded team, we adapt to how you work.',
    icon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function FAQ() {
  const faqRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(faqRef, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with CodeSquad"
        />

        <motion.div
          ref={faqRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => {
                const num = String(index + 1).padStart(2, '0');
                const Icon = faq.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-0 last:border-0"
                    >
                      <AccordionTrigger
                        className="faq-trigger group relative text-left text-[15px] sm:text-base font-medium text-[#0A1628] hover:no-underline py-5 px-6 sm:px-7 transition-all duration-200 hover:bg-blue-50/40 after:content-[''] after:absolute after:bottom-0 after:left-6 after:right-6 sm:after:left-7 sm:after:right-7 after:h-px after:bg-gray-100 last:after:hidden"
                      >
                        <div className="flex items-center gap-4 flex-1 pr-4">
                          <span className="faq-num flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold shrink-0 transition-all duration-200 bg-blue-50 text-[#0066FF]/70 group-hover:bg-blue-100 group-hover:text-[#0066FF]">
                            {num}
                          </span>
                          <Icon className="w-4 h-4 text-gray-300 group-hover:text-[#0066FF]/60 shrink-0 transition-colors duration-200" />
                          <span className="faq-question flex-1 transition-colors duration-200 leading-snug text-[#0A1628] group-hover:text-[#0066FF]/80">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 sm:px-7 pb-5 pt-0">
                        <div className="pl-[4.25rem] sm:pl-[4.75rem]">
                          <p className="text-sm leading-[1.75] text-gray-500">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-trigger[data-state="open"] {
          background: linear-gradient(to right, rgba(0, 102, 255, 0.06), white) !important;
        }
        .faq-trigger[data-state="open"] .faq-num {
          background: #0066FF !important;
          color: white !important;
          box-shadow: 0 4px 14px rgba(0, 102, 255, 0.25) !important;
        }
        .faq-trigger[data-state="open"] .faq-question {
          color: #0066FF !important;
          font-weight: 600 !important;
        }
      ` }} />
    </section>
  );
}
