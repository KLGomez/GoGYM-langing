import React from 'react';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Pricing() {
  const plans = [
    {
      name: 'Básico Club',
      price: '$29',
      period: '/mes',
      description: 'Ideal para gimnasios de barrio, estudios de yoga o boxes en crecimiento.',
      features: [
        'Hasta 150 socios activos',
        'Check-In por código manual y QR',
        'Gestión de clases y profesores',
        'Carnet digital descargable',
        'Soporte por correo electrónico',
      ],
      cta: 'Elegir Plan Básico',
      featured: false,
    },
    {
      name: 'GoGYM Pro + AI',
      price: '$59',
      period: '/mes',
      badge: 'MÁS POPULAR',
      description: 'Potencia total para gimnasios modernos que buscan automatizar la gestión diaria.',
      features: [
        'Socios ilimitados',
        'Asistente GYMY AI integrado 24/7',
        'Predicción de cuotas y retención de socios',
        'Terminal de check-in en pantalla completa',
        'Optimización automática de aforo y horarios',
        'Soporte prioritario por WhatsApp',
      ],
      cta: 'Probar GoGYM Pro Gratis',
      featured: true,
    },
    {
      name: 'Cadena / Franquicia',
      price: '$119',
      period: '/mes',
      description: 'Para centros con múltiples sucursales o cadenas de entrenamiento funcional.',
      features: [
        'Múltiples sucursales y franquicias',
        'GYMY AI multi-sucursal con análisis comparativo',
        'Roles avanzados y auditoría de accesos',
        'Integración con torniquetes y molinetes físicos',
        'Capacitación y onboarding personalizado',
      ],
      cta: 'Contactar a Ventas',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-10 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16">
          <p className="text-orange-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-1.5 sm:mb-2">Precios transparentes</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Planes adaptados al tamaño de tu club
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-400 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            Sin contratos forzados ni cargos ocultos. Cambiá o cancelá tu suscripción cuando quieras.
          </p>
        </div>

        {/* Pricing cards: stack vertically in mobile (flex-col) and 3 cols in desktop (lg:grid) */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-md lg:max-w-none mx-auto w-full">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                p.featured
                  ? 'bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-orange-500 shadow-2xl ai-glow scale-100 lg:scale-105 z-10'
                  : 'bg-gray-950 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-black font-extrabold text-[11px] sm:text-xs tracking-wider px-3.5 sm:px-4 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  {p.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm min-h-0 sm:min-h-[40px] mb-5 sm:mb-6">{p.description}</p>

                <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">{p.price}</span>
                  <span className="text-gray-400 font-medium text-sm sm:text-base">{p.period}</span>
                </div>

                <div className="space-y-3 sm:space-y-3.5 pt-4 border-t border-gray-800">
                  {p.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <a
                  href="#contact"
                  className={`block text-center w-full py-3 sm:py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    p.featured
                      ? 'bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-black hover:opacity-95 shadow-lg shadow-orange-500/20 transform hover:scale-105'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
