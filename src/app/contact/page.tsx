export default function ContactPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold neon">Contact Us</h1>
      <form className="mt-4 space-y-3">
        <input placeholder="Your email" className="w-full p-2 rounded bg-deep-700 border border-white/10" />
        <textarea placeholder="Message" className="w-full p-2 rounded bg-deep-700 border border-white/10" rows={5} />
        <button className="btn-neon rounded px-4 py-2 bg-deep-800 border border-white/10">Send</button>
      </form>
    </div>
  )
}
