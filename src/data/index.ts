import { UK } from './uk'
import { USA } from './usa'
import { GERMANY } from './germany'
import { SWITZERLAND } from './switzerland'
import { FRANCE } from './france'
import { SPAIN } from './spain'
import { ITALY } from './italy'
import { RUSSIA_UKRAINE } from './russia_ukraine'
import { CANADA } from './canada'
import { SWEDEN } from './sweden'
import { AUSTRALIA } from './australia'
import { SOUTH_KOREA } from './south_korea'
import type { CountryDataset, University } from './types'
export type { University } from './types'

export const DATASETS: CountryDataset[] = [
  UK,
  USA,
  GERMANY,
  SWITZERLAND,
  FRANCE,
  SPAIN,
  ITALY,
  RUSSIA_UKRAINE,
  CANADA,
  SWEDEN,
  AUSTRALIA,
  SOUTH_KOREA,
]

export const ALL_UNIVERSITIES: University[] = DATASETS.flatMap((d) => d.items)

export function byCountry(country: string): University[] {
  if (!country) return ALL_UNIVERSITIES
  const ds = DATASETS.find((d) => d.country.toLowerCase() === country.toLowerCase())
  if (ds) return ds.items
  // Also allow matching by country_en on items
  return ALL_UNIVERSITIES.filter((u) => u.country_en.toLowerCase() === country.toLowerCase())
}
