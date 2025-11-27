export default function HeroBottom() {
  return (
    <div className="mx-auto max-w-4xl px-6 text-center">
      <p className="text-xs tracking-[0.3em] text-sky-400 mb-4">
        MARKET RESEARCH & INSIGHTS
      </p>

      <h2 className="text-4xl font-extrabold leading-tight">
        Global market intelligence, visualized in real time.
      </h2>

      <p className="mt-6 text-slate-300 text-lg leading-relaxed">
        We provide actionable insights into global trends, opportunities, and consumer behavior
        to drive your business forward.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <button className="px-8 py-3 rounded-lg bg-blue-600 text-base font-semibold hover:bg-blue-500 transition shadow-[0_0_20px_rgba(0,122,255,0.45)]">
          Book a Strategy Call
        </button>

        <button className="px-8 py-3 rounded-lg border border-gray-600 text-base font-medium hover:bg-gray-800 transition">
          View Case Studies
        </button>
      </div>
    </div>
  );
}
