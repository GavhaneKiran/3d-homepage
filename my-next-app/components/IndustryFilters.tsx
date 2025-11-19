// components/IndustryFilters.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const filters = ["Consumer Goods", "Fintech", "Healthcare", "Retail"];

export default function IndustryFilters() {
  const [active, setActive] = useState("Consumer Goods");

  return (
    <div className="flex flex-wrap justify-end gap-2">
      {filters.map((f) => (
        <motion.button
          key={f}
          whileTap={{ scale: 0.96 }}
          onClick={() => setActive(f)}
          className={`rounded-full border px-3 py-1 text-xs transition ${
            active === f
              ? "border-sky-400 bg-sky-500/20 text-sky-100"
              : "border-slate-600 bg-slate-900/70 text-slate-300 hover:border-slate-400"
          }`}
        >
          {f}
        </motion.button>
      ))}
    </div>
  );
}
