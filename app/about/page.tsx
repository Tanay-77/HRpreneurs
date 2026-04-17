import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPreview from '@/components/AboutPreview';

export const metadata = {
  title: 'About Us | HRpreneurs',
  description: 'Learn more about HRpreneurs and our mission to provide end-to-end HR solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen relative pb-0 bg-[#F5F3EF] flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-12 flex flex-col items-center justify-center">
        <AboutPreview />
      </div>

      <Footer />
    </main>
  );
}
