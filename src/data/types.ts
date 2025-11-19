export type University = {
  university_id: string
  slug: string
  university_name_en: string
  country_en: string
  city_en: string
  official_website_url: string
  language_of_instruction: string
  tuition_annual_min_usd: number
  tuition_annual_max_usd: number
  cost_of_living_index: number // 1-10
  english_req_ielts: number
  scholarships_available: boolean
  score_it_cs: number
  score_medicine: number
  score_design_arts: number
  score_business: number
  score_engineering: number
  global_ranking: number
  program_ranking_top: string
  student_satisfaction_percent: number
  match_reason_text: string
}

export type CountryDataset = {
  country: string
  items: University[]
}
