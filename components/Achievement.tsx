"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  number: string;
  text: string;
}

const StatItem = ({ number, text }: StatProps) => {
  return (
    <div className="flex flex-col">
      <motion.span 
        className="text-4xl sm:text-5xl md:text-[80px] font- text-[#9DF2FF]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {number}
      </motion.span>
      <motion.span 
        className="text-base sm:text-lg md:text-xl text-white/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {text}
      </motion.span>
    </div>
  );
};

const Achievement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  const leftStats = [
    { number: "84,000+", text: "Graduates Trained" },
    { number: "38+", text: "Courses Offered" },
    { number: "512+", text: "Industry Leaders Made" },
  ];

  const rightStats = [
    { number: "60+", text: "Years of Experience" },
    { number: "75+", text: "Awards for Best School of Animation" },
    { number: "100+", text: "Nationalities Represented" },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#4169E1] overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/Gobelins Blue.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1700px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <motion.div 
          className="flex flex-col md:flex-row justify-between gap-12 md:gap-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column */}
          <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-24 pt-12 sm:pt-16 md:pt-24">
            {leftStats.map((stat, index) => (
              <StatItem 
                key={`left-${index}`}
                number={stat.number}
                text={stat.text}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-24 pt-12 sm:pt-16 md:pt-24">
            {rightStats.map((stat, index) => (
              <StatItem 
                key={`right-${index}`}
                number={stat.number}
                text={stat.text}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4169E1]/50 to-transparent z-10" />
    </div>
  );
};

export default Achievement;
