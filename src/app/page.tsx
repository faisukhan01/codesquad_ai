'use client';

import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Services from '@/components/services';
import About from '@/components/about';
import Technologies from '@/components/technologies';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import Team from '@/components/team';
import CTASection from '@/components/cta-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <About />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <Team />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
