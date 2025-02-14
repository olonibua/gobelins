"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedLanding = () => {
  // Animation variants for the video container
  const videoContainerVariants = {
    initial: {
      height: "100vh",
      width: "100vw",
      top: 0,
      left: 0,
      scale: 1,
    },
    animate: {
      height: "calc(100vh - 0px)", // Adjusted height
      width: "calc(100% - 80px)",
      top: 60,
      left: 40,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  // Animation variants for the navigation
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Text reveal animation variants
  const textContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.2,
        delayChildren: 1.8,
      },
    },
  };

  const textItemVariants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Navigation */}
      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 bg-white"
      >
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Image src="/logo.png" alt="logo" width={15} height={15} />
          <div className="hidden sm:flex space-x-6 text-black">
            <span>The School</span>
            <span>Programmes</span>
            <span>Fields</span>
          </div>
          {/* Mobile Menu Button */}
          <button className="sm:hidden text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="text-black">EN</div>
      </motion.nav>

      {/* Video Container */}
      <motion.div
        variants={videoContainerVariants}
        initial="initial"
        animate="animate"
        className="relative rounded-[2rem] sm:rounded-[2.5rem] z-40 overflow-hidden"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-[2rem] sm:rounded-[2.5rem]"
        >
          <source src="/Gobelins Hero Video.mp4" type="video/mp4" />
        </video>

        {/* Text Overlay - Adjusted positioning with larger padding */}
        <motion.div
          variants={textContainerVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 flex flex-col justify-center sm:justify-end p-6 sm:p-12 pb-16 sm:pb-24 text-white"
        >
          <div className="overflow-hidden mt-auto sm:mt-0">
            <motion.p
              variants={textItemVariants}
              className="text-sm sm:text-md font-light mb-2 sm:mb-4"
            >
              WELCOME TO GOBELINS PARIS
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={textItemVariants}
              className="text-4xl sm:text-7xl font-medium mb-2 sm:mb-4"
            >
              Where the greatest
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={textItemVariants}
              className="text-4xl sm:text-7xl font-medium mb-2 sm:mb-4"
            >
              <span className="text-5xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500">
                artists
              </span>{" "}
              are made
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              variants={textItemVariants}
              className="max-w-2xl mb-4 sm:mb-8 opacity-80 text-base sm:text-xl"
            >
              Floor die open follow encourage bake ui ocean points every. Must
              can vendor comms streamline. Illustration focus third flesh muted.
              Submit wanted view goto give cow. Six effects unit shelf-ware
              manage going.
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              variants={textItemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-8"
            >
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base">
                Start your GOBELINS Journey
              </button>
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 border border-white rounded-full flex items-center justify-center sm:justify-start space-x-2 text-sm sm:text-base">
                <span>Watch Trailer</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedLanding;
