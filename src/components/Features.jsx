import React from 'react';
import {
  QrCodeIcon,
  UsersIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      title: 'Control de Acceso QR y Manual',
      description: 'Lector ultrarrápido con cámara web y código alfanumérico. Validación instantánea del estado de membresía con resguardo de datos personales.',
      icon: QrCodeIcon,
      badge: 'En tiempo real',
    },
    {
      title: 'Gestión Completa de Socios',
      description: 'Fichas personalizadas, carga de fotos con webcam, historial de inscripciones, días restantes y credencial digital descargable en PDF.',
      icon: UsersIcon,
      badge: 'Perfil digital',
    },
    {
      title: 'Clases Grupales y Cronograma',
      description: 'Control de cupos máximos sin sobrecupos ni errores de conteo. Asignación de profesores por especialidad y calendario semanal.',
      icon: CalendarDaysIcon,
      badge: 'Cupos automáticos',
    },
    {
      title: 'Planes y Cobro de Membresías',
      description: 'Configuración flexible de planes diarios, mensuales o anuales. Notificaciones de expiración y cálculo automático de días de vigencia.',
      icon: CreditCardIcon,
      badge: 'Cero morosidad',
    },
    {
      title: 'Seguridad y Privacidad por Rol',
      description: 'Paneles independientes protegidos con cookies y middleware para Administradores y Socios. Credenciales seguras sin contraseñas expuestas.',
      icon: ShieldCheckIcon,
      badge: 'Next.js Middleware',
    },
    {
      title: 'Feedback y Encuestas de Clases',
      description: 'Permite a los alumnos calificar a sus instructores con estrellas y comentarios para garantizar la máxima calidad deportiva.',
      icon: ChatBubbleLeftRightIcon,
      badge: 'Mejora continua',
    },
  ];

  return (
    <section id="features" className="py-6 sm:py-8 md:py-14 lg:py-16 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-12">
          <p className="text-orange-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-1.5 sm:mb-2">Todo lo que tu gimnasio necesita</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Diseñado para dueños, administradores y socios
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-400 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            Una plataforma modular construida sobre arquitectura desacoplada, con el diseño distintivo negro y gradiente naranja de GoGYM.
          </p>
        </div>

        {/* Feature Cards Grid: 1 col in mobile with gap-6, 2-3 in desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="w-full bg-gray-900/70 border border-gray-800 rounded-2xl p-6 sm:p-7 hover:border-orange-500/60 transition-all duration-300 card-glow flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-800 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-gray-800 text-orange-300 border border-gray-700">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800/80 flex items-center text-xs font-semibold text-orange-400">
                  <span>Conocer más &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
