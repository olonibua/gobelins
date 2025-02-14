"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import image21 from "@/public/21.png";
import image11 from "@/public/11.png";
import image09 from "@/public/09.png";

const NewsAndUpdates = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const news = [
    {
      category: "PRESS",
      title:
        "GOBELINS Paris wishes all our students and partners a very Happy New Year 2025!",
      date: "01 January, 2025",
      image: image21,
    },
    {
      category: "ANIMATED FILMMAKING",
      title: "DARE TO BE FABULOUS - Graduation short film 2024",
      date: "12 March, 2024",
      image: image11,
    },
    {
      category: "THE SCHOOL",
      title:
        "GOBELINS Paris Open House: come and visit the school on Friday 26th and Saturday 27th...",
      date: "30 November, 2024",
      image: image09,
    },
    {
      category: "PRESS",
      title:
        "GOBELINS Paris wishes all our students and partners a very Happy New Year 2025!",
      date: "01 January, 2025",
      image: image21,
    },
    {
      category: "ANIMATED FILMMAKING",
      title: "DARE TO BE FABULOUS - Graduation short film 2024",
      date: "12 March, 2024",
      image: image11,
    },
    {
      category: "THE SCHOOL",
      title:
        "GOBELINS Paris Open House: come and visit the school on Friday 26th and Saturday 27th...",
      date: "30 November, 2024",
      image: image09,
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      // Handle wrapping
      if (nextIndex >= news.length - 2) return 0;
      if (nextIndex < 0) return news.length - 3;
      return nextIndex;
    });
  };

  const visibleNews = news.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 md:mb-16 gap-6 sm:gap-4">
          <motion.div
            ref={textRef}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <div className="overflow-hidden">
              <motion.h2
                variants={textItemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4"
              >
                News & Updates
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.p variants={textItemVariants} className="text-gray-600">
                Floor die open follow encourage bake ui ocean points every. Must
                can vendor comms streamline.
              </motion.p>
            </div>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D9DBDD] flex items-center justify-center hover:bg-gray-50"
            >
              <span className="text-xl sm:text-2xl">←</span>
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D9DBDD] flex items-center justify-center hover:bg-gray-50"
            >
              <span className="text-xl sm:text-2xl">→</span>
            </button>
          </div>
        </div>

        {/* News Grid with Animation */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            custom={direction}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {visibleNews.map((item, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="rounded-3xl overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-[#4169E1] font-medium text-sm sm:text-base">{item.category}</p>
                  <h3 className="text-lg sm:text-xl font-medium">{item.title}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See All Articles Button */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <motion.button
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-[#313437] border border-[#D9DBDD] rounded-full text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            See All Articles →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
