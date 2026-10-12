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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-white">Go</span>
              <span className="text-[#ff914d] group-hover:text-[#ff3131] transition-colors">GYM</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-black">
              PRO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#demo"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gray-900 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer"
            >
              Probar Demo
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-lg shadow-orange-500/20 transition-all cursor-pointer transform hover:scale-105"
            >
              Comenzar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#ff914d] py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg font-semibold text-sm text-white bg-gray-900 border border-gray-700"
            >
              Probar Demo
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg font-semibold text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d]"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
