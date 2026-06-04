/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/home/Hero';
import Partners from '../sections/home/Partners';
import WhyChooseUs from '../sections/home/WhyChooseUs';
import EcosystemHub from '../sections/home/EcosystemHub';
import Products from '../sections/home/Products';
import Features from '../sections/home/Features';
import AIWorkflows from '../sections/home/AIWorkflows';
import Impact from '../sections/home/Impact';
import Testimonials from '../sections/home/Testimonials';
import FAQ from '../sections/home/FAQ';
import ModernizeCTA from '../sections/home/ModernizeCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white" id="home-page-container">
      {/* Navigation Layout */}
      <Navbar />

      {/* Main Sections Fold Flow */}
      <main className="flex-grow">
        <Hero />
        <Partners />
        <WhyChooseUs />
        <EcosystemHub />
        <Products />
        <Features />
        <AIWorkflows />
        <Impact />
        <Testimonials />
        <FAQ />
        <ModernizeCTA />
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  );
}
