"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Preloader from "@/components/Preloader"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

const HeroSection = dynamic(() => import("@/components/HeroSection"))
const ServicesSection = dynamic(() => import("@/components/ServicesSection"))
const SkillsSection = dynamic(() => import("@/components/SkillsSection"))
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"))
const TeamSection = dynamic(() => import("@/components/TeamSection"))
const ContactSection = dynamic(() => import("@/components/ContactSection"))

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
