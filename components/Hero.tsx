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
          Building Strong Organizations with Expert HR Consultancy
        </h1>
        <p className="text-[#6B6B6B] text-lg lg:text-xl leading-[1.6] max-w-[480px] mb-12 font-light">
          We help businesses build structured, compliant, and future-ready workforces through practical HR solutions across the entire employee lifecycle.
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
        className="relative h-[550px] lg:h-[700px] w-full flex flex-col gap-6"
      >
        <div className="absolute inset-0 bg-[#DDE5D3] rounded-[32px] transform rotate-3 origin-bottom-right opacity-40 -z-10" />
        <div className="relative h-[65%] w-full rounded-[24px] overflow-hidden shadow-xl">
           <Image src="https://picsum.photos/seed/workspace-hr/800/600" alt="Consulting discussion" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative h-[35%] w-[85%] self-end rounded-[24px] overflow-hidden shadow-lg border-4 border-[#F5F3EF] -mt-10 lg:-mt-16 z-10">
           <Image src="https://picsum.photos/seed/team-hr/600/400" alt="Team meeting" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </motion.div>
    </section>
  );
}
