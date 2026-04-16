import Image from 'next/image';

export default function Founder() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8 max-w-[80rem] mx-auto">
       <div className="bg-white rounded-[32px] p-8 md:p-16 lg:p-24 shadow-sm border border-[#1A1A1A]/5 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7 relative order-2 lg:order-1">
             <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-[#1A1A1A] mb-12 leading-[1.1] tracking-tight">
                A Message from Our Founder
             </h2>
             <div className="space-y-8 text-xl text-[#6B6B6B] font-light leading-relaxed mb-12">
                <p className="text-2xl lg:text-3xl text-[#1A1A1A] font-serif italic border-l-4 border-[#0F3D2E] pl-6 py-2 bg-gradient-to-r from-[#DDE5D3]/30 to-transparent">
                  "Human Resources is a strategic enabler of business success."
                </p>
                <p>
                  At HRpreneurs, we focus on bringing structure, clarity, 
                  and reliability to HR management through practical, 
                  compliant, and future-ready solutions.
                </p>
                <p>
                  We partner with organizations to build strong foundations, 
                  empowered teams, and performance-driven workplaces.
                </p>
             </div>
             <div>
                <h4 className="font-serif text-3xl text-[#1A1A1A]">Ami Upadhyaya</h4>
                <p className="text-[#6B6B6B] tracking-[0.1em] text-sm uppercase font-semibold mt-3">Founder, HRpreneurs</p>
             </div>
          </div>

          <div className="lg:col-span-5 relative h-[450px] md:h-[600px] w-full rounded-[24px] overflow-hidden order-1 lg:order-2">
             <Image src="https://picsum.photos/seed/founder-ami/600/800" alt="Ami Upadhyaya" fill className="object-cover" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 border border-black/10 rounded-[24px]"></div>
          </div>
          
       </div>
    </section>
  );
}
