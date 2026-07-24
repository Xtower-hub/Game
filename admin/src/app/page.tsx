'use client';

import React, { useState } from 'react';
import { Users, Skull, Trophy, Settings, AlertOctagon, ShieldAlert, Play, Save } from 'lucide-react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'invasions' | 'config'>('overview');
  
  // Game Config Form State
  const [config, setConfig] = useState({
    vulnerabilityDelay: 180,
    resourceSpawnRate: 1.0,
    ratDamage: 15,
  });

  const [invasionStatus, setInvasionStatus] = useState<string | null>(null);

  const triggerInvasion = async () => {
    if (confirm("Êtes-vous sûr de vouloir déclencher manuellement une invasion de rats sur le serveur 3D ?")) {
      setInvasionStatus("Invasion déclenchée manuellement sur le serveur Colyseus 3D !");
      setTimeout(() => setInvasionStatus(null), 5000);
    }
  };

  return (
    <div className="flex h-screen bg-basalte text-cendre overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-braise/20 bg-basalte/90 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-braise flex items-center justify-center font-bold text-basalte font-mono">
              X
            </div>
            <span className="font-bold text-lg tracking-tight uppercase font-mono">XTOWER ADMIN</span>
          </div>

          <nav className="space-y-2 font-mono text-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'overview' ? 'bg-braise text-cendre font-bold' : 'hover:bg-braise/10 text-cendre/70'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Vue d'ensemble</span>
            </button>
            <button
              onClick={() => setActiveTab('players')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'players' ? 'bg-braise text-cendre font-bold' : 'hover:bg-braise/10 text-cendre/70'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Joueurs & Modération</span>
            </button>
            <button
              onClick={() => setActiveTab('invasions')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'invasions' ? 'bg-braise text-cendre font-bold' : 'hover:bg-braise/10 text-cendre/70'
              }`}
            >
              <Skull className="w-4 h-4 text-toxique" />
              <span>Invasions 3D</span>
            </button>
            <button
              onClick={() => setActiveTab('config')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'config' ? 'bg-braise text-cendre font-bold' : 'hover:bg-braise/10 text-cendre/70'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Game Config</span>
            </button>
          </nav>
        </div>

        <div className="border-t border-braise/20 pt-4 text-xs font-mono text-cendre/50">
          Connecté : <strong className="text-cendre">{process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@xtower.fr'}</strong>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-10 bg-basalte/50">
        {activeTab === 'overview' && (
          <div>
            <h1 className="text-3xl font-black mb-8 uppercase font-mono tracking-tight">Vue d'ensemble du Monde 3D</h1>

            <div className="grid grid-cols-4 gap-6 mb-10">
              <div className="bg-basalte border border-braise/30 p-6 rounded-2xl">
                <div className="text-xs font-mono text-cendre/60 uppercase mb-2">Joueurs Connectés</div>
                <div className="text-4xl font-bold font-mono text-braise">42</div>
              </div>
              <div className="bg-basalte border border-braise/30 p-6 rounded-2xl">
                <div className="text-xs font-mono text-cendre/60 uppercase mb-2">Altitude Moyenne</div>
                <div className="text-4xl font-bold font-mono text-cendre">1 240 m</div>
              </div>
              <div className="bg-basalte border border-braise/30 p-6 rounded-2xl">
                <div className="text-xs font-mono text-cendre/60 uppercase mb-2">Abris Actifs</div>
                <div className="text-4xl font-bold font-mono text-cendre">128</div>
              </div>
              <div className="bg-basalte border border-toxique/40 p-6 rounded-2xl bg-toxique/5">
                <div className="text-xs font-mono text-toxique uppercase mb-2">Prochaine Invasion</div>
                <div className="text-2xl font-bold font-mono text-cendre">Dans 3j 14h</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invasions' && (
          <div>
            <h1 className="text-3xl font-black mb-8 uppercase font-mono tracking-tight">Gestion des Invasions de Rats</h1>

            {invasionStatus && (
              <div className="bg-toxique/20 border border-toxique p-4 rounded-xl text-toxique font-mono mb-6">
                {invasionStatus}
              </div>
            )}

            <div className="bg-basalte border border-braise/30 p-8 rounded-2xl max-w-2xl">
              <h2 className="text-xl font-bold mb-4 font-mono uppercase">Déclenchement Manuel</h2>
              <p className="text-cendre/70 text-sm mb-6">
                Déclencher immédiatement la horde de rats mutants depuis le sommet de la tour sur le serveur de jeu Colyseus.
              </p>
              <button
                onClick={triggerInvasion}
                className="px-6 py-3.5 bg-toxique hover:bg-toxique/90 text-basalte font-bold rounded-lg transition-all flex items-center space-x-2 font-mono uppercase"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Lancer l'invasion maintenant</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div>
            <h1 className="text-3xl font-black mb-8 uppercase font-mono tracking-tight">Configuration Dynamique du Jeu</h1>

            <form onSubmit={(e) => { e.preventDefault(); alert('Game Config sauvegardée dans Supabase !'); }} className="bg-basalte border border-braise/30 p-8 rounded-2xl max-w-2xl space-y-6 font-mono">
              <div>
                <label className="block text-sm mb-2 text-cendre/80">Délai de Vulnérabilité d'Abri (secondes)</label>
                <input
                  type="number"
                  value={config.vulnerabilityDelay}
                  onChange={(e) => setConfig({ ...config, vulnerabilityDelay: Number(e.target.value) })}
                  className="w-full bg-basalte border border-cendre/30 px-4 py-3 rounded-lg text-cendre"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-cendre/80">Taux de Spawn des Ressources (Multiplicateur)</label>
                <input
                  type="number"
                  step="0.1"
                  value={config.resourceSpawnRate}
                  onChange={(e) => setConfig({ ...config, resourceSpawnRate: Number(e.target.value) })}
                  className="w-full bg-basalte border border-cendre/30 px-4 py-3 rounded-lg text-cendre"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-cendre/80">Dégâts des Rats par seconde</label>
                <input
                  type="number"
                  value={config.ratDamage}
                  onChange={(e) => setConfig({ ...config, ratDamage: Number(e.target.value) })}
                  className="w-full bg-basalte border border-cendre/30 px-4 py-3 rounded-lg text-cendre"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 bg-braise hover:bg-braise/90 text-cendre font-bold rounded-lg transition-all flex items-center space-x-2 uppercase"
              >
                <Save className="w-4 h-4" />
                <span>Sauvegarder dans Supabase</span>
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
