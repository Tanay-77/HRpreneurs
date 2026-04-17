import { CheckCircle2 } from 'lucide-react';

const ItemGroup = () => (
  <div className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 shrink-0">
    <div className="flex items-center gap-3 shrink-0">
      <CheckCircle2 className="text-[#0F3D2E]" size={20} />
      <span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A] whitespace-nowrap">18+ Years Experience</span>
    </div>
    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20 shrink-0" />
    <div className="flex items-center gap-3 shrink-0">
      <CheckCircle2 className="text-[#0F3D2E]" size={20} />
      <span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A] whitespace-nowrap">End-to-End HR Solutions</span>
    </div>
    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20 shrink-0" />
    <div className="flex items-center gap-3 shrink-0">
      <CheckCircle2 className="text-[#0F3D2E]" size={20} />
      <span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A] whitespace-nowrap">Compliance Focused</span>
    </div>
    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20 shrink-0" />
    <div className="flex items-center gap-3 shrink-0">
      <CheckCircle2 className="text-[#0F3D2E]" size={20} />
      <span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A] whitespace-nowrap">Trusted by Businesses</span>
    </div>
    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20 shrink-0" />
  </div>
);

export default function TrustStrip() {
  return (
    <section className="py-10 border-y border-[#1A1A1A]/10 bg-white shadow-sm overflow-hidden mix-blend-multiply flex relative">
      <style>{`
        @keyframes marquee-lr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-lr {
          animation: marquee-lr 40s linear infinite;
        }
        .animate-marquee-lr:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex w-max animate-marquee-lr opacity-80">
        <ItemGroup />
        <ItemGroup />
        <ItemGroup />
        <ItemGroup />
      </div>
    </section>
  );
}
