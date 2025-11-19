import Link from 'next/link'
import { NeonButton } from '@/components/NeonButton'
import GlassPanel from '@/components/GlassPanel'

export default function HomePage() {
  return (
    <section className="text-center">
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold neon">A Gifted Future</h1>
        <p className="mt-3 text-lg text-blue-100">Unwrap your perfect university match today.</p>
      </div>
      <div className="mt-4">
        <Link href="/quiz">
          <NeonButton variant="primary" size="lg" pulse glow="gold">Start Your Journey Now 🚀</NeonButton>
        </Link>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <FeatureCard title="Budget Filtering" desc="Match by tuition ranges and cost-of-living." />
        <FeatureCard title="Global Reach" desc="Explore universities across 10+ countries." />
        <FeatureCard title="Personalized Logic" desc="We combine your passions and logistics." />
      </div>
    </section>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <GlassPanel className="p-6">
      <h3 className="text-xl font-semibold text-neon-blue">{title}</h3>
      <p className="text-blue-100 mt-2">{desc}</p>
    </GlassPanel>
  )
}
