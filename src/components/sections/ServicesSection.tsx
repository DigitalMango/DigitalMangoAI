"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Code, Smartphone, Palette, Zap, Database, Shield, Brain, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Diseño Web",
    description: "Diseños impresionantes centrados en el usuario que cautivan y convierten visitantes en clientes.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Brain,
    title: "Integraciones de IA",
    description: "Soluciones de IA de vanguardia que automatizan procesos y mejoran las experiencias de usuario.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Paneles Personalizados",
    description: "Paneles basados en datos que proporcionan información accionable para el crecimiento empresarial.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimiza flujos de trabajo con soluciones de automatización inteligente que ahorran tiempo y recursos.",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Code,
    title: "Desarrollo Full-Stack",
    description: "Soluciones de desarrollo integrales usando las últimas tecnologías y mejores prácticas.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias de usuario excepcionales.",
    color: "from-red-500 to-pink-600",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(57,255,20,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones digitales integrales diseñadas para elevar tu negocio a nuevas alturas
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full group hover:border-orange-500/50 transition-all duration-500">
                <CardContent className="p-8">
                  {/* Icon */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-r ${service.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400 mb-6">¿Listo para transformar tu presencia digital?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hablemos de Tu Proyecto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
