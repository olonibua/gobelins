"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import onlineIcon from "@/public/online.png";
import degreeIcon from "@/public/degree.png";
import schoolIcon from "@/public/school.png";

interface ProgrammeCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  items: string[];
  isDark?: boolean;
}

const ProgrammeCard = ({
  icon,
  title,
  description,
  items,
  isDark = false,
}: ProgrammeCardProps) => {
  return (
    <motion.div
      className={`rounded-3xl border border-[#E8F1FF] p-6 sm:p-8 flex flex-col h-full ${
        isDark
          ? "bg-gradient-to-br from-[#1E1E1E] to-[#333333] shadow-lg"
          : "bg-white"
      }`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: isDark
          ? "0px 10px 20px rgba(0, 0, 0, 0.2), 0px 6px 6px rgba(0, 0, 0, 0.2)"
          : "none",
      }}
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
          isDark ? "bg-[#28A745]" : "bg-[#E8F1FF]"
        }`}
      >
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className="object-contain w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>

      {/* Title */}
      <h3
        className={`text-xl sm:text-2xl font-medium mt-4 sm:mt-6 ${
          isDark ? "text-white" : "text-[#313437]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`mt-3 sm:mt-4 text-sm sm:text-base ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* Items List */}
      <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 flex-grow">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ${
                isDark ? "bg-white" : "bg-black"
              }`}
            >
              <svg
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${isDark ? "text-black" : "text-white"}`}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                />
              </svg>
            </div>
            <span
              className={`text-xs sm:text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <button
        className={`mt-6 sm:mt-8 w-full py-3 sm:py-4 rounded-full border text-sm sm:text-base ${
          isDark
            ? "border-white text-black bg-white "
            : "border-[#D9DBDD] text-black hover:bg-[#D9DBDD] "
        } transition-colors duration-300`}
      >
        Learn More →
      </button>
    </motion.div>
  );
};

const Programmes = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, amount: 0.3 });

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
    <div className="w-full bg-gray-50 py-12 sm:py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <motion.div
          ref={textRef}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={textItemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 text-[#313437]"
            >
              Our Programmes
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p
              variants={textItemVariants}
              className="text-[#313437] max-w-2xl text-sm sm:text-base"
            >
              Floor die open follow encourage bake ui ocean points every. Must
              can vendor comms streamline.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ProgrammeCard
            icon={onlineIcon}
            title="Online Courses"
            description="Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline."
            items={[
              "Animation Training Programme",
              "Professional short courses in Animation",
            ]}
          />

          <ProgrammeCard
            icon={degreeIcon}
            title="Degree Programmes"
            description="Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline."
            items={[
              "Animation Preparatory Year",
              "Bachelor in Animation",
              "Bachelor 3D Character Animation",
              "Master in Animation",
              "3D Character Animator",
              "Master in Advanced Game Creation and Real-Time Applications",
            ]}
            isDark={true}
          />

          <ProgrammeCard
            icon={schoolIcon}
            title="Summer School"
            description="Floor die open follow encourage bake ui ocean points every. Must can vendor comms streamline."
            items={[
              "Summer School in Real-Time Animation with Unreal Engine",
              "Summer School in Character Animation",
              "Summer School in Character Animation - Online session",
              "Summer School in Visual Storytelling",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Programmes;
