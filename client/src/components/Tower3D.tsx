import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { Stars, Sparkles, Float } from '@react-three/drei';

interface TowerStructureProps {
  playerPos: [number, number, number];
  shelters: Array<{ id: string; pos: [number, number, number]; hp: number; shield: boolean }>;
  rats: Array<{ id: string; pos: [number, number, number] }>;
  resources: Array<{ id: string; type: string; pos: [number, number, number] }>;
}

export function TowerStructure({ playerPos, shelters, rats, resources }: TowerStructureProps) {
  const coreRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.02;
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
      list.push({ id: i, pos: [x, height, z] as [number, number, number] });
    }
    return list;
  }, []);

  return (
    <group>
      {/* Dynamic Starfield Atmosphere */}
      <Stars radius={150} depth={60} count={2000} factor={4} saturation={0.5} fade speed={1} />

      {/* Volumetric Ember Particles */}
      <Sparkles
        count={150}
        scale={[35, 300, 35]}
        size={5}
        speed={0.8}
        color="#FFA07A"
      />

      {/* Central Metallic Core Pillar with Emissive Stripes */}
      <mesh ref={coreRef} position={[0, 150, 0]}>
        <cylinderGeometry args={[6.5, 7.5, 350, 24, 30, true]} />
        <meshStandardMaterial
          color="#3A322D"
          roughness={0.3}
          metalness={0.7}
          emissive="#552211"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Outer Luminous Energy Rings */}
      {Array.from({ length: 18 }).map((_, i) => (
        <mesh key={i} position={[0, i * 20, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[9.5, 0.2, 16, 48]} />
          <meshStandardMaterial
            color="#FF5500"
            emissive="#FF4400"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}

      {/* High Visibility Basalt Spiral Platforms */}
      {platforms.map((p) => {
        const isSpecial = p.id % 5 === 0;
        return (
          <mesh key={p.id} position={p.pos} castShadow receiveShadow>
            <boxGeometry args={[4.5, 0.9, 3.5]} />
            <meshStandardMaterial
              color={isSpecial ? "#D4592B" : "#4A3F39"}
              roughness={0.3}
              metalness={0.5}
              emissive={isSpecial ? "#FF4400" : "#221100"}
              emissiveIntensity={isSpecial ? 1.2 : 0.2}
            />
          </mesh>
        );
      })}

      {/* Render High-Visibility 3D Player Character Avatar */}
      <group position={playerPos}>
        {/* Player Body (Stylized Glowing Cyber Knight) */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <capsuleGeometry args={[0.55, 1.3, 8, 16]} />
          <meshStandardMaterial
            color="#FF4400"
            emissive="#FF3300"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Visor Glow */}
        <mesh position={[0, 1.65, 0.4]}>
          <boxGeometry args={[0.7, 0.2, 0.25]} />
          <meshStandardMaterial color="#00FFCC" emissive="#00FFCC" emissiveIntensity={4} />
        </mesh>

        {/* High Power Personal PointLight attached to player */}
        <pointLight position={[0, 2.5, 1]} color="#FF7733" intensity={6} distance={18} />
      </group>

      {/* Render Shelters */}
      {shelters.map((s) => (
        <group key={s.id} position={s.pos}>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[3.2, 2.2, 3.2]} />
            <meshStandardMaterial color="#554433" roughness={0.4} metalness={0.6} emissive="#331100" emissiveIntensity={0.3} />
          </mesh>
          {s.shield && (
            <mesh position={[0, 1, 0]}>
              <sphereGeometry args={[2.5, 32, 32]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={1.5}
                transparent
                opacity={0.4}
                wireframe
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Render Mutant Rats */}
      {rats.map((r) => (
        <mesh key={r.id} position={r.pos}>
          <coneGeometry args={[0.5, 1.1, 8]} />
          <meshStandardMaterial color="#AAFF00" emissive="#AAFF00" emissiveIntensity={2.5} />
        </mesh>
      ))}

      {/* Render Collectible Resources */}
      {resources.map((res) => (
        <Float key={res.id} speed={2.5} rotationIntensity={1.5} floatIntensity={1.2} position={res.pos}>
          <mesh>
            <octahedronGeometry args={[0.5]} />
            <meshStandardMaterial
              color={res.type === 'metal' ? '#FFFFFF' : '#FF4400'}
              emissive={res.type === 'metal' ? '#FFFFFF' : '#FF4400'}
              emissiveIntensity={2.0}
              roughness={0.1}
              metalness={1.0}
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
      <ambientLight intensity={1.2} />
      <directionalLight
        position={[40, 120, 50]}
        intensity={3.0}
        color="#FFF8F0"
        castShadow
      />
      <directionalLight position={[-30, 80, -30]} intensity={1.5} color="#FF7733" />
      <fog attach="fog" args={['#151210', 40, 200]} />
    </>
  );
}
