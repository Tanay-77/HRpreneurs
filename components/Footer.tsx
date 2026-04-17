import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-4 md:px-8 mt-12">
       <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-12 mb-20 border-b border-white/10 pb-16">
             <div className="max-w-md">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">HRpreneurs</h3>
                <p className="text-white/60 mb-6 font-light max-w-sm">Building Strong Organizations Through People, Process, and Performance.</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/107051602/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors">
                     <Linkedin size={20} />
                  </a>
                </div>
             </div>
             <nav className="flex flex-wrap gap-8 lg:gap-10 text-white/80 font-medium">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
                <a href="#blog" className="hover:text-white transition-colors">News & Research</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
             </nav>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-[13px] gap-6 font-medium tracking-wide">
             <p>© {new Date().getFullYear()} HRpreneurs. All Rights Reserved.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                <a href="#" className="hover:text-white transition-colors">Security and Phishing</a>
             </div>
          </div>
       </div>
    </footer>
  );
}
