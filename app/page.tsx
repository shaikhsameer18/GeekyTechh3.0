import HeroSection from "@/components/HeroSection"
import TrustStrip from "@/components/TrustStrip"
import ServicesSection from "@/components/ServicesSection"
import ProcessSection from "@/components/ProcessSection"
import ProjectsSection from "@/components/ProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import SkillsSection from "@/components/SkillsSection"
import FounderSection from "@/components/FounderSection"
import ContactSection from "@/components/ContactSection"

/**
 * Server-rendered home. Global chrome (Header/Footer/Preloader/ScrollToTop) now
 * lives in app/layout.tsx so route transitions (app/template.tsx) don't break the
 * fixed header. This page returns only its <main> content.
 */
export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <SkillsSection />
      <FounderSection />
      <ContactSection />
    </main>
  )
}
