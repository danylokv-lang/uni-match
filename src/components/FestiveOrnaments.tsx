"use client";
import React from 'react'

const ORNAMENTS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  left: `${5 + i * 11}%`,
  delay: `${(i % 5) * 0.6}s`,
  color: i % 2 === 0 ? '#39C6FF' : '#FFD479'
}))

export function FestiveOrnaments() {
  return (
    <div className="pointer-events-none relative w-full flex justify-center mt-2 mb-4">
      <div className="absolute inset-0 star-layer" />
      <div className="shimmer-overlay" />
      {ORNAMENTS.map(o => (
        <div
          key={o.id}
          className="absolute ornament-floating"
          style={{ left: o.left, top: 0, animationDelay: o.delay }}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="22" r="15" fill={o.color} opacity="0.85" />
            <circle cx="21" cy="22" r="15" fill="url(#gradGlow)" style={{ mixBlendMode: 'overlay' }} />
            <circle cx="21" cy="22" r="15" stroke="white" strokeWidth="1.5" fill="none" />
            <rect x="18" y="4" width="6" height="8" rx="2" fill={o.color} />
            <circle className="ornament-ring" cx="21" cy="22" r="19" />
            <defs>
              <radialGradient id="gradGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 22) scale(15)">
                <stop stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}
      <div className="absolute right-6 -top-2" aria-hidden>
        <svg width="40" height="40" viewBox="0 0 40 40" className="snowflake-shape">
          <path d="M20 2v36M6 10l28 20M6 30l28-20M2 20h36M12 4l16 32M12 36l16-32" />
        </svg>
      </div>
    </div>
  )
}

export default FestiveOrnaments