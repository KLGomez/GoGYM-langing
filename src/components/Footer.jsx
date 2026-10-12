import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Go</span>
              <span className="text-[#ff914d]">GYM</span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Plataforma tecnológica desacoplada para gestión de gimnasios y centros de acondicionamiento físico. 
              Impulsada por <strong>GYMY AI</strong> para potenciar las decisiones administrativas.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Producto</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-orange-400">Características</a></li>
              <li><a href="#gymy-ai" className="hover:text-orange-400">GYMY AI Assistant</a></li>
              <li><a href="#qr-checkin" className="hover:text-orange-400">Terminal QR</a></li>
              <li><a href="#pricing" className="hover:text-orange-400">Planes y Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal y Empresa</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#contact" className="hover:text-orange-400">Soporte y Contacto</a></li>
              <li><a href="#" className="hover:text-orange-400">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacidad de Datos</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GoGYM. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Diseñado con la estética oficial GoGYM (Negro + Gradiente Naranja).</p>
        </div>
      </div>
    </footer>
  );
}
