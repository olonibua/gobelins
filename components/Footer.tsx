"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getVideoUrl, VIDEO_IDS } from '@/lib/appwrite';

const textContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const Footer = () => {
  const darkLogoPeekUrl = getVideoUrl(VIDEO_IDS.DARK_LOGO_PEEK);

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-[800px]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 h-full md:h-1/2 object-cover opacity-30"
      >
        <source src={darkLogoPeekUrl} type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Gobelins Column */}
          <motion.div
            variants={textContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={textItemVariants}
              className="text-xl font-medium mb-6"
            >
              Gobelins
            </motion.h3>
            <motion.div variants={textItemVariants} className="space-y-3">
              {[
                "The School",
                "Registration",
                "News & Events",
                "Gallery",
                "Welcome to Gobelins",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            variants={textContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={textItemVariants}
              className="text-xl font-medium mb-6"
            >
              Links
            </motion.h3>
            <motion.div variants={textItemVariants} className="space-y-3">
              {["Press", "FAQs", "Press", "Terms", "Privacy Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textContainerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={textItemVariants}
              className="text-xl font-medium mb-6"
            >
              Follow Us
            </motion.h3>
            <div className="grid grid-cols-4 gap-4 max-w-[300px]">
              <Link href="#" className="border border-[#3C3C3C] p-3 rounded-full hover:bg-[#222222] transition-colors flex items-center justify-center">
                <Image src="/Vector.png" alt="Vimeo" width={24} height={24} />
              </Link>
              <Link href="#" className="border border-[#3C3C3C] p-3 rounded-full hover:bg-[#222222] transition-colors flex items-center justify-center">
                <Image src="/youtube-02.png" alt="YouTube" width={24} height={24} />
              </Link>
              <Link href="#" className="border border-[#3C3C3C] p-3 rounded-full hover:bg-[#222222] transition-colors flex items-center justify-center">
                <Image src="/facebook-02.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="border border-[#3C3C3C] p-3 rounded-full hover:bg-[#222222] transition-colors flex items-center justify-center">
                <Image src="/new-twitter.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" className="border border-[#3C3C3C] p-3 rounded-full hover:bg-[#222222] transition-colors flex items-center justify-center">
                <Image src="/linkedin-02.png" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="border border-[#3C3C3C] p-3 rounded-full hover:bg-[#222222] transition-colors flex items-center justify-center">
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Campus Locations */}
        <motion.div
          variants={textContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "GOBELINS Campus Paris St-Marcel",
                address: "73, boulevard Saint-Marcel 75013, Paris",
                phone: "+33 1 40 79 92 79",
              },
              {
                title: "GOBELINS Campus Paris Gambetta",
                address: "247, Avenue Gambetta 75020, Paris",
                phone: "+33 1 40 79 92 79",
              },
              {
                title: "GOBELINS Campus Annecy",
                address: "3, Esplanade Augustin Aussedat 74960, Annecy",
                phone: "+33 4 50 33 72 24",
              },
            ].map((campus) => (
              <motion.div key={campus.title} variants={textItemVariants}>
                <h4 className="text-lg font-medium mb-3">{campus.title}</h4>
                <p className="text-gray-400 mb-2">{campus.address}</p>
                <p className="text-gray-400">{campus.phone}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          variants={textContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 md:mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Image
                src="/GobelinsParis_Blanc.svg fill.png"
                alt="Gobelins Paris Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="grid gap-4 justify-items-center sm:justify-items-start">
              <Image
                src="/Calque_1.png"
                alt="Region Ile de France"
                width={200}
                height={100}
                className="object-contain"
              />
              <Image
                src="/Frame 1410136742.png"
                alt="CCI Paris"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center sm:justify-end">
              <p className="text-gray-400 text-sm sm:text-base">© Copyright GOBELINS Paris 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
