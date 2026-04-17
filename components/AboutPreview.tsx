'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Split the paragraphs into lines for line-by-line animation
    let text = new SplitType('.reveal-p', { types: 'lines', lineClass: 'reveal-line' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo('.reveal-heading', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    )
    .fromTo(text.lines, 
      { y: 40, opacity: 0, rotationX: -20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.15, Math: 'power2.out', transformOrigin: "0% 50% -50" },
      '-=0.6'
    )
    .fromTo('.reveal-btn', 
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Reconstruct lines on window resize to ensure responsiveness isn't broken
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        text.revert();
        text = new SplitType('.reveal-p', { types: 'lines', lineClass: 'reveal-line' });
        gsap.set(text.lines, { y: 0, opacity: 1, rotationX: 0 }); // ensure text is visible after resize
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      text.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: container });

  return (
    <section id="about" className="py-24 md:py-40 px-4 md:px-8 max-w-4xl mx-auto text-center" ref={container}>
      <h2 className="reveal-heading font-serif text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A] mb-12">Who We Are</h2>
      <div className="space-y-8 text-xl md:text-2xl lg:text-3xl text-[#6B6B6B] font-light leading-relaxed mb-12 text-balance lg:leading-[1.5]" style={{ perspective: "1000px" }}>
        <p className="reveal-p">
          <strong className="text-[#1A1A1A] font-medium">HRpreneurs</strong> is a premier HR advisory firm. We provide end‑to‑end solutions—from talent acquisition to compliance—partnering with you to build a strong, future‑ready workforce.
        </p>
      </div>
      <button className="reveal-btn bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 rounded-full px-10 py-4 font-medium text-lg">
        Learn More
      </button>
    </section>
  );
}
