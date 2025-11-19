export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep-900/70">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center gap-6 text-sm text-blue-200">
        <div>
          <div className="font-semibold">Global UniMatch</div>
          <div className="opacity-80 mt-2">Festive Demo Platform 🎄</div>
        </div>
        <div className="md:ml-auto opacity-70">Demo data • Not official</div>
      </div>
    </footer>
  )
}
