'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare,
  Clock,
  Shield,
  Cpu,
  Wrench,
  Users,
  Plus,
  Minus,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function FAQ() {
  const faqRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(faqRef, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-blue-50 via-blue-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-50 via-blue-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-24 left-16 w-3 h-3 rounded-full bg-gradient-to-br from-[#0066FF] to-[#338AFF] opacity-20" />
        <div className="absolute bottom-32 right-24 w-2 h-2 rounded-full bg-gradient-to-br from-[#0066FF] to-[#338AFF] opacity-15" />
        <div className="absolute top-1/2 -right-16 w-48 h-48 bg-gradient-to-l from-blue-50 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24 lg:py-28">
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
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent" />

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
                        className={`
                          faq-trigger group relative text-left text-[15px] sm:text-base font-medium text-[#0A1628]
                          hover:no-underline py-6 px-6 sm:px-8
                          transition-all duration-300 ease-out
                          hover:bg-blue-50/40
                          after:content-[''] after:absolute after:bottom-0 after:left-6 after:right-6 sm:after:left-8 sm:after:right-8 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gray-200/80 after:to-transparent
                          last:after:hidden
                        `}
                      >
                        <div className="flex items-center gap-4 sm:gap-5 flex-1 pr-4">
                          <span className="faq-num relative flex items-center justify-center w-10 h-10 rounded-full text-xs font-bold tracking-wider shrink-0 transition-all duration-300 ease-out bg-blue-50 text-[#0066FF]/70 group-hover:bg-blue-100 group-hover:text-[#0066FF] group-hover:scale-105">
                            {num}
                          </span>

                          <div className="faq-icon w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 text-gray-300 group-hover:text-[#0066FF]/60 group-hover:bg-blue-50/60">
                            <Icon className="w-4 h-4" />
                          </div>

                          <span className="faq-question flex-1 transition-colors duration-300 leading-snug text-[#0A1628] group-hover:text-[#0066FF]/80">
                            {faq.question}
                          </span>

                          <div className="faq-toggle w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-out bg-gray-100 group-hover:bg-blue-50">
                            <Plus className="faq-plus w-3.5 h-3.5 text-gray-400 group-hover:text-[#0066FF] transition-all duration-300" />
                            <Minus className="faq-minus w-3.5 h-3.5 text-white transition-all duration-300 opacity-0 scale-50" />
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 sm:px-8 pb-0 pt-0">
                        <div className="pb-6 pl-[4.5rem] sm:pl-[5.25rem]">
                          <div className="relative pl-5">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-[#0066FF] via-[#338AFF] to-[#0066FF]/30" />
                            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#0066FF]/15 to-transparent" />
        </motion.div>
      </div>

      {/* Scoped styles for open state transitions */}
      <style dangerouslySetInnerHTML={{ __html: `
        .faq-trigger[data-state="open"] {
          background: linear-gradient(to right, rgba(0, 102, 255, 0.06), white) !important;
        }
        .faq-trigger[data-state="open"] .faq-num {
          background: #0066FF !important;
          color: white !important;
          box-shadow: 0 4px 14px rgba(0, 102, 255, 0.25) !important;
          transform: scale(1.1) !important;
        }
        .faq-trigger[data-state="open"] .faq-icon {
          background: rgba(0, 102, 255, 0.1) !important;
          color: #0066FF !important;
        }
        .faq-trigger[data-state="open"] .faq-question {
          color: #0066FF !important;
          font-weight: 600 !important;
        }
        .faq-trigger[data-state="open"] .faq-toggle {
          background: #0066FF !important;
        }
        .faq-trigger[data-state="open"] .faq-plus {
          opacity: 0 !important;
          transform: scale(0.5) rotate(90deg) !important;
        }
        .faq-trigger[data-state="open"] .faq-minus {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      ` }} />
    </section>
  );
}
