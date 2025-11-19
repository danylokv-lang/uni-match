"use client";
import { useQuiz } from '@/context/QuizContext'
import { byCountry } from '@/data'
import { rankMatches, topPerCountry } from '@/lib/matching'
import MatchRadar from '@/components/MatchRadar'
import { UniversityCard } from '@/components/UniversityCard'
import { ALL_UNIVERSITIES, DATASETS } from '@/data'
import Link from 'next/link'

export default function ResultsPage() {
  const { answers } = useQuiz()
  const countryList = byCountry(answers.country ?? '')
  const ranked = rankMatches(countryList, answers)
  const perCountry = topPerCountry(ALL_UNIVERSITIES, answers, 1)
  const countryName = answers.country ?? 'All Countries'

  const primary = ranked[0] || null
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold neon">🌟 Top Matches: {countryName} & Global Picks 🌍</h1>
      <p className="text-blue-200 mt-2">Based on: {answers.interests.join(', ') || 'your interests'} · Budget: {answers.budget ?? 'N/A'}</p>
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <MatchRadar uni={primary} answers={answers} />
        </div>
        <div className="flex-1 glass rounded-xl p-4">
          <h3 className="font-semibold mb-2 text-sm">Share Your Result</h3>
          <ShareCardTrigger />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Focused Matches ({countryName})</h2>
        <div className="space-y-4">
          {ranked.slice(0, 12).map((u, i) => (
            <UniversityCard key={u.slug} u={u} rank={i + 1} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">One Top Pick Per Country</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {perCountry.map((u) => (
            <UniversityCard key={u.slug} u={u} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link href="/compare" className="underline">Compare Selected Universities</Link>
      </div>
    </div>
  )
}

function ShareCardTrigger() {
  return (
    <button
      onClick={() => generateShareCard()}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-sm font-medium shadow hover:from-cyan-500 hover:to-blue-600"
    >
      Generate Shareable Image
    </button>
  )
}

function generateShareCard() {
  const el = document.createElement('canvas')
  el.width = 900
  el.height = 480
  const ctx = el.getContext('2d')!
  // Background gradient
  const g = ctx.createLinearGradient(0,0,900,480)
  g.addColorStop(0,'#0b1533')
  g.addColorStop(.5,'#12225a')
  g.addColorStop(1,'#0b1533')
  ctx.fillStyle = g
  ctx.fillRect(0,0,900,480)
  ctx.fillStyle = '#39C6FF'
  ctx.font = '700 40px Segoe UI, sans-serif'
  ctx.fillText('Global UniMatch', 40, 70)
  ctx.font = '500 22px Segoe UI, sans-serif'
  ctx.fillStyle = '#FFD479'
  ctx.fillText('Your Top University Matches', 40, 110)
  // Pull quiz answers from window (best effort)
  // We assume state stored in react context; for quick hack use data attributes later if needed.
  ctx.fillStyle = '#cfe4ff'
  ctx.font = '400 16px Segoe UI, sans-serif'
  ctx.fillText('Share this card to celebrate your academic journey! ❄️', 40, 150)
  // Decorative snow dots
  for (let i=0;i<160;i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.8+0.2})`
    ctx.beginPath()
    ctx.arc(Math.random()*900, Math.random()*480, Math.random()*2+1, 0, Math.PI*2)
    ctx.fill()
  }
  const url = el.toDataURL('image/png')
  const link = document.createElement('a')
  link.download = 'unimatch-share.png'
  link.href = url
  link.click()
}
