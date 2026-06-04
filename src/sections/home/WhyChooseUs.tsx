/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const checkmarks = [
    'Centralized Records',
    'Multi Location Support',
    'Reduce Medical Errors',
    'Reduce Revenue Leakages',
    'Increase Patient throughput',
    'Compliance',
    'Reduce 45% IT Infrastructure Cost',
  ];

  return (
    <section className="bg-brand-gray-50 py-24 border-b border-brand-gray-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text and bullet listings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
            id="whychooseus-text-panel"
          >
            {/* Pill Badge */}
            <div className="flex">
              <span className="px-3.5 py-1.5 bg-brand-black text-white text-xs font-semibold rounded uppercase tracking-wider select-none">
                Why Choose Us?
              </span>
            </div>

            {/* Display Headings */}
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight tracking-tight">
              Why Healthcare Teams Choose <br />
              <span className="italic font-normal text-brand-blue-500">HealthMed</span>
            </h2>

            {/* Paragraph body */}
            <p className="text-brand-gray-600 text-base leading-relaxed">
              Built to improve operational efficiency, patient management, and healthcare coordination through connected workflows.
            </p>

            {/* List checklist items - 2 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 pt-4" id="whychooseus-grid">
              {checkmarks.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-brand-black" id={`whychooseus-item-${idx}`}>
                  <CheckCircle2 className="h-5 w-5 text-brand-blue-500 fill-brand-blue-50/50 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High Quality Graphic Image with overlapping glowing shield */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="whychooseus-graphic-panel"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-brand-gray-200 bg-white group">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                alt="Doctor wearing medical uniform holding stethoscope"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-[2s]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/40 via-transparent to-brand-black/10"></div>
              
              {/* Overlapping Floating Shield Badge exactly matching attachment_3.png */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-brand-blue-100 max-w-[210px] animate-bounce-subtle" id="floating-shield-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-blue-100 rounded-xl flex items-center justify-center text-brand-blue-500 relative shadow-inner">
                    {/* Glowing shield path */}
                    <svg className="w-7 h-7 fill-brand-blue-500 text-brand-blue-200" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 8v8M8 12h8" className="stroke-white stroke-[2.5]" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-brand-black uppercase leading-tight tracking-wider">
                      Trusted Security
                    </span>
                    <span className="text-[10px] font-medium text-brand-gray-500 leading-none mt-1">
                      HIPAA & EMR Safe
                    </span>
                  </div>
                </div>
              </div>

              {/* Glowing Overlay Sparkle */}
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-brand-blue-400/20 rounded-full filter blur-xl animate-pulse"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
