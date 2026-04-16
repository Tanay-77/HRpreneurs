'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, CheckSquare, LineChart, Briefcase } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 px-4 md:px-8 bg-white">
      <div className="max-w-[80rem] mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A]">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1 */}
          <motion.div 
             whileHover={{ y: -8 }}
             className="group relative bg-[#F9F9F9] rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-transparent hover:border-[#DDE5D3]"
          >
            <div className="z-10 mb-12">
              <div className="w-16 h-16 rounded-[16px] bg-[#DDE5D3] flex items-center justify-center text-[#0F3D2E] mb-8">
                <Briefcase size={28} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6 tracking-tight">Talent Management</h3>
              <p className="text-[#6B6B6B] leading-[1.6] text-lg font-light">Recruitment, onboarding, performance management, and employee lifecycle solutions to build strong teams.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/recruitment-card/400/300" alt="Recruitment" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/onboarding-card/400/300" alt="Onboarding" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
             whileHover={{ y: -8 }}
             className="group relative bg-[#F9F9F9] rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-transparent hover:border-[#DDE5D3]"
          >
            <div className="z-10 mb-12">
              <div className="w-16 h-16 rounded-[16px] bg-[#DDE5D3] flex items-center justify-center text-[#0F3D2E] mb-8">
                <Users size={28} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6 tracking-tight">Workforce Planning & Benefits</h3>
              <p className="text-[#6B6B6B] leading-[1.6] text-lg font-light">Organization structuring, payroll, compensation, and employee experience programs.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/planning-card/400/300" alt="Workforce Planning" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/benefits-card/400/300" alt="Benefits" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
             whileHover={{ y: -8 }}
             className="group relative bg-[#F9F9F9] rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-transparent hover:border-[#DDE5D3]"
          >
            <div className="z-10 mb-12">
              <div className="w-16 h-16 rounded-[16px] bg-[#DDE5D3] flex items-center justify-center text-[#0F3D2E] mb-8">
                <CheckSquare size={28} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6 tracking-tight">Compliance & Policies</h3>
              <p className="text-[#6B6B6B] leading-[1.6] text-lg font-light">Labor law compliance, HR policies, and governance frameworks to ensure risk-free operations.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/compliance-card/400/300" alt="Compliance" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/policy-card/400/300" alt="Policy" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
             whileHover={{ y: -8 }}
             className="group relative bg-[#F9F9F9] rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-transparent hover:border-[#DDE5D3]"
          >
            <div className="z-10 mb-12">
              <div className="w-16 h-16 rounded-[16px] bg-[#DDE5D3] flex items-center justify-center text-[#0F3D2E] mb-8">
                <LineChart size={28} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6 tracking-tight">Transformation & Advisory</h3>
              <p className="text-[#6B6B6B] leading-[1.6] text-lg font-light">Change management, HR systems, and strategic advisory to optimize workforce performance.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/transform-card/400/300" alt="Transformation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-48 rounded-[16px] overflow-hidden">
                <Image src="https://picsum.photos/seed/advisory-card/400/300" alt="Advisory" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
