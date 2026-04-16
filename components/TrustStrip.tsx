import { CheckCircle2 } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="py-10 border-y border-[#1A1A1A]/10 bg-white shadow-sm overflow-hidden mix-blend-multiply">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
         <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-80">
            <div className="flex items-center gap-3"><CheckCircle2 className="text-[#0F3D2E]" size={20} /><span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A]">20+ Years Experience</span></div>
            <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20" />
            <div className="flex items-center gap-3"><CheckCircle2 className="text-[#0F3D2E]" size={20} /><span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A]">End-to-End HR Solutions</span></div>
            <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20" />
            <div className="flex items-center gap-3"><CheckCircle2 className="text-[#0F3D2E]" size={20} /><span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A]">Compliance Focused</span></div>
            <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20" />
            <div className="flex items-center gap-3"><CheckCircle2 className="text-[#0F3D2E]" size={20} /><span className="font-semibold text-[15px] tracking-wide uppercase text-[#1A1A1A]">Trusted by Businesses</span></div>
         </div>
      </div>
    </section>
  );
}
