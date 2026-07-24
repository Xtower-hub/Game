import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { TowerStructure, RealisticEnvironment } from './components/Tower3D';
import { Shield, Zap, Flame, User, ArrowUp, AlertTriangle } from 'lucide-react';

export default function App() {
  const [altitude, setAltitude] = useState(145);
  const [hp, setHp] = useState(85);
  const [resources, setResources] = useState({ metal: 24, basalt: 12 });

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-basalte">
      {/* 3D WebGL Canvas Viewport */}
      <Canvas shadows className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 15, 25]} fov={60} />
        <OrbitControls maxPolarAngle={Math.PI / 2 + 0.1} minDistance={5} maxDistance={40} />
        <RealisticEnvironment />
        <TowerStructure />
      </Canvas>

      {/* Futuristic HUD Overlay */}
      <div className="absolute top-6 left-6 z-10 flex flex-col space-y-4 pointer-events-none">
        {/* Player Profile & HP */}
        <div className="bg-basalte/90 border border-braise/40 p-4 rounded-xl backdrop-blur-md shadow-2xl flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-braise/20 border border-braise flex items-center justify-center text-braise">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-cendre">Grimpeur_Alpha</div>
            <div className="w-36 h-2.5 bg-basalte border border-braise/30 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-gradient-to-r from-red-600 to-braise" style={{ width: `${hp}%` }} />
            </div>
          </div>
        </div>

        {/* Resources HUD */}
        <div className="bg-basalte/90 border border-cendre/20 p-3 rounded-xl backdrop-blur-md flex items-center space-x-4 text-xs font-mono">
          <div className="flex items-center space-x-1.5 text-cendre/80">
            <span className="w-2.5 h-2.5 rounded-full bg-braise" />
            <span>Métal : <strong className="text-cendre">{resources.metal}</strong></span>
          </div>
          <div className="flex items-center space-x-1.5 text-cendre/80">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
            <span>Basalte : <strong className="text-cendre">{resources.basalt}</strong></span>
          </div>
        </div>
      </div>

      {/* Top Right Altitude HUD */}
      <div className="absolute top-6 right-6 z-10 bg-basalte/90 border border-braise/60 px-6 py-3 rounded-2xl backdrop-blur-md shadow-2xl flex items-center space-x-3">
        <ArrowUp className="w-6 h-6 text-braise animate-bounce" />
        <div className="flex flex-col items-end font-mono">
          <span className="text-[10px] text-cendre/60 uppercase tracking-widest">Altitude 3D</span>
          <span className="text-3xl font-black text-braise">{altitude} m</span>
        </div>
      </div>

      {/* Bottom Center Controls Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-basalte/80 border border-cendre/20 px-6 py-2.5 rounded-full backdrop-blur-md text-xs font-mono text-cendre/70 flex items-center space-x-4">
        <span>[Souris] Orienter Caméra</span>
        <span>•</span>
        <span>[Z Q S D] Déplacement 3D</span>
        <span>•</span>
        <span>[Espace] Sauter</span>
      </div>
    </div>
  );
}
