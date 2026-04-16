export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-4 md:px-8 mt-12">
       <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-end gap-12 mb-20 border-b border-white/10 pb-16">
             <div className="max-w-md">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">HRpreneurs</h3>
             </div>
             <nav className="flex flex-wrap gap-8 lg:gap-12 text-white/80 font-medium">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
             </nav>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-[13px] gap-4 font-medium tracking-wide">
             <p>© 2025 HRpreneurs. All Rights Reserved.</p>
             <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
             </div>
          </div>
       </div>
    </footer>
  );
}
