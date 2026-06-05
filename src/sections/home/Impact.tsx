/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Impact() {
  const cards = [
    { value: '65%', label: 'Faster Patient Registration' },
    { value: '80%', label: 'Less Manual Documentation' },
    { value: '50%', label: 'Improved Operational Efficiency' },
    { value: '3X', label: 'Faster Medical Record Access' },
    { value: '40%', label: 'Reduced Administrative Work' },
    { value: '35%', label: 'Faster Billing Workflow' },
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-brand-gray-200" id="impact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-gradient-to-b from-[#343A40] to-[#191C1F] text-white text-[11px] md:text-xs font-semibold rounded shadow-sm select-none tracking-wide font-sans cursor-default border border-brand-gray-700/60" id="impact-badge">
              Impact Created
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-brand-black leading-tight tracking-tight mt-6" id="impact-heading">
            <span className="italic font-light">Delivering</span> Measurable Healthcare Impact
          </h2>
          <p className="mt-6 text-brand-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans" id="impact-description">
            HealthMed helps healthcare organizations improve operational efficiency, reduce manual work, and accelerate patient workflows.
          </p>
        </div>

        {/* Modular Stat Panels - Clean minimalist grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="impact-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-brand-gray-50 rounded-md p-8 md:p-10 flex flex-col justify-center min-h-[160px] md:min-h-[180px] transition-all duration-200 hover:bg-brand-gray-100 cursor-default"
              id={`impact-card-${i}`}
            >
              <div className="flex flex-col space-y-3">
                {/* Visual Number Value */}
                <span className="text-5xl md:text-6xl font-serif text-brand-black select-none tracking-tight">
                  {card.value}
                </span>

                {/* Subtitle label explanation */}
                <span className="text-base text-brand-gray-800 tracking-tight font-sans leading-tight">
                  {card.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
