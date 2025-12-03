"use client";

export default function ThemeSwitcher() {
  const setTheme = (theme: string) => {
    document.documentElement.className = theme;
  };

  return (
    <div className="flex gap-4 flex-wrap p-4 z-50">
      <button
        onClick={() => setTheme("light-cyber-blue")}
        className="px-4 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-600 transition"
      >
        Cyber Blue Pulse
      </button>

      <button
        onClick={() => setTheme("light-galaxy-purple")}
        className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-600 transition"
      >
        Galaxy Purple Fade
      </button>

      <button
        onClick={() => setTheme("light-ocean")}
        className="px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition"
      >
        Deep Ocean Blue
      </button>

      <button
        onClick={() => setTheme("light-blue-glow")}
        className="px-4 py-2 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 transition"
      >
        Blue Glow Ring
      </button>
    </div>
  );
}
