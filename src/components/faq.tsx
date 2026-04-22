'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';
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
    answer: 'We work across fintech, healthcare, e-commerce, education, logistics, and more. Our diverse experience allows us to adapt to any industry\'s unique challenges.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We assign a dedicated project manager and use tools like Slack, Jira, and weekly video calls. You get full transparency with real-time progress dashboards.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary based on complexity. A typical MVP takes 8-12 weeks, while enterprise solutions may take 3-6 months. We provide detailed estimates during discovery.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Absolutely. We offer flexible maintenance packages including bug fixes, feature updates, security patches, and 24/7 monitoring for critical applications.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We\'re technology-agnostic but specialize in React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, GCP), and modern DevOps practices.',
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'We follow strict code review processes, automated testing (unit, integration, E2E), CI/CD pipelines, and adhere to industry best practices and coding standards.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Yes, we offer staff augmentation and collaborative models. Our engineers seamlessly integrate with your existing workflows and tools.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible models: fixed-price for defined scopes, time-and-materials for evolving projects, and dedicated team arrangements for long-term partnerships.',
  },
];

function CustomTrigger({ children }: { children: React.ReactNode }) {
  return (
    <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-[#0A1628] hover:text-[#0066FF] hover:no-underline py-5 px-1 [&[data-state=open]>svg.custom-icon]:hidden [&[data-state=open]>svg.custom-icon-open]:block">
      {children}
    </AccordionTrigger>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with CodeSquad"
        />

        {/* FAQ Items */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="bg-gray-50/60 rounded-2xl border border-gray-100 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <CustomTrigger>
                    <div className="flex items-center justify-between gap-4 pr-4">
                      <span className="transition-colors duration-200">{faq.question}</span>
                      <div className="relative flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center transition-colors duration-200 group-data-[state=open]:bg-[#0066FF] group-data-[state=open]:text-white">
                        <Plus className="w-3.5 h-3.5 text-[#0066FF] custom-icon transition-colors duration-200" />
                        <Minus className="w-3.5 h-3.5 text-[#0066FF] custom-icon-open hidden" />
                      </div>
                    </div>
                  </CustomTrigger>
                  <AccordionContent className="text-gray-500 leading-relaxed px-1 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
