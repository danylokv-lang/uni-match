import type { University } from '@/data/types'

export function CompareTable({ items }: { items: University[] }) {
  const headers = ['Global Ranking','IT/CS Rank','Annual Tuition','Student Satisfaction','Scholarship Avail.','Cost of Living']

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[700px] w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-3 border-b border-white/10">Metric</th>
            {items.map((u) => (
              <th key={u.slug} className="text-left p-3 border-b border-white/10">{u.university_name_en}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          <Row label={headers[0]} values={items.map((u) => `Top ${u.global_ranking}`)} />
          <Row label={headers[1]} values={items.map((u) => `${rankLabel(u)}`)} />
          <Row label={headers[2]} values={items.map((u) => `$${u.tuition_annual_min_usd.toLocaleString()}`)} />
          <Row label={headers[3]} values={items.map((u) => `${u.student_satisfaction_percent}%`)} />
          <Row label={headers[4]} values={items.map((u) => (u.scholarships_available ? 'High' : 'Limited'))} />
          <Row label={headers[5]} values={items.map((u) => `${u.cost_of_living_index}/10`)} />
        </tbody>
      </table>
    </div>
  )
}

function rankLabel(u: University) {
  const best = Math.max(u.score_it_cs, u.score_engineering, u.score_business, u.score_medicine, u.score_design_arts)
  if (best === u.score_it_cs) return 'IT/CS: Strong'
  if (best === u.score_engineering) return 'Engineering: Strong'
  if (best === u.score_business) return 'Business: Strong'
  if (best === u.score_medicine) return 'Medicine: Strong'
  return 'Design/Arts: Strong'
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr>
      <td className="p-3 border-b border-white/10 text-blue-300">{label}</td>
      {values.map((v, idx) => (
        <td key={idx} className="p-3 border-b border-white/10">{v}</td>
      ))}
    </tr>
  )
}
