"use client";
import { createContext, useContext, useState } from 'react'

export type Interest =
  | 'IT/Computer Science'
  | 'Design/Arts'
  | 'Medicine'
  | 'Business'
  | 'Engineering'
  | 'Mathematics'
  | 'Arts'
  | 'Law'
  | 'Political Science / IR'
  | 'Economics / Finance'
  | 'Architecture'
  | 'Psychology'
  | 'Data Science / AI'
  | 'Hospitality / Tourism'
export type BudgetBand = '$5k-$15k' | '$15k-$30k' | '$30k+'
export type Format = 'Full-time' | 'Part-time' | 'Online'

export interface QuizAnswers {
  interests: Interest[]
  budget: BudgetBand | null
  country: string | null
  english: 'High' | 'Medium' | 'Low' | null
  format: Format | null
}

const defaultAnswers: QuizAnswers = {
  interests: [],
  budget: null,
  country: null,
  english: null,
  format: null,
}

const QuizCtx = createContext<{
  answers: QuizAnswers
  setAnswers: (u: Partial<QuizAnswers>) => void
}>({ answers: defaultAnswers, setAnswers: () => {} })

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAns] = useState<QuizAnswers>(defaultAnswers)
  const setAnswers = (u: Partial<QuizAnswers>) => setAns((prev) => ({ ...prev, ...u }))
  return <QuizCtx.Provider value={{ answers, setAnswers }}>{children}</QuizCtx.Provider>
}

export const useQuiz = () => useContext(QuizCtx)
