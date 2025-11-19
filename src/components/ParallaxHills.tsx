"use client";
import React from 'react'

export default function ParallaxHills() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 -z-5" aria-hidden>
      <svg width="100%" height="160" viewBox="0 0 1200 160" preserveAspectRatio="none">
        <path d="M0,80 C200,40 300,120 500,80 C700,40 900,120 1200,70 L1200,160 L0,160 Z" fill="#0f1d4a" opacity="0.8" />
        <path d="M0,100 C220,60 320,140 520,100 C720,60 920,140 1200,90 L1200,160 L0,160 Z" fill="#102457" opacity="0.8" />
        <path d="M0,120 C240,80 340,160 540,120 C740,80 940,160 1200,110 L1200,160 L0,160 Z" fill="#123068" opacity="0.9" />
      </svg>
    </div>
  )
}