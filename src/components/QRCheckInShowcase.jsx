import React from 'react';
import {
  QrCodeIcon,
  CameraIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

export default function QRCheckInShowcase() {
  return (
    <section id="qr-checkin" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left explanation */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
              Terminal de Entrada
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Ingreso sin filas, demoras ni contacto físico.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              El socio abre la app en su teléfono o presenta su carnet PDF impreso. La cámara del gimnasio valida su estado en milisegundos y confirma el acceso en pantalla.
            </p>

            <ul className="space-y-3.5 text-sm sm:text-base text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>Escaneo en tiempo real con lector ZXing optimizado y soporte para cualquier cámara web o tablet.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>Bloqueo inmediato de socios con cuota vencida o plan inexistente.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>Resguardo estricto de privacidad: solo se exhibe el nombre e inicial en el monitor público.</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#demo"
                className="px-6 py-3 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-95 shadow-md shadow-orange-500/20"
              >
                Ver Demostración en Vivo
              </a>
            </div>
          </div>

          {/* Right Visual Terminal Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-gray-900 border-2 border-gray-800 rounded-3xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-gray-400">terminal-checkin-gogym</span>
              </div>

              {/* Simulated Screen */}
              <div className="mt-5 space-y-4">
                <div className="bg-black rounded-2xl p-6 border border-gray-800 text-center relative overflow-hidden">
                  <div className="absolute inset-x-8 top-10 border border-orange-500/60 border-dashed h-40 rounded-xl animate-pulse" />
                  <div className="w-24 h-24 mx-auto bg-gray-900 rounded-xl flex items-center justify-center my-6 border border-orange-400/40">
                    <QrCodeIcon className="w-14 h-14 text-orange-400" />
                  </div>
                  <p className="text-xs text-orange-400 font-semibold tracking-wide">CÁMARA ACTIVA • ENFOCÁ TU QR</p>
                </div>

                {/* Simulated Success Alert Card */}
                <div className="bg-gray-800/90 border border-green-500/50 rounded-2xl p-4 flex items-center gap-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white">Ana L.</p>
                      <span className="text-[10px] bg-green-950 text-green-400 font-bold px-2 py-0.5 rounded border border-green-700">ACTIVA</span>
                    </div>
                    <p className="text-xs text-gray-400">Plan Premium • 45 días restantes</p>
                    <p className="text-[11px] text-green-400 font-semibold mt-0.5">¡Bienvenida a GoGYM!</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
