// export default function HeroTop() {
//   return (
//     <div className="text-center px-6">
//       <h1 className="text-[4.8rem] font-extrabold leading-[1.05]">
//         We Help You <br />
//         Decide Better
//       </h1>

//       <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
//         Advanced analytics that distill the data — so you can drive the strategy.
//       </p>

//       <button className="mt-10 px-10 py-3 rounded-lg bg-blue-600 text-lg font-semibold shadow-[0_0_20px_rgba(0,122,255,0.45)] hover:bg-blue-500 transition">
//         Demo Report
//       </button>
//     </div>
//   );
// }

export default function HeroTop() {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-0">
      <h1 className="font-extrabold leading-[1.05] text-[2.1rem] sm:text-[3rem] lg:text-[4.8rem]">
        We Help You <br />
        Decide Better
      </h1>

      <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
        Advanced analytics that distill the data — so you can drive the strategy.
      </p>

      <button className="mt-8 px-6 py-2 sm:px-10 sm:py-3 rounded-lg bg-blue-600 text-base sm:text-lg font-semibold shadow-[0_0_20px_rgba(0,122,255,0.45)] hover:bg-blue-500 transition">
        Demo Report
      </button>
    </div>
  );
}
