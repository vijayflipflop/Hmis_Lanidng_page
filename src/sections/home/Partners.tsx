/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function Partners() {
  const renderRow1Logos = () => (
    <>
      {/* 1. TATA CHEMICALS */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <svg className="w-5.5 h-5.5 text-[#2271e8] fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 3.8l6.8 13.6H5.2L12 5.8z" />
        </svg>
        <span className="font-extrabold text-[15px] font-sans tracking-tight text-[#1e2022]">
          TATA CHEMICALS
        </span>
      </div>

      {/* 2. cts Speciality Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="flex flex-col text-right">
          <span className="text-[17px] font-sans font-extrabold tracking-tighter text-[#a80053] italic leading-none">
            cts
          </span>
          <span className="text-[7.5px] font-bold text-red-500 tracking-tight leading-none mt-0.5">Speciality Hospital</span>
        </div>
        <div className="w-6 h-6 text-[#72c043]">
          <svg className="w-full h-full text-[#72c043]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      </div>

      {/* 3. CCH Clinician-Care Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-7 h-7 bg-[#2271e8] rounded-lg flex items-center justify-center text-white font-bold text-[9px] shadow-sm">
          CCH
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold text-[#1e2022] uppercase tracking-wider leading-none">CLINICIAN-CARE</span>
          <span className="text-[7px] font-semibold text-gray-400 tracking-widest uppercase leading-none mt-0.5">— HOSPITAL —</span>
        </div>
      </div>

      {/* 4. Brains Super Speciality Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 text-[#0096cf]">
          <svg className="w-full h-full text-[#0096cf]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-serif font-extrabold text-[#0a3864] tracking-tight leading-none">BrainS</span>
          <span className="text-[6.5px] font-extrabold text-[#0096cf] uppercase tracking-widest leading-none mt-0.5">Super Speciality Hospital</span>
        </div>
      </div>

      {/* 5. Leaf Green Logo */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 bg-gradient-to-tr from-[#72c043] to-emerald-400 rounded-full flex items-center justify-center p-1 shadow-sm">
          <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
            <path d="M17 8C8 10 9 21 9 21s11-1 11-11c0-2-3-2-3-2zM9 21s-1-11 8-11" />
          </svg>
        </div>
        <span className="text-[13px] font-sans font-extrabold text-[#115d31] tracking-tight">BioGreen</span>
      </div>

      {/* 6. F.O.R. Ortho & Neuro Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center font-sans font-black text-[9px] text-[#2271e8] shadow-sm leading-none">
          F
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-sans font-black text-[#204080] tracking-tighter leading-none">F.O.R. Ortho & Neuro</span>
          <span className="text-[7px] font-semibold text-orange-500 uppercase tracking-widest mt-0.5 leading-none">Hospital & Research</span>
        </div>
      </div>

      {/* 7. HYCARE HOSPITALS */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-5 h-5 text-orange-400">
          <svg className="w-full h-full text-orange-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 22s-8-4.5-8-11.8A7.2 7.2 0 0 1 11.2 3c1.7 0 3.2.8 4.2 2a5.3 5.3 0 0 1 4.2-2 7.2 7.2 0 0 1 7.2 7.2c0 7.3-8 11.8-8 11.8z" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[13px] font-sans font-black tracking-widest text-[#006a4e] leading-none">HYCARE</span>
          <span className="text-[6.5px] font-bold text-gray-400 uppercase tracking-widest mt-0.5 leading-none">HOSPITALS</span>
        </div>
      </div>
    </>
  );

  const renderRow2Logos = () => (
    <>
      {/* 1. SRINIVAS PRIYA */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-5.5 h-5.5 text-[#2271e8]">
          <svg className="w-full h-full text-[#2271e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s2-4.5 4.5-4.5S11 8 11 10.5M19.5 16.5c1.5-1.5 2.5-3.5 2.5-6s-2-4.5-4.5-4.5S13 8 13 10.5M12 2v20" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-sans font-bold text-[#1e3a8a] tracking-wider leading-none uppercase">SRINIVAS PRIYA</span>
          <span className="text-[7.5px] text-gray-400 font-bold uppercase tracking-widest mt-0.5 leading-none">HOSPITAL</span>
        </div>
      </div>

      {/* 2. K.M. Hospitals */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <span className="font-sans italic font-black text-base text-[#1a5cbc] tracking-tight">
          K.M.Hospitals
        </span>
      </div>

      {/* 3. SUNRAY */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute w-4.5 h-4.5 rounded-full border-2 border-orange-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-sans font-black tracking-widest text-[#006699] leading-none">SUNRAY</span>
          <span className="text-[6.5px] font-bold text-gray-400 tracking-widest uppercase mt-0.5 leading-none">Global Care</span>
        </div>
      </div>

      {/* 4. State Emblem / Government Approved */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center p-0.5 bg-emerald-50">
          <svg className="w-full h-full text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8l-2 4h4l-2 4" />
          </svg>
        </div>
        <span className="text-[9px] font-sans font-black text-emerald-800 tracking-tight leading-none uppercase">Government<br />Approved</span>
      </div>

      {/* 5. ARISTO */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-5.5 h-5.5 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-sm flex items-center justify-center font-bold text-[8px] text-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
          A
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-serif italic font-black text-[#1e2022] tracking-tight leading-none uppercase">ARISTO</span>
          <span className="text-[6.5px] font-bold text-red-500 uppercase tracking-widest mt-0.5 leading-none">Speciality Hospital</span>
        </div>
      </div>

      {/* 6. DH CLINIC */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="h-5.5 w-1 bg-red-500 rounded-sm"></div>
        <div className="h-5.5 w-6 bg-[#0b1c30] flex items-center justify-center text-[9px] text-white font-extrabold rounded-sm">
          DH
        </div>
        <span className="font-sans text-[10px] font-bold tracking-widest text-[#012d5a] uppercase">
          Clinics
        </span>
      </div>

      {/* 7. NELLAI CANCER HOSPITAL */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-5.5 h-5.5 text-rose-500">
          <svg className="w-full h-full text-rose-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-sans font-extrabold text-gray-800 uppercase tracking-tight leading-none">NELLAI CANCER</span>
          <span className="text-[7px] text-red-500 font-bold tracking-widest uppercase leading-none mt-0.5">FOUNDATION</span>
        </div>
      </div>
    </>
  );

  return (
    <section className="bg-white py-14 border-b border-brand-gray-100 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Title */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#6c757d] mb-10">
          Trusted by 30+ Modern Healthcare Organizations
        </p>

        {/* Scalable hospital logo vector loop marquee with edge gradient blurring */}
        <div className="relative w-full flex flex-col gap-8 overflow-hidden" id="partners-marquee-container">
          
          {/* Subtle gradient side panels for fade-in effect to cover edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" />

          {/* Row 1 Marquee: Moving Left */}
          <div className="relative w-full overflow-hidden flex" id="marquee-row-1">
            <div className="flex animate-scroll-x" id="marquee-scroller-active-row1">
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors">
                {renderRow1Logos()}
              </div>
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors" aria-hidden="true">
                {renderRow1Logos()}
              </div>
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors" aria-hidden="true">
                {renderRow1Logos()}
              </div>
            </div>
          </div>

          {/* Row 2 Marquee: Moving Right */}
          <div className="relative w-full overflow-hidden flex" id="marquee-row-2">
            <div className="flex animate-scroll-x-reverse" id="marquee-scroller-active-row2">
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors">
                {renderRow2Logos()}
              </div>
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors" aria-hidden="true">
                {renderRow2Logos()}
              </div>
              <div className="flex items-center gap-12 text-[#222222]/80 hover:text-brand-gray-900 transition-colors" aria-hidden="true">
                {renderRow2Logos()}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
