/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const leftReviews = [
    {
      text: 'HealthMed significantly improved our hospital coordination and reduced operational delays across departments.',
      author: 'Alex Bean',
      role: 'Hospital Administrator',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150',
    },
    {
      text: 'Centralized medical records helped our clinical staff retrieve patient diagnostics effortlessly in real-time.',
      author: 'Daniel John',
      role: 'Operations Director',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150',
    },
    {
      text: 'The billing modules are incredibly intuitive; we have reduced financial leakages by up to 35% within months.',
      author: 'Sarah Jenkins',
      role: 'Chief Financial Officer',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    }
  ];

  const rightReviews = [
    {
      text: 'The EMR workflow and centralized patient access helped our doctors reduce paperwork and improve consultation efficiency.',
      author: 'Roy JK',
      role: 'Senior Physician',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150',
    },
    {
      text: 'HealthMed’s modern platform transformed our whole diagnostic processing pipeline. Tests are booked and delivered instantly.',
      author: 'Amrita Patel',
      role: 'Lab Superintendent',
      img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150',
    },
    {
      text: 'An absolute game-changer for hospital chains. Seamless multi-location synchronization makes management a breeze.',
      author: 'Marcus Vance',
      role: 'Board Director',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150',
    }
  ];

  // For a perfect continuous loop, we triple-concatenate to assure infinite height
  const doubledLeft = [...leftReviews, ...leftReviews, ...leftReviews];
  const doubledRight = [...rightReviews, ...rightReviews, ...rightReviews];

  const renderCard = (review: typeof leftReviews[0], idx: number, prefix: string) => (
    <div
      key={`${prefix}-${idx}`}
      className="bg-white rounded-2xl border border-brand-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-blue-200 transition-all duration-300 flex-shrink-0"
      id={`testimonial-card-${prefix}-${idx}`}
    >
      {/* Quote Icon indicator */}
      <div className="text-brand-blue-500 mb-4 opacity-85">
        <Quote className="h-7 w-7 stroke-current fill-brand-blue-50/50" />
      </div>

      {/* Quotation block text */}
      <p className="text-brand-gray-700 text-sm md:text-[14.5px] leading-relaxed mb-6 font-sans italic">
        "{review.text}"
      </p>

      {/* Author profile info line */}
      <div className="flex items-center gap-4">
        <img
          src={review.img}
          alt={review.author}
          className="w-11 h-11 rounded-full object-cover border border-brand-gray-300 shadow-sm"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-bold text-sm tracking-tight text-brand-black">
            {review.author}
          </span>
          <span className="text-xs font-semibold text-brand-gray-500">
            {review.role}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-brand-gray-50 py-24 border-b border-brand-gray-200" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card head section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="px-3.5 py-1.5 bg-brand-black text-white text-xs font-semibold rounded uppercase tracking-wider select-none" id="testimonial-badge">
              Testimonial
            </span>
          </div>
          {/* Typo Match: "What our Client Say" */}
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight tracking-tight" id="testimonial-heading">
            What our Client Say
          </h2>
        </div>

        {/* 2-Column Infinite Vertical Marquee Container with fade blurs on edges */}
        <div className="relative max-w-5xl mx-auto h-[600px] overflow-hidden" id="testimonials-scroller-box">
          
          {/* Fade blurs to hide edge entries cleanly */}
          <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-brand-gray-50 via-brand-gray-50/75 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-brand-gray-50 via-brand-gray-50/75 to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full" id="testimonials-marquee-grid">
            
            {/* Left Marquee: Scrolls UPWARDS */}
            <div className="h-full overflow-hidden relative flex flex-col" id="col-upwards">
              <div className="flex flex-col gap-6 animate-scroll-y-up hover:[animation-play-state:paused] cursor-pointer">
                {doubledLeft.map((review, i) => renderCard(review, i, 'up'))}
              </div>
            </div>

            {/* Right Marquee: Scrolls DOWNWARDS (hidden on simple screen view to match layout seamlessly) */}
            <div className="h-full overflow-hidden relative hidden md:flex flex-col" id="col-downwards">
              <div className="flex flex-col gap-6 animate-scroll-y-down hover:[animation-play-state:paused] cursor-pointer">
                {doubledRight.map((review, i) => renderCard(review, i, 'down'))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
