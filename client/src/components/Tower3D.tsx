import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function TowerStructure() {
  const towerRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (towerRef.current) {
      towerRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Central Infinite Metallic & Basalt Core Column */}
      <mesh ref={towerRef} position={[0, 50, 0]}>
        <cylinderGeometry args={[8, 8, 200, 32, 50, true]} />
        <meshStandardMaterial
          color="#151210"
          roughness={0.8}
          metalness={0.6}
          wireframe={false}
        />
      </mesh>

      {/* Outer Steel Framework Beams */}
      <mesh position={[0, 50, 0]}>
        <cylinderGeometry args={[10, 10, 200, 16, 25, true]} />
        <meshStandardMaterial
          color="#8B3A2B"
          roughness={0.4}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>

      {/* Realistic Basalt Platforms ascending up */}
      {Array.from({ length: 40 }).map((_, i) => {
        const height = i * 5;
        const angle = (i * 0.8) % (Math.PI * 2);
        const radius = 9;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh key={i} position={[x, height, z]}>
            <boxGeometry args={[4, 0.6, 3]} />
            <meshStandardMaterial
              color={i % 5 === 0 ? "#C4491D" : "#2A2421"}
              emissive={i % 5 === 0 ? "#C4491D" : "#000000"}
              emissiveIntensity={0.5}
              roughness={0.5}
              metalness={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function RealisticEnvironment() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[20, 80, 20]}
        intensity={1.5}
        color="#FFE5D9"
        castShadow
      />
      <pointLight position={[0, 10, 0]} color="#C4491D" intensity={3} distance={20} />
      <fog attach="fog" args={['#151210', 15, 90]} />
    </>
  );
}
