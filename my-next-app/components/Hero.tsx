// "use client";

// import GlobeCanvas from "./GlobeCanvas";
// import { Briefcase, BarChart3 } from "lucide-react"; // Icons for feature cards

// export default function Hero() {
//   return (
//     <section className="relative w-full h-screen flex items-center bg-[#0A0F1F] text-white overflow-hidden">

//       {/* Soft Ambient Gradient Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(35,72,128,0.45),_rgba(3,8,18,1))]" />

//       {/* CONTENT WRAPPER */}
//       <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-[1400px] mx-auto px-16">

//         {/* LEFT TEXT BLOCK */}
//         <div className="space-y-8 max-w-xl pt-24">
//           <p className="text-xs tracking-[0.3em] text-sky-300">
//             MARKET RESEARCH & INSIGHTS
//           </p>

//           <h1 className="text-[4.2rem] font-extrabold leading-[1.08] text-white">
//             Global market <br />
//             intelligence, <br />
//             visualized in real time.
//           </h1>

//           <p className="text-gray-300 text-lg leading-relaxed">
//             We provide actionable insights into global trends, opportunities,
//             and consumer behavior to drive your business forward.
//           </p>

//           {/* CTA BUTTONS */}
//           <div className="flex gap-4">
//             <button className="px-8 py-3 rounded-lg bg-blue-600 text-base font-semibold 
//               hover:bg-blue-500 transition shadow-[0_0_20px_rgba(0,122,255,0.55)]">
//               Book a Strategy Call
//             </button>

//             <button className="px-8 py-3 rounded-lg border border-gray-600 text-base font-medium
//               hover:bg-gray-800 transition">
//               View Case Studies
//             </button>
//           </div>

//           {/* FEATURE CARDS */}
//           <div className="flex gap-6 pt-6">
//             <div className="px-6 py-4 bg-[#111829]/60 border border-white/10 rounded-xl flex items-center gap-3">
//               <BarChart3 className="text-blue-400" />
//               <div>
//                 <p className="text-lg font-semibold">Market Analysis</p>
//               </div>
//             </div>

//             <div className="px-6 py-4 bg-[#111829]/60 border border-white/10 rounded-xl flex items-center gap-3">
//               <Briefcase className="text-blue-400" />
//               <div>
//                 <p className="text-lg font-semibold">Consumer Insights</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE — Filters & Globe */}
//         <div className="flex flex-col items-center relative pt-10">

//           {/* Industry FILTER PILLS — Top Right */}
//             {/* <div className="flex gap-3 absolute top-4 right-0">
//             {["Consumer Goods", "Fintech", "Healthcare", "Retail"].map((f) => (
//               <button key={f}
//                 className="px-5 py-2 text-sm rounded-full bg-[#111829]/70 border border-gray-700
//                 backdrop-blur-sm hover:border-blue-400 hover:text-blue-300 transition">
//                 {f}
//               </button>
//             ))}
//           </div> */}

//           {/* GLOBE */}
//           <div className="w-[500px] h-[500px]">
//             <GlobeCanvas />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import GlobeCanvas from "./GlobeCanvas";
import { Briefcase, BarChart3 } from "lucide-react"; 

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center text-white overflow-hidden">

      {/* Smooth Hero Gradient Over Spline */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#030B18]/80 to-[#030B18]" />

      {/* CONTENT WRAPPER */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-[1400px] mx-auto px-16">

        {/* LEFT TEXT BLOCK */}
        <div className="space-y-8 max-w-xl pt-24">
          <p className="text-xs tracking-[0.3em] text-sky-300">
            MARKET RESEARCH & INSIGHTS
          </p>

          <h1 className="text-[4.2rem] font-extrabold leading-[1.08] text-white">
            Global market <br />
            intelligence, <br />
            visualized in real time.
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            We provide actionable insights into global trends, opportunities,
            and consumer behavior to drive your business forward.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-lg bg-blue-600 text-base font-semibold 
              hover:bg-blue-500 transition shadow-[0_0_20px_rgba(0,122,255,0.55)]">
              Book a Strategy Call
            </button>

            <button className="px-8 py-3 rounded-lg border border-gray-600 text-base font-medium
              hover:bg-gray-800 transition">
              View Case Studies
            </button>
          </div>

          {/* FEATURE CARDS */}
          <div className="flex gap-6 pt-6">
            <div className="px-6 py-4 bg-[#111829]/60 border border-white/10 rounded-xl flex items-center gap-3">
              <BarChart3 className="text-blue-400" />
              <div>
                <p className="text-lg font-semibold">Market Analysis</p>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#111829]/60 border border-white/10 rounded-xl flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              <div>
                <p className="text-lg font-semibold">Consumer Insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Globe */}
        <div className="flex flex-col items-center relative pt-10">
          <div className="w-[500px] h-[500px]">
            <GlobeCanvas />
          </div>
        </div>

      </div>
    </section>
  );
}
