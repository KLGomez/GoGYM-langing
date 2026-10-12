import './globals.css';

export const metadata = {
  title: 'GoGYM - Gestión Inteligente de Gimnasios con GYMY AI',
  description: 'La plataforma definitiva de control de acceso, clases, membresías y automatización potenciada por GYMY AI para administradores de gimnasios.',
  keywords: ['gimnasio', 'software de gimnasio', 'GYMY AI', 'control de acceso', 'check-in QR', 'gestion deportiva'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark bg-black">
      <body className="bg-black text-white antialiased min-h-screen selection:bg-orange-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
