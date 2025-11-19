# Global UniMatch ❄️

A festive, smart university matchmaker built with Next.js (App Router), TypeScript, and Tailwind CSS.


## Pages

- `/` Home: Holiday-themed hero with CTA.
- `/quiz` Four-step mini-bot to collect interests, budget, country, English level, and format.
- `/results` Ranked matches filtered by your answers; add up to 3 for comparison.
- `/compare` Side-by-side comparison of selected universities.
- `/university/[slug]` University profile with details and external link.
- `/about`, `/blog`, `/terms`, `/privacy`, `/contact` Supporting content.

## Data & Matching (Imitation)
- Mock datasets for UK, USA, Germany, Switzerland, France, Spain, Italy, Russia/Ukraine, and Canada in `src/data/*`.
- Matching logic in `src/lib/matching.ts` filters by budget/country and ranks by subject strength, IELTS fit, scholarship availability, and cost-of-living.

## Theming
- Tailwind extended with deep-blue palette, neon blue and warm gold accents.
- Subtle snowfall animation layers via CSS.
- Neon glow utilities via shadows.

## Notes
- All data is for demonstration purposes only.
- Replace placeholder legal text with your own.

## Guides & Tips 🎁

### How to Write a Standout Admissions Essay
**1. Hook Early:** Start with a vivid moment (challenge, curiosity spark) instead of generic statements like “I have always loved…”.
**2. Show Growth Arc:** Pick a narrow story that moves from obstacle → action → reflection → changed perspective.
**3. Concrete > Abstract:** Replace “I improved my leadership” with specifics: team size, decision you made, measurable outcome.
**4. Voice Consistency:** Read aloud; remove overly formal phrasing that doesn’t sound like you (“thereupon”, “aforementioned”).
**5. Depth Over Breadth:** Two or three well‑developed experiences beat a resume recap. Each paragraph should answer: What happened? Why did it matter? What did you learn? How does it connect to future aims?
**6. Show Fit:** Tie one sentence to how the target university ecosystem (labs, centers, culture, location) accelerates your next step.
**7. Revision Strategy:**
- Pass 1: Structure only (outline transitions).  
- Pass 2: Precision (trim filler, tighten verbs).  
- Pass 3: Authenticity (does every line sound like you?).  
**8. Avoid Common Pitfalls:** Trauma without reflection, generic admiration of the school, inflated claims without evidence, excessive quotes.
**9. Micro-Checklist Before Submission:** Active verbs, varied sentence length, no cliché openers, 0 spelling errors, clear future bridge.

### Visa Requirements for 2026 (High-Level Overview)
> Always verify with official immigration / consular sites—policies evolve. This is orientation only.
**Core Pieces (Most Study Visas):**
- Offer letter / Confirmation of Enrollment.
- Proof of funds (tuition + living; often 9–12 months). Bank statements, scholarship letters, sponsor affidavits.
- Valid passport (typically ≥6 months beyond intended stay).
- Language proficiency evidence (IELTS/TOEFL) if not in admission bundle.
- Health insurance (mandatory in EU, Australia, Korea; recommended elsewhere).
- Biometrics & medical exam (Canada, UK TB test in some regions, Australia health checks, Korea may require health certificate).  
**Country Nuances (Snapshot):**
- UK: CAS number + Immigration Health Surcharge; financial requirement ~28 days seasoned funds.
- Canada: Study Permit + potential SDS fast stream (extra upfront documentation). Proof of funds includes GIC if SDS.
- Australia: Simplified Student Visa; Genuine Student requirement; OSHC insurance compulsory.
- South Korea: D‑2 visa; may request notarized academic documents + financial support letter.
- USA: F‑1 visa (I‑20) SEVIS fee; interview emphasizes ties & intent; limited on-campus work first year.
**Timing Guidance:** Start 3–4 months before program start (earlier for peak seasons). Build a timeline: Offer → Documents → Financial proofs → Visa application → Biometrics/Interview → Decision → Travel prep.
**Red Flags to Avoid:** Inconsistent bank deposits without explanation, missing translations, expired medical certificates, not paying mandated fees (SEVIS/IHS), tight travel booking before approval.

### Scholarship Strategies for International Students
**1. Layer Funding Sources:** Combine university merit awards, government grants (e.g., Chevening, Fulbright), private foundations, and departmental assistantships.
**2. Calendar Mapping:** Create a spreadsheet with deadlines; many large awards close 8–10 months before intake.
**3. Eligibility Matrix:** Quickly rule out misfits (citizenship, field restrictions, degree level). Focus energy where probability > baseline.
**4. Leverage Micro-Scholarships:** Smaller $1k–$5k awards stack and often have lighter competition.
**5. Quantify Impact:** When describing achievements, include numbers (users reached, lines of research code, funds raised, hours volunteered).
**6. Recommendation Strategy:** Provide referees a one‑page brief: your goals, 3 bullet achievements, program name, deadline, submission instructions.
**7. Reuse Core Narratives:** Maintain a master doc of your key stories; adapt framing to each scholarship’s mission (leadership vs. innovation vs. community resilience).
**8. Early Skill Signals:** Publish a small project (GitHub, design portfolio, research poster) to demonstrate initiative.
**9. Financial Documentation Prep:** Keep statements, translated transcripts, income proofs scanned and organized for rapid reuse.
**10. Post-Award Obligations:** Track reporting requirements or service commitments; failing them can impact future funding.

### Fast Reference Checklists
**Admissions Essay Final 8:** Hook, arc, specifics, voice, fit, reflection, active verbs, clean mechanics.
**Visa Packet Core 7:** Offer letter, funds proof, passport validity, language proof, insurance, biometrics/medical (if needed), fee receipts.
**Scholarship Prep 6:** Deadline map, eligibility matrix, referee briefs, quantified CV, core story bank, document vault.

### Disclaimer
Information provided is a general guide and may change; always consult official university and governmental sources for definitive requirements.
