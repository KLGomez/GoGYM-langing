import React from 'react';
import {
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[450px] bg-gradient-to-tr from-[#ff3131]/20 via-[#ff914d]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-0 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge GYMY AI */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-gray-900 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 hover:border-orange-500 transition-colors max-w-full">
          <SparklesIcon className="w-4 h-4 text-orange-400 animate-spin flex-shrink-0" style={{ animationDuration: '6s' }} />
          <span className="truncate sm:whitespace-normal">Presentamos GYMY AI: Tu Asistente Inteligente</span>
          <span className="bg-orange-500 text-black text-[10px] font-bold px-1.5 py-0.5 sm:px-2 rounded-full ml-0.5 sm:ml-1 flex-shrink-0">NUEVO</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
          La gestión de tu gimnasio, <br className="hidden sm:inline" />
          <span className="text-gradient">más ágil, visual e inteligente.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-400 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed">
          Centralizá socios, clases grupales, cobros de membresías y control de acceso por QR. 
          Dejá las tareas manuales en manos de <strong>GYMY AI</strong> y multiplicá la rentabilidad de tu club.
        </p>

        {/* CTA Group */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-xl shadow-orange-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            Comenzar Prueba Gratuita
            <ArrowRightIcon className="w-5 h-5 flex-shrink-0" />
          </a>
          <a
            href="#gymy-ai"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gray-900 border border-gray-700 hover:border-orange-400 hover:bg-gray-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <SparklesIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
            Conocer a GYMY AI
          </a>
        </div>

        {/* Metrics Trust Bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-gray-800/80 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 max-w-4xl mx-auto text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-orange-400">99.8%</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Check-ins QR Exitosos</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">4x</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Más Rápido que Planillas</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-orange-400">+50</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Horas Ahorradas con IA</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Diseñado para Gimnasios</p>
          </div>
        </div>

      </div>
    </section>
  );
}
