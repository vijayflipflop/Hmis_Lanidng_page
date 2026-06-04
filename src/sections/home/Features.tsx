/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Sparkle, 
  Monitor, 
  FileText, 
  FlaskConical, 
  Store 
} from 'lucide-react';

export default function Features() {
  const items = [
    {
      title: 'Smart Patient Management',
      text: 'Manage appointments, registrations, and medical records digitally.',
      icon: <Users className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: true,
    },
    {
      title: 'AI Workflow Automation',
      text: 'Automate scheduling, alerts, and operational tasks.',
      icon: <Sparkle className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: false,
    },
    {
      title: 'Advanced EMR System',
      text: 'Access patient history, diagnostics, and prescriptions instantly.',
      icon: <Monitor className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: true,
    },
    {
      title: 'Billing & Insurance',
      text: 'Simplify invoicing, insurance claims, and payments.',
      icon: <FileText className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: false,
    },
    {
      title: 'Diagnostics & Laboratory',
      text: 'Manage reports, tests, and lab operations efficiently.',
      icon: <FlaskConical className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: true,
    },
    {
      title: 'Pharmacy Management',
      text: 'Track medicines, prescriptions, and inventory seamlessly.',
      icon: <Store className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: false,
    },
  ];

  return (
    <section className="bg-[#0070f0] text-white py-20 md:py-28 border-b border-brand-blue-600 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content and Badges */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <span className="px-4 py-1.5 border border-white/20 bg-white/10 text-white text-[11px] font-sans font-semibold uppercase tracking-wider rounded-lg shadow-sm">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-[50px] font-serif leading-[1.12] tracking-tighter text-white" id="features-heading">
            <span className="italic font-normal">Built for Smarter</span> Healthcare Management
          </h2>
        </div>

        {/* 3-Column Chessboard/Staggered Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" id="features-grid">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-2xl p-8 md:p-10 transition-all duration-300 cursor-pointer group flex flex-col justify-start text-left min-h-[240px] ${
                item.hasBg 
                  ? 'bg-white/8 backdrop-blur-md border border-white/15 hover:bg-white/12 hover:border-white/25 shadow-sm' 
                  : 'bg-transparent border border-transparent'
              }`}
              id={`feature-card-${idx}`}
            >
              {/* Feature Icon container alignment */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-start mb-6">
                {item.icon}
              </div>

              {/* Title heading formatted neatly */}
              <h3 className="text-[19px] font-sans font-bold tracking-tight mb-2.5 text-white">
                {item.title}
              </h3>

              {/* Description Paragraph with high opacity & readable spacing */}
              <p className="text-white/80 text-[14.5px] leading-relaxed font-sans">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
