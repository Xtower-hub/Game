import React from 'react';
import Link from 'next/link';
import { Zap, Shield, Skull, Flame } from 'lucide-react';

export const metadata = {
  title: 'Gameplay & Survie 3D — XTOWER',
  description: 'Découvrez la mécanique d’escalade 3D, la construction d’abris et les invasions toxiques de rats.',
};

export default function GameplayPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="text-braise font-mono font-bold text-sm tracking-widest uppercase mb-3">Guide complet du jeu</div>
        <h1 className="font-title text-5xl md:text-7xl font-black uppercase">Gameplay & Survie 3D</h1>
        <p className="text-cendre/75 text-lg max-w-2xl mx-auto mt-4 font-sans">
          Chaque mètre d'altitude se mérite. Voici les trois piliers fondamentaux pour survivre dans la Tour 3D.
        </p>
      </div>

      <div className="space-y-16">
        {/* Palier I */}
        <div className="bg-basalte border border-braise/30 p-10 rounded-3xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-braise/20 border border-braise/50 flex items-center justify-center text-braise mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-braise uppercase tracking-widest mb-2">Palier I</div>
            <h2 className="font-title text-3xl font-black uppercase mb-4">1. Escalade Temps Réel</h2>
            <p className="text-cendre/80 leading-relaxed font-sans text-base">
              Monde 3D unique sans instances séparées. Vous escaladez aux côtés de centaines de joueurs en temps réel. Utilisez la physique pour sauter de plateforme en plateforme. Les collisions physiques vous permettent d'obstruer le passage de vos rivaux ou de les précipiter dans le vide.
            </p>
          </div>
          <div className="bg-basalte/80 border border-braise/20 p-6 rounded-2xl font-mono text-sm">
            <div className="text-cendre font-bold mb-3 border-b border-cendre/10 pb-2">Spécifications Physiques</div>
            <ul className="space-y-2 text-cendre/70 text-xs">
              <li>• Moteur 3D Three.js & Colyseus</li>
              <li>• Dégâts de chute calculés sur la hauteur</li>
              <li>• Collision physique dynamique entre joueurs</li>
            </ul>
          </div>
        </div>

        {/* Palier II */}
        <div className="bg-basalte border border-rouille/40 p-10 rounded-3xl grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="bg-basalte/80 border border-rouille/20 p-6 rounded-2xl font-mono text-sm">
            <div className="text-cendre font-bold mb-3 border-b border-cendre/10 pb-2">Règles des Abris</div>
            <ul className="space-y-2 text-cendre/70 text-xs">
              <li>• 3 min de vulnérabilité après déconnexion</li>
              <li>• Fortification par minerai de basalte</li>
              <li>• Boucliers énergétiques rechargeables</li>
            </ul>
          </div>
          <div>
            <div className="w-12 h-12 rounded-xl bg-rouille/20 border border-rouille/50 flex items-center justify-center text-rouille mb-6">
              <Shield className="w-6 h-6 text-braise" />
            </div>
            <div className="font-mono text-xs text-braise uppercase tracking-widest mb-2">Palier II</div>
            <h2 className="font-title text-3xl font-black uppercase mb-4">2. Fortification d'Abris</h2>
            <p className="text-cendre/80 leading-relaxed font-sans text-base">
              Ne dormez jamais sans protection. Récoltez des minerais sur la paroi et construisez votre abri. En cas de déconnexion, votre abri reste exposé pendant un délai configurable de 3 minutes avant que les boucliers ne s'activent pleinement.
            </p>
          </div>
        </div>

        {/* Palier III */}
        <div className="bg-basalte border border-toxique/40 p-10 rounded-3xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-toxique/20 border border-toxique/50 flex items-center justify-center text-toxique mb-6">
              <Skull className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-toxique uppercase tracking-widest mb-2">Palier III</div>
            <h2 className="font-title text-3xl font-black uppercase mb-4">3. Invasions de Rats Mutants</h2>
            <p className="text-cendre/80 leading-relaxed font-sans text-base">
              Une fois par semaine, une alerte sonne dans toute la tour. Des milliers de rats mutants dévalent depuis le sommet. Coopérez avec vos voisins ou utilisez des pièges pour faire descendre les autres joueurs.
            </p>
          </div>
          <div className="bg-basalte/80 border border-toxique/20 p-6 rounded-2xl font-mono text-sm">
            <div className="text-toxique font-bold mb-3 border-b border-toxique/20 pb-2">Récompenses d'Invasion</div>
            <ul className="space-y-2 text-cendre/70 text-xs">
              <li>• Déclenchement automatique hebdomadaire ou manuel via Admin</li>
              <li>• Destruction des abris non fortifiés</li>
              <li>• Bonus d’altitude pour les survivants</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <Link
          href="/classement"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-braise hover:bg-braise/90 text-cendre font-mono font-bold uppercase rounded-lg transition-all"
        >
          <span>Consulter le Classement Mondial</span>
        </Link>
      </div>
    </main>
  );
}
