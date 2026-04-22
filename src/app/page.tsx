'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Services from '@/components/services';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Technologies from '@/components/technologies';
import Process from '@/components/process';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Team from '@/components/team';
import CTASection from '@/components/cta-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
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
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <SectionDivider variant="wave" colorFrom="white" colorTo="#f9fafb" />
        <About />
        <Technologies />
        <Process />
        <SectionDivider variant="curve" colorFrom="#f9fafb" colorTo="white" />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Team />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
