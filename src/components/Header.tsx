"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/quiz', label: 'Find Your Match 🎁' },
  { href: '/results', label: 'Your Top Matches' },
  { href: '/compare', label: 'Compare Universities' },
  { href: '/about', label: 'About Us 🌟' },
  { href: '/blog', label: 'Guides & Tips' },
] as const

export function Header() {
  const pathname = usePathname()
  return (
    <header className="border-b border-white/10 bg-deep-900/70 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center gap-6">
        <Link href="/" className="font-bold text-lg neon">Global UniMatch ❄️</Link>
        <nav className="hidden md:flex items-center gap-4">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href as any}
              className={`text-sm px-3 py-2 rounded hover:text-white ${pathname === n.href ? 'text-neon-blue' : 'text-blue-100'}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto" />
      </div>
    </header>
  )
}
