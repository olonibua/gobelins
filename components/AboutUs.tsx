"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, amount: 0.3 }); // amount determines how much of the element needs to be in view

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for image scaling and movement
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["20%", "0%"]);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen relative mb-12 sm:mb-20">
      {/* Text Section */}
      <div className="w-full max-w-[1650px] mx-auto px-6 sm:px-6 pt-16 sm:pt-24">
        <motion.div
          ref={textRef}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12"
        >
          {/* Left side - About Us */}
          <div className="w-full lg:w-1/3">
            <div className="overflow-hidden">
              <motion.h1
                variants={textItemVariants}
                className="text-3xl sm:text-4xl font-medium text-[#313437]"
              >
                About Us
              </motion.h1>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden">
              <motion.p
                variants={textItemVariants}
                className="text-lg sm:text-xl text-[#313437]"
              >
                At Gobelins, we pride ourselves on our diverse range of
                programs, including character animation, 3D animation, & visual
                effects. Each course is designed to foster creativity &
                technical skills, allowing students to explore their unique
                artistic voices while mastering the tools of the trade. Our
                faculty consists of industry professionals who bring their
                real-world experience into the classroom, providing invaluable
                insights & mentorship.
              </motion.p>
            </div>

            <div className="overflow-hidden mt-6 sm:mt-8">
              <motion.button
                variants={textItemVariants}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-[#313437] border border-[#D9DBDD] rounded-full"
              >
                Read About Us →
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative mt-12 sm:mt-20"
      >
        <Image
          src="/Main Image.png"
          alt="Gobelins Building Illustration"
          width={1000}
          height={800}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
