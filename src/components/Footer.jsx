import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Go</span>
              <span className="text-[#ff914d]">GYM</span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Plataforma tecnológica desacoplada para gestión de gimnasios y centros de acondicionamiento físico. 
              Impulsada por <strong>GYMY AI</strong> para potenciar las decisiones administrativas.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-3">Producto</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Características</a></li>
              <li><a href="#gymy-ai" className="hover:text-orange-400 transition-colors">GYMY AI Assistant</a></li>
              <li><a href="#qr-checkin" className="hover:text-orange-400 transition-colors">Terminal QR</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Planes y Precios</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs sm:text-sm mb-3">Legal y Empresa</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Soporte y Contacto</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacidad de Datos</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 sm:gap-0 text-center sm:text-left">
          <p>© {new Date().getFullYear()} GoGYM. Todos los derechos reservados.</p>
          <p>Diseñado con la estética oficial GoGYM (Negro + Gradiente Naranja).</p>
        </div>
      </div>
    </footer>
  );
}
