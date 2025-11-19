/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold neon">Discover the Magic Behind Global UniMatch</h1>
        <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto">Finding your dream university should feel like unwrapping the perfect holiday gift—exciting, surprising, and exactly what you wished for.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card title="Our Mission 🎁" body="We cut through global admissions confusion—aligning passion, budget, geography, and language into clear, confident choices." />
        <Card title="Snow Globe Effect ❄️" body="Instead of endless lists, our smart festive logic swirls your inputs into a curated, sparkling match set." />
        <Card title="Guiding Light ✨" body="We highlight programs that fit today and empower your future trajectory—academic, professional, personal." />
      </section>

      <section className="rounded-2xl border border-white/10 bg-deep-800/70 backdrop-blur p-8 space-y-4">
        <h2 className="text-2xl font-bold text-neon-blue">Why the Holiday Theme?</h2>
        <p className="text-blue-100">The season represents hope, generosity, and new beginnings. Your education journey is an investment in all three. The visual warmth, snowfall, and glow reinforce momentum and focus—turning complexity into clarity and excitement.</p>
        <p className="text-blue-100">Our interface is intentionally gift-like: layered, discoverable, and delightfully responsive—nudging exploration without overload.</p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
        <p className="text-blue-200 mb-6">Start the quiz and unwrap curated universities matched to your aspirations.</p>
        <a href="/quiz" className="btn-neon inline-block bg-deep-800 border border-white/10 rounded-2xl px-8 py-4 font-semibold">Start Matching 🎁</a>
      </section>
    </div>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-deep-800 p-6 flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-neon-blue">{title}</h3>
      <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
    </div>
  )
}
