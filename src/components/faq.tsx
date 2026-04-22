'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
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
        <AnimatedSection variant="fade-up" className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about working with us. Can&apos;t find an answer?{' '}
            <a href="#contact" className="text-[#0066FF] hover:underline">Get in touch</a>.
          </p>
        </AnimatedSection>

        {/* FAQ Items */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100"
              >
                <CustomTrigger>
                  <div className="flex items-center justify-between gap-4 pr-4">
                    <span>{faq.question}</span>
                    <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-[#0066FF] custom-icon" />
                      <Minus className="w-4 h-4 text-[#0066FF] custom-icon-open hidden" />
                    </div>
                  </div>
                </CustomTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed px-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
