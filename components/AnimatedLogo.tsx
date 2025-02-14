"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getVideoUrl, VIDEO_IDS } from '@/lib/appwrite';
const Path = motion.path;

interface AnimatedLogoProps {
  onAnimationComplete: () => void;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onAnimationComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const logoVideoUrl = getVideoUrl(VIDEO_IDS.LOGO_ZOOM);

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

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Autoplay failed:", err);
        }
      }
    };
    if (showVideo) {
      playVideo();
    }
  }, [showVideo]);

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
            ref={videoRef}
            autoPlay
            muted
            playsInline
            controls={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
            onEnded={() => onAnimationComplete()}
          >
            <source src={logoVideoUrl} type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;
