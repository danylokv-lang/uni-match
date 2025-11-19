"use client";
import React from 'react'

const COUNT = 100

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function SnowflakeField() {
  const flakes = Array.from({ length: COUNT }).map((_, i) => {
    const size = rand(8, 24)
    const isSmall = size < 16
    const durNum = isSmall ? rand(14, 30) : rand(9, 20)
    return {
      id: i,
      x: `${rand(0, 100)}%`,
      dur: `${durNum}s`,
      delay: `${rand(0, 12)}s`,
      size: `${size}px`,
      opacity: rand(.35, .9)
    }
  })
  return (
    <div className="snowflake-field" aria-hidden>
      {flakes.map(f => (
        <svg
          key={f.id}
          className="flake snowflake-shape"
          style={{
            ['--x' as any]: f.x,
            ['--dur' as any]: f.dur,
            animationDelay: f.delay,
            ['--size' as any]: f.size,
            ['--o' as any]: f.opacity,
          }}
          viewBox="0 0 40 40"
        >
          <path d="M20 2v36M6 10l28 20M6 30l28-20M2 20h36M12 4l16 32M12 36l16-32" />
        </svg>
      ))}
    </div>
  )
}

export default SnowflakeField