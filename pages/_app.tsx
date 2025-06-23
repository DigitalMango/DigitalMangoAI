import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/src/components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
} 