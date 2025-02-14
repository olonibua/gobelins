"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import shapeLeft from "@/public/Group4.png";
import shapeRight from "@/public/Group5.png";

const GetStarted = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false });

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const leftShapeVariants = {
    hidden: { 
      x: -250,
      y: 770,
      rotate: -15,
      opacity: 0 
    },
    visible: {
      x: -190,
      y: 650,
      rotate: 0,
      opacity: .2,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const rightShapeVariants = {
    hidden: { 
      x: 1200,
      y: -920,
      rotate: 10,
      opacity: 0 
    },
    visible: {
      x: 1020,
      y: -880,
      rotate: -40,
      opacity: .2,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="rounded-[40px] bg-[#5B49EF] relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Decorative Shapes */}
        <motion.div
          className="absolute left-[-15%] bottom-[-15%] w-[1300px] h-[1300px]"
          variants={leftShapeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src={shapeLeft}
            alt=""
            fill
            className="object-contain mix-blend-multiply"
          />
        </motion.div>

        <motion.div
          className="absolute right-[-15%] top-[-15%] w-[1900px] h-[1900px] mix-blend-multiply"
          variants={rightShapeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image src={shapeRight} alt="" fill className="object-contain" />
        </motion.div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
          <motion.div
            ref={textRef}
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-4xl w-full px-4"
          >
            <div className="overflow-hidden mb-2 sm:mb-4">
              <motion.p
                variants={textItemVariants}
                className="text-xs sm:text-sm uppercase tracking-wider"
              >
                READY TO GET STARTED
              </motion.p>
            </div>

            <div className="overflow-hidden mb-4 sm:mb-6">
              <motion.h2
                variants={textItemVariants}
                className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-medium"
              >
                Begin your
                <br />
                amazing journey at
                <br />
                <span className="font-serif">GOBELINS</span>
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.div variants={textItemVariants}>
                <Link
                  href="#"
                  className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#5B49EF] rounded-full 
                           text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300"
                >
                  Start your GOBELINS Journey
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

