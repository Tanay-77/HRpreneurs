'use client';

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 pt-6 ${isScrolled ? 'pt-4' : ''
          }`}
      >
        <div className={`max-w-[70rem] mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 py-4 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border border-white/20' : 'bg-transparent'
          }`}>
          <div className="flex items-center gap-2 relative z-10">
            <Link href="/" className="cursor-pointer">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#0F3D2E]">HRpreneurs</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-[#1A1A1A] hover:text-[#0F3D2E] transition-colors">Home</Link>
            <Link href="/#services" className="text-[#1A1A1A] hover:text-[#0F3D2E] transition-colors">Services</Link>
            <Link href="/about" className="text-[#1A1A1A] hover:text-[#0F3D2E] transition-colors">About</Link>
            <Link href="/#sectors" className="text-[#1A1A1A] hover:text-[#0F3D2E] transition-colors">Sectors</Link>
            <Link href="/#contact" className="text-[#1A1A1A] hover:text-[#0F3D2E] transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:block relative z-10">
            <button className="bg-[#0F3D2E] text-white hover:bg-[#1A1A1A] transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-medium">
              Get Started
            </button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-[#1A1A1A] relative z-10">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-40 bg-[#F5F3EF] pt-32 px-6 lg:hidden flex flex-col"
        >
          <div className="flex flex-col gap-6 text-3xl font-serif">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/#sectors" onClick={() => setIsMobileMenuOpen(false)}>Sectors</Link>
            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            <button className="bg-[#0F3D2E] text-white rounded-full px-8 py-4 text-lg font-sans font-medium mt-8 w-max">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
