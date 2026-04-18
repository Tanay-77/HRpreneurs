'use client';

import { motion } from 'motion/react';
import { Package, Users, Handshake, ShieldCheck, Settings, BadgeCheck } from 'lucide-react';

const cards = [
  {
    title: "Customized Solutions",
    text: "Customized end-to-end practical, execution-driven solutions.",
    icon: Package
  },
  {
    title: "Expert Support",
    text: "Experienced, hands-on support with dedicated relationship managers.",
    icon: Users
  },
  {
    title: "Long-Term Mindset",
    text: "Building value through a dedicated, long-term partnership mindset.",
    icon: Handshake
  },
  {
    title: "Proven Governance",
    text: "Maintaining a strong governance & compliance focus in every step.",
    icon: ShieldCheck
  },
  {
    title: "Flexible Models",
    text: "Engage with us through adaptable and flexible engagement models.",
    icon: Settings
  }
];

const trustItems = [
  "Worked With 100+ Clients",
  "Industry Expert",
  "Trusted Advisors",
  "Proven Results"
];


// Animation Config for 5 slides: 4s pause, 1s move (25s total)
const xArray = [
  "0%",     
  "0%",     
  "-10%",   
  "-10%",   
  "-20%",   
  "-20%",   
  "-30%",   
  "-30%",   
  "-40%",   
  "-40%",   
  "-50%"    
];

const timesArray = [
  0,                  
  0.16,               
  0.20,               
  0.36,               
  0.40,               
  0.56,               
  0.60,               
  0.76,               
  0.80,               
  0.96,               
  1                   
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FAFAFA] flex flex-col items-center justify-center font-sans">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E8F0E4]/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8F0E4]/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 mix-blend-multiply" />
      </div>

      <div className="w-full max-w-[80rem] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-zinc-900 leading-tight">
            Why Even Us ?
          </h2>
          <p className="text-zinc-600 text-lg md:text-[20px] leading-relaxed">
            We go beyond surface-level advice — our consulting approach is built on data, strategy, and execution
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full -mx-4 px-4 md:mx-0 md:px-0">
          
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Wrapper */}
          <div className="overflow-hidden w-full whitespace-nowrap py-4">
             <motion.div
               className="flex w-max"
               animate={{ x: xArray }}
               transition={{
                 duration: 25,
                 repeat: Infinity,
                 ease: "easeInOut",
                 times: timesArray
               }}
             >
                {/* SET 1 */}
                <div className="flex gap-6 pr-6 w-max">
                  {cards.map((card, idx) => (
                    <div 
                      key={idx} 
                      className="shrink-0 w-[85vw] md:w-[380px] rounded-[24px] bg-[#F4F3ED]/80 border border-zinc-200/60 backdrop-blur-md p-8 shadow-sm flex flex-col justify-between whitespace-normal relative overflow-hidden"
                      style={{ height: '320px' }}
                    >
                      {/* Subtle inner top glow for glassmorphism */}
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50" />
                      
                      <div>
                        {/* Icon Box */}
                        <div className="w-14 h-14 bg-white rounded-[16px] border border-zinc-100 flex items-center justify-center mb-8 shadow-sm">
                          <card.icon className="w-7 h-7 text-[#0F3D2E]" />
                        </div>
                        {/* Title and Text */}
                        <h3 className="text-2xl font-medium text-zinc-900 mb-4">{card.title}</h3>
                        <p className="text-zinc-600 leading-relaxed text-[16px] pr-4">{card.text}</p>
                      </div>
                      
                      {/* Bottom decorative accents matching the image */}
                      <div className="flex items-center gap-2 mt-auto pt-6 opacity-40">
                        <div className="h-[1px] bg-zinc-400 flex-1" />
                        <div className="w-[6px] h-[6px] rounded-full bg-zinc-400" />
                        <div className="w-[6px] h-[6px] rounded-full bg-zinc-400" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* SET 2 (Duplicate for endless looping) */}
                <div className="flex gap-6 pr-6 w-max">
                  {cards.map((card, idx) => (
                    // Exact duplicate design
                    <div 
                      key={`dup-${idx}`} 
                      className="shrink-0 w-[85vw] md:w-[380px] rounded-[24px] bg-[#F4F3ED]/80 border border-zinc-200/60 backdrop-blur-md p-8 shadow-sm flex flex-col justify-between whitespace-normal relative overflow-hidden"
                      style={{ height: '320px' }}
                    >
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50" />
                      <div>
                        <div className="w-14 h-14 bg-white rounded-[16px] border border-zinc-100 flex items-center justify-center mb-8 shadow-sm">
                          <card.icon className="w-7 h-7 text-[#0F3D2E]" />
                        </div>
                        <h3 className="text-2xl font-medium text-zinc-900 mb-4">{card.title}</h3>
                        <p className="text-zinc-600 leading-relaxed text-[16px] pr-4">{card.text}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-auto pt-6 opacity-40">
                        <div className="h-[1px] bg-zinc-400 flex-1" />
                        <div className="w-[6px] h-[6px] rounded-full bg-zinc-400" />
                        <div className="w-[6px] h-[6px] rounded-full bg-zinc-400" />
                      </div>
                    </div>
                  ))}
                </div>
             </motion.div>
          </div>
        </div>

        {/* Trust Strip Footer */}
        <div className="mt-20 max-w-5xl mx-auto hidden lg:block">
           <div className="flex justify-between items-center px-4">
              {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 shrink-0">
                  <BadgeCheck className="text-zinc-500 w-[22px] h-[22px] shrink-0 stroke-[2]" />
                  <span className="text-zinc-600 font-medium text-[15px]">{item}</span>
                  {idx < trustItems.length - 1 && (
                     <div className="w-[1px] h-6 bg-zinc-200 ml-8" />
                  )}
                </div>
              ))}
           </div>
        </div>
        
        {/* Mobile Trust Strip */}
        <div className="mt-16 lg:hidden px-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-[6px] items-center">
            {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 w-full sm:w-auto border-b sm:border-b-0 sm:border-r border-zinc-200 pb-3 mb-1 sm:pb-0 sm:mb-0 sm:pr-4 last:border-0">
                  <BadgeCheck className="text-zinc-500 w-[20px] h-[20px] shrink-0" />
                  <span className="text-zinc-600 font-medium text-sm">{item}</span>
                </div>
             ))}
        </div>

      </div>
    </section>
  );
}
