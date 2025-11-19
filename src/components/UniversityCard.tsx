import Link from 'next/link'
import type { University } from '@/data/types'
import { useCompare } from '@/context/CompareContext'

export function UniversityCard({ u, rank }: { u: University; rank?: number }) {
  const { selected, toggle } = useCompare()
  const checked = selected.includes(u.slug)
  return (
    <div className="glass rounded-xl border border-white/10 p-5">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">{typeof rank === 'number' ? `${rank}. ` : ''}{u.university_name_en}</div>
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" checked={checked} onChange={() => toggle(u.slug)} />
          Add to Compare
        </label>
      </div>
      <div className="text-blue-200 mt-1">{u.city_en}</div>
      <div className="mt-3 grid md:grid-cols-4 gap-3 text-sm">
        <Info label="Est. Annual Tuition" value={`$${u.tuition_annual_min_usd.toLocaleString()}`} />
        <Info label="Student Satisfaction" value={`${u.student_satisfaction_percent}%`} />
        <Info label="Why It's a Match" value={u.match_reason_text} className="md:col-span-2" />
      </div>
      <div className="mt-4 flex gap-3">
        <Link href={`/university/${u.slug}`} className="underline">View Profile</Link>
        <a href={u.official_website_url} target="_blank" rel="noreferrer" className="underline">Visit Official Site</a>
      </div>
    </div>
  )
}

function Info({ label, value, className = '' }: { label: string; value: string; className?: string }) {
  return (
    <div className={`rounded-lg bg-deep-700/60 border border-white/10 p-3 ${className}`}>
      <div className="text-blue-300 text-xs">{label}</div>
      <div className="text-white">{value}</div>
    </div>
  )
}
