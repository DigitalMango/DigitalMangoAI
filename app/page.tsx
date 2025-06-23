"use client"

import { useEffect, useState } from "react"
import { useScroll } from "framer-motion"
import Navigation from "@/src/components/layout/Navigation"
import HeroSection from "@/src/components/sections/HeroSection"
import ProjectsSection from "@/src/components/sections/ProjectsSection"
import ServicesSection from "@/src/components/sections/ServicesSection"
import TestimonialsSection from "@/src/components/sections/TestimonialsSection"
import ContactSection from "@/src/components/sections/ContactSection"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
