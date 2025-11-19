// components/Navbar.tsx
"use client";

const links = ["Case Studies", "What We Do", "Our Work", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="text-xs font-semibold tracking-[0.25em] text-sky-400">
          MARKET RESEARCH & INSIGHTS
        </span>
        <ul className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {links.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-slate-300 transition hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="rounded-full border border-sky-400/60 px-4 py-1.5 text-xs font-medium text-sky-100 hover:bg-sky-400 hover:text-slate-950 transition">
          Contact
        </button>
      </nav>
    </header>
  );
}
