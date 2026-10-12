import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GymyAISection from '@/components/GymyAISection';
import Features from '@/components/Features';
import QRCheckInShowcase from '@/components/QRCheckInShowcase';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      <Navbar />
      <Hero />
      <GymyAISection />
      <Features />
      <QRCheckInShowcase />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
