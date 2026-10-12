'use client';

import React, { useState } from 'react';
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gymName: '',
    gymSize: '50-200',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-6 sm:py-8 md:py-14 lg:py-16 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Info column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <p className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-2">Comenzá hoy</p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Llevá tu gimnasio al próximo nivel.
              </h2>
              <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                Dejanos tus datos y un especialista te configurará un entorno de prueba gratuito de GoGYM con <strong>GYMY AI activado</strong> para tu gimnasio.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start sm:items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="break-all sm:break-normal">contacto@gogym.com</span>
              </div>
              <div className="flex items-start sm:items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>+54 11 5555-GOGYM (46496)</span>
              </div>
              <div className="flex items-start sm:items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>Buenos Aires, Argentina (Servicio Global)</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-900 border border-gray-800">
              <p className="text-xs uppercase font-bold text-orange-400 tracking-wider mb-1">Garantía GoGYM</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Migramos tus planillas de socios existentes a la base de datos de GoGYM sin costo en tu primer mes.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-10 sm:py-12 space-y-4">
                  <CheckCircleIcon className="w-14 h-14 sm:w-16 sm:h-16 text-green-400 mx-auto" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">¡Solicitud recibida con éxito!</h3>
                  <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Gracias {formData.name}. Un asesor se pondrá en contacto dentro de las próximas 2 horas para habilitar tu demo con GYMY AI.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-gray-800 text-orange-400 font-semibold text-xs sm:text-sm hover:bg-gray-700"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 sm:mb-2">
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan Pérez"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 text-base sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 sm:mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@gimnasio.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 text-base sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 sm:mb-2">
                        Nombre del Gimnasio
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.gymName}
                        onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                        placeholder="Titan Fitness Club"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 text-base sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 sm:mb-2">
                        Cantidad Estimada de Socios
                      </label>
                      <select
                        value={formData.gymSize}
                        onChange={(e) => setFormData({ ...formData, gymSize: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 text-base sm:text-sm"
                      >
                        <option value="1-50">Menos de 50 socios</option>
                        <option value="50-200">50 a 200 socios</option>
                        <option value="200-500">200 a 500 socios</option>
                        <option value="500+">Más de 500 socios (Múltiples sedes)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 sm:mb-2">
                      ¿Qué te gustaría automatizar primero?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ej: Quiero implementar el control por QR y probar el asistente GYMY AI para recuperar cuotas vencidas..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black border border-gray-700 text-white focus:outline-none focus:border-orange-500 text-base sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.01]"
                  >
                    <PaperAirplaneIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Solicitar Prueba Gratuita y Demo</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
