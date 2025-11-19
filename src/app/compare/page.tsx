"use client";
import { useCompare } from '@/context/CompareContext'
import { ALL_UNIVERSITIES } from '@/data'
import { CompareTable } from '@/components/CompareTable'
import Link from 'next/link'

export default function ComparePage() {
  const { selected, clear } = useCompare()
  const items = selected.map((slug) => ALL_UNIVERSITIES.find((u) => u.slug === slug)).filter(Boolean)

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold neon">Compare Universities</h1>
      {items.length === 0 ? (
        <div className="mt-4">No universities selected. Go to <Link href="/results" className="underline">Results</Link>.</div>
      ) : (
        <>
          <div className="mt-4">
            <CompareTable items={items as any} />
          </div>
          <div className="mt-4">
            <button onClick={clear} className="underline">Clear selection</button>
          </div>
        </>
      )}
    </div>
  )}
