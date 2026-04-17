'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-40 md:pt-48 pb-16 md:pb-24 px-4 md:px-8 max-w-[80rem] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0F3D2E]/20 bg-[#0F3D2E]/5 text-[#0F3D2E] text-xs font-semibold tracking-[0.1em] uppercase mb-8">
          HR Consulting Firm
        </div>
        <h1 className="font-serif text-[44px] md:text-6xl lg:text-[72px] leading-[1.05] text-balance mb-8 text-[#1A1A1A]">
          Building Strong Organizations Through People, Process, and Performance
        </h1>
        <p className="text-[#6B6B6B] text-lg lg:text-xl leading-[1.6] max-w-[480px] mb-12 font-light">
          We provide personalized solutions to help organizations build capable teams, compliant systems, and future-ready leadership.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-[#0F3D2E] text-white hover:bg-[#1A1A1A] transition-all duration-300 rounded-full px-8 py-4 font-medium flex items-center gap-2">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-all duration-300 rounded-full px-8 py-4 font-medium">
            Our Services
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full aspect-square md:aspect-auto md:h-[600px] lg:h-[700px] flex items-center justify-center p-2"
      >
        <div className="absolute inset-0  rounded-[40px] transform rotate-3 origin-center opacity-40 -z-10" />

        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
          {/* Top Left */}
          <div className="relative w-full h-full rounded-bl-[45%] rounded-tl-3xl rounded-tr-md rounded-br-none overflow-hidden shadow-sm bg-white/50">
            <div className="absolute top-0 left-0 w-[calc(200%+8px)] h-[calc(200%+8px)]">
              <Image src="/image2.png" alt="Hero 1" fill className="object-cover" referrerPolicy="no-referrer" priority />
            </div>
          </div>

          {/* Top Right */}
          <div className="relative w-full h-full rounded-br-[45%] rounded-tl-md rounded-br-3xl rounded-bl-none overflow-hidden shadow-sm bg-white/50">
            <div className="absolute top-0 right-0 w-[calc(200%+8px)] h-[calc(200%+8px)]">
              <Image src="/image2.png" alt="Hero 2" fill className="object-cover" referrerPolicy="no-referrer" priority />
            </div>
          </div>

          {/* Bottom Left */}
          <div className="relative w-full h-full rounded-tl-[45%] rounded-bl-3xl rounded-br-md rounded-tr-none overflow-hidden shadow-sm bg-white/50">
            <div className="absolute bottom-0 left-0 w-[calc(200%+8px)] h-[calc(200%+8px)]">
              <Image src="/image2.png" alt="Hero 3" fill className="object-cover" referrerPolicy="no-referrer" priority />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="relative w-full h-full rounded-tr-[45%] rounded-br-md rounded-bl-3xl rounded-tl-none overflow-hidden shadow-sm bg-white/50">
            <div className="absolute bottom-0 right-0 w-[calc(200%+8px)] h-[calc(200%+8px)]">
              <Image src="/image2.png" alt="Hero 4" fill className="object-cover" referrerPolicy="no-referrer" priority />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
