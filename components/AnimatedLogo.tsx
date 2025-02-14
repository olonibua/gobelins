"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const Path = motion.path;

interface AnimatedLogoProps {
  onAnimationComplete: () => void;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onAnimationComplete }) => {
  const [showVideo, setShowVideo] = useState(false);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeatType: "loop" as const,
        repeat: 0,
        onComplete: () => setShowVideo(true),
      },
    },
  };

  // Handle video completion
  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 2000); // Adjust this timing to match your video duration
      return () => clearTimeout(timer);
    }
  }, [showVideo, onAnimationComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <AnimatePresence mode="wait">
        {!showVideo ? (
          <div className="w-64 h-64 relative">
            <motion.div className="absolute inset-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
              </div>
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <Path
                  d="M50,5 A45,45 0 1,1 50,95 A45,45 0 1,1 50,5"
                  stroke="#000"
                  strokeWidth="1"
                  fill="none"
                  initial="hidden"
                  animate="visible"
                  variants={pathVariants}
                />
              </svg>
            </motion.div>
          </div>
        ) : (
          <motion.video 
            autoPlay 
            muted
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-cover"
            onEnded={() => onAnimationComplete()}
          >
            <source src="/Gobelins Logo Zoom.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;
