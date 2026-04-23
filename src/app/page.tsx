'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import ScrollProgress from '@/components/scroll-progress';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Partners from '@/components/partners';
import Services from '@/components/services';

import About from '@/components/about';
import CompanyValues from '@/components/company-values';
import Awards from '@/components/awards';
import Technologies from '@/components/technologies';
import AIShowcase from '@/components/ai-showcase';
import Process from '@/components/process';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import StatsBanner from '@/components/stats-banner';
import Trust from '@/components/trust';
import FAQ from '@/components/faq';
import Blog from '@/components/blog';
import Newsletter from '@/components/newsletter';
import Industries from '@/components/industries';
import WhyChooseUs from '@/components/why-choose-us';
import Team from '@/components/team';
import Milestones from '@/components/milestones';
import EngagementModels from '@/components/engagement-models';
import ROICalculator from '@/components/roi-calculator';
import VideoShowcase from '@/components/video-showcase';
import Careers from '@/components/careers';
import CTASection from '@/components/cta-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import LiveChat from '@/components/live-chat';
import CookieConsent from '@/components/cookie-consent';
import Resources from '@/components/resources';
import BackToTop from '@/components/back-to-top';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen isVisible={isLoading} />
      <ScrollProgress />
      <Navigation />
      <main className="flex-1 pb-4">
        <Hero />
        <Clients />
        <Partners />
        <Services />
        <div className="gradient-divider max-w-7xl mx-auto" />
        <About />
        <CompanyValues />
        <Awards />
        <div className="gradient-divider max-w-7xl mx-auto" />
        <Technologies />
        <AIShowcase />
        <Process />
        <Industries />
        <Portfolio />
        <div className="gradient-divider-thick max-w-7xl mx-auto" />
        <Testimonials />
        <StatsBanner />
        <Trust />
        <WhyChooseUs />
        <FAQ />
        <Blog />
        <Newsletter />
        <Team />
        <Milestones />
        <EngagementModels />
        <ROICalculator />
        <Careers />
        <VideoShowcase />
        <Resources />
        <CTASection />
        <div className="gradient-divider max-w-7xl mx-auto" />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}
