
// "use client";

// import FlowLinesScene from "@/components/FlowLinesHero";
// import GlobeCanvas from "@/components/GlobeCanvas";
// import Navbar from "@/components/Navbar";
// import HeroTop from "@/components/HeroTop";
// import HeroBottom from "@/components/HeroBottom";

// export default function Home() {
//   return (
//     <main className="w-full overflow-x-hidden bg-[#030B18] text-white">

//       {/* ─────── FRAME 1: SPLINE HERO ─────── */}
//       <section className="relative h-screen w-full flex items-center justify-center">
//         <Navbar />

//         {/* Animated R3F flowing lines */}
//         <FlowLinesScene />

//         {/* Overlayed hero text */}
//         <div className="relative z-20">
//           <HeroTop />
//         </div>

//         {/* Gradient fade bottom */}
//         <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-b from-transparent to-[#030B18]" />
//       </section>

//       {/* ─────── FRAME 2: GLOBE + CONTENT ───────
//       <section className="relative min-h-screen w-full pt-32 pb-32">
//         <HeroBottom />

//         <div className="mx-auto mt-16 flex justify-center">
//           <div className="w-[550px] h-[550px]">
//             <GlobeCanvas />
//           </div>
//         </div>
//       </section> */}
//       {/* ─────── FRAME 2: GLOBE + CONTENT (SIDE-BY-SIDE) ─────── */}
// <section className="relative min-h-screen w-full flex items-center justify-center px-10">

//   <div className="flex w-full max-w-7xl items-center justify-between gap-10">

//     {/* LEFT: TEXT SECTION */}
//     <div className="flex-1">
//       <HeroBottom />
//     </div>

//     {/* RIGHT: GLOBE */}
//     <div className="flex-1 flex justify-center">
//       <div className="w-[550px] h-[550px]">
//         <GlobeCanvas />
//       </div>
//     </div>

//   </div>

// </section>

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

      {/* HERO: full viewport (use svh for mobile-safe height) */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center">
        <Navbar />

        <FlowLinesScene />

        <div className="relative z-20 w-full max-w-5xl px-6">
          <HeroTop />
        </div>

        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-b from-transparent to-[#030B18]" />
      </section>

      {/* CONTENT + GLOBE (responsive stacking) */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-10 py-12">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between gap-10">
          {/* LEFT: text */}
          <div className="flex-1 w-full">
            <HeroBottom />
          </div>

          {/* RIGHT: globe - responsive sizes */}
          <div className="flex-1 w-full flex justify-center">
            <div className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
              <GlobeCanvas />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
