"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Duration matches Preloader animation

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <HeroSection />
          <ServicesSection />
          <SkillsSection />
          <ProjectsSection />
          <TeamSection />
          <ContactSection />
          <ScrollToTop />
          <Footer />
        </main>
      )}
    </>
  );
}
