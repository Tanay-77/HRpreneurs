'use client';

import { motion } from 'motion/react';

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 md:py-40 px-4 md:px-8 bg-[#0F3D2E] text-white overflow-hidden relative">
       <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#DDE5D3] rounded-full blur-[120px] opacity-20" />
       <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#1A1A1A] rounded-full blur-[120px] opacity-40" />
       
       <div className="max-w-[70rem] mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] mb-16 text-balance text-white">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
             {[
               "Banking", "E-Commerce & Retail", "Energy", 
               "Education & Learning", "FMCG’s", "Internet", "Infrastructure", 
               "Insurance", "Media & Entertainment", 
               "Pharmaceuticals, Healthcare & Life Sciences", "Publishing", 
               "Real Estate", "Technology & Telecommunications", "Textiles"
             ].map((sector, i) => (
                <motion.div 
                   key={sector}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.05, duration: 0.5 }}
                   className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-[#0F3D2E] text-lg font-medium transition-colors duration-300 backdrop-blur-md cursor-pointer tracking-wide"
                >
                  {sector}
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
