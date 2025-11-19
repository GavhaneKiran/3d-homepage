// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
// import GlobeCanvas from "./GlobeCanvas";
import GlobeCanvas from "@/components/GlobeCanvas";
import IndustryFilters from "./IndustryFilters";

export default function Hero() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">
            Market Research & Insights
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl lg:text-5xl">
            Global market intelligence,
            <br />
            visualized in real time.
          </h1>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            We provide actionable insights into global trends, opportunities,
            and consumer behavior to drive your business forward.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:translate-y-0.5 hover:bg-sky-400">
              Book a Strategy Call
            </button>
            <button className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-300 hover:bg-slate-900/60 transition">
              View Case Studies
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 space-y-3"
        >
          <p className="text-xs font-medium tracking-wide text-slate-400">
            Our Services
          </p>
          <div className="grid gap-3 text-sm text-slate-200 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
              <p className="text-xs text-sky-400">Market Analysis</p>
              <p className="mt-1 text-xs text-slate-300">
                In-depth analysis of global market trends and demand shifts.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
              <p className="text-xs text-sky-400">Consumer Insights</p>
              <p className="mt-1 text-xs text-slate-300">
                Understanding customer needs, behaviors, and sentiment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-4 md:mt-0">
        <IndustryFilters />
        <div className="relative h-[320px] w-full overflow-hidden rounded-full border border-sky-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_80px_rgba(56,189,248,0.25)] md:h-[420px]">
          <GlobeCanvas />
        </div>
      </div>
    </>
  );
}
