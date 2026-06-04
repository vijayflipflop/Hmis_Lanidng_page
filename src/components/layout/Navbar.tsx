/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Logo({ isDark = false }: { isDark?: boolean }) {
  const primaryColorClass = isDark ? "text-[#3a86ff]" : "text-[#2271e8]";
  const secondaryColorClass = "text-[#72c043]";
  const sloganColorClass = isDark ? "text-gray-400" : "text-[#6c757d]";

  return (
    <div className="flex items-center gap-2" id="nav-logo">
      {/* Complete Vector Logo matching design tokens and aesthetics */}
      <div className="flex flex-col gap-0.5 select-none animate-fade-in">
        <div className="flex items-center gap-2.5">
          {/* Cloud outline with "Hm" inside and heartbeat pulse */}
          <div className="relative flex items-center justify-center w-10 h-10 overflow-visible">
            {/* Cloud path */}
            <svg viewBox="0 0 100 80" className={`absolute inset-0 w-full h-full fill-none ${isDark ? 'stroke-white/70' : 'stroke-gray-400'} stroke-[6] stroke-linecap-round stroke-linejoin-round`} aria-hidden="true">
              <path d="M25,50 C10,50 10,35 25,35 C20,15 45,10 55,25 C65,10 90,15 85,35 C95,35 95,50 80,50 Z" />
            </svg>
            {/* Heartbeat pulse line */}
            <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full fill-none" aria-hidden="true">
              <path d="M22 46 h12 l4 -12 l5 20 l4 -14 l3 6 h12" stroke="#72c043" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* "Hm" nested inside the cloud on bottom left area nicely */}
            <div className="absolute bottom-[13px] left-[17px] flex items-center justify-center font-sans font-black text-[9.5px] tracking-tighter leading-none">
              <span className={primaryColorClass}>H</span>
              <span className={secondaryColorClass}>M</span>
            </div>
          </div>

          {/* Lettering: Healthmed */}
          <div className="flex flex-col">
            <div className="text-[21px] font-sans font-extrabold tracking-tight leading-none flex items-baseline">
              <span className={primaryColorClass}>Health</span>
              <span className={secondaryColorClass}>med</span>
            </div>
            <span className={`text-[7.5px] font-semibold tracking-wider ${sloganColorClass} leading-[1] uppercase mt-[3px]`} style={{ letterSpacing: '0.4px' }}>
              Quality Care Simplified by Technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo container */}
          <div className="flex-shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Navigation Links (Centered perfectly) */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? 'text-brand-blue-500 hover:text-brand-blue-600 font-semibold'
                    : 'text-brand-gray-600 hover:text-brand-black'
                }`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#book-a-call"
              className="px-5 py-2.5 bg-brand-black hover:bg-brand-gray-800 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-sm shadow-[#191c1f]/10 hover:shadow-md"
              id="nav-btn-book"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="nav-btn-mobile-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" id="icon-close" /> : <Menu className="h-6 w-6" id="icon-menu" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  link.active
                    ? 'bg-brand-blue-50 text-brand-blue-500 font-semibold'
                    : 'text-brand-gray-600 hover:bg-brand-gray-50 hover:text-brand-black'
                }`}
                id={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-brand-gray-100 px-3">
              <a
                href="#book-a-call"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-brand-black hover:bg-brand-gray-800 text-white font-medium rounded-lg shadow-sm"
                id="mobile-nav-btn-book"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
