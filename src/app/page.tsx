import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import WhyChooseRAC from '@/components/WhyChooseRAC';
import UseCases from '@/components/UseCases';
import HowLong from '@/components/HowLong';
import EligibilitySection from '@/components/EligibilitySection';
import CoverDetails from '@/components/CoverDetails';
import FAQSection from '@/components/FAQSection';
import GuidesCarousel from '@/components/GuidesCarousel';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';
import faqsData from './faqs.json';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 
        Fully synced Navbar and Hero from ext.html as per user request.
      */}
      <Navbar />
      <Hero />
      
      {/* Missing sections built from reference image */}
      <IntroSection />
      <WhyChooseRAC />
      <UseCases />
      <HowLong />

      <div className="py-8">
        <EligibilitySection />
        <CoverDetails />
      </div>

      {/* FAQs and Footer sections */}
      <FAQSection items={faqsData} />
      <GuidesCarousel />
      <FooterCTA />
      <Footer />
    </main>
  );
}
