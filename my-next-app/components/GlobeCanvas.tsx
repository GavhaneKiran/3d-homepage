// // /* eslint-disable react-hooks/exhaustive-deps */
// // /* eslint-disable react-hooks/rules-of-hooks */
// // /* eslint-disable react-hooks/purity */
// // "use client";

// // import { Canvas, useFrame } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// // import { useMemo, useRef } from "react";
// // import * as THREE from "three";

// // function Globe() {
// //   const group = useRef<THREE.Group>(null!);

// //   // Auto-rotation
// //   useFrame(() => {
// //     if (group.current) {
// //       group.current.rotation.y += 0.0018;
// //     }
// //   });

// //   // ✅ Generate random particles ONCE
// //   const points = useMemo(() => {
// //     const positions: number[] = [];
// //     const spherical = new THREE.Spherical();
// //     const radius = 1.02;

// //     for (let i = 0; i < 800; i++) {
// //       const theta = Math.random() * Math.PI;
// //       const phi = Math.random() * Math.PI * 2;

// //       spherical.set(radius, theta, phi);

// //       const v = new THREE.Vector3().setFromSpherical(spherical);
// //       positions.push(v.x, v.y, v.z);
// //     }

// //     const geometry = new THREE.BufferGeometry();
// //     geometry.setAttribute(
// //       "position",
// //       new THREE.Float32BufferAttribute(positions, 3)
// //     );
// //     return geometry;
// //   }, []); // <-- EMPTY DEPENDENCY = only run once

// //   return (
// //     <group ref={group}>
// //       {/* Core sphere */}
// //       <mesh>
// //         <sphereGeometry args={[1, 64, 64]} />
// //         <meshStandardMaterial
// //           color="#020617"
// //           emissive="#020617"
// //           roughness={0.7}
// //           metalness={0.3}
// //         />
// //       </mesh>

// //       {/* Wireframe globe */}
// //       <mesh>
// //         <sphereGeometry args={[1.002, 32, 32]} />
// //         <meshBasicMaterial
// //           color="#38bdf8"
// //           wireframe
// //           transparent
// //           opacity={0.28}
// //         />
// //       </mesh>

// //       {/* Particles */}
// //       <points geometry={points}>
// //         <pointsMaterial
// //           size={0.015}
// //           color="#38bdf8"
// //           sizeAttenuation
// //           transparent
// //           opacity={0.9}
// //         />
// //       </points>

// //       {/* Glow ring */}
// //       <mesh rotation-x={Math.PI / 2}>
// //         <ringGeometry args={[1.05, 1.25, 64]} />
// //         <meshBasicMaterial
// //           color="#0ea5e9"
// //           transparent
// //           opacity={0.18}
// //           side={THREE.DoubleSide}
// //         />
// //       </mesh>
// //     </group>
// //   );
// // }

// "use client";

// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import { useTexture } from "@react-three/drei";
// import * as THREE from "three";

// export default function GlobeRealistic() {
//   const globeRef = useRef<THREE.Mesh>(null!);

//   // Auto-rotate
//   useFrame(() => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.0008;
//     }
//   });

//   const [colorMap, bumpMap, specMap] = useTexture([
//     "/textures/earth/earth-dark.jpg",
//     "/textures/earth/earth-bump.jpg",
//     "/textures/earth/earth-specular.jpg",
//   ]);

//   return (
//     <group>
//       {/* Earth */}
//       <mesh ref={globeRef} scale={1}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshPhongMaterial
//           map={colorMap}          // Continent colors
//           bumpMap={bumpMap}        // Surface relief
//           bumpScale={0.05}
//           specularMap={specMap}    // Light reflection
//           shininess={5}
//         />
//       </mesh>

//       {/* Glow ring */}
//       <mesh rotation-x={Math.PI / 2}>
//         <ringGeometry args={[1.05, 1.3, 64]} />
//         <meshBasicMaterial
//           color="#38bdf8"
//           transparent
//           opacity={0.2}
//           side={THREE.DoubleSide}
//         />
//       </mesh>

//       {/* Neon atmosphere */}
//       <mesh scale={1.2}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshBasicMaterial
//           color="#0ea5e9"
//           transparent
//           opacity={0.08}
//         />
//       </mesh>
//     </group>
//   );
// }


// export default function GlobeCanvas() {
//   return (
//     // <Canvas
//     //   camera={{ position: [0, 0, 3], fov: 45 }}
//     //   dpr={[1, 2]}
//     //   className="cursor-grab active:cursor-grabbing"
//     // >
//     //   <color attach="background" args={["#020617"]} />
//     //   <ambientLight intensity={0.4} />
//     //   <directionalLight position={[4, 4, 4]} intensity={1.4} color="#38bdf8" />
//     //   <directionalLight position={[-4, -4, -2]} intensity={0.6} color="#1d4ed8" />
//     //   <Globe />
//     //   <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.6} />
//     // </Canvas>
//     <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
//   <ambientLight intensity={0.5} />
//   <directionalLight position={[4, 4, 4]} intensity={1.5} />

//   <GlobeRealistic />   {/* ← use new globe */}

//   <OrbitControls enablePan={false} enableZoom={false} />
// </Canvas>

//   );
// }


"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* ------------------ REALISTIC GLOBE ------------------ */

function GlobeRealistic() {
  const globeRef = useRef<THREE.Mesh>(null!);

  // Auto rotate
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0008;
    }
  });

//   const [colorMap, bumpMap, specMap] = useTexture([
//     "/textures/earth/earth-dark.jpg",
//     "/textures/earth/earth-bump.jpg",
//     "/textures/earth/earth-specular.jpg",
//   ]);
        const [darkMap] = useTexture([
    "/textures/earth/earth-dark.png",
    ]);



  return (
    <group>
      {/* Earth */}
      <mesh ref={globeRef} scale={1}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
            map={darkMap}
            roughness={1}
            metalness={0}
            color="white"
            emissive="black"
            emissiveIntensity={0}
            />

      </mesh>

      {/* Glow ring */}
      {/* <mesh rotation-x={Math.PI / 2}>
        <ringGeometry args={[1.05, 1.3, 64]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.}
          side={THREE.DoubleSide}
        />
      </mesh> */}

      {/* Atmosphere */}
      <mesh scale={1.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

/* ------------------ CANVAS WRAPPER ------------------ */

export default function GlobeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1.5} />

      <GlobeRealistic />

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
