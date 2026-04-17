'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 max-w-[80rem] mx-auto">
       <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#DDE5D3] rounded-[32px] p-8 md:p-16 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-16"
       >
          <div className="relative z-10 lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#0F3D2E] mb-8 leading-[1.05] tracking-tight">
               Stay Connected
            </h2>
            <p className="text-[#0F3D2E]/80 text-lg mb-12 max-w-md">
               Whether you have an inquiry, are looking for HR services, or want to join our team—we would love to hear from you.
            </p>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-[#0F3D2E]">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h4 className="font-serif text-xl text-[#0F3D2E] mb-1">Office Address</h4>
                     <p className="text-[#0F3D2E]/80 max-w-xs">93 East Building, 705, Mahakali Caves Road, Near Onida, Andheri East, Mumbai 400093.</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-[#0F3D2E]">
                     <Phone size={24} />
                  </div>
                  <div>
                     <h4 className="font-serif text-xl text-[#0F3D2E] mb-1">Phone</h4>
                     <p className="text-[#0F3D2E]/80">99870 97792</p>
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-[#0F3D2E]">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h4 className="font-serif text-xl text-[#0F3D2E] mb-1">Email Inquiry</h4>
                     <a href="mailto:info@hrpreneurs.com" className="text-[#0F3D2E]/80 hover:text-[#0F3D2E]">info@hrpreneurs.com</a>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative z-10 lg:w-1/2 flex flex-col justify-center">
             <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-white/40">
                <h3 className="font-serif text-3xl text-[#1A1A1A] mb-8">Careers & Internships</h3>
                
                <div className="space-y-8">
                   <div className="flex gap-4">
                      <div className="shrink-0 mt-1 text-[#0F3D2E]">
                         <Briefcase size={24} />
                      </div>
                      <div>
                         <h4 className="font-serif text-lg text-[#1A1A1A] mb-2">Find a Job</h4>
                         <p className="text-sm text-[#6B6B6B] mb-2">
                           Please write to us with a letter of interest showcasing your educational qualifications and future career path.
                         </p>
                         <a href="mailto:jobs@hrpreneurs.com" className="text-[#0F3D2E] font-medium hover:underline">jobs@hrpreneurs.com</a>
                      </div>
                   </div>

                   <hr className="border-black/5" />

                   <div className="flex gap-4">
                      <div className="shrink-0 mt-1 text-[#0F3D2E]">
                         <GraduationCap size={24} />
                      </div>
                      <div>
                         <h4 className="font-serif text-lg text-[#1A1A1A] mb-2">Internships</h4>
                         <p className="text-sm text-[#6B6B6B] mb-2">
                           Please write to us with your educational qualifications and goals for an internship opportunity.
                         </p>
                         <a href="mailto:hr@hrpreneurs.com" className="text-[#0F3D2E] font-medium hover:underline">hr@hrpreneurs.com</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </motion.div>
    </section>
  );
}
