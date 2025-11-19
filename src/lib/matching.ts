import type { University } from '@/data/types'

export type MatchInput = {
  interests: string[]
  budget: '$5k-$15k' | '$15k-$30k' | '$30k+' | null
  country: string | null
  english: 'High' | 'Medium' | 'Low' | null
  format: 'Full-time' | 'Part-time' | 'Online' | null
}

export function withinBudget(u: University, budget: MatchInput['budget']): boolean {
  if (!budget) return true
  if (budget === '$5k-$15k') return u.tuition_annual_min_usd <= 15000
  if (budget === '$15k-$30k') return u.tuition_annual_min_usd > 15000 && u.tuition_annual_min_usd <= 30000
  return u.tuition_annual_min_usd > 30000
}

function englishLevelToIelts(level: MatchInput['english']): number {
  if (level === 'High') return 7.0
  if (level === 'Medium') return 6.0
  if (level === 'Low') return 5.5
  return 0
}

export function matchScore(u: University, input: MatchInput): number {
  const interestScores: Record<string, number> = {
    'IT/Computer Science': u.score_it_cs,
    'Design/Arts': u.score_design_arts,
    'Medicine': u.score_medicine,
    'Business': u.score_business,
    'Engineering': u.score_engineering,
    'Mathematics': Math.round((u.score_it_cs + u.score_engineering) / 2),
    'Arts': u.score_design_arts,
    'Law': Math.round((u.score_business + u.score_design_arts) / 2),
    'Political Science / IR': Math.round((u.score_business + u.score_design_arts) / 2),
    'Economics / Finance': u.score_business,
    'Architecture': Math.round((u.score_design_arts + u.score_engineering) / 2),
    'Psychology': Math.round((u.score_medicine + u.score_design_arts) / 2),
    'Data Science / AI': Math.round((u.score_it_cs + u.score_engineering) / 2),
    'Hospitality / Tourism': Math.round((u.score_business + u.score_design_arts) / 2),
  }

  const interestMax = input.interests.reduce((acc, key) => acc + (interestScores[key] || 0), 0)

  const budgetOk = withinBudget(u, input.budget) ? 1 : 0
  const englishOk = input.english ? (englishLevelToIelts(input.english) >= u.english_req_ielts ? 1 : 0.5) : 1
  const scholarshipBoost = u.scholarships_available ? 0.2 : 0
  const livingAdj = (10 - u.cost_of_living_index) / 50 // 0..0.2 boost if cheaper city

  const base = interestMax
  const extras = budgetOk + englishOk + scholarshipBoost + livingAdj
  // Prefer lower tuition in-band
  const tuitionAdj = input.budget === '$15k-$30k' && u.tuition_annual_min_usd <= 20000 ? 0.3 : 0

  return base + extras + tuitionAdj
}

export function rankMatches(list: University[], input: MatchInput): University[] {
  return list
    .filter((u) => withinBudget(u, input.budget))
    .sort((a, b) => matchScore(b, input) - matchScore(a, input))
}

// Return top N universities per country dataset ensuring coverage.
export function topPerCountry(all: University[], input: MatchInput, perCountry: number = 1): University[] {
  // Collect all universities per country (unfiltered) and filtered list respecting budget.
  const allMap = new Map<string, University[]>();
  const filteredMap = new Map<string, University[]>();
  for (const u of all) {
    const allList = allMap.get(u.country_en) || [];
    allList.push(u);
    allMap.set(u.country_en, allList);
    if (withinBudget(u, input.budget)) {
      const fList = filteredMap.get(u.country_en) || [];
      fList.push(u);
      filteredMap.set(u.country_en, fList);
    }
  }
  const picks: University[] = [];
  for (const [country, listAll] of allMap.entries()) {
    const listFiltered = filteredMap.get(country) || [];
    const baseList = (listFiltered.length > 0 ? listFiltered : listAll).sort(
      (a, b) => matchScore(b, input) - matchScore(a, input)
    );
    picks.push(...baseList.slice(0, perCountry));
  }
  return picks.sort((a, b) => matchScore(b, input) - matchScore(a, input));
}
