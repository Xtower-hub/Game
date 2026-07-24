import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group, Color } from 'three';
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
      coreRef.current.rotation.y += delta * 0.03;
    }
  });

  // Spiral 3D Platforms ascending up to 300m
  const platforms = useMemo(() => {
    const list = [];
    const count = 80;
    for (let i = 0; i < count; i++) {
      const height = i * 4;
      const angle = i * 0.35;
      const radius = 7;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      list.push({ id: i, pos: [x, height, z] as [number, number, number] });
    }
    return list;
  }, []);

  return (
    <group>
      {/* Dynamic Starfield Atmosphere */}
      <Stars radius={100} depth={50} count={2500} factor={4} saturation={0.8} fade speed={1.5} />

      {/* Volumetric Glowing Ember Particles */}
      <Sparkles
        count={200}
        scale={[30, 300, 30]}
        size={6}
        speed={1.0}
        color="#FF6600"
      />

      {/* Central Metallic Core Pillar with Luminous Finish */}
      <mesh ref={coreRef} position={[0, 150, 0]}>
        <cylinderGeometry args={[5.5, 6.5, 350, 32, 40, true]} />
        <meshStandardMaterial
          color="#4A3B32"
          roughness={0.2}
          metalness={0.8}
          emissive="#662200"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer Neon Energy Rings */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[0, i * 18, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[8.2, 0.25, 16, 48]} />
          <meshStandardMaterial
            color="#FF4400"
            emissive="#FF3300"
            emissiveIntensity={3.0}
            roughness={0.1}
            metalness={1.0}
          />
        </mesh>
      ))}

      {/* Ultra-Visible Bright Basalt Platforms */}
      {platforms.map((p) => {
        const isSpecial = p.id % 4 === 0;
        return (
          <mesh key={p.id} position={p.pos} castShadow receiveShadow>
            <boxGeometry args={[4.8, 1.0, 3.8]} />
            <meshStandardMaterial
              color={isSpecial ? "#E65525" : "#6E5B52"}
              roughness={0.2}
              metalness={0.6}
              emissive={isSpecial ? "#FF4400" : "#442211"}
              emissiveIntensity={isSpecial ? 1.5 : 0.4}
            />
          </mesh>
        );
      })}

      {/* High-Visibility 3D Player Character Avatar */}
      <group position={playerPos}>
        {/* Main Glowing Cyber Knight Body */}
        <mesh position={[0, 1.3, 0]} castShadow>
          <capsuleGeometry args={[0.65, 1.4, 12, 24]} />
          <meshStandardMaterial
            color="#FF3300"
            emissive="#FF2200"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Visor Neon Light */}
        <mesh position={[0, 1.8, 0.45]}>
          <boxGeometry args={[0.75, 0.25, 0.25]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={5.0} />
        </mesh>

        {/* Powerful Player PointLight Light Source */}
        <pointLight position={[0, 2.5, 1.5]} color="#FF6600" intensity={8.0} distance={22} />
      </group>

      {/* Render Shelters */}
      {shelters.map((s) => (
        <group key={s.id} position={s.pos}>
          <mesh position={[0, 1.2, 0]}>
            <boxGeometry args={[3.5, 2.4, 3.5]} />
            <meshStandardMaterial color="#775544" roughness={0.3} metalness={0.7} emissive="#441100" emissiveIntensity={0.5} />
          </mesh>
          {s.shield && (
            <mesh position={[0, 1.2, 0]}>
              <sphereGeometry args={[2.7, 32, 32]} />
              <meshStandardMaterial
                color="#00FF99"
                emissive="#00FF99"
                emissiveIntensity={2.0}
                transparent
                opacity={0.45}
                wireframe
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Render Mutant Rats */}
      {rats.map((r) => (
        <mesh key={r.id} position={r.pos}>
          <coneGeometry args={[0.6, 1.3, 12]} />
          <meshStandardMaterial color="#CCFF00" emissive="#CCFF00" emissiveIntensity={3.0} />
        </mesh>
      ))}

      {/* Render Collectible Resources */}
      {resources.map((res) => (
        <Float key={res.id} speed={3.0} rotationIntensity={2.0} floatIntensity={1.5} position={res.pos}>
          <mesh>
            <octahedronGeometry args={[0.6]} />
            <meshStandardMaterial
              color={res.type === 'metal' ? '#FFFFFF' : '#FF4400'}
              emissive={res.type === 'metal' ? '#FFFFFF' : '#FF4400'}
              emissiveIntensity={2.5}
              roughness={0.05}
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
      <ambientLight intensity={1.8} />
      <directionalLight
        position={[50, 150, 60]}
        intensity={3.5}
        color="#FFF6F0"
        castShadow
      />
      <directionalLight position={[-40, 90, -40]} intensity={2.0} color="#FF6600" />
      <pointLight position={[0, 50, 0]} color="#FF4400" intensity={4.0} distance={100} />
    </>
  );
}
