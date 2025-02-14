"use client";

import { useState, useEffect } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import HomePage from "@/components/HomePage";
import AboutUs from "@/components/AboutUs";
import Achievement from "@/components/Achievement";
import Programmes from "@/components/Programmes";
import Alumni from "@/components/Alumni";
import NewsAndUpdates from "@/components/NewsAndUpdates";
import UpcomingEvents from "@/components/UpcomingEvents";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  // Handle the transition between logo and main content
  useEffect(() => {
    if (logoAnimationComplete) {
      const timer = setTimeout(() => {
        setShowMainContent(true);
      }, 500); // Add a small delay before showing main content
      return () => clearTimeout(timer);
    }
  }, [logoAnimationComplete]);

  return (
    <main className="relative">
      {!showMainContent && (
        <AnimatedLogo onAnimationComplete={() => setLogoAnimationComplete(true)} />
      )}
      
      {showMainContent && (
        <>
          <HomePage />
          <AboutUs />
          <Achievement />
          <Programmes />
          <Alumni />
          <NewsAndUpdates />
          <UpcomingEvents />
          <GetStarted />
          <Footer />
        </>
      )}
    </main>
  );
}
