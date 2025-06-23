"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { useRef } from "react"

const projects = [
  {
    id: 1,
    name: "Panel EcoTech",
    tech: ["React", "IA", "Tailwind", "Node.js"],
    description: "Plataforma de seguimiento de sostenibilidad impulsada por IA que revoluciona la forma en que las empresas monitorean su impacto ambiental.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='eco' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230f172a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23eco)'/%3E%3C!-- Header --%3E%3Crect x='0' y='0' width='800' height='60' fill='%2322c55e'/%3E%3Ctext x='20' y='35' font-family='Arial' font-size='18' fill='white' font-weight='bold'%3EEcoTech Dashboard%3C/text%3E%3C!-- Sidebar --%3E%3Crect x='0' y='60' width='200' height='540' fill='%231e293b'/%3E%3Crect x='20' y='80' width='160' height='40' fill='%2322c55e' rx='8'/%3E%3Ctext x='30' y='105' font-family='Arial' font-size='14' fill='white'%3E📊 Dashboard%3C/text%3E%3Crect x='20' y='130' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='155' font-family='Arial' font-size='14' fill='white'%3E🌱 Sostenibilidad%3C/text%3E%3Crect x='20' y='180' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='205' font-family='Arial' font-size='14' fill='white'%3E📈 Reportes%3C/text%3E%3C!-- Main Content --%3E%3Crect x='220' y='80' width='560' height='120' fill='%2322c55e' rx='12'/%3E%3Ctext x='240' y='110' font-family='Arial' font-size='24' fill='white' font-weight='bold'%3EImpacto Ambiental%3C/text%3E%3Ctext x='240' y='140' font-family='Arial' font-size='16' fill='white'%3E-45% CO2 este mes%3C/text%3E%3Ctext x='240' y='160' font-family='Arial' font-size='16' fill='white'%3E+23% Eficiencia energética%3C/text%3E%3C!-- Charts --%3E%3Crect x='220' y='220' width='270' height='150' fill='%231e293b' rx='12'/%3E%3Ctext x='240' y='250' font-family='Arial' font-size='16' fill='white'%3EConsumo Energético%3C/text%3E%3Crect x='240' y='270' width='30' height='80' fill='%2322c55e' rx='4'/%3E%3Crect x='280' y='290' width='30' height='60' fill='%2310b981' rx='4'/%3E%3Crect x='320' y='280' width='30' height='70' fill='%23059669' rx='4'/%3E%3Crect x='360' y='260' width='30' height='90' fill='%230d9488' rx='4'/%3E%3Crect x='400' y='300' width='30' height='50' fill='%2306b6d4' rx='4'/%3E%3Crect x='220' y='390' width='270' height='150' fill='%231e293b' rx='12'/%3E%3Ctext x='240' y='420' font-family='Arial' font-size='16' fill='white'%3EHuella de Carbono%3C/text%3E%3Ccircle cx='350' cy='480' r='40' fill='none' stroke='%2322c55e' stroke-width='8' stroke-dasharray='251.2' stroke-dashoffset='125.6'/%3E%3Ctext x='350' y='485' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3E50%25%3C/text%3E%3C!-- Right Panel --%3E%3Crect x='510' y='220' width='270' height='320' fill='%231e293b' rx='12'/%3E%3Ctext x='530' y='250' font-family='Arial' font-size='16' fill='white'%3EAlertas IA%3C/text%3E%3Crect x='530' y='270' width='230' height='60' fill='%23dc2626' rx='8'/%3E%3Ctext x='545' y='295' font-family='Arial' font-size='12' fill='white'%3E⚠️ Alto consumo en Sector A%3C/text%3E%3Ctext x='545' y='310' font-family='Arial' font-size='12' fill='white'%3ERecomendación: Optimizar HVAC%3C/text%3E%3Crect x='530' y='340' width='230' height='60' fill='%23f59e0b' rx='8'/%3E%3Ctext x='545' y='365' font-family='Arial' font-size='12' fill='white'%3E⚠️ Baja eficiencia Panel B%3C/text%3E%3Ctext x='545' y='380' font-family='Arial' font-size='12' fill='white'%3ERevisar mantenimiento%3C/text%3E%3Crect x='530' y='410' width='230' height='60' fill='%2322c55e' rx='8'/%3E%3Ctext x='545' y='435' font-family='Arial' font-size='12' fill='white'%3E✅ Objetivos cumplidos%3C/text%3E%3Ctext x='545' y='450' font-family='Arial' font-size='12' fill='white'%3EMeta mensual alcanzada%3C/text%3E%3C/svg%3E",
    color: "from-green-500 to-emerald-600",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
  },
  {
    id: 2,
    name: "FinanceFlow",
    tech: ["Next.js", "TypeScript", "Prisma", "IA"],
    description: "Sistema inteligente de gestión financiera que transforma la manera en que las empresas manejan sus finanzas con automatización avanzada.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='finance' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230f172a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23finance)'/%3E%3C!-- Header --%3E%3Crect x='0' y='0' width='800' height='60' fill='%233b82f6'/%3E%3Ctext x='20' y='35' font-family='Arial' font-size='18' fill='white' font-weight='bold'%3EFinanceFlow Pro%3C/text%3E%3C!-- Sidebar --%3E%3Crect x='0' y='60' width='200' height='540' fill='%231e293b'/%3E%3Crect x='20' y='80' width='160' height='40' fill='%233b82f6' rx='8'/%3E%3Ctext x='30' y='105' font-family='Arial' font-size='14' fill='white'%3E💰 Finanzas%3C/text%3E%3Crect x='20' y='130' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='155' font-family='Arial' font-size='14' fill='white'%3E📊 Inversiones%3C/text%3E%3Crect x='20' y='180' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='205' font-family='Arial' font-size='14' fill='white'%3E📈 Trading%3C/text%3E%3C!-- Main Content --%3E%3Crect x='220' y='80' width='560' height='120' fill='%233b82f6' rx='12'/%3E%3Ctext x='240' y='110' font-family='Arial' font-size='24' fill='white' font-weight='bold'%3E$2,847,392%3C/text%3E%3Ctext x='240' y='140' font-family='Arial' font-size='16' fill='white'%3E+12.5% este mes | +8.3% YTD%3C/text%3E%3Ctext x='240' y='160' font-family='Arial' font-size='16' fill='white'%3E📈 23 transacciones exitosas%3C/text%3E%3C!-- Charts --%3E%3Crect x='220' y='220' width='270' height='150' fill='%231e293b' rx='12'/%3E%3Ctext x='240' y='250' font-family='Arial' font-size='16' fill='white'%3EFlujo de Caja%3C/text%3E%3Cpolyline points='240,350 280,320 320,340 360,300 400,310 440,280 480,290' fill='none' stroke='%233b82f6' stroke-width='3'/%3E%3Ccircle cx='240' cy='350' r='4' fill='%233b82f6'/%3E%3Ccircle cx='280' cy='320' r='4' fill='%233b82f6'/%3E%3Ccircle cx='320' cy='340' r='4' fill='%233b82f6'/%3E%3Ccircle cx='360' cy='300' r='4' fill='%233b82f6'/%3E%3Ccircle cx='400' cy='310' r='4' fill='%233b82f6'/%3E%3Ccircle cx='440' cy='280' r='4' fill='%233b82f6'/%3E%3Ccircle cx='480' cy='290' r='4' fill='%233b82f6'/%3E%3Crect x='220' y='390' width='270' height='150' fill='%231e293b' rx='12'/%3E%3Ctext x='240' y='420' font-family='Arial' font-size='16' fill='white'%3EDistribución de Activos%3C/text%3E%3Crect x='240' y='440' width='40' height='80' fill='%233b82f6' rx='4'/%3E%3Ctext x='250' y='530' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E40%25%3C/text%3E%3Crect x='290' y='460' width='40' height='60' fill='%232563eb' rx='4'/%3E%3Ctext x='300' y='530' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E30%25%3C/text%3E%3Crect x='330' y='470' width='40' height='50' fill='%231d4ed8' rx='4'/%3E%3Ctext x='340' y='530' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E25%25%3C/text%3E%3Crect x='370' y='480' width='40' height='40' fill='%231e40af' rx='4'/%3E%3Ctext x='380' y='530' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E5%25%3C/text%3E%3C!-- Right Panel --%3E%3Crect x='510' y='220' width='270' height='320' fill='%231e293b' rx='12'/%3E%3Ctext x='530' y='250' font-family='Arial' font-size='16' fill='white'%3EAlertas IA%3C/text%3E%3Crect x='530' y='270' width='230' height='60' fill='%2322c55e' rx='8'/%3E%3Ctext x='545' y='295' font-family='Arial' font-size='12' fill='white'%3E✅ Oportunidad de inversión%3C/text%3E%3Ctext x='545' y='310' font-family='Arial' font-size='12' fill='white'%3ETech stocks +15% potencial%3C/text%3E%3Crect x='530' y='340' width='230' height='60' fill='%23f59e0b' rx='8'/%3E%3Ctext x='545' y='365' font-family='Arial' font-size='12' fill='white'%3E⚠️ Riesgo detectado%3C/text%3E%3Ctext x='545' y='380' font-family='Arial' font-size='12' fill='white'%3ERevisar portfolio crypto%3C/text%3E%3Crect x='530' y='410' width='230' height='60' fill='%23dc2626' rx='8'/%3E%3Ctext x='545' y='435' font-family='Arial' font-size='12' fill='white'%3E🚨 Mercado volátil%3C/text%3E%3Ctext x='545' y='450' font-family='Arial' font-size='12' fill='white'%3EConsiderar hedge%3C/text%3E%3C/svg%3E",
    color: "from-blue-500 to-cyan-600",
    gradient: "from-blue-400 via-cyan-500 to-indigo-600",
  },
  {
    id: 3,
    name: "CreativeStudio",
    tech: ["React", "Three.js", "WebGL", "IA"],
    description: "Plataforma de colaboración de diseño 3D que redefine la creatividad digital con herramientas avanzadas de renderizado.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='creative' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230f172a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23creative)'/%3E%3C!-- Header --%3E%3Crect x='0' y='0' width='800' height='60' fill='%238b5cf6'/%3E%3Ctext x='20' y='35' font-family='Arial' font-size='18' fill='white' font-weight='bold'%3ECreativeStudio 3D%3C/text%3E%3C!-- Sidebar --%3E%3Crect x='0' y='60' width='200' height='540' fill='%231e293b'/%3E%3Crect x='20' y='80' width='160' height='40' fill='%238b5cf6' rx='8'/%3E%3Ctext x='30' y='105' font-family='Arial' font-size='14' fill='white'%3E🎨 Proyectos%3C/text%3E%3Crect x='20' y='130' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='155' font-family='Arial' font-size='14' fill='white'%3E🔧 Herramientas%3C/text%3E%3Crect x='20' y='180' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='205' font-family='Arial' font-size='14' fill='white'%3E👥 Colaboración%3C/text%3E%3C!-- 3D Canvas --%3E%3Crect x='220' y='80' width='560' height='400' fill='%231e293b' rx='12'/%3E%3Ctext x='240' y='110' font-family='Arial' font-size='16' fill='white'%3ECanvas 3D - Proyecto: Casa Moderna%3C/text%3E%3C!-- 3D Elements --%3E%3C!-- House Base --%3E%3Crect x='300' y='350' width='200' height='100' fill='%23a855f7'/%3E%3C!-- Roof --%3E%3Cpolygon points='300,350 400,300 500,350' fill='%237c3aed'/%3E%3C!-- Windows --%3E%3Crect x='320' y='370' width='30' height='40' fill='%2306b6d4'/%3E%3Crect x='370' y='370' width='30' height='40' fill='%2306b6d4'/%3E%3Crect x='420' y='370' width='30' height='40' fill='%2306b6d4'/%3E%3C!-- Door --%3E%3Crect x='370' y='400' width='20' height='50' fill='%23a16207'/%3E%3C!-- Trees --%3E%3Ccircle cx='280' cy='380' r='20' fill='%2322c55e'/%3E%3Crect x='275' y='400' width='10' height='30' fill='%23a16207'/%3E%3Ccircle cx='520' cy='380' r='20' fill='%2322c55e'/%3E%3Crect x='515' y='400' width='10' height='30' fill='%23a16207'/%3E%3C!-- Tools Panel --%3E%3Crect x='220' y='500' width='560' height='100' fill='%23374151' rx='8'/%3E%3Ctext x='240' y='520' font-family='Arial' font-size='14' fill='white'%3EHerramientas:%3C/text%3E%3Crect x='240' y='530' width='40' height='40' fill='%238b5cf6' rx='8'/%3E%3Ctext x='250' y='555' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3EMove%3C/text%3E%3Crect x='290' y='530' width='40' height='40' fill='%237c3aed' rx='8'/%3E%3Ctext x='300' y='555' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3ERotate%3C/text%3E%3Crect x='340' y='530' width='40' height='40' fill='%236d28d9' rx='8'/%3E%3Ctext x='350' y='555' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3EScale%3C/text%3E%3Crect x='390' y='530' width='40' height='40' fill='%235b21b6' rx='8'/%3E%3Ctext x='400' y='555' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3EMaterial%3C/text%3E%3C!-- Collaboration --%3E%3Crect x='450' y='530' width='120' height='40' fill='%2322c55e' rx='8'/%3E%3Ctext x='460' y='555' font-family='Arial' font-size='12' fill='white'%3E👥 3 Colaborando%3C/text%3E%3C/svg%3E",
    color: "from-purple-500 to-pink-600",
    gradient: "from-purple-400 via-pink-500 to-violet-600",
  },
  {
    id: 4,
    name: "HealthHub",
    tech: ["Vue.js", "IA", "WebRTC", "Firebase"],
    description: "Plataforma de telemedicina con diagnóstico por IA que democratiza el acceso a la atención médica de calidad.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='health' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230f172a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23health)'/%3E%3C!-- Header --%3E%3Crect x='0' y='0' width='800' height='60' fill='%23ef4444'/%3E%3Ctext x='20' y='35' font-family='Arial' font-size='18' fill='white' font-weight='bold'%3EHealthHub Telemedicina%3C/text%3E%3C!-- Sidebar --%3E%3Crect x='0' y='60' width='200' height='540' fill='%231e293b'/%3E%3Crect x='20' y='80' width='160' height='40' fill='%23ef4444' rx='8'/%3E%3Ctext x='30' y='105' font-family='Arial' font-size='14' fill='white'%3E🏥 Pacientes%3C/text%3E%3Crect x='20' y='130' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='155' font-family='Arial' font-size='14' fill='white'%3E👨‍⚕️ Doctores%3C/text%3E%3Crect x='20' y='180' width='160' height='40' fill='%23374151' rx='8'/%3E%3Ctext x='30' y='205' font-family='Arial' font-size='14' fill='white'%3E📊 Diagnósticos%3C/text%3E%3C!-- Main Content --%3E%3Crect x='220' y='80' width='560' height='120' fill='%23ef4444' rx='12'/%3E%3Ctext x='240' y='110' font-family='Arial' font-size='24' fill='white' font-weight='bold'%3E📞 Consulta en Vivo%3C/text%3E%3Ctext x='240' y='140' font-family='Arial' font-size='16' fill='white'%3EDr. María González - Cardiología%3C/text%3E%3Ctext x='240' y='160' font-family='Arial' font-size='16' fill='white'%3E⏰ 15:30 - 16:00 | Paciente: Juan Pérez%3C/text%3E%3C!-- Video Call Interface --%3E%3Crect x='220' y='220' width='400' height='250' fill='%231e293b' rx='12'/%3E%3Ctext x='240' y='250' font-family='Arial' font-size='16' fill='white'%3EVideo Consulta%3C/text%3E%3C!-- Doctor Video --%3E%3Crect x='240' y='270' width='160' height='120' fill='%23374151' rx='8'/%3E%3Ccircle cx='320' cy='330' r='30' fill='%23ef4444'/%3E%3Ctext x='320' y='335' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3E👨‍⚕️%3C/text%3E%3Ctext x='320' y='410' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EDr. González%3C/text%3E%3C!-- Patient Video --%3E%3Crect x='420' y='270' width='160' height='120' fill='%23374151' rx='8'/%3E%3Ccircle cx='500' cy='330' r='30' fill='%23f97316'/%3E%3Ctext x='500' y='335' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3E👤%3C/text%3E%3Ctext x='500' y='410' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EJuan Pérez%3C/text%3E%3C!-- AI Diagnosis Panel --%3E%3Crect x='640' y='220' width='140' height='250' fill='%231e293b' rx='12'/%3E%3Ctext x='650' y='250' font-family='Arial' font-size='14' fill='white'%3E🤖 IA Diagnóstico%3C/text%3E%3Crect x='650' y='270' width='120' height='40' fill='%2322c55e' rx='8'/%3E%3Ctext x='660' y='295' font-family='Arial' font-size='12' fill='white'%3E✅ Ritmo normal%3C/text%3E%3Crect x='650' y='320' width='120' height='40' fill='%23f59e0b' rx='8'/%3E%3Ctext x='660' y='345' font-family='Arial' font-size='12' fill='white'%3E⚠️ Presión alta%3C/text%3E%3Crect x='650' y='370' width='120' height='40' fill='%23dc2626' rx='8'/%3E%3Ctext x='660' y='395' font-family='Arial' font-size='12' fill='white'%3E🚨 EKG anormal%3C/text%3E%3C!-- Controls --%3E%3Crect x='220' y='490' width='400' height='80' fill='%23374151' rx='8'/%3E%3Ctext x='240' y='510' font-family='Arial' font-size='14' fill='white'%3EControles:%3C/text%3E%3Crect x='240' y='520' width='50' height='40' fill='%23ef4444' rx='8'/%3E%3Ctext x='265' y='545' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E📞%3C/text%3E%3Crect x='300' y='520' width='50' height='40' fill='%23dc2626' rx='8'/%3E%3Ctext x='325' y='545' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E📹%3C/text%3E%3Crect x='360' y='520' width='50' height='40' fill='%23f59e0b' rx='8'/%3E%3Ctext x='385' y='545' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E🎤%3C/text%3E%3Crect x='420' y='520' width='50' height='40' fill='%2322c55e' rx='8'/%3E%3Ctext x='445' y='545' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E📋%3C/text%3E%3Crect x='480' y='520' width='50' height='40' fill='%233b82f6' rx='8'/%3E%3Ctext x='505' y='545' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E💾%3C/text%3E%3Crect x='540' y='520' width='50' height='40' fill='%238b5cf6' rx='8'/%3E%3Ctext x='565' y='545' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3E🤖%3C/text%3E%3C/svg%3E",
    color: "from-red-500 to-orange-600",
    gradient: "from-red-400 via-orange-500 to-amber-600",
  },
]

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
          {projects.map((project, index) => {
            const projectRef = useRef<HTMLDivElement>(null)
            const { scrollYProgress } = useScroll({
              target: projectRef,
              offset: ["start end", "end start"],
            })

            // Recapafteruse-style dramatic transforms
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
                key={project.id}
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
                      className="relative"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group-hover:border-orange-500/50 transition-all duration-500 shadow-2xl">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <motion.img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-80 object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            />
                            
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                            
                            {/* Animated Border */}
                            <motion.div
                              className="absolute inset-0 border-2 border-transparent rounded-lg"
                              animate={{
                                borderColor: ["transparent", project.gradient.split(" ")[1], "transparent"],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />

                            {/* Overlay */}
                            <motion.div
                              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              whileHover={{ opacity: 1 }}
                            >
                              <div className="flex gap-4">
                                <motion.div
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Button
                                    size="sm"
                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                                  >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Demo en Vivo
                                  </Button>
                                </motion.div>
                                <motion.div
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
                                  >
                                    <Github className="w-4 h-4 mr-2" />
                                    Código
                                  </Button>
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>

                  {/* Project Info with Stagger Animation */}
                  <motion.div 
                    className="flex-1 space-y-6"
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
                      className="flex flex-wrap gap-3 mb-8"
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
                      {project.tech.map((tech, techIndex) => (
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
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1 
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 group relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                          <span className="relative z-10">Ver Caso de Estudio</span>
                          <motion.div
                            className="ml-2 relative z-10"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
