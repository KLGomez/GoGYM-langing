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
      icon: BellAlertIcon,
      query: '¿Qué socios tienen su plan por vencer en los próximos 3 días?',
      response:
        'Detecté 12 socios con planes por vencer. Se han programado 12 recordatorios automáticos por WhatsApp y correo para renovar su cuota antes de expirar.',
      benefit: 'Disminuye la tasa de abandono hasta un 35% automatizando la cobranza preventiva.',
    },
    {
      id: 'aforo',
      title: 'Optimización de Horarios y Aforo',
      icon: ClockIcon,
      query: '¿Cuáles son las clases con sobredemanda este mes?',
      response:
        'Las clases de Spinning (Martes 19:00) y Funcional (Jueves 18:00) superaron el 95% de capacidad con lista de espera de 8 alumnos. Te sugiero abrir un turno extra a las 20:00.',
      benefit: 'Aprovecha al máximo los metros cuadrados y los instructores disponibles.',
    },
    {
      id: 'asistencias',
      title: 'Resumen Diario de Asistencia',
      icon: DocumentChartBarIcon,
      query: 'Dame el resumen de ingresos y check-ins de hoy.',
      response:
        'Hoy ingresaron 142 socios: 128 mediante QR móvil y 14 manuales. 3 intentaron ingresar con membresía vencida y fueron derivados a recepción.',
      benefit: 'Auditoría en tiempo real sin tener que revisar reportes manuales.',
    },
    {
      id: 'profesores',
      title: 'Asignación de Entrenadores',
      icon: BoltIcon,
      query: '¿Qué profesor puede reemplazar la clase de Yoga de mañana?',
      response:
        'María Pérez tiene día libre y no supera las 20 hs semanales. ¿Querés que le envíe la solicitud de reemplazo con confirmación directa?',
      benefit: 'Resolución de imprevistos del equipo técnico en segundos.',
    },
  ];

  const currentCap = capabilities.find(c => c.id === activeTab) || capabilities[0];

  return (
    <section id="gymy-ai" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <SparklesIcon className="w-4 h-4 text-orange-400" />
            INTELIGENCIA ARTIFICIAL PARA GESTIÓN DEPORTIVA
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Conocé a <span className="text-gradient">GYMY AI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Tu co-piloto 24/7. GYMY AI analiza el flujo de socios, clases, cobros y profesores para darte respuestas exactas y tomar acción inmediata.
          </p>
        </div>

        {/* Interactive Showcase Box */}
        <div className="bg-gray-900/90 border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl ai-glow max-w-5xl mx-auto">
          
          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pb-6 border-b border-gray-800">
            {capabilities.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-black shadow-md'
                      : 'bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Chat Mockup */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Chat conversation */}
            <div className="lg:col-span-7 bg-black/80 rounded-2xl p-5 border border-gray-800 space-y-4">
              
              {/* Header simulator */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                  <span className="font-semibold text-white">GYMY AI Assistant</span>
                </div>
                <span>En línea • Modelo v2.4</span>
              </div>

              {/* Admin Query */}
              <div className="flex justify-end">
                <div className="bg-gray-800 text-gray-200 text-sm py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%] border border-gray-700">
                  <p className="font-medium text-xs text-orange-400 mb-1">Administrador</p>
                  <p>{currentCap.query}</p>
                </div>
              </div>

              {/* GYMY AI Response */}
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 text-sm py-3 px-4 rounded-2xl rounded-tl-sm max-w-[90%] border border-orange-500/30 shadow-lg">
                  <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold mb-1">
                    <SparklesIcon className="w-4 h-4 text-orange-400" />
                    <span>GYMY AI</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">{currentCap.response}</p>
                </div>
              </div>

            </div>

            {/* Benefit and action */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700/60">
                <h4 className="text-sm uppercase font-bold tracking-wider text-orange-400 mb-2">Impacto en el negocio</h4>
                <p className="text-gray-200 text-base leading-snug">{currentCap.benefit}</p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-gray-800 text-xs text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold">✓</span> Compatible con WhatsApp Business y Correo
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold">✓</span> Respuestas en lenguaje natural en menos de 2 segundos
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold">✓</span> Privacidad absoluta con datos locales y seguros
                </p>
              </div>

              <a
                href="#contact"
                className="block text-center w-full py-3.5 px-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
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
