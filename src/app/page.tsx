'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import ScrollProgress from '@/components/scroll-progress';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Partners from '@/components/partners';
import Services from '@/components/services';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import CompanyValues from '@/components/company-values';
import Awards from '@/components/awards';
import Technologies from '@/components/technologies';
import Process from '@/components/process';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import StatsBanner from '@/components/stats-banner';
import FAQ from '@/components/faq';
import Blog from '@/components/blog';
import Newsletter from '@/components/newsletter';
import Team from '@/components/team';
import CTASection from '@/components/cta-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import LiveChat from '@/components/live-chat';
import CookieConsent from '@/components/cookie-consent';
import EngagementModels from '@/components/engagement-models';
import Careers from '@/components/careers';
import Industries from '@/components/industries';
import WhyChooseUs from '@/components/why-choose-us';
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
      <main className="flex-1">
        <Hero />
        <Clients />
        <Partners />
        <Services />
        <SectionDivider variant="wave" colorFrom="white" colorTo="#f9fafb" />
        <About />
        <CompanyValues />
        <Awards />
        <Technologies />
        <Process />
        <SectionDivider variant="curve" colorFrom="#f9fafb" colorTo="white" />
        <Industries />
        <Portfolio />
        <Testimonials />
        <StatsBanner />
        <FAQ />
        <Blog />
        <Newsletter />
        <WhyChooseUs />
        <Team />
        <EngagementModels />
        <Careers />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}
