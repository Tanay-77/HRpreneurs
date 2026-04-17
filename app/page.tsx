import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Sectors from '@/components/Sectors';
import Founder from '@/components/Founder';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative pb-0">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <Sectors />
      <Founder />
      <CTA />
      <Footer />
    </main>
  );
}
