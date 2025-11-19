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
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.0} />
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
