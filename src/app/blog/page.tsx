export default function BlogPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <h1 className="text-3xl font-bold neon">Guides & Tips</h1>

      <section className="rounded-xl border border-white/10 p-6 bg-deep-800">
        <h2 className="text-2xl font-semibold">How to Write a Standout Admissions Essay</h2>
        <ul className="mt-3 list-disc list-inside space-y-2 text-blue-100">
          <li><b>Hook early:</b> open with a vivid moment, not a cliché.</li>
          <li><b>Growth arc:</b> obstacle → action → reflection → change.</li>
          <li><b>Be concrete:</b> quantify results and decisions you made.</li>
          <li><b>Use your voice:</b> read aloud and cut stiff phrasing.</li>
          <li><b>Depth over breadth:</b> 2–3 stories, each with meaning and impact.</li>
          <li><b>Show fit:</b> name labs, centers, or communities you’ll join.</li>
          <li><b>Revision passes:</b> structure → precision → authenticity.</li>
          <li><b>Avoid pitfalls:</b> generic praise, unprocessed trauma, empty claims.</li>
        </ul>
        <div className="mt-3 text-sm text-blue-200">
          Final checklist: active verbs, varied rhythm, no clichés, zero typos, clear link to goals.
        </div>
      </section>

      <section className="rounded-xl border border-white/10 p-6 bg-deep-800">
        <h2 className="text-2xl font-semibold">Visa Requirements for 2026 (Overview)</h2>
        <p className="mt-2 text-blue-200">Always verify on official consular sites; this is orientation only.</p>
        <h3 className="mt-3 font-semibold">Core documents (most countries)</h3>
        <ul className="mt-2 list-disc list-inside space-y-2 text-blue-100">
          <li>Offer/Enrollment letter and valid passport.</li>
          <li>Proof of funds (tuition + 9–12 months living).</li>
          <li>Language proof (IELTS/TOEFL) if required by visa.</li>
          <li>Health insurance; biometrics/medical where applicable.</li>
        </ul>
        <h3 className="mt-4 font-semibold">Country snapshots</h3>
        <ul className="mt-2 list-disc list-inside space-y-2 text-blue-100">
          <li><b>UK:</b> CAS + IHS; funds seasoned ~28 days.</li>
          <li><b>Canada:</b> Study Permit; SDS stream may use GIC.</li>
          <li><b>Australia:</b> Genuine Student; OSHC required.</li>
          <li><b>South Korea:</b> D‑2; notarized docs and financial proof.</li>
          <li><b>USA:</b> F‑1 (I‑20) + SEVIS; interview focuses on ties/intent.</li>
        </ul>
        <div className="mt-3 text-sm text-blue-200">Start 3–4 months before intake; sequence: offer → docs → funds → apply → biometrics/interview → decision.</div>
      </section>

      <section className="rounded-xl border border-white/10 p-6 bg-deep-800">
        <h2 className="text-2xl font-semibold">Scholarship Strategies for International Students</h2>
        <ul className="mt-3 list-disc list-inside space-y-2 text-blue-100">
          <li><b>Layer sources:</b> university merit + government + private + assistantships.</li>
          <li><b>Deadline map:</b> many close 8–10 months pre‑intake.</li>
          <li><b>Eligibility matrix:</b> focus where odds are realistic.</li>
          <li><b>Micro‑awards stack:</b> $1k–$5k with lighter competition.</li>
          <li><b>Quantify impact:</b> add metrics to achievements.</li>
          <li><b>Referees brief:</b> 1‑pager with goals and top 3 wins.</li>
          <li><b>Story bank:</b> reuse core narratives, tailor to mission.</li>
          <li><b>Docs vault:</b> keep scans/translations ready.</li>
        </ul>
      </section>
    </div>
  )
}
