"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 180; // Optimized count for performance

  const positions1 = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
    }
    return pos;
  }, [count]);

  const positions2 = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.025;
    groupRef.current.rotation.x = Math.sin(time * 0.02) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions1, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.09} color="#3b82f6" transparent opacity={0.35} sizeAttenuation={true} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions2, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.11} color="#e040fb" transparent opacity={0.25} sizeAttenuation={true} />
      </points>
    </group>
  );
}

export default function GlobalParticles() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 5, pointerEvents: "none" }}>
      <Canvas style={{ pointerEvents: "none" }} camera={{ position: [0, 0, 15], fov: 60 }} gl={{ alpha: true, antialias: false }}>
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
