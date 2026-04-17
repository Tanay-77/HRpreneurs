'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, CheckSquare, LineChart, Briefcase, BookOpen, Layers, Target, Cloud, Edit, Leaf, Lightbulb, List, Settings, ShieldCheck } from 'lucide-react';

export default function Services() {
  const cards = [
    {
      icon: <Briefcase size={28} />,
      title: "Talent Management",
      desc: "Executive search, mid-level recruitment, onboarding, performance and grievance management.",
      img1: "/image4.png",
      img2: "https://picsum.photos/seed/onboarding-card/400/300",
    },
    {
      icon: <Users size={28} />,
      title: "Workforce Planning & Benefits",
      desc: "Organization structure assessment, attendance, payroll, and compensation & benefits structuring.",
      img1: "https://picsum.photos/seed/planning-card/400/300",
      img2: "https://picsum.photos/seed/benefits-card/400/300",
    },
    {
      icon: <CheckSquare size={28} />,
      title: "Regulatory",
      desc: "Labor law compliances and drafting internal policies like Code of Conduct, POSH, and D&I.",
      img1: "/image6.png",
      img2: "https://picsum.photos/seed/policy-card/400/300",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Skills and Development",
      desc: "Workforce training, reskilling, leadership development, and employee well-being programs.",
      img1: "/image5.png",
      img2: "/image5.png",
    },
    {
      icon: <LineChart size={28} />,
      title: "Transformation",
      desc: "Change management and holistic workforce & organization transformation strategies.",
      img1: "/image5.png",
      img2: "https://picsum.photos/seed/advisory-card/400/300",
    },
    {
      icon: <Layers size={28} />,
      title: "Processes",
      desc: "Current process optimization, SOPs, workflows, and setting up new robust HR systems.",
      img1: "https://picsum.photos/seed/process-opt/400/300",
      img2: "https://picsum.photos/seed/sops/400/300",
    }
  ];

  return (
    <section id="services" className="py-24 md:py-40 px-4 md:px-8 bg-white">
      <div className="max-w-[80rem] mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A]">Our Expertise – What We Do</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-16 md:mb-20">
          {[
            [{ ...cards[0], hasImage: true }, { ...cards[3], hasImage: false }],
            [{ ...cards[1], hasImage: false }, { ...cards[4], hasImage: true }],
            [{ ...cards[2], hasImage: true }, { ...cards[5], hasImage: false }],
          ].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-8 lg:gap-10 flex-1">
              {col.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="group relative bg-[#F9F9F9] rounded-[24px] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-transparent hover:border-[#DDE5D3]"
                >
                  <div className="z-10 flex-grow">
                    <div className="w-16 h-16 rounded-[16px] bg-[#DDE5D3] flex items-center justify-center text-[#0F3D2E] mb-6">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-4 tracking-tight">{card.title}</h3>
                    <p className="text-[#6B6B6B] leading-[1.6] text-base font-light">{card.desc}</p>
                  </div>
                  {card.hasImage && (
                    <div className="relative h-64 md:h-72 rounded-[16px] overflow-hidden mt-8">
                      <Image src={card.img1} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Animated Tags Section */}
        <div className="mb-16 md:mb-20 overflow-hidden relative w-full -mx-4 px-4 md:mx-0 md:px-0" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <style>{`
            @keyframes marquee-l {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-r {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee-l {
              animation: marquee-l 40s linear infinite;
            }
            .animate-marquee-r {
              animation: marquee-r 40s linear infinite;
            }
            // .animate-marquee-l:hover, .animate-marquee-r:hover {
            //   animation-play-state: paused;
            // }
          `}</style>

          <div className="flex flex-col gap-4">
            {/* Row 1: Right to Left */}
            <div className="flex w-max animate-marquee-l pointer-events-auto">
              {[1, 2, 3, 4].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-4 shrink-0 pr-4">
                  {[
                    { text: "Talent Management", icon: <Briefcase size={16} /> },
                    { text: "Regulatory", icon: <CheckSquare size={16} /> },
                    { text: "Transformation", icon: <LineChart size={16} /> },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[#6B6B6B] whitespace-nowrap text-sm font-medium border border-[#1A1A1A]/10 transition-colors hover:border-[#0F3D2E] hover:text-[#0F3D2E]">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Row 2: Left to Right */}
            <div className="flex w-max animate-marquee-r pointer-events-auto">
              {[1, 2, 3, 4, 5, 6].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-4 shrink-0 pr-4">
                  {[
                    { text: "Workforce Planning & Benefits", icon: <Users size={16} /> },
                    { text: "Skills and Development", icon: <BookOpen size={16} /> },
                    { text: "Processes", icon: <Layers size={16} /> },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[#6B6B6B] whitespace-nowrap text-sm font-medium border border-[#1A1A1A]/10 transition-colors hover:border-[#0F3D2E] hover:text-[#0F3D2E]">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          className="mt-10 group relative bg-[#0F3D2E] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-500"
        >
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-[#DDE5D3] rounded-full blur-[80px] opacity-20" />
          <div className="z-10 text-white md:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold tracking-[0.1em] uppercase mb-6">
              Complete Delivery
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4 tracking-tight">End-to-End Managed HR Services</h3>
            <p className="text-white/80 leading-[1.6] text-lg font-light max-w-2xl">
              Managing the entire human resource department of your company, allowing you to focus on your core business objectives.
            </p>
          </div>
          <div className="z-10 mt-8 md:mt-0">
            <button className="bg-[#DDE5D3] text-[#0F3D2E] hover:bg-white transition-all duration-300 rounded-full px-8 py-4 font-medium flex items-center gap-2">
              Outsource to Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
