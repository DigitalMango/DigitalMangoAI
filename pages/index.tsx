import Navigation from "@/src/components/layout/Navigation"
import HeroSection from "@/src/components/sections/HeroSection"
import ProjectsSection from "@/src/components/sections/ProjectsSection"
import ServicesSection from "@/src/components/sections/ServicesSection"
import TestimonialsSection from "@/src/components/sections/TestimonialsSection"
import ContactSection from "@/src/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
} 