// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useTexture } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// /* ------------------ REALISTIC GLOBE ------------------ */

// function GlobeRealistic() {
//   const globeRef = useRef<THREE.Mesh>(null!);

//   // Auto rotate
//   useFrame(() => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.0008;
//     }
//   });

//         const [darkMap] = useTexture([
//     "/textures/earth/earth-dark.png",
//     ]);



//   return (
//     <group>
//       {/* Earth */}
//       <mesh ref={globeRef} scale={1}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial
//             map={darkMap}
//             roughness={1}
//             metalness={0}
//             color="white"
//             emissive="black"
//             emissiveIntensity={0}
//             />

//       </mesh>

//       {/* Glow ring */}
//       {/* <mesh rotation-x={Math.PI / 2}>
//         <ringGeometry args={[1.05, 1.3, 64]} />
//         <meshBasicMaterial
//           color="#38bdf8"
//           transparent
//           opacity={0.}
//           side={THREE.DoubleSide}
//         />
//       </mesh> */}

//       {/* Atmosphere */}
//       <mesh scale={1.2}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshBasicMaterial color="#0ea5e9" transparent opacity={0.0} />
//       </mesh>
//     </group>
//   );
// }

// /* ------------------ CANVAS WRAPPER ------------------ */

// export default function GlobeCanvas() {
//   return (
//     <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[4, 4, 4]} intensity={1.5} />

//       <GlobeRealistic />

//       <OrbitControls enablePan={false} enableZoom={false} />
//     </Canvas>
//   );
// }

"use client";

import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

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

// Colors from your ID map image
const REGION_COLOR_MAP: { id: RegionId; rgb: [number, number, number] }[] = [
  { id: "northAmerica", rgb: [255, 0, 0] },      // red
  { id: "southAmerica", rgb: [0, 255, 0] },      // green
  { id: "europe", rgb: [255, 255, 0] },          // yellow
  { id: "africa", rgb: [0, 0, 255] },            // blue
  { id: "asia", rgb: [0, 255, 255] },            // cyan
  { id: "india", rgb: [200, 0, 200] },           // purple-magenta
];

const COLOR_TOLERANCE = 60;

function detectRegion(r: number, g: number, b: number): RegionId | null {
  let best: { id: RegionId | null; dist: number } = { id: null, dist: Infinity };

  for (const region of REGION_COLOR_MAP) {
    const [rr, gg, bb] = region.rgb;
    const dist = Math.sqrt((r - rr) ** 2 + (g - gg) ** 2 + (b - bb) ** 2);
    if (dist < best.dist) best = { id: region.id, dist };
  }

  if (best.dist > COLOR_TOLERANCE) return null;
  return best.id;
}

/* ---------------- GLOBE ---------------- */

function GlobeRealistic({ onRegionHover }: { onRegionHover?: (region: RegionId | null) => void }) {
  const globeRef = useRef<THREE.Mesh>(null!);
  const [colorTexture, idMap] = useTexture([
    "/textures/earth/earth-dark.png",
    "/textures/earth/earth-regions.png",
  ]) as [THREE.Texture, THREE.Texture];

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

  useFrame(() => {
    if (globeRef.current) globeRef.current.rotation.y += 0.001;
  });

  const pointerMove = (e: ThreeEvent<PointerEvent>) => {
    const uv = e.uv;
    const ctx = idCtxRef.current;
    const img = idMap.image as HTMLImageElement;
    if (!uv || !ctx || !img) return;

    const x = Math.floor(uv.x * img.width);
    const y = Math.floor((1 - uv.y) * img.height);
    const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;

    if (a === 0) return onRegionHover?.(null);

    const region = detectRegion(r, g, b);
    onRegionHover?.(region);
  };

  return (
    <group>
      <mesh ref={globeRef} onPointerMove={pointerMove} onPointerOut={() => onRegionHover?.(null)}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={colorTexture}
          metalness={0.1}
          roughness={1}
          color="#ffffff"
        />
      </mesh>
    </group>
  );
}

/* ---------------- UI Layer ---------------- */

export default function GlobeCanvas() {
  const [region, setRegion] = useState<RegionId | null>(null);
  const meta = region ? REGION_META[region] : null;

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 42 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1.3} />
        <GlobeRealistic onRegionHover={setRegion} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>

      {meta && (
        <div className="
          pointer-events-none absolute right-10 top-1/2 -translate-y-1/2
          rounded-2xl bg-[#0c1627]/80 backdrop-blur-xl
          border border-white/10 shadow-lg shadow-black/40
          px-4 py-3 min-w-[240px] text-sm
          animate-[fadeIn_0.2s_ease-out]
        ">
          <p className="text-xs uppercase tracking-wide text-blue-400 font-semibold mb-2">
            {meta.label}
          </p>
          <p className="text-[12px] text-slate-300">
            Market size: <span className="font-semibold text-white">{meta.marketSize}</span>
          </p>
          <p className="text-[12px] text-slate-300">
            Growth: <span className="font-semibold text-white">{meta.growth}</span>
          </p>
          <p className="mt-1 text-slate-400 text-[11px] leading-tight">{meta.notes}</p>
        </div>
      )}
    </div>
  );
}
