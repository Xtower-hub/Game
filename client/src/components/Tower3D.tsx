import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group, Vector3, Color } from 'three';
import { Stars, Sparkles, Float } from '@react-three/drei';

interface TowerStructureProps {
  playerPos: [number, number, number];
  shelters: Array<{ id: string; pos: [number, number, number]; hp: number; shield: boolean }>;
  rats: Array<{ id: string; pos: [number, number, number] }>;
  resources: Array<{ id: string; type: string; pos: [number, number, number] }>;
}

export function TowerStructure({ playerPos, shelters, rats, resources }: TowerStructureProps) {
  const coreRef = useRef<Mesh>(null);
  const ringGroupRef = useRef<Group>(null);

  // Animate core glow rotation and particle movement
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.03;
    }
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.y -= delta * 0.02;
    }
  });

  // Spiral 3D Platforms ascending up to 300m
  const platforms = useMemo(() => {
    const list = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      const height = i * 4;
      const angle = i * 0.4;
      const radius = 8;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      list.push({ id: i, pos: [x, height, z] as [number, number, number], angle, height });
    }
    return list;
  }, []);

  return (
    <group>
      {/* Dynamic Starfield Atmosphere */}
      <Stars radius={120} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      {/* Volumetric Ember Particles drifting up */}
      <Sparkles
        count={250}
        scale={[30, 200, 30]}
        size={4}
        speed={0.6}
        color="#C4491D"
      />

      {/* Central Metallic Core Pillar */}
      <mesh ref={coreRef} position={[0, 100, 0]}>
        <cylinderGeometry args={[6.5, 7.5, 300, 32, 60, true]} />
        <meshStandardMaterial
          color="#151210"
          roughness={0.7}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Luminous Energy Rings */}
      <group ref={ringGroupRef}>
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh key={i} position={[0, i * 20, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[9.5, 0.15, 16, 64]} />
            <meshStandardMaterial
              color="#C4491D"
              emissive="#C4491D"
              emissiveIntensity={1.2}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Basalt Spiral Platforms */}
      {platforms.map((p) => {
        const isSpecial = p.id % 5 === 0;
        return (
          <mesh key={p.id} position={p.pos} castShadow receiveShadow>
            <boxGeometry args={[4.2, 0.8, 3.2]} />
            <meshStandardMaterial
              color={isSpecial ? "#8B3A2B" : "#221D1A"}
              roughness={0.6}
              metalness={0.4}
              emissive={isSpecial ? "#C4491D" : "#000000"}
              emissiveIntensity={isSpecial ? 0.6 : 0}
            />
          </mesh>
        );
      })}

      {/* Render 3D Player Character Avatar */}
      <group position={playerPos}>
        {/* Player Body (Stylized Cyber Knight) */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <capsuleGeometry args={[0.5, 1.2, 8, 16]} />
          <meshStandardMaterial color="#C4491D" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Visor Glow */}
        <mesh position={[0, 1.6, 0.35]}>
          <boxGeometry args={[0.6, 0.15, 0.2]} />
          <meshStandardMaterial color="#8FA31E" emissive="#8FA31E" emissiveIntensity={2} />
        </mesh>
        {/* Foot Light */}
        <pointLight position={[0, 0.2, 0]} color="#C4491D" intensity={2} distance={5} />
      </group>

      {/* Render Shelters */}
      {shelters.map((s) => (
        <group key={s.id} position={s.pos}>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[3, 2, 3]} />
            <meshStandardMaterial color="#1E1917" roughness={0.8} metalness={0.5} />
          </mesh>
          {s.shield && (
            <mesh position={[0, 1, 0]}>
              <sphereGeometry args={[2.2, 32, 32]} />
              <meshStandardMaterial
                color="#8FA31E"
                emissive="#8FA31E"
                emissiveIntensity={0.8}
                transparent
                opacity={0.35}
                wireframe
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Render Rats */}
      {rats.map((r) => (
        <mesh key={r.id} position={r.pos}>
          <coneGeometry args={[0.4, 0.9, 8]} />
          <meshStandardMaterial color="#8FA31E" emissive="#8FA31E" emissiveIntensity={1} />
        </mesh>
      ))}

      {/* Render Collectible Resources */}
      {resources.map((res) => (
        <Float key={res.id} speed={2} rotationIntensity={1} floatIntensity={1} position={res.pos}>
          <mesh>
            <octahedronGeometry args={[0.4]} />
            <meshStandardMaterial
              color={res.type === 'metal' ? '#E8E1D3' : '#C4491D'}
              emissive={res.type === 'metal' ? '#E8E1D3' : '#C4491D'}
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function RealisticEnvironment() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[30, 100, 40]}
        intensity={2.0}
        color="#FFF4EE"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-20, 50, -20]} intensity={0.8} color="#8FA31E" />
      <fog attach="fog" args={['#151210', 20, 110]} />
    </>
  );
}
