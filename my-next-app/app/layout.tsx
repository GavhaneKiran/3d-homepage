// // 
// // app/layout.tsx
// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Global Market Intelligence",
//   description: "Interactive 3D data globe demo",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-slate-950 text-slate-50 antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }

// app/page.tsx
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-50">
//       <Navbar />
//       <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pt-28 pb-16 md:flex-row md:items-center md:pt-36">
//         <Hero />
//       </div>
//     </main>
//   );
// }

import "./globals.css";

export const metadata = {
  title: "3D Homepage",
  description: "Interactive 3D globe UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
  