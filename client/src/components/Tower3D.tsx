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

/* ────────────────────────────────────────────────
   Humanoid Character – built from primitives
   Head + Torso + Arms + Legs = petit bonhomme
   ──────────────────────────────────────────────── */
function HumanoidCharacter({ color = '#FF3300', emissive = '#FF2200' }: { color?: string; emissive?: string }) {
  const mat = { color, emissive, emissiveIntensity: 1.0, roughness: 0.15, metalness: 0.85 };
  const darkMat = { color: '#222222', roughness: 0.3, metalness: 0.9, emissive: '#111111', emissiveIntensity: 0.3 };

  return (
    <group>
      {/* Head (sphere) */}
      <mesh position={[0, 2.15, 0]} castShadow>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>

      {/* Visor / Eyes (neon cyan bar) */}
      <mesh position={[0, 2.18, 0.28]}>
        <boxGeometry args={[0.45, 0.1, 0.1]} />
        <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={6.0} />
      </mesh>

      {/* Torso (box) */}
      <mesh position={[0, 1.55, 0]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.35]} />
        <meshStandardMaterial {...mat} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.45, 1.55, 0]} castShadow>
        <boxGeometry args={[0.18, 0.75, 0.2]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.45, 1.55, 0]} castShadow>
        <boxGeometry args={[0.18, 0.75, 0.2]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.16, 0.85, 0]} castShadow>
        <boxGeometry args={[0.22, 0.7, 0.25]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.16, 0.85, 0]} castShadow>
        <boxGeometry args={[0.22, 0.7, 0.25]} />
        <meshStandardMaterial {...darkMat} />
      </mesh>

      {/* Left Foot */}
      <mesh position={[-0.16, 0.45, 0.06]}>
        <boxGeometry args={[0.24, 0.15, 0.35]} />
        <meshStandardMaterial color="#444444" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Right Foot */}
      <mesh position={[0.16, 0.45, 0.06]}>
        <boxGeometry args={[0.24, 0.15, 0.35]} />
        <meshStandardMaterial color="#444444" roughness={0.4} metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ────────────────────────────────────────────────
   Tower Structure & World
   ──────────────────────────────────────────────── */
export function TowerStructure({ playerPos, shelters, rats, resources }: TowerStructureProps) {
  const coreRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.015;
    }
  });

  // Spiral platforms
  const platforms = useMemo(() => {
    const list = [];
    const count = 80;
    for (let i = 0; i < count; i++) {
      const height = i * 4;
      const angle = i * 0.35;
      const radius = 7;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const rotY = -angle;
      list.push({ id: i, pos: [x, height, z] as [number, number, number], rotY });
    }
    return list;
  }, []);

  // Decorative support beams
  const beams = useMemo(() => {
    const list = [];
    for (let i = 0; i < 30; i++) {
      const h = i * 12;
      const a = i * 1.2;
      list.push({
        id: i,
        pos: [Math.cos(a) * 6.8, h, Math.sin(a) * 6.8] as [number, number, number],
        rotZ: Math.sin(a) * 0.3,
      });
    }
    return list;
  }, []);

  return (
    <group>
      {/* Starfield */}
      <Stars radius={120} depth={60} count={3000} factor={4} saturation={0.6} fade speed={1.2} />

      {/* Ember Particles */}
      <Sparkles count={180} scale={[35, 350, 35]} size={5} speed={0.8} color="#FF6600" />

      {/* ── Central Core Pillar ── */}
      {/* Inner dark basalt core */}
      <mesh ref={coreRef} position={[0, 150, 0]}>
        <cylinderGeometry args={[4.5, 5.5, 360, 24, 50, true]} />
        <meshStandardMaterial
          color="#3A2E28"
          roughness={0.25}
          metalness={0.85}
          emissive="#441800"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Outer steel wireframe cage */}
      <mesh position={[0, 150, 0]}>
        <cylinderGeometry args={[7.0, 7.5, 360, 12, 30, true]} />
        <meshStandardMaterial
          color="#8B3A2B"
          roughness={0.3}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Neon Energy Rings */}
      {Array.from({ length: 22 }).map((_, i) => (
        <mesh key={`ring-${i}`} position={[0, i * 16, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[7.3, 0.18, 16, 48]} />
          <meshStandardMaterial
            color="#FF5500"
            emissive="#FF4400"
            emissiveIntensity={2.5}
            roughness={0.05}
            metalness={1.0}
          />
        </mesh>
      ))}

      {/* Decorative Support Beams */}
      {beams.map((b) => (
        <mesh key={`beam-${b.id}`} position={b.pos} rotation={[0, 0, b.rotZ]}>
          <boxGeometry args={[0.3, 8, 0.3]} />
          <meshStandardMaterial
            color="#5A4A40"
            roughness={0.4}
            metalness={0.7}
            emissive="#331100"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* ── Spiral Platforms ── */}
      {platforms.map((p) => {
        const isSpecial = p.id % 5 === 0;
        const isCheckpoint = p.id % 10 === 0;
        return (
          <group key={p.id} position={p.pos} rotation={[0, p.rotY, 0]}>
            {/* Main Platform */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[5.0, 0.6, 3.5]} />
              <meshStandardMaterial
                color={isCheckpoint ? "#FF6633" : isSpecial ? "#9B5533" : "#6E5B52"}
                roughness={0.25}
                metalness={0.55}
                emissive={isCheckpoint ? "#FF4400" : isSpecial ? "#883300" : "#332211"}
                emissiveIntensity={isCheckpoint ? 1.8 : isSpecial ? 0.8 : 0.3}
              />
            </mesh>

            {/* Platform Edge Trim / Rail */}
            <mesh position={[0, 0.45, -1.6]}>
              <boxGeometry args={[5.0, 0.25, 0.12]} />
              <meshStandardMaterial
                color="#AA5522"
                emissive="#FF4400"
                emissiveIntensity={1.2}
                roughness={0.1}
                metalness={0.95}
              />
            </mesh>

            {/* Checkpoint lamp post */}
            {isCheckpoint && (
              <>
                <mesh position={[2.2, 1.2, 0]}>
                  <cylinderGeometry args={[0.08, 0.08, 2.0, 8]} />
                  <meshStandardMaterial color="#776655" roughness={0.4} metalness={0.8} />
                </mesh>
                <pointLight position={[2.2, 2.4, 0]} color="#FFAA44" intensity={3.0} distance={12} />
              </>
            )}
          </group>
        );
      })}

      {/* ── Player Character (Humanoid) ── */}
      <group position={playerPos}>
        <HumanoidCharacter color="#FF3300" emissive="#FF2200" />
        {/* Player PointLight halo */}
        <pointLight position={[0, 2.5, 1.0]} color="#FF6600" intensity={6.0} distance={18} />
      </group>

      {/* ── Shelters ── */}
      {shelters.map((s) => (
        <group key={s.id} position={s.pos}>
          {/* Base */}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[3.8, 0.4, 3.8]} />
            <meshStandardMaterial color="#5A4535" roughness={0.3} metalness={0.6} emissive="#331100" emissiveIntensity={0.4} />
          </mesh>
          {/* Walls */}
          <mesh position={[0, 1.6, 0]}>
            <boxGeometry args={[3.4, 2.0, 3.4]} />
            <meshStandardMaterial color="#6E5544" roughness={0.35} metalness={0.65} emissive="#441500" emissiveIntensity={0.4} />
          </mesh>
          {/* Roof */}
          <mesh position={[0, 2.9, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[2.8, 1.2, 4]} />
            <meshStandardMaterial color="#8B5533" roughness={0.3} metalness={0.7} emissive="#662200" emissiveIntensity={0.5} />
          </mesh>
          {/* Shield Bubble */}
          {s.shield && (
            <mesh position={[0, 1.5, 0]}>
              <sphereGeometry args={[3.0, 32, 32]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={1.8}
                transparent
                opacity={0.3}
                wireframe
              />
            </mesh>
          )}
          {/* Window light */}
          <pointLight position={[0, 1.6, 1.8]} color="#FFAA44" intensity={2.0} distance={6} />
        </group>
      ))}

      {/* ── Mutant Rats (small 4-legged silhouettes) ── */}
      {rats.map((r) => (
        <group key={r.id} position={r.pos}>
          {/* Body */}
          <mesh position={[0, 0.25, 0]}>
            <boxGeometry args={[0.3, 0.25, 0.7]} />
            <meshStandardMaterial color="#AAFF00" emissive="#AAFF00" emissiveIntensity={2.5} roughness={0.2} metalness={0.6} />
          </mesh>
          {/* Head */}
          <mesh position={[0, 0.3, 0.4]}>
            <sphereGeometry args={[0.18, 8, 8]} />
            <meshStandardMaterial color="#CCFF00" emissive="#CCFF00" emissiveIntensity={3.0} />
          </mesh>
          {/* Tail */}
          <mesh position={[0, 0.2, -0.55]} rotation={[0.3, 0, 0]}>
            <cylinderGeometry args={[0.03, 0.01, 0.5, 6]} />
            <meshStandardMaterial color="#88CC00" emissive="#88CC00" emissiveIntensity={1.5} />
          </mesh>
          {/* Toxic glow */}
          <pointLight position={[0, 0.5, 0]} color="#CCFF00" intensity={1.5} distance={4} />
        </group>
      ))}

      {/* ── Collectible Resources ── */}
      {resources.map((res) => (
        <Float key={res.id} speed={3.0} rotationIntensity={2.0} floatIntensity={1.5} position={res.pos}>
          <mesh>
            <octahedronGeometry args={[0.55]} />
            <meshStandardMaterial
              color={res.type === 'metal' ? '#FFFFFF' : '#FF4400'}
              emissive={res.type === 'metal' ? '#CCCCFF' : '#FF4400'}
              emissiveIntensity={2.0}
              roughness={0.05}
              metalness={1.0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ────────────────────────────────────────────────
   Environment Lighting
   ──────────────────────────────────────────────── */
export function RealisticEnvironment() {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[50, 150, 60]} intensity={3.0} color="#FFF6F0" castShadow />
      <directionalLight position={[-40, 90, -40]} intensity={1.8} color="#FF7733" />
      <pointLight position={[0, 60, 0]} color="#FF5500" intensity={3.5} distance={120} />
      <hemisphereLight args={['#FFD6AA', '#221100', 0.6]} />
    </>
  );
}
