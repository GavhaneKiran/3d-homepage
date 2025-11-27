// "use client";

// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useMemo } from "react";

// // FEWER LAYERS + MORE SPACING + BIGGER RADIUS
// const LAYERS = 32;       // was 50 → reduced
// const POINTS = 240;      // smoother curve
// const BASE_RADIUS = 12;  // bigger circle
// const LINE_SPACING = 0.22;

// // STATIC RANDOM SEEDS
// const seeds = Array.from({ length: LAYERS }).map(() => ({
//   phase: Math.random() * Math.PI * 2,
//   amp: 0.15 + Math.random() * 0.22,
//   speed: 0.4 + Math.random() * 0.5,
// }));

// export default function FlowLinesHero() {
//   return (
//     <Canvas
//       linear
//       camera={{ position: [0, 0, 36], fov: 35 }}
//       style={{
//         position: "absolute",
//         inset: 0,
//         pointerEvents: "none",
//       }}
//     >
//       <ambientLight intensity={0.5} />
//       <CircularLines />
//     </Canvas>
//   );
// }

// function CircularLines() {
//   const group = useRef<THREE.Group>(null);

//   // ANGLES FOR PERFECT ARC (NO GAP)
//   const baseAngles = useMemo(() => {
//     const arr = new Float32Array(POINTS);
//     for (let i = 0; i < POINTS; i++) {
//       const t = i / (POINTS - 1);
//       arr[i] = t * Math.PI * 2; // FULL LOOP, NO GAP
//     }
//     return arr;
//   }, []);

//   const layers = useMemo(() => {
//     return Array.from({ length: LAYERS }).map((_, i) => {
//       const radius = BASE_RADIUS + i * LINE_SPACING;

//       const positions = new Float32Array(POINTS * 3);
//       for (let p = 0; p < POINTS; p++) {
//         const a = baseAngles[p];

//         positions[p * 3] = Math.cos(a) * radius;
//         positions[p * 3 + 1] = Math.sin(a) * radius * 0.32; // slight oval
//         positions[p * 3 + 2] = -i * 0.18;
//       }

//       const geo = new THREE.BufferGeometry();
//       geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//       const mat = new THREE.LineBasicMaterial({
//         color: new THREE.Color().setHSL(0.55 + i * 0.005, 0.85, 0.55 - i * 0.01),
//         transparent: true,
//         opacity: 0.85 - i * 0.02,
//       });

//       return {
//         geo,
//         mat,
//         line: new THREE.Line(geo, mat),
//         index: i,
//       };
//     });
//   }, [baseAngles]);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();

//     layers.forEach((L, i) => {
//       const { phase, amp, speed } = seeds[i];
//       const pos = L.geo.attributes.position.array as Float32Array;

//       const radiusBase = BASE_RADIUS + i * LINE_SPACING;

//       for (let p = 0; p < POINTS; p++) {
//         const a = baseAngles[p];

//         const wobble =
//           Math.sin(a * 3 + t * speed + phase) * amp +
//           Math.cos(a * 2.2 + t * (speed + 0.3)) * amp * 0.4;

//         const r = radiusBase + wobble;

//         pos[p * 3] = Math.cos(a) * r;
//         pos[p * 3 + 1] = Math.sin(a) * r * 0.32;
//       }

//       L.geo.attributes.position.needsUpdate = true;
//     });

//     if (group.current) {
//       group.current.rotation.z = Math.sin(t * 0.1) * 0.22;
//     }
//   });

//   return (
//     <group ref={group}>
//       {layers.map((L, i) => (
//         <primitive key={i} object={L.line} />
//       ))}
//     </group>
//   );
// }

"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

//  BIGGER CIRCLE — increased BASE_RADIUS and SPACING 
const LAYERS = 30;
const POINTS = 260;
const BASE_RADIUS = 16;        // was 12 → makes the circle MUCH bigger
const LINE_SPACING = 0.28;     // was 0.22 → more spread between lines

// color blue various varient
// const COLOR_PALETTE = [
//   [0.92, 0.85, 0.75], // soft pink
//   [0.78, 0.85, 0.70], // purple
//   [0.58, 0.90, 0.65], // cyan-teal
//   [0.55, 0.85, 0.60], // aqua blue
//   [0.46, 0.80, 0.62], // greenish teal
// ];
// ⭐ PROFESSIONAL BLUE-ONLY SHADES (Spline-style)
const BLUE_PALETTE = [
  [0.58, 0.85, 0.55], // cyan blue
  [0.60, 0.90, 0.52], // bright aqua
  [0.62, 0.78, 0.48], // electric teal-blue
  [0.64, 0.70, 0.42], // sky blue
  [0.66, 0.65, 0.38], // cool blue
  [0.68, 0.58, 0.32], // deep blue
  [0.70, 0.50, 0.28], // navy-blue tint
];


// STATIC RANDOM SEEDS
const seeds = Array.from({ length: LAYERS }).map(() => ({
  phase: Math.random() * Math.PI * 2,
  amp: 0.18 + Math.random() * 0.25,
  speed: 0.35 + Math.random() * 0.5,
}));

export default function FlowLinesHero() {
  return (
    <Canvas
      linear
      camera={{ position: [0, 0, 40], fov: 35 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.55} />
      <CircularLines />
    </Canvas>
  );
}

function CircularLines() {
  const group = useRef<THREE.Group>(null);

  // ANGLES FOR PERFECT FULL CIRCLE
  const baseAngles = useMemo(() => {
    const arr = new Float32Array(POINTS);
    for (let i = 0; i < POINTS; i++) {
      arr[i] = (i / (POINTS - 1)) * Math.PI * 2; // full circle
    }
    return arr;
  }, []);

  const layers = useMemo(() => {
    return Array.from({ length: LAYERS }).map((_, i) => {
      const radius = BASE_RADIUS + i * LINE_SPACING;

      const positions = new Float32Array(POINTS * 3);
      for (let p = 0; p < POINTS; p++) {
        const a = baseAngles[p];

        positions[p * 3] = Math.cos(a) * radius;
        positions[p * 3 + 1] = Math.sin(a) * radius * 0.34; // oval shape
        positions[p * 3 + 2] = -i * 0.22;                   // depth
      }

      // chaged color to just blue varients
      const c = BLUE_PALETTE[i % BLUE_PALETTE.length];
        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(c[0], c[1], c[2]),
          transparent: true,
          opacity: 0.87 - i * 0.02,
        });


      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      return {
        geo,
        mat,
        line: new THREE.Line(geo, mat),
        index: i,
      };
    });
  }, [baseAngles]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    layers.forEach((L, i) => {
      const { phase, amp, speed } = seeds[i];
      const pos = L.geo.attributes.position.array as Float32Array;

      const radiusBase = BASE_RADIUS + i * LINE_SPACING;

      for (let p = 0; p < POINTS; p++) {
        const a = baseAngles[p];

        const wobble =
          Math.sin(a * 3 + t * speed + phase) * amp +
          Math.cos(a * 2.0 + t * (speed + 0.3)) * amp * 0.38;

        const r = radiusBase + wobble;

        pos[p * 3] = Math.cos(a) * r;
        pos[p * 3 + 1] = Math.sin(a) * r * 0.34;
      }

      L.geo.attributes.position.needsUpdate = true;
    });

    if (group.current) {
      group.current.rotation.z = Math.sin(t * 0.12) * 0.22;
    }
  });

  return (
    <group ref={group}>
      {layers.map((L, i) => (
        <primitive key={i} object={L.line} />
      ))}
    </group>
  );
}
