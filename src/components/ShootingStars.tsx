"use client";
import React, { useMemo } from 'react'

const COUNT = 6

export default function ShootingStars() {
  const stars = useMemo(() => {
    return Array.from({ length: COUNT }).map((_, i) => {
      const top = Math.random() * 60 // top 60% of screen
      const delay = Math.random() * 12
      const duration = 2.5 + Math.random() * 2.5
      const scale = 0.8 + Math.random() * 0.6
      return { id: i, top, delay, duration, scale }
    })
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-8 shooting-star-layer" aria-hidden>
      {stars.map(s => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            top: `${s.top}vh`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            transform: `scale(${s.scale})`
          }}
        />
      ))}
    </div>
  )
}
