'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Características', href: '#features' },
    { name: 'GYMY AI', href: '#gymy-ai', highlight: true },
    { name: 'Planes', href: '#pricing' },
    { name: 'Control QR', href: '#qr-checkin' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-white">Go</span>
              <span className="text-[#ff914d] group-hover:text-[#ff3131] transition-colors">GYM</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-black">
              PRO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#ff914d] flex items-center gap-1.5 ${
                  item.highlight
                    ? 'text-orange-400 font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {item.highlight && <SparklesIcon className="w-4 h-4 text-orange-400 animate-pulse" />}
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions: CTA Buttons (visible on all screens, organized for mobile) & Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-4">
            <a
              href="https://somosgogym.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 sm:px-3.5 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm text-white bg-gray-900 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="hidden sm:inline">Probar </span>Demo
            </a>
            <a
              href="#contact"
              className="px-2.5 sm:px-3.5 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-md shadow-orange-500/20 transition-all cursor-pointer whitespace-nowrap transform hover:scale-105"
            >
              Comenzar<span className="hidden sm:inline"> Ahora</span>
            </a>

            {/* Mobile menu hamburger button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white p-1 sm:p-1.5 rounded-lg hover:bg-gray-900 transition-colors"
                aria-label="Abrir menú"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7" /> : <Bars3Icon className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2 text-base font-medium py-2 transition-colors ${
                item.highlight
                  ? 'text-orange-400 font-semibold'
                  : 'text-gray-200 hover:text-[#ff914d]'
              }`}
            >
              {item.highlight && <SparklesIcon className="w-4 h-4 text-orange-400 animate-pulse" />}
              {item.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href="https://somosgogym.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-semibold text-sm text-white bg-gray-900 border border-gray-700"
            >
              Probar Demo
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d]"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
