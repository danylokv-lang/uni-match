import { ALL_UNIVERSITIES } from '@/data'
import Link from 'next/link'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return ALL_UNIVERSITIES.map((uni) => ({
    slug: uni.slug,
  }))
}

export default function UniversityProfile({ params }: Props) {
  const uni = ALL_UNIVERSITIES.find((u) => u.slug === params.slug)
  if (!uni) return <div className="text-red-300">University not found.</div>

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/results" className="underline">← Back to results</Link>
      <h1 className="text-3xl font-bold mt-3">{uni.university_name_en}</h1>
      <div className="text-blue-200">{uni.city_en} • {uni.country_en}</div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <Section title="Programs Offered">
          <ul className="list-disc ml-5">
            <li>IT/Computer Science</li>
            <li>Business & Finance</li>
            <li>Engineering</li>
            <li>Design/Arts</li>
            <li>Medicine/Health Sciences</li>
          </ul>
        </Section>
        <Section title="Admissions & Costs">
          <ul className="space-y-1">
            <li>Tuition (est.): ${uni.tuition_annual_min_usd.toLocaleString()}</li>
            <li>IELTS: {uni.english_req_ielts}+</li>
            <li>Scholarships: {uni.scholarships_available ? 'Available' : 'Limited'}</li>
            <li>Cost of Living: {uni.cost_of_living_index}/10</li>
          </ul>
        </Section>
        <Section title="Why It\'s a Match">
          <p>{uni.match_reason_text}</p>
        </Section>
        <Section title="Student Reviews (Demo)">
          <ul className="list-disc ml-5">
            <li>Great faculty and strong career support.</li>
            <li>Vibrant campus life and opportunities.</li>
          </ul>
        </Section>
      </div>

      <div className="mt-6">
        <a className="underline" href={uni.official_website_url} target="_blank" rel="noreferrer">Visit Official University Site</a>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-deep-800 p-5">
      <div className="font-semibold mb-2">{title}</div>
      {children}
    </div>
  )
}
