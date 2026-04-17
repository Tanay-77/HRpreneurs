'use client';

import { motion } from 'motion/react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 md:py-40 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A] mb-12">Who We Are</h2>
        <div className="space-y-8 text-xl md:text-2xl lg:text-3xl text-[#6B6B6B] font-light leading-relaxed mb-12 text-balance lg:leading-[1.5]">
          <p>
            <strong className="text-[#1A1A1A] font-medium">HRpreneurs</strong> is a professional human resource management and advisory firm that partners with organizations to build strong, compliant, and future‑ready workforces.
          </p>
          <p>
            We provide end‑to‑end HR solutions that support businesses across the entire employee lifecycle—from talent acquisition and workforce planning to compliance, performance management, and HR transformation.
          </p>
        </div>
        <button className="bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 rounded-full px-10 py-4 font-medium text-lg">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
