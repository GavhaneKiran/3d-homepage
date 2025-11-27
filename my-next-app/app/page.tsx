// import Spline from '@splinetool/react-spline';
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//       <main className="w-full text-slate-50 overflow-hidden bg-[#030B18]">

//       {/* SECTION 1 — Spline Fullscreen */}
//       <section className="relative h-screen w-full overflow-hidden">

//         {/* Cover the Spline watermark */}
//         <div className="absolute bottom-[23px] right-5 z-50 h-[45px] w-[180px] bg-slate-900/95 rounded-lg flex items-center justify-center shadow-lg">
//           <span className="text-base font-semibold text-white/95">Mmr Statistics</span>
//         </div>

//         <Spline scene="https://prod.spline.design/90j6YM8t13nGdGSt/scene.splinecode" />
//       </section>

//       {/* SECTION 2 — Hero Smooth Transition */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         <Navbar />
//         <Hero />
//       </section>

//     </main>
//   );
// }

"use client";

import FlowLinesScene from "@/components/FlowLinesHero";
import GlobeCanvas from "@/components/GlobeCanvas";
import Navbar from "@/components/Navbar";
import HeroTop from "@/components/HeroTop";
import HeroBottom from "@/components/HeroBottom";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#030B18] text-white">

      {/* ─────── FRAME 1: SPLINE HERO ─────── */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <Navbar />

        {/* Animated R3F flowing lines */}
        <FlowLinesScene />

        {/* Overlayed hero text */}
        <div className="relative z-20">
          <HeroTop />
        </div>

        {/* Gradient fade bottom */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-b from-transparent to-[#030B18]" />
      </section>

      {/* ─────── FRAME 2: GLOBE + CONTENT ───────
      <section className="relative min-h-screen w-full pt-32 pb-32">
        <HeroBottom />

        <div className="mx-auto mt-16 flex justify-center">
          <div className="w-[550px] h-[550px]">
            <GlobeCanvas />
          </div>
        </div>
      </section> */}
      {/* ─────── FRAME 2: GLOBE + CONTENT (SIDE-BY-SIDE) ─────── */}
<section className="relative min-h-screen w-full flex items-center justify-center px-10">

  <div className="flex w-full max-w-7xl items-center justify-between gap-10">

    {/* LEFT: TEXT SECTION */}
    <div className="flex-1">
      <HeroBottom />
    </div>

    {/* RIGHT: GLOBE */}
    <div className="flex-1 flex justify-center">
      <div className="w-[550px] h-[550px]">
        <GlobeCanvas />
      </div>
    </div>

  </div>

</section>

    </main>
  );
}

