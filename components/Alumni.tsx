"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Alumni = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, amount: 0.3 });
  const isContainerInView = useInView(containerRef, { once: false, amount: 0.3 });

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
    <div
      ref={containerRef}
      className="w-full bg-white py-8 sm:py-12 md:py-24 relative overflow-hidden min-h-[100dvh]"
    >
      {/* Polaroid Images */}
      <motion.div
        className="absolute left-[2%] sm:left-[5%] top-[5%] sm:top-[10%] w-[180px] sm:w-[250px] md:w-[400px] opacity-90"
        initial={{ rotate: -20, y: 100, opacity: 0 }}
        animate={
          isContainerInView
            ? { rotate: 10, y: 0, opacity: 0.9 }
            : { rotate: -20, y: 100, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 10, zIndex: 10 }}
      >
        <Image src="/Polaroid7.png" alt="Alumni" width={500} height={550} className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute left-[35%] sm:left-[40%] top-[-5%] sm:top-[-10%] md:top-[-17%] w-[180px] sm:w-[250px] md:w-[400px] opacity-80"
        initial={{ rotate: -5 }}
        whileHover={{ scale: 1.05, rotate: -5, zIndex: 10 }}
        animate={
          isContainerInView
            ? { rotate: 0, y: 0, opacity: 0.8 }
            : { rotate: -15, y: 100, opacity: 0 }
        }
      >
        <Image src="/Polaroid8.png" alt="Alumni" width={500} height={550} className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute right-[2%] sm:right-[5%] top-[5%] sm:top-[10%] w-[180px] sm:w-[250px] md:w-[400px] opacity-90"
        initial={{ rotate: 20, y: 100, opacity: 0 }}
        animate={
          isContainerInView
            ? { rotate: -10, y: 0, opacity: 0.9 }
            : { rotate: 20, y: 100, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: -10, zIndex: 10 }}
      >
        <Image src="/Polaroid4.png" alt="Alumni" width={500} height={550} className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute left-[5%] sm:left-[10%] bottom-[-2%] sm:bottom-[-5%] md:bottom-[-10%] w-[180px] sm:w-[250px] md:w-[400px] opacity-90"
        initial={{ rotate: 25, y: 100, opacity: 0 }}
        animate={
          isContainerInView
            ? { rotate: -15, y: 0, opacity: 0.9 }
            : { rotate: 25, y: 100, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: -15, zIndex: 10 }}
      >
        <Image src="/Polaroid6.png" alt="Alumni" width={500} height={550} className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute left-[35%] sm:left-[40%] bottom-[-15%] sm:bottom-[-20%] md:bottom-[-35%] w-[180px] sm:w-[250px] md:w-[400px] opacity-80"
        initial={{ rotate: -0 }}
        animate={
          isContainerInView
            ? { rotate: 0, y: 0, opacity: 0.2 }
            : { rotate: -15, y: 100, opacity: 0 }
        }
        whileHover={{ scale: 1.05, rotate: -5, zIndex: 10 }}
      >
        <Image src="/Polaroid9.png" alt="Alumni" width={500} height={550} className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute right-[5%] sm:right-[10%] bottom-[-5%] sm:bottom-[-10%] md:bottom-[-15%] w-[180px] sm:w-[250px] md:w-[400px] opacity-90"
        initial={{ rotate: -25, y: 100, opacity: 0 }}
        animate={
          isContainerInView
            ? { rotate: 15, y: 0, opacity: 0.9 }
            : { rotate: -25, y: 100, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 15, zIndex: 10 }}
      >
        <Image src="/Polaroid5.png" alt="Alumni" width={500} height={550} className="w-full h-auto" />
      </motion.div>

      {/* Central Content */}
      <div className="relative z-20 max-w-[800px] mx-auto text-center px-4 md:px-6 pt-72 sm:pt-72 md:pt-48">
        <motion.div
          ref={textRef}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={textItemVariants}
              className="text-2xl sm:text-3xl md:text-5xl font-medium mb-3 md:mb-6"
            >
              Our Alumni Wall
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p
              variants={textItemVariants}
              className="text-base sm:text-lg md:text-xl text-[#787F87] mb-4 md:mb-8"
            >
              Floor die open follow encourage bake ui ocean points every. Must
              can vendor comms streamline. Illustration focus third flesh muted.
              Submit wanted view goto give eow. Six effects unit shelf-ware
              manage going. Walk hour ping this shoot our other production
              people. Per land and slipstream metal line note.
            </motion.p>
          </div>
          <motion.button
            className="px-3 py-2 md:px-6 md:py-3 bg-[#313437] text-white rounded-full text-xs sm:text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
          >
            View More Alumni →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
