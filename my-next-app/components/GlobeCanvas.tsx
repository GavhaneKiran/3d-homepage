
// "use client";

// import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
// import { OrbitControls, useTexture } from "@react-three/drei";
// import { useRef, useEffect, useState } from "react";
// import * as THREE from "three";

// /* ------------------------- TYPES ------------------------- */
// type RegionId =
//   | "northAmerica"
//   | "southAmerica"
//   | "europe"
//   | "africa"
//   | "asia"
//   | "india";

// type RegionMeta = {
//   id: RegionId;
//   label: string;
//   marketSize: string;
//   growth: string;
//   notes: string;
// };

// /* ------------------------- META ------------------------- */
// const REGION_META: Record<RegionId, RegionMeta> = {
//   northAmerica: {
//     id: "northAmerica",
//     label: "North America",
//     marketSize: "3.2T",
//     growth: "6.1% YoY",
//     notes: "Strong fintech & SaaS adoption.",
//   },
//   southAmerica: {
//     id: "southAmerica",
//     label: "South America",
//     marketSize: "1.1T",
//     growth: "5.4% YoY",
//     notes: "High mobile-first consumers.",
//   },
//   europe: {
//     id: "europe",
//     label: "Europe",
//     marketSize: "4.0T",
//     growth: "4.3% YoY",
//     notes: "Mature digital commerce markets.",
//   },
//   africa: {
//     id: "africa",
//     label: "Africa",
//     marketSize: "0.9T",
//     growth: "7.8% YoY",
//     notes: "Fastest growing digital penetration.",
//   },
//   asia: {
//     id: "asia",
//     label: "Asia",
//     marketSize: "5.2T",
//     growth: "8.2% YoY",
//     notes: "APAC ecommerce & industrial hub.",
//   },
//   india: {
//     id: "india",
//     label: "India",
//     marketSize: "1.4T",
//     growth: "9.1% YoY",
//     notes: "High-growth consumer internet market.",
//   },
// };

// const REGION_COLOR_MAP: { id: RegionId; rgb: [number, number, number] }[] = [
//   { id: "northAmerica", rgb: [255, 0, 0] },
//   { id: "southAmerica", rgb: [0, 255, 0] },
//   { id: "europe", rgb: [255, 255, 0] },
//   { id: "africa", rgb: [0, 0, 255] },
//   { id: "asia", rgb: [0, 255, 255] },
//   { id: "india", rgb: [200, 0, 200] },
// ];

// const COLOR_TOLERANCE = 60;

// /* --- Detect mobile device (simple & reliable) --- */
// const isMobile = () =>
//   typeof window !== "undefined" && window.innerWidth < 768;

// /* ------------------------- REGION DETECTION ------------------------- */
// function detectRegion(r: number, g: number, b: number): RegionId | null {
//   let best: { id: RegionId | null; dist: number } = { id: null, dist: Infinity };

//   for (const region of REGION_COLOR_MAP) {
//     const [rr, gg, bb] = region.rgb;
//     const dist = Math.sqrt((r - rr) ** 2 + (g - gg) ** 2 + (b - bb) ** 2);
//     if (dist < best.dist) best = { id: region.id, dist };
//   }

//   return best.dist > COLOR_TOLERANCE ? null : best.id;
// }

// /* ------------------------- GLOBE ------------------------- */
// function GlobeRealistic({
//   onRegionChange,
// }: {
//   onRegionChange: (region: RegionId | null) => void;
// }) {
//   const globeRef = useRef<THREE.Mesh | null>(null);

//   const [hoverEnabled, setHoverEnabled] = useState(!isMobile());
//   const [isTouchSelecting, setIsTouchSelecting] = useState(false);

//   const [colorTexture, idMap] = useTexture([
//     "/textures/earth/earth-dark.png",
//     "/textures/earth/earth-regions.png",
//   ]) as [THREE.Texture, THREE.Texture];

//   /* Canvas read buffer */
//   const idCanvasRef = useRef<HTMLCanvasElement | null>(null);
//   const idCtxRef = useRef<CanvasRenderingContext2D | null>(null);

//   useEffect(() => {
//     const img = idMap.image as HTMLImageElement;
//     if (!img) return;

//     const canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.drawImage(img, 0, 0);
//     idCanvasRef.current = canvas;
//     idCtxRef.current = ctx;
//   }, [idMap]);

//   /* Auto rotation */
//   useFrame(() => {
//     if (!isTouchSelecting && globeRef.current) {
//       globeRef.current.rotation.y += 0.001;
//     }
//   });

//   /* Region reading helper */
//   function readRegion(e: ThreeEvent<PointerEvent>) {
//     const uv = e.uv;
//     const ctx = idCtxRef.current;
//     const img = idMap.image as HTMLImageElement;

//     if (!uv || !ctx || !img) return null;

//     const x = Math.floor(uv.x * img.width);
//     const y = Math.floor((1 - uv.y) * img.height);

//     const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
//     if (a === 0) return null;

//     return detectRegion(r, g, b);
//   }

//   /* ----------------- DESKTOP: Hover Interaction ----------------- */
//   const handleHover = (e: ThreeEvent<PointerEvent>) => {
//     if (!hoverEnabled) return; // disabled on mobile
//     const region = readRegion(e);
//     onRegionChange(region);
//   };

//   const handleHoverOut = () => {
//     if (!hoverEnabled) return;
//     onRegionChange(null);
//   };

//   /* ----------------- MOBILE: Tap Interaction ----------------- */
//   const handleTap = (e: ThreeEvent<PointerEvent>) => {
//     if (hoverEnabled) return; // ignore tap on desktop

//     const region = readRegion(e);
//     setIsTouchSelecting(true);

//     onRegionChange(region);

//     // Resume rotation after short delay
//     setTimeout(() => setIsTouchSelecting(false), 600);
//   };

//   return (
//     <group>
//       <mesh
//         ref={globeRef}
//         /* Desktop */
//         onPointerMove={handleHover}
//         onPointerOut={handleHoverOut}
//         /* Mobile */
//         onPointerDown={handleTap}
//       >
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial
//           map={colorTexture}
//           roughness={1}
//           metalness={0.1}
//         />
//       </mesh>
//     </group>
//   );
// }

// /* ------------------------- UI LAYER ------------------------- */
// export default function GlobeCanvas() {
//   const [region, setRegion] = useState<RegionId | null>(null);
//   const meta = region ? REGION_META[region] : null;

//   return (
//     <div className="relative w-full h-full">
//       <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[3, 3, 3]} intensity={1.3} />

//         <GlobeRealistic onRegionChange={setRegion} />

//         <OrbitControls enablePan={false} enableZoom={false} />
//       </Canvas>

//       {/* Region card */}
//       {meta && (
//         <div
//           className="
//             pointer-events-none absolute right-3 sm:right-8 
//             top-1/2 -translate-y-1/2
//             rounded-2xl bg-[#0c1627]/80 backdrop-blur-xl
//             border border-white/10 shadow-lg shadow-black/40
//             px-3 py-2 min-w-[160px] sm:min-w-[240px]
//             text-[11px] sm:text-sm
//             animate-[fadeIn_0.16s_ease-out]
//           "
//         >
//           <p className="uppercase text-[10px] tracking-wide text-blue-400 font-semibold mb-1">
//             {meta.label}
//           </p>
//           <p className="text-slate-300">
//             Market size: <span className="font-semibold text-white">{meta.marketSize}</span>
//           </p>
//           <p className="text-slate-300">
//             Growth: <span className="font-semibold text-white">{meta.growth}</span>
//           </p>
//           <p className="mt-1 text-slate-400 leading-tight">{meta.notes}</p>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/* ------------------------- TYPES ------------------------- */
type RegionId =
  | "northAmerica"
  | "southAmerica"
  | "europe"
  | "africa"
  | "asia"
  | "india";

type RegionMeta = {
  id: RegionId;
  label: string;
  marketSize: string;
  growth: string;
  notes: string;
};

/* ------------------------- META ------------------------- */
const REGION_META: Record<RegionId, RegionMeta> = {
  northAmerica: {
    id: "northAmerica",
    label: "North America",
    marketSize: "3.2T",
    growth: "6.1% YoY",
    notes: "Strong fintech & SaaS adoption.",
  },
  southAmerica: {
    id: "southAmerica",
    label: "South America",
    marketSize: "1.1T",
    growth: "5.4% YoY",
    notes: "High mobile-first consumers.",
  },
  europe: {
    id: "europe",
    label: "Europe",
    marketSize: "4.0T",
    growth: "4.3% YoY",
    notes: "Mature digital commerce markets.",
  },
  africa: {
    id: "africa",
    label: "Africa",
    marketSize: "0.9T",
    growth: "7.8% YoY",
    notes: "Fastest growing digital penetration.",
  },
  asia: {
    id: "asia",
    label: "Asia",
    marketSize: "5.2T",
    growth: "8.2% YoY",
    notes: "APAC ecommerce & industrial hub.",
  },
  india: {
    id: "india",
    label: "India",
    marketSize: "1.4T",
    growth: "9.1% YoY",
    notes: "High-growth consumer internet market.",
  },
};

const REGION_COLOR_MAP: { id: RegionId; rgb: [number, number, number] }[] = [
  { id: "northAmerica", rgb: [255, 0, 0] },
  { id: "southAmerica", rgb: [0, 255, 0] },
  { id: "europe", rgb: [255, 255, 0] },
  { id: "africa", rgb: [0, 0, 255] },
  { id: "asia", rgb: [0, 255, 255] },
  { id: "india", rgb: [200, 0, 200] },
];

const COLOR_TOLERANCE = 60;

/* --- detect mobile, safe (no useEffect) --- */
const isMobileDevice = () =>
  typeof window !== "undefined" && window.innerWidth < 768;

/* ------------------------- REGION DETECTION ------------------------- */
function detectRegion(r: number, g: number, b: number): RegionId | null {
  let best: { id: RegionId | null; dist: number } = { id: null, dist: Infinity };

  for (const region of REGION_COLOR_MAP) {
    const [rr, gg, bb] = region.rgb;
    const dist = Math.sqrt((r - rr) ** 2 + (g - gg) ** 2 + (b - bb) ** 2);
    if (dist < best.dist) best = { id: region.id, dist };
  }

  return best.dist > COLOR_TOLERANCE ? null : best.id;
}

/* ------------------------- GLOBE ------------------------- */
function GlobeRealistic({
  onRegionChange,
}: {
  onRegionChange: (region: RegionId | null) => void;
}) {
  const globeRef = useRef<THREE.Mesh | null>(null);

  /* STOP ROTATION SYSTEM */
  const rotationPausedRef = useRef(false);

  const [hoverEnabled] = useState(!isMobileDevice());
  const [isTouchSelecting, setIsTouchSelecting] = useState(false);

  const [colorTexture, idMap] = useTexture([
    "/textures/earth/earth-dark.png",
    "/textures/earth/earth-regions.png",
  ]) as [THREE.Texture, THREE.Texture];

  /* Canvas read buffer */
  const idCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const idCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const img = idMap.image as HTMLImageElement;
    if (!img) return;

    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(img, 0, 0);
    idCanvasRef.current = canvas;
    idCtxRef.current = ctx;
  }, [idMap]);

  /* Auto-rotation (pauses on hover/tap) */
  useFrame(() => {
    if (!rotationPausedRef.current && !isTouchSelecting && globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  /* Region reading helper */
  function readRegion(e: ThreeEvent<PointerEvent>) {
    const uv = e.uv;
    const ctx = idCtxRef.current;
    const img = idMap.image as HTMLImageElement;

    if (!uv || !ctx || !img) return null;

    const x = Math.floor(uv.x * img.width);
    const y = Math.floor((1 - uv.y) * img.height);

    const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
    if (a === 0) return null;

    return detectRegion(r, g, b);
  }

  /* ----------------- DESKTOP: Hover Interaction ----------------- */
  const handleHover = (e: ThreeEvent<PointerEvent>) => {
    if (!hoverEnabled) return;

    // Pause rotation
    rotationPausedRef.current = true;

    const region = readRegion(e);
    onRegionChange(region);
  };

  const handleHoverOut = () => {
    if (!hoverEnabled) return;

    // Resume rotation
    rotationPausedRef.current = false;

    onRegionChange(null);
  };

  /* ----------------- MOBILE: Tap Interaction ----------------- */
  const handleTap = (e: ThreeEvent<PointerEvent>) => {
    if (hoverEnabled) return;

    const region = readRegion(e);
    setIsTouchSelecting(true);

    rotationPausedRef.current = true;
    onRegionChange(region);

    setTimeout(() => {
      rotationPausedRef.current = false;
      setIsTouchSelecting(false);
    }, 600);
  };

  return (
    <group>
      <mesh
        ref={globeRef}
        onPointerMove={handleHover}
        onPointerOut={handleHoverOut}
        onPointerDown={handleTap}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={colorTexture} roughness={1} metalness={0.1} />
      </mesh>
    </group>
  );
}

/* ------------------------- UI LAYER ------------------------- */
export default function GlobeCanvas() {
  const [region, setRegion] = useState<RegionId | null>(null);
  const meta = region ? REGION_META[region] : null;

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 42 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1.3} />

        <GlobeRealistic onRegionChange={setRegion} />

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>

      {/* Region info card */}
      {meta && (
        <div
          className="
            pointer-events-none absolute right-3 sm:right-8 
            top-1/2 -translate-y-1/2
            rounded-2xl bg-[#0c1627]/80 backdrop-blur-xl
            border border-white/10 shadow-lg shadow-black/40
            px-3 py-2 min-w-[160px] sm:min-w-[240px]
            text-[11px] sm:text-sm
            animate-[fadeIn_0.16s_ease-out]
          "
        >
          <p className="uppercase text-[10px] tracking-wide text-blue-400 font-semibold mb-1">
            {meta.label}
          </p>
          <p className="text-slate-300">
            Market size:{" "}
            <span className="font-semibold text-white">{meta.marketSize}</span>
          </p>
          <p className="text-slate-300">
            Growth: <span className="font-semibold text-white">{meta.growth}</span>
          </p>
          <p className="mt-1 text-slate-400 leading-tight">{meta.notes}</p>
        </div>
      )}
    </div>
  );
}
