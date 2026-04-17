'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8 max-w-[80rem] mx-auto">
       <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative h-[500px] lg:h-[800px] w-full rounded-[24px] overflow-hidden">
             <Image src="https://picsum.photos/seed/office-hr-vibe/800/1200" alt="Office vibe" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A] mb-12 text-balance leading-tight">Why Choose Us</h2>
            <div className="space-y-6">
               {[
                 "Customized End-to-End practical, execution driven solutions",
                 "Experienced, Hands-On Support with dedicated SPOC/ relationship managers",
                 "Long-term partnership mindset",
                 "Strong Governance & Compliance focus",
                 "Flexible Engagement Models"
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group flex gap-6 items-start py-6 border-b border-[#1A1A1A]/10 hover:border-[#0F3D2E] transition-colors"
                  >
                     <div className="w-8 h-8 rounded-full bg-[#DDE5D3] text-[#0F3D2E] flex justify-center items-center shrink-0 mt-1 transition-colors group-hover:bg-[#0F3D2E] group-hover:text-white">
                        <CheckCircle2 size={16} strokeWidth={3} />
                     </div>
                     <span className="font-medium text-2xl text-[#1A1A1A]">{item}</span>
                  </motion.div>
               ))}
            </div>
          </div>
       </div>
    </section>
  );
}
