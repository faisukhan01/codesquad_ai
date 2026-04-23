'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import ScrollProgress from '@/components/scroll-progress';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Services from '@/components/services';
import AlsoExpertIn from '@/components/also-expert-in';
import Process from '@/components/process';
import Industries from '@/components/industries';
import Resources from '@/components/resources';
import CTASection from '@/components/cta-section';
import Contact from '@/components/contact';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import LiveChat from '@/components/live-chat';
import CookieConsent from '@/components/cookie-consent';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
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
        <Services />
        <AlsoExpertIn />
        <Process />
        <Industries />
        <Resources />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
      <CookieConsent />
    </div>
  );
}
