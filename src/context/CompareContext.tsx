"use client";
import { createContext, useContext, useState } from 'react'

const CompareCtx = createContext<{
  selected: string[]
  toggle: (slug: string) => void
  clear: () => void
}>({ selected: [], toggle: () => {}, clear: () => {} })

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string[]>([])
  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug)
      if (prev.length >= 3) return prev
      return [...prev, slug]
    })
  }
  const clear = () => setSelected([])
  return <CompareCtx.Provider value={{ selected, toggle, clear }}>{children}</CompareCtx.Provider>
}

export const useCompare = () => useContext(CompareCtx)
