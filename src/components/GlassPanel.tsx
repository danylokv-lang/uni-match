import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export default function GlassPanel({ children, className = '' }: Props) {
  return (
    <div className={`glass rounded-xl border border-white/10 ${className}`}>
      {children}
    </div>
  )
}
