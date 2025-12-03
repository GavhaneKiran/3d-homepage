
// "use client";

// import FlowLinesScene from "@/components/FlowLinesHero";
// import GlobeCanvas from "@/components/GlobeCanvas";
// import Navbar from "@/components/Navbar";
// import HeroTop from "@/components/HeroTop";
// import HeroBottom from "@/components/HeroBottom";

// export default function Home() {
//   return (
//     <main className="w-full overflow-x-hidden text-white">

//       {/* HERO: full viewport (use svh for mobile-safe height) */}
//       <section className="relative min-h-[100svh] w-full flex items-center justify-center">
//         <Navbar />

//         <FlowLinesScene />

//         <div className="relative z-20 w-full max-w-5xl px-6">
//           <HeroTop />
//         </div>

//         {/* REMOVED hard-coded dark gradient */}
//         {/* <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-b from-transparent to-[#030B18]" /> */}
//       </section>

//       {/* CONTENT + GLOBE (responsive stacking) */}
//       <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-10 py-12">
//         <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between gap-10">

//           {/* LEFT: text */}
//           <div className="flex-1 w-full">
//             <HeroBottom />
//           </div>

//           {/* RIGHT: globe - responsive sizes */}
//           <div className="flex-1 w-full flex justify-center">
//             <div className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
//               <GlobeCanvas />
//             </div>
//           </div>

//         </div>
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
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-white">

      {/* THEME SWITCHER */}
      <div className="fixed top-20 right-6 z-9999">
        <ThemeSwitcher />
      </div>

      {/* HERO (Flow Lines) */}
      <section className="relative min-h-svh w-full flex items-center justify-center">
        <Navbar />
        <FlowLinesScene />

        <div className="relative z-20 w-full max-w-5xl px-6">
          <HeroTop />
        </div>
      </section>

      {/* CONTENT + GLOBE */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-10 py-12">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between gap-10">
          <div className="flex-1 w-full">
            <HeroBottom />
          </div>

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
