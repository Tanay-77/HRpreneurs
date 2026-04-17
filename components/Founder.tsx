import Image from 'next/image';

export default function Founder() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-8 max-w-[80rem] mx-auto">
       <div className="bg-white rounded-[32px] p-8 md:p-16 lg:p-24 shadow-sm border border-[#1A1A1A]/5 mb-16">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
             <div className="lg:col-span-12 relative order-2 lg:order-1">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-[#1A1A1A] mb-12 leading-[1.1] tracking-tight">
                   Leadership Message
                </h2>
                <div className="space-y-6 text-xl text-[#6B6B6B] font-light leading-relaxed mb-12 max-w-4xl">
                   <p className="text-2xl lg:text-3xl text-[#1A1A1A] font-serif italic border-l-4 border-[#0F3D2E] pl-6 py-2 bg-gradient-to-r from-[#DDE5D3]/30 to-transparent">
                     "Human Resources is a strategic enabler of business success."
                   </p>
                   <p>
                     Over the years, organizations have grown more complex, regulatory expectations have increased, workforces have become more diverse, leaders are required to make faster & people‑centric decisions, all of this with rapid advancement of AI/IoT in all fields. Yet, many businesses continue to struggle with fragmented HR processes, unclear governance, and reactive people practices.
                   </p>
                   <p>
                     HRpreneurs was established to bridge this gap.
                   </p>
                   <p>
                     Our objective has always been to bring structure, clarity, and reliability to human resource management; whether through talent acquisition, compliance, performance management, workforce planning, or complete HR outsourcing. We focus on building HR systems that are practical, compliant, future-ready and aligned to business realities, not theoretical models.
                   </p>
                   <p>
                     What differentiates HRpreneurs is our balanced approach. We combine hands‑on execution with strategic insight, allowing us to support organizations at different stages of growth. We partner closely with leadership teams and HR functions to ensure solutions are sustainable.
                   </p>
                   <p>
                     As organizations continue to evolve, our commitment remains the same:
                     to help businesses build strong foundations, empowered teams, and workplaces that are both performance‑driven and people‑focused.
                   </p>
                </div>
                <div>
                   <h4 className="font-serif text-3xl text-[#1A1A1A]">Ami Upadhyaya</h4>
                   <p className="text-[#6B6B6B] tracking-[0.1em] text-sm uppercase font-semibold mt-3">Founder, HRpreneurs</p>
                </div>
             </div>
          </div>
       </div>

       <div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A] mb-12 text-center">Meet Our Leaders</h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
             {/* Ami */}
             <div className="bg-[#F9F9F9] rounded-[24px] p-8 hover:bg-[#DDE5D3]/20 transition-colors duration-500">
                <div className="relative h-80 w-full rounded-[16px] overflow-hidden mb-8">
                   <Image src="https://picsum.photos/seed/founder-ami/600/800" alt="Ami Upadhyaya" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-serif text-3xl text-[#1A1A1A] mb-2">Ami Upadhyaya</h4>
                <p className="text-[#0F3D2E] font-medium mb-6">Founder, HRpreneurs</p>
                <div className="text-[#6B6B6B] font-light leading-relaxed text-sm space-y-4">
                   <p>
                      Ami Upadhyaya holds three Master’s degrees: M.Com., M.B.A, and Master of Business Laws (M.B.L), along with a Bachelor’s degree in Management Studies. Additionally, she is a certified and licensed Hypnotist, Life Coach and Neuro Linguistic Practitioner.
                   </p>
                   <p>
                      She brings over 18 years of experience as an HR Professional in IT, Retail and Real Estate. She has served in leadership roles at global organizations and is a visiting faculty member at various management colleges.
                   </p>
                   <p>
                      Her competencies include Executive Talent Acquisition, Workforce Strategy, Compensation, Performance Appraisals, Policy Development, and Leadership Training.
                   </p>
                </div>
             </div>

             {/* Rushi */}
             <div className="bg-[#F9F9F9] rounded-[24px] p-8 hover:bg-[#DDE5D3]/20 transition-colors duration-500">
                <div className="relative h-80 w-full rounded-[16px] overflow-hidden mb-8">
                   <Image src="https://picsum.photos/seed/founder-rushi/600/800" alt="Rushi Upadhyaya" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-serif text-3xl text-[#1A1A1A] mb-2">Rushi Upadhyaya</h4>
                <p className="text-[#0F3D2E] font-medium mb-6">Legal Consultant, HRpreneurs</p>
                <div className="text-[#6B6B6B] font-light leading-relaxed text-sm space-y-4">
                   <p>
                      Rushi Upadhyaya is the Founder of HRA Legal. She holds a Master’s degree in Business Laws (MBL), is a qualified Company Secretary, and earned a PG in Intellectual Property Laws (PGIPR). In addition, she is a law graduate (LLB) and a management graduate (BMS).
                   </p>
                   <p>
                      She possesses over 15 years of experience as Counsel within the Media & Entertainment sector, holding roles with multinational organizations like Sony Pictures, Shemaroo, Reliance Industries-Jio Studios, and Maddock Films.
                   </p>
                   <p>
                      She excels at structuring complex agreements across a range of industries, providing strategic advice on commercial and IP matters, content regulation, and establishing robust legal SOPs.
                   </p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
