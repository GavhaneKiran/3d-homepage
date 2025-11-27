import Spline from '@splinetool/react-spline';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
      <main className="w-full text-slate-50 overflow-hidden bg-[#030B18]">

      {/* SECTION 1 — Spline Fullscreen */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Cover the Spline watermark */}
        <div className="absolute bottom-[23px] right-5 z-50 h-[45px] w-[180px] bg-slate-900/95 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-base font-semibold text-white/95">Mmr Statistics</span>
        </div>

        <Spline scene="https://prod.spline.design/90j6YM8t13nGdGSt/scene.splinecode" />
      </section>

      {/* SECTION 2 — Hero Smooth Transition */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </section>

    </main>
  );
}
