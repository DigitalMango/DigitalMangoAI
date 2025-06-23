import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/src/components/layout/Navigation"
import { ThemeProvider } from "@/src/components/layout/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigitalMango - Agencia de Desarrollo Web",
  description: "Transformamos ideas en experiencias digitales excepcionales. Desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
