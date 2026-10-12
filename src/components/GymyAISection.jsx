'use client';

import React, { useState } from 'react';
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  ClockIcon,
  BellAlertIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline';

export default function GymyAISection() {
  const [activeTab, setActiveTab] = useState('vencimientos');

  const capabilities = [
    {
      id: 'vencimientos',
      title: 'Predicción de Vencimientos',
      shortTitle: 'Vencimientos',
      icon: BellAlertIcon,
      query: '¿Qué socios tienen su plan por vencer en los próximos 3 días?',
      response:
        'Detecté 12 socios con planes por vencer. Se han programado 12 recordatorios automáticos por WhatsApp y correo para renovar su cuota antes de expirar.',
      benefit: 'Disminuye la tasa de abandono hasta un 35% automatizando la cobranza preventiva.',
    },
    {
      id: 'aforo',
      title: 'Optimización de Horarios y Aforo',
      shortTitle: 'Aforo y Horarios',
      icon: ClockIcon,
      query: '¿Cuáles son las clases con sobredemanda este mes?',
      response:
        'Las clases de Spinning (Martes 19:00) y Funcional (Jueves 18:00) superaron el 95% de capacidad con lista de espera de 8 alumnos. Te sugiero abrir un turno extra a las 20:00.',
      benefit: 'Aprovecha al máximo los metros cuadrados y los instructores disponibles.',
    },
    {
      id: 'asistencias',
      title: 'Resumen Diario de Asistencia',
      shortTitle: 'Asistencias',
      icon: DocumentChartBarIcon,
      query: 'Dame el resumen de ingresos y check-ins de hoy.',
      response:
        'Hoy ingresaron 142 socios: 128 mediante QR móvil y 14 manuales. 3 intentaron ingresar con membresía vencida y fueron derivados a recepción.',
      benefit: 'Auditoría en tiempo real sin tener que revisar reportes manuales.',
    },
    {
      id: 'profesores',
      title: 'Asignación de Entrenadores',
      shortTitle: 'Entrenadores',
      icon: BoltIcon,
      query: '¿Qué profesor puede reemplazar la clase de Yoga de mañana?',
      response:
        'María Pérez tiene día libre y no supera las 20 hs semanales. ¿Querés que le envíe la solicitud de reemplazo con confirmación directa?',
      benefit: 'Resolución de imprevistos del equipo técnico en segundos.',
    },
  ];

  const currentCap = capabilities.find(c => c.id === activeTab) || capabilities[0];

  return (
    <section id="gymy-ai" className="py-12 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[400px] md:w-[800px] md:h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] sm:text-xs font-semibold mb-2.5 sm:mb-4 max-w-full text-center">
            <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">INTELIGENCIA ARTIFICIAL PARA GESTIÓN DEPORTIVA</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Conocé a <span className="text-gradient">GYMY AI</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-400 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            Tu co-piloto 24/7. GYMY AI analiza el flujo de socios, clases, cobros y profesores para darte respuestas exactas y tomar acción inmediata.
          </p>
        </div>

        {/* Interactive Showcase Box */}
        <div className="bg-gray-900/90 border border-gray-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-10 shadow-2xl ai-glow max-w-5xl mx-auto">
          
          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 pb-4 sm:pb-6 border-b border-gray-800">
            {capabilities.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-black shadow-md'
                      : 'bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate hidden sm:inline">{tab.title}</span>
                  <span className="truncate inline sm:hidden">{tab.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Chat Mockup */}
          <div className="mt-5 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Chat conversation */}
            <div className="lg:col-span-7 bg-black/80 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-gray-800 space-y-3 sm:space-y-4">
              
              {/* Header simulator */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gray-800 text-[10px] sm:text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500 animate-ping" />
                  <span className="font-semibold text-white">GYMY AI Assistant</span>
                </div>
                <span>En línea • Modelo v2.4</span>
              </div>

              {/* Admin Query */}
              <div className="flex justify-end">
                <div className="bg-gray-800 text-gray-200 text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4 rounded-2xl rounded-tr-sm max-w-[90%] sm:max-w-[85%] border border-gray-700">
                  <p className="font-medium text-[10px] sm:text-xs text-orange-400 mb-0.5 sm:mb-1">Administrador</p>
                  <p className="leading-relaxed">{currentCap.query}</p>
                </div>
              </div>

              {/* GYMY AI Response */}
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-2xl rounded-tl-sm max-w-[95%] sm:max-w-[90%] border border-orange-500/30 shadow-lg">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-orange-400 font-bold mb-0.5 sm:mb-1">
                    <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                    <span>GYMY AI</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{currentCap.response}</p>
                </div>
              </div>

            </div>

            {/* Benefit and action */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-5">
              <div className="bg-gray-800/70 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/60">
                <h4 className="text-xs sm:text-sm uppercase font-bold tracking-wider text-orange-400 mb-1 sm:mb-2">Impacto en el negocio</h4>
                <p className="text-gray-200 text-xs sm:text-base leading-snug">{currentCap.benefit}</p>
              </div>

              <div className="hidden sm:block p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/40 border border-gray-800 text-xs text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span> Compatible con WhatsApp Business y Correo
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span> Respuestas en lenguaje natural en menos de 2 segundos
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span> Privacidad absoluta con datos locales y seguros
                </p>
              </div>

              <a
                href="#contact"
                className="block text-center w-full py-3 sm:py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                Solicitar Demostración de GYMY AI
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
