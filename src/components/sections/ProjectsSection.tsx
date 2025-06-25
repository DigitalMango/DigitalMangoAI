"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { useRef } from "react"

const projects = [
  {
    id: 1,
    name: "Ruidito.art",
    description: "Portafolio audiovisual de Rodrigo Chávez, cineasta y director de fotografía. Narrativas visuales, fotografía y videos con enfoque artístico y profesional.",
    video: "/ruidito-tour.mp4",
    url: "https://ruidito.art/",
    color: "from-gray-900 to-black",
    gradient: "from-gray-800 via-gray-900 to-black",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 2,
    name: "Paredes Realty",
    description: "Sitio web inmobiliario para Paredes Realty, especializado en compra y venta de propiedades en Nebraska, con atención personalizada y testimonios de clientes.",
    video: "/paredesrealty-tour.mp4",
    url: "https://paredesrealty.homes/",
    color: "from-green-900 to-green-700",
    gradient: "from-green-800 via-green-900 to-green-700",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 3,
    name: "Grupo Imnova",
    description: "Plataforma de bienes raíces para Grupo Imnova, donde puedes encontrar propiedades exclusivas y recibir asesoría experta para encontrar tu hogar ideal.",
    video: "/imnova-tour.mp4",
    url: "https://imnova.homes/",
    color: "from-blue-900 to-blue-700",
    gradient: "from-blue-800 via-blue-900 to-blue-700",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const projectRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  })

  const containerY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [300, 0, 0, -300])
  const containerScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])
  const containerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const imageY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [200, 0, 0, -200])
  const imageScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.5, 1, 1, 0.5])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const textY = useTransform(scrollYProgress, [0, 0.5, 0.5, 1], [150, 0, 0, -150])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])

  return (
    <div
      ref={projectRef}
      className="container mx-auto px-6"
    >
      <motion.div
        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
        style={{
          y: containerY,
          scale: containerScale,
          opacity: containerOpacity
        }}
      >
        {/* Project Image with Stagger Animation */}
        <motion.div
          className="flex-1 relative group"
          style={{
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity
          }}
        >
          <motion.div
            className="relative overflow-hidden"
            style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          >
            <video
              src={project.video}
              className="w-full h-80 object-cover rounded"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            {/* Gradient Overlay */}
            {project.name === "Paredes Realty" ? (
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
            )}
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-lg"
              animate={{
                borderColor: ["transparent", project.gradient.split(" ")[1], "transparent"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
        {/* Project Info with Stagger Animation */}
        <motion.div
          className="flex-1 space-y-6 text-center"
          style={{
            y: textY,
            opacity: textOpacity
          }}
        >
          {/* Title with Stagger Effect */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 140, 66, 0.5)",
                  "0 0 40px rgba(255, 140, 66, 0.8)",
                  "0 0 20px rgba(255, 140, 66, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {project.name}
            </motion.h3>
          </motion.div>
          {/* Description with Stagger Effect */}
          <motion.p
            className="text-lg text-gray-400 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {project.description}
          </motion.p>
          {/* Tech Stack with Stagger Animation */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {project.tech && project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  borderColor: "#FF8C42",
                  boxShadow: "0 0 20px rgba(255, 140, 66, 0.3)",
                }}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 50,
                  rotateX: -90
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: 0
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + techIndex * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </motion.div>
          {/* Button with Stagger Effect */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-72 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold border-0 shadow-lg transition-all duration-300"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Ver página
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        {/* Section Header */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  background: "linear-gradient(90deg, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #f97316)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nuestros Proyectos
              </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Descubre cómo transformamos ideas en obras maestras digitales que generan resultados
              </p>
            </motion.div>
          </div>
        </div>
        {/* Projects Container */}
        <div className="space-y-32 pb-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
