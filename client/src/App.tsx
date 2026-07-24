import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { TowerStructure, RealisticEnvironment } from './components/Tower3D';
import { Shield, Zap, Flame, User, ArrowUp, Skull, Hammer, Play, CheckCircle2 } from 'lucide-react';
import { Client, Room } from 'colyseus.js';
import { createClient } from '@supabase/supabase-js';

// Supabase Init
const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iclnjxdwpmxpfanmxijt.supabase.co';
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbG5qeGR3cG14cGZhbm14aWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4Njg2MDUsImV4cCI6MjEwMDQ0NDYwNX0.8nHslwq9zAllXPQCTrw2W8woyhmvguPuT-7LIPxUcck';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  // Gameplay State
  const [playerPos, setPlayerPos] = useState<[number, number, number]>([0, 0, 8]);
  const [altitude, setAltitude] = useState(0);
  const [hp, setHp] = useState(100);
  const [resources, setResources] = useState({ metal: 35, basalt: 20 });
  const [shelters, setShelters] = useState<Array<{ id: string; pos: [number, number, number]; hp: number; shield: boolean }>>([
    { id: 's1', pos: [0, 20, 8], hp: 100, shield: true },
    { id: 's2', pos: [-5, 48, 6], hp: 80, shield: false },
  ]);
  const [rats, setRats] = useState<Array<{ id: string; pos: [number, number, number] }>>([]);
  const [collectibleResources, setCollectibleResources] = useState<Array<{ id: string; type: string; pos: [number, number, number] }>>([
    { id: 'r1', type: 'metal', pos: [2, 4, 7] },
    { id: 'r2', type: 'basalt', pos: [-3, 8, 8] },
    { id: 'r3', type: 'metal', pos: [4, 16, 6] },
    { id: 'r4', type: 'basalt', pos: [-2, 24, 7] },
  ]);

  // Auth & Connection State
  const [user, setUser] = useState<any>(null);
  const [authEmail, setAuthEmail] = useState('');
  const [authSent, setAuthSent] = useState(false);
  const [connectedServer, setConnectedServer] = useState(false);
  const colyseusRoomRef = useRef<Room | null>(null);

  // Check Supabase Auth User
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setUser(data.user);
    });
  }, []);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) return;
    const { error } = await supabase.auth.signInWithOtp({ email: authEmail });
    if (!error) setAuthSent(true);
  };

  // Connect to Colyseus Server 3D Room
  useEffect(() => {
    const colyseusUrl = import.meta.env.VITE_SERVER_URL || 'ws://localhost:2567';
    const client = new Client(colyseusUrl);

    client.joinOrCreate("tower_room")
      .then((room) => {
        colyseusRoomRef.current = room;
        setConnectedServer(true);
        console.log("[XTOWER CLIENT] Joined 3D Colyseus Tower Room successfully!");
      })
      .catch((err) => {
        console.log("[XTOWER CLIENT] Standalone local 3D Mode active (Server offline/local)");
      });
  }, []);

  // Keyboard Controls Listener (Z, Q, S, D / Arrow Keys + Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPlayerPos((prev) => {
        let [x, y, z] = prev;
        const step = 0.8;
        const climbStep = 1.2;

        if (e.key === 'z' || e.key === 'Z' || e.key === 'ArrowUp') {
          y += climbStep; // Climb Up
          // Spiral angle math for smooth 3D ascension curve
          const angle = (y / 4) * 0.4;
          x = Math.cos(angle) * 8;
          z = Math.sin(angle) * 8;
        } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
          y = Math.max(0, y - climbStep); // Descend
          const angle = (y / 4) * 0.4;
          x = Math.cos(angle) * 8;
          z = Math.sin(angle) * 8;
        } else if (e.key === 'q' || e.key === 'Q' || e.key === 'ArrowLeft') {
          x -= step;
        } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
          x += step;
        } else if (e.key === ' ' || e.code === 'Space') {
          y += 2.0; // Jump
        }

        const newAltitude = Math.round(y);
        setAltitude(newAltitude);

        // Send 3D movement to Colyseus Server
        if (colyseusRoomRef.current) {
          colyseusRoomRef.current.send("move", { x, y, z });
        }

        return [x, y, z];
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Build Shelter Action
  const handleBuildShelter = () => {
    if (resources.basalt < 10 || resources.metal < 5) {
      alert("Ressources insuffisantes (Requis: 10 Basalte, 5 Métal)");
      return;
    }
    setResources((r) => ({ metal: r.metal - 5, basalt: r.basalt - 10 }));
    const newShelter = {
      id: `shelter_${Date.now()}`,
      pos: [playerPos[0], playerPos[1], playerPos[2]] as [number, number, number],
      hp: 100,
      shield: true,
    };
    setShelters((prev) => [...prev, newShelter]);
    if (colyseusRoomRef.current) {
      colyseusRoomRef.current.send("build_shelter", { x: playerPos[0], y: playerPos[1], z: playerPos[2] });
    }
  };

  // Trigger Rat Invasion Action
  const handleTriggerInvasion = () => {
    const newRats = [
      { id: 'rat1', pos: [playerPos[0] + 1, playerPos[1] + 15, playerPos[2]] as [number, number, number] },
      { id: 'rat2', pos: [playerPos[0] - 2, playerPos[1] + 20, playerPos[2] + 1] as [number, number, number] },
      { id: 'rat3', pos: [playerPos[0], playerPos[1] + 25, playerPos[2] - 1] as [number, number, number] },
    ];
    setRats(newRats);
    if (colyseusRoomRef.current) {
      colyseusRoomRef.current.send("trigger_invasion_manual", {});
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-basalte select-none font-mono">
      {/* 3D WebGL Canvas Viewport */}
      <Canvas shadows className="w-full h-full">
        <PerspectiveCamera makeDefault position={[playerPos[0], playerPos[1] + 6, playerPos[2] + 16]} fov={60} />
        <OrbitControls target={[playerPos[0], playerPos[1] + 1, playerPos[2]]} maxPolarAngle={Math.PI / 2 + 0.1} minDistance={4} maxDistance={30} />
        <RealisticEnvironment />
        <TowerStructure playerPos={playerPos} shelters={shelters} rats={rats} resources={collectibleResources} />
      </Canvas>

      {/* Top Left HUD: Player Profile & Resources */}
      <div className="absolute top-6 left-6 z-10 flex flex-col space-y-3 pointer-events-none">
        <div className="bg-basalte/90 border border-braise/40 p-3.5 rounded-xl backdrop-blur-md shadow-2xl flex items-center space-x-3 pointer-events-auto">
          <div className="w-9 h-9 rounded-full bg-braise/20 border border-braise flex items-center justify-center text-braise">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-xs text-cendre flex items-center space-x-2">
              <span>{user?.email ? user.email.split('@')[0] : 'Grimpeur_Alpha'}</span>
              <span className={`w-2 h-2 rounded-full ${connectedServer ? 'bg-emerald-500' : 'bg-yellow-500'}`} title={connectedServer ? 'Connecté Serveur Colyseus' : 'Mode 3D Local'} />
            </div>
            <div className="w-32 h-2 bg-basalte border border-braise/30 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-gradient-to-r from-red-600 to-braise" style={{ width: `${hp}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-basalte/90 border border-cendre/20 p-2.5 rounded-xl backdrop-blur-md flex items-center space-x-4 text-xs font-mono">
          <div className="flex items-center space-x-1.5 text-cendre/80">
            <span className="w-2.5 h-2.5 rounded-full bg-braise" />
            <span>Métal: <strong className="text-cendre">{resources.metal}</strong></span>
          </div>
          <div className="flex items-center space-x-1.5 text-cendre/80">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
            <span>Basalte: <strong className="text-cendre">{resources.basalt}</strong></span>
          </div>
        </div>
      </div>

      {/* Top Right HUD: Live Altitude Counter */}
      <div className="absolute top-6 right-6 z-10 bg-basalte/90 border border-braise/60 px-5 py-2.5 rounded-2xl backdrop-blur-md shadow-2xl flex items-center space-x-3 pointer-events-none">
        <ArrowUp className="w-5 h-5 text-braise animate-bounce" />
        <div className="flex flex-col items-end">
          <span className="text-[9px] text-cendre/60 uppercase tracking-widest">Altitude 3D Jouable</span>
          <span className="text-2xl font-black text-braise">{altitude} m</span>
        </div>
      </div>

      {/* Interactive Action Bar (Build & Invasions) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-basalte/90 border border-braise/40 p-2 rounded-2xl backdrop-blur-md shadow-2xl">
        <button
          onClick={handleBuildShelter}
          className="px-4 py-2 bg-braise hover:bg-braise/90 text-cendre font-bold text-xs uppercase rounded-xl transition-all flex items-center space-x-2 shadow-lg"
        >
          <Hammer className="w-4 h-4" />
          <span>Construire Abri (10 Basalte)</span>
        </button>

        <button
          onClick={handleTriggerInvasion}
          className="px-4 py-2 bg-toxique/20 border border-toxique hover:bg-toxique/30 text-toxique font-bold text-xs uppercase rounded-xl transition-all flex items-center space-x-2"
        >
          <Skull className="w-4 h-4" />
          <span>Invoquer Invasion Rats</span>
        </button>
      </div>

      {/* Controls Bar Footer */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-basalte/80 border border-cendre/20 px-6 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono text-cendre/70 flex items-center space-x-3 pointer-events-none">
        <span className="text-braise font-bold">[TOUCHES Z S]</span>
        <span>Grimper / Descendre</span>
        <span>•</span>
        <span className="text-braise font-bold">[Q D / Flèches]</span>
        <span>Latéral</span>
        <span>•</span>
        <span className="text-braise font-bold">[Espace]</span>
        <span>Sauter</span>
      </div>

      {/* Supabase Login Modal Drawer */}
      {!user && (
        <div className="absolute top-6 right-64 z-20">
          <div className="bg-basalte/95 border border-braise/40 p-3 rounded-xl backdrop-blur-md text-xs">
            {authSent ? (
              <span className="text-emerald-400 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                <span>Magic link envoyé !</span>
              </span>
            ) : (
              <form onSubmit={handleMagicLink} className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Connexion Email"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className="bg-basalte border border-cendre/30 px-2 py-1 rounded text-cendre text-xs outline-none"
                />
                <button type="submit" className="px-2.5 py-1 bg-braise text-cendre font-bold rounded">
                  OK
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
