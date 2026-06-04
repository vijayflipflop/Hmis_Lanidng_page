/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Activity, Pill, Users } from 'lucide-react';

export default function EcosystemHub() {
  return (
    <section className="bg-[#FAF8F5] py-20 md:py-28 border-b border-brand-gray-100 overflow-hidden" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Header & Badging matching the reference image */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <span className="px-4 py-1.5 bg-[#1e2022] text-white text-[11px] font-sans font-bold uppercase tracking-wider rounded-lg shadow-sm">
              Unified Healthcare Ecosystem
            </span>
          </div>
          <h2 className="text-4xl md:text-[50px] font-serif text-[#1e2022] leading-[1.12] tracking-tighter" id="ecosystem-heading">
            One Healthcare Management <br />
            <span className="italic font-normal block mt-2">Platform for Every Workflow</span>
          </h2>
          <p className="mt-5 text-[#5c636a] text-[15px] md:text-[16.5px] max-w-2xl mx-auto leading-relaxed font-sans" id="ecosystem-description">
            Manage clinical, operational, and financial workflows through one scalable hospital management system.
          </p>
        </div>

        {/* Central Interactive Ecosystem Stage on cream background without container borders */}
        <div className="relative max-w-3xl mx-auto h-[480px] md:h-[540px] flex items-center justify-center" id="ecosystem-stage">
          
          {/* Concentric Orbital dashed circle line passing exactly through the cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Soft, beautiful radial highlight matching the reference image */}
            <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#2271e8]/10 to-transparent filter blur-[40px] opacity-70 animate-pulse-slow" />
            
            {/* The primary dashed orbit track line */}
            <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-[#ccd9eb]" />
          </div>

          {/* Central Blue Orb representing HealthMed Core Node */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative z-20 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#0070f0] flex flex-col items-center justify-center text-white text-center shadow-[0_8px_40px_rgba(0,112,240,0.4)] border-4 border-white cursor-pointer select-none"
            id="ecosystem-node-core"
          >
            <span className="text-[17px] md:text-[19px] font-sans font-extrabold tracking-tight">HealthMed</span>
          </motion.div>

          {/* Satellite Badge Cards - Arranged Cardinally onto the Orbit perfectly */}
          <div className="absolute inset-0 w-full h-full" id="ecosystem-satellites">
            
            {/* 1. Hospitals (Top-Left Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute top-4 left-2 md:top-[12%] md:left-[8%] bg-white rounded-2xl py-3 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-3.5 cursor-pointer group"
              id="node-hospitals"
            >
              <div className="p-2 rounded-xl bg-[#f0f5ff] text-[#0070f0] transition-colors group-hover:bg-[#e0edff]">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-[13.5px] md:text-[14.5px] font-sans font-bold text-[#1e2022] tracking-tight">Hospitals</span>
            </motion.div>

            {/* 2. Diagnostics (Top-Right Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute top-4 right-2 md:top-[12%] md:right-[8%] bg-white rounded-2xl py-3 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-3.5 cursor-pointer group"
              id="node-diagnostics"
            >
              <div className="p-2 rounded-xl bg-[#f0f5ff] text-[#0070f0] transition-colors group-hover:bg-[#e0edff]">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-[13.5px] md:text-[14.5px] font-sans font-bold text-[#1e2022] tracking-tight">Diagnostics</span>
            </motion.div>

            {/* 3. Pharmacies (Bottom-Left Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute bottom-4 left-2 md:bottom-[12%] md:left-[8%] bg-white rounded-2xl py-3 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-3.5 cursor-pointer group"
              id="node-pharmacies"
            >
              <div className="p-2 rounded-xl bg-[#f0f5ff] text-[#0070f0] transition-colors group-hover:bg-[#e0edff]">
                <Pill className="h-5 w-5" />
              </div>
              <span className="text-[13.5px] md:text-[14.5px] font-sans font-bold text-[#1e2022] tracking-tight">Pharmacies</span>
            </motion.div>

            {/* 4. Care Teams (Bottom-Right Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute bottom-4 right-2 md:bottom-[12%] md:right-[8%] bg-white rounded-2xl py-3 px-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-3.5 cursor-pointer group"
              id="node-careteams"
            >
              <div className="p-2 rounded-xl bg-[#f0f5ff] text-[#0070f0] transition-colors group-hover:bg-[#e0edff]">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-[13.5px] md:text-[14.5px] font-sans font-bold text-[#1e2022] tracking-tight">Care Teams</span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
