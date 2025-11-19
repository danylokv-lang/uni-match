import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { QuizProvider } from '@/context/QuizContext'
import { CompareProvider } from '@/context/CompareContext'
import ChristmasLights from '@/components/ChristmasLights'
import FestiveOrnaments from '@/components/FestiveOrnaments'
import SnowflakeField from '@/components/SnowflakeField'
import AuroraBackground from '@/components/AuroraBackground'
import ParallaxHills from '@/components/ParallaxHills'
import Script from 'next/script'
import Starfield from '@/components/Starfield'

export const metadata: Metadata = {
  title: 'Global UniMatch — Unwrap Your Perfect University Match',
  description: 'Find your dream university with a festive, smart matcher.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative">
        <Script id="pwa-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(e=>console.warn('SW reg failed', e));
              });
            }
          `}
        </Script>
        <AuroraBackground />
        <Starfield />
        <SnowflakeField />
        <ChristmasLights />
        <div className="snow-layer slow" />
        <div className="snow-layer medium" />
        <div className="snow-layer fast" />
        <QuizProvider>
          <CompareProvider>
            <Header />
            <FestiveOrnaments />
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </CompareProvider>
        </QuizProvider>
        <ParallaxHills />
      </body>
    </html>
  )
}
