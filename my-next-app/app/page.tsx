// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Spline from '@splinetool/react-spline/next';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-50">
//       <Navbar />
//       <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pt-28 pb-16 md:flex-row md:items-center md:pt-36">
//         <Hero />
//       </div>
//        <Spline
//         scene="https://prod.spline.design/90j6YM8t13nGdGSt/scene.splinecode" 
//       />
//     </main>
//   );
// }
import Spline from '@splinetool/react-spline';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (

    
    
    <main className="w-full text-slate-50">

      {/* SECTION 1 — Fullscreen Spline
      <section className="h-screen w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/90j6YM8t13nGdGSt/scene.splinecode" />
      </section> */}
      <section className="relative h-screen w-full overflow-hidden">

  {/* Cover the Spline watermark */}
  <div className="absolute bottom-[23px] right-[20px] z-50 h-[45px] w-[180px] bg-slate-900/95 rounded-lg flex items-center justify-center">
  <span className="text-base font-semibold text-white/95">Mmr Statistics</span>
</div>



  <Spline scene="https://prod.spline.design/90j6YM8t13nGdGSt/scene.splinecode" />
</section>

        {/* <div className="absolute bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:text-green-400 transition-all">
          Mmr Staistics
        </div> */}
        

      {/* SECTION 2 — Your existing homepage */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#020617]">
          <Navbar />
          <Hero />
        </section>

    </main>
  );
}
