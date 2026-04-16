'use client';

import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 max-w-[80rem] mx-auto">
       <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#DDE5D3] rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden"
       >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] text-[#0F3D2E] mb-12 leading-[1.05] tracking-tight">
               Reach Out for HR Consultancy Inquiries
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="w-full sm:w-auto bg-[#0F3D2E] text-white hover:bg-[#1A1A1A] transition-all duration-300 rounded-full px-10 py-5 text-lg font-medium">
                  Contact Us
               </button>
               <button className="w-full sm:w-auto bg-transparent text-[#0F3D2E] border border-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white transition-all duration-300 rounded-full px-10 py-5 text-lg font-medium">
                  Our Services
               </button>
            </div>
          </div>
       </motion.div>
    </section>
  );
}
