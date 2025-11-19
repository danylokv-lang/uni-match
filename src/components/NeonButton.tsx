import { PropsWithChildren, ButtonHTMLAttributes } from 'react'

type ExtraProps = {
  pulse?: boolean
  glow?: 'blue' | 'gold'
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ExtraProps>

export function NeonButton({ children, className = '', pulse, glow = 'blue', variant = 'primary', size = 'md', ...props }: Props) {
  const glowClass = glow === 'gold' ? 'neon-gold' : 'neon'
  const pulseClass = pulse ? 'pulse' : ''

  const sizeClass = size === 'sm' ? 'px-3 py-2 text-sm' : size === 'lg' ? 'px-7 py-4 text-lg' : 'px-5 py-3'
  let variantClass = ''
  if (variant === 'primary') variantClass = 'bg-neon-blue/20 border-neon-blue text-white'
  else if (variant === 'secondary') variantClass = 'bg-neon-gold/15 border-neon-gold text-white'
  else variantClass = 'bg-transparent border-white/30 text-white hover:bg-white/5'

  return (
    <button
      {...props}
      className={`btn-neon ${glowClass} ${pulseClass} rounded-xl border ${sizeClass} font-semibold ${variantClass} ${className}`}
    >
      {children}
    </button>
  )
}
