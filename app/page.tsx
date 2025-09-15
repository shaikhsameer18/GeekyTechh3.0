"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Preloader from "@/components/Preloader"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

const HeroSection = dynamic(() => import("@/components/HeroSection"))
const ServicesSection = dynamic(() => import("@/components/ServicesSection"))
const SkillsSection = dynamic(() => import("@/components/SkillsSection"))
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"))
const ContactSection = dynamic(() => import("@/components/ContactSection"))

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <main className="flex flex-col min-h-screen">
            <HeroSection />
            <ServicesSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  )
}
