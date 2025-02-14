"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface EventProps {
  title: string;
  date: string;
  type: string;
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

const Event = ({ title, date, type, countdown }: EventProps) => {
  return (
    <div className="group relative border-t border-gray-200 py-8 -mx-6 px-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0 relative z-10">
        <div className="space-y-2">
          <h3 className="text-2xl font-medium group-hover:text-white transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-3 text-gray-500 group-hover:text-white/80">
            <span>{date}</span>
            <span>•</span>
            <span className="text-[#4169E1] group-hover:text-white transition-colors">{type}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
          <div className="grid grid-cols-4 gap-4 text-center w-full sm:w-auto">
            <div>
              <div className="text-xl font-medium text-red-500">{countdown.days}</div>
              <div className="text-xs text-gray-500 group-hover:text-white/80">DAYS</div>
            </div>
            <div>
              <div className="text-xl font-medium text-red-500">{countdown.hours}</div>
              <div className="text-xs text-gray-500 group-hover:text-white/80">HOURS</div>
            </div>
            <div>
              <div className="text-xl font-medium text-red-500">{countdown.minutes}</div>
              <div className="text-xs text-gray-500 group-hover:text-white/80">MINUTES</div>
            </div>
            <div>
              <div className="text-xl font-medium text-red-500">{countdown.seconds}</div>
              <div className="text-xs text-gray-500 group-hover:text-white/80">SECONDS</div>
            </div>
          </div>

          <Link 
            href="#" 
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-200 text-gray-700 
                     group-hover:bg-white group-hover:text-black transition-all text-center"
          >
            Register →
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-[#313437] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const UpcomingEvents = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false });

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

  const events = [
    {
      title: "Art school portfolio",
      date: "16 January, 2025",
      type: "Online",
      countdown: { days: "08", hours: "15", minutes: "44", seconds: "32" }
    },
    {
      title: "Animation: Are you more into 2D or 3D?",
      date: "19 January, 2025",
      type: "Online",
      countdown: { days: "07", hours: "12", minutes: "43", seconds: "29" }
    },
    {
      title: "Online information meeting - Master Advanced Game Creation and Real-Time Applications",
      date: "02 February, 2025",
      type: "Online",
      countdown: { days: "11", hours: "15", minutes: "43", seconds: "16" }
    },
    {
      title: "Online  meeting - Animation Preparatory Year and Bachelor in Character Animation and Animated Filmmaking",
      date: "13 January, 2025",
      type: "Online",
      countdown: { days: "22", hours: "07", minutes: "13", seconds: "59" }
    }
  ];

  return (
    <div className="w-full bg-[#F4F5F5] py-12 lg:py-24">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={textRef}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 lg:mb-16"
        >
          <div className="overflow-hidden">
            <motion.h2 variants={textItemVariants} className="text-3xl lg:text-5xl font-medium mb-4">
              Upcoming Events
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p variants={textItemVariants} className="text-gray-600">
              Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline.
            </motion.p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <Event key={index} {...event} />
          ))}
        </div>

        <div className="mt-8 lg:mt-16 text-center">
          <Link 
            href="#" 
            className="inline-block px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            See All Events →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
