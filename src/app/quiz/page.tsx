/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from 'next/navigation'
import { useQuiz } from '@/context/QuizContext'
import { NeonButton } from '@/components/NeonButton'
import GlassPanel from '@/components/GlassPanel'

const interests = [
  'Mathematics',
  'Design/Arts',
  'IT/Computer Science',
  'Medicine',
  'Arts',
  'Business',
  'Engineering',
  'Law',
  'Political Science / IR',
  'Economics / Finance',
  'Architecture',
  'Psychology',
  'Data Science / AI',
  'Hospitality / Tourism'
] as const
const budgets = ['$5k-$15k', '$15k-$30k', '$30k+'] as const
const countries = ['USA','Canada','UK','Germany','Australia','South Korea','France','Spain','Italy','Switzerland','Russia','Ukraine','Canada']
const englishLevels = ['High','Medium','Low'] as const
const formats = ['Full-time','Part-time','Online'] as const

export default function QuizPage() {
  const router = useRouter()
  const { answers, setAnswers } = useQuiz()

  const toggleInterest = (v: string) => {
    const exists = answers.interests.includes(v as any)
    setAnswers({ interests: exists ? answers.interests.filter((i) => i !== v) : [...answers.interests, v as any] })
  }

  const submit = () => {
    router.push('/results')
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold neon text-center">Find Your Perfect Match in 4 Easy Steps!</h1>

      {/* Step 1 */}
      <GlassPanel className="mt-8 p-6">
        <h2 className="text-xl font-semibold">1. Interests</h2>
        <p className="text-blue-200">First, what subjects truly ignite your passion?</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((i) => (
            <button key={i} onClick={() => toggleInterest(i)} className={`px-3 py-2 rounded border ${answers.interests.includes(i as any) ? 'bg-neon-blue/20 border-neon-blue' : 'bg-deep-700 border-white/10'}`}>
              {i}
            </button>
          ))}
        </div>
      </GlassPanel>

      {/* Step 2 */}
      <GlassPanel className="mt-6 p-6">
        <h2 className="text-xl font-semibold">2. Budget</h2>
        <p className="text-blue-200">What\'s your comfortable annual tuition budget?</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button key={b} onClick={() => setAnswers({ budget: b })} className={`px-3 py-2 rounded border ${answers.budget === b ? 'bg-neon-gold/20 border-neon-gold' : 'bg-deep-700 border-white/10'}`}>
              {b}
            </button>
          ))}
        </div>
      </GlassPanel>

      {/* Step 3 */}
      <GlassPanel className="mt-6 p-6">
        <h2 className="text-xl font-semibold">3. Location</h2>
        <p className="text-blue-200">Where do you dream of studying?</p>
        <div className="mt-4">
          <select value={answers.country ?? ''} onChange={(e) => setAnswers({ country: e.target.value })} className="bg-deep-700 border border-white/10 rounded p-2 w-full">
            <option value="">Select a country...</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </GlassPanel>

      {/* Step 4 */}
      <GlassPanel className="mt-6 p-6">
        <h2 className="text-xl font-semibold">4. English & Format</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <div className="font-medium mb-2">English Proficiency</div>
            <div className="flex flex-wrap gap-2">
              {englishLevels.map((e) => (
                <button key={e} onClick={() => setAnswers({ english: e })} className={`px-3 py-2 rounded border ${answers.english === e ? 'bg-neon-blue/20 border-neon-blue' : 'bg-deep-700 border-white/10'}`}>{e}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium mb-2">Preferred Study Format</div>
            <div className="flex flex-wrap gap-2">
              {formats.map((f) => (
                <button key={f} onClick={() => setAnswers({ format: f })} className={`px-3 py-2 rounded border ${answers.format === f ? 'bg-neon-gold/20 border-neon-gold' : 'bg-deep-700 border-white/10'}`}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>

      <div className="mt-8 text-center">
        <NeonButton onClick={submit} variant="primary" size="lg" pulse glow="gold">UNWRAP YOUR MATCHES NOW 🎁</NeonButton>
      </div>
    </div>
  )
}
