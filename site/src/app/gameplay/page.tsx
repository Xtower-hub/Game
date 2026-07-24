import React from 'react';
import Link from 'next/link';
import { Zap, Shield, Skull, Flame, Hammer, Crosshair, Crown, Clock, AlertTriangle, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Gameplay & Survie 3D — XTOWER (Studio Xgame)',
  description: 'Guide complet du gameplay 3D, physique des collisions, fortification d’abris, vulnérabilité de déconnexion et invasions de rats.',
};

export default function GameplayPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-cendre">
      {/* Header Banner */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-braise/40 bg-braise/10 text-braise font-mono text-xs font-semibold uppercase tracking-widest mb-4">
          <Flame className="w-4 h-4" />
          <span>Guide officiel Studio Xgame</span>
        </div>
        <h1 className="font-title text-5xl md:text-7xl font-black uppercase">Gameplay & Physique 3D</h1>
        <p className="text-cendre/75 text-lg max-w-3xl mx-auto mt-4 font-sans leading-relaxed">
          Chaque mètre d'altitude se conquiert dans la sueur et le métal. Découvrez en détail les mécanismes de déplacement 3D, la physique des collisions, le système de fortification et le cycle des invasions.
        </p>
      </div>

      {/* Quick Specs Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        <div className="bg-basalte border border-braise/30 p-6 rounded-2xl">
          <div className="text-braise font-mono font-bold text-xs uppercase mb-2">Moteur Physique</div>
          <div className="text-xl font-bold font-mono">Three.js 3D</div>
          <p className="text-cendre/60 text-xs mt-2">Physique en temps réel synchronisée par le serveur Colyseus.</p>
        </div>
        <div className="bg-basalte border border-braise/30 p-6 rounded-2xl">
          <div className="text-braise font-mono font-bold text-xs uppercase mb-2">Vulnérabilité</div>
          <div className="text-xl font-bold font-mono">2 à 3 min</div>
          <p className="text-cendre/60 text-xs mt-2">Délai d'exposition de votre abri lors de la déconnexion.</p>
        </div>
        <div className="bg-basalte border border-toxique/40 p-6 rounded-2xl bg-toxique/5">
          <div className="text-toxique font-mono font-bold text-xs uppercase mb-2">Invasions Rats</div>
          <div className="text-xl font-bold font-mono text-cendre">Hebdomadaire</div>
          <p className="text-cendre/60 text-xs mt-2">Horde descendante avec déclenchement auto + manuel.</p>
        </div>
        <div className="bg-basalte border border-braise/30 p-6 rounded-2xl">
          <div className="text-braise font-mono font-bold text-xs uppercase mb-2">Monde Partagé</div>
          <div className="text-xl font-bold font-mono">1 Instance</div>
          <p className="text-cendre/60 text-xs mt-2">Aucun canal séparé. Tous les joueurs s'affrontent sur la même tour.</p>
        </div>
      </div>

      {/* Deep Dive Sections */}
      <div className="space-y-20">
        {/* SECTION 1: ESCALADE ET COLLISIONS */}
        <section className="bg-basalte border border-braise/30 p-8 md:p-12 rounded-3xl grid md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="md:col-span-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-braise/20 border border-braise/50 flex items-center justify-center text-braise">
              <Zap className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-braise uppercase tracking-widest">Phase I — Ascension 3D</div>
            <h2 className="font-title text-3xl md:text-4xl font-black uppercase">1. Escalade & Physique des Collisions</h2>
            <p className="text-cendre/80 font-sans leading-relaxed text-base">
              L'ascension s'effectue dans un espace tridimensionnel complet. Contrairement aux jeux de plateforme 2D classiques, les collisions entre joueurs sont **matérialisées en 3D**.
            </p>
            <ul className="space-y-3 font-mono text-xs text-cendre/90 pt-2">
              <li className="flex items-start space-x-2">
                <Crosshair className="w-4 h-4 text-braise flex-shrink-0 mt-0.5" />
                <span><strong>Blocage corporel :</strong> Vous pouvez sauter sur la tête d'un rival pour atteindre un rebord inaccessible ou bloquer son saut.</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-braise flex-shrink-0 mt-0.5" />
                <span><strong>Dégâts de Chute :</strong> Proportions au nombre de mètres d'altitude perdus. Une chute de 50m entraîne un knock-down instantané.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Cpu className="w-4 h-4 text-braise flex-shrink-0 mt-0.5" />
                <span><strong>Validation Serveur :</strong> Tous les sauts et vélocités sont vérifiés côté serveur par Colyseus pour empêcher toute triche d’anti-gravité.</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5 bg-basalte/90 border border-braise/20 p-6 rounded-2xl font-mono text-xs space-y-4">
            <div className="text-braise font-bold uppercase border-b border-braise/20 pb-2">Tableau des Dégâts de Chute</div>
            <div className="flex justify-between items-center py-1">
              <span className="text-cendre/70">10m à 25m</span>
              <span className="text-emerald-400 font-bold">-20 HP</span>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-cendre/10">
              <span className="text-cendre/70">25m à 60m</span>
              <span className="text-yellow-400 font-bold">-60 HP + Stun</span>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-cendre/10">
              <span className="text-cendre/70">60m et plus</span>
              <span className="text-red-500 font-bold">Mort & Chute zéro</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: CRAFTING ET ABRIS */}
        <section className="bg-basalte border border-rouille/40 p-8 md:p-12 rounded-3xl grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 bg-basalte/90 border border-rouille/20 p-6 rounded-2xl font-mono text-xs space-y-4 order-2 md:order-1">
            <div className="text-rouille font-bold uppercase border-b border-rouille/20 pb-2">Composants de Construction</div>
            <div className="space-y-3">
              <div>
                <span className="text-cendre font-bold">Minerai de Basalte (Roche)</span>
                <p className="text-cendre/60 text-[11px] mt-0.5">Récolté sur les parois de la tour. Sert de structure de base pour les murs d'abri.</p>
              </div>
              <div className="border-t border-cendre/10 pt-2">
                <span className="text-cendre font-bold">Métal Forgé (Acier)</span>
                <p className="text-cendre/60 text-[11px] mt-0.5">Trouvé dans les conteneurs d'altitude. Renforce la résistance des murs face aux explosions.</p>
              </div>
              <div className="border-t border-cendre/10 pt-2">
                <span className="text-braise font-bold">Bouclier Thermique Energétique</span>
                <p className="text-cendre/60 text-[11px] mt-0.5">Active une bulle de force d'abri impénétrable une fois le délai de vulnérabilité écoulé.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-4 order-1 md:order-2">
            <div className="w-12 h-12 rounded-xl bg-rouille/20 border border-rouille/50 flex items-center justify-center text-braise">
              <Hammer className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-braise uppercase tracking-widest">Phase II — Fortification & Survie</div>
            <h2 className="font-title text-3xl md:text-4xl font-black uppercase">2. Construction d'Abris & Vulnérabilité</h2>
            <p className="text-cendre/80 font-sans leading-relaxed text-base">
              La montagne de métal ne pardonne aucun repos imprudent. Dès que vous choisissez de vous poser, vous devez assembler un **Abri 3D** en empilant les matériaux trouvés.
            </p>
            <div className="bg-rouille/10 border border-rouille/30 p-4 rounded-xl text-xs font-mono text-cendre/90 space-y-2">
              <div className="flex items-center space-x-2 text-braise font-bold">
                <Clock className="w-4 h-4" />
                <span>Le Délai de Vulnérabilité (2 à 3 minutes) :</span>
              </div>
              <p>
                Lorsque vous quittez le jeu, votre personnage et votre abri restent physiquement présents et vulnérables dans le monde 3D pendant 2 à 3 minutes (configuré en temps réel via `game_config`). Les joueurs adverses peuvent tenter de percer vos défenses durant ce créneau.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: INVASIONS ET DESTRUCTION */}
        <section className="bg-basalte border border-toxique/40 p-8 md:p-12 rounded-3xl grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-toxique/20 border border-toxique/50 flex items-center justify-center text-toxique">
              <Skull className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-toxique uppercase tracking-widest">Phase III — Événement Toxique</div>
            <h2 className="font-title text-3xl md:text-4xl font-black uppercase">3. Invasions Hebdomadaires de Rats</h2>
            <p className="text-cendre/80 font-sans leading-relaxed text-base">
              Une fois par semaine, un cor d'alarme retentit dans l'ensemble du serveur 3D. Le sommet de la tour libère des **milliers de rats mutants toxiques** qui dévalent la structure à grande vitesse.
            </p>
            <ul className="space-y-3 font-mono text-xs text-cendre/90 pt-2">
              <li className="flex items-start space-x-2">
                <span className="text-toxique font-bold">•</span>
                <span><strong>Destruction d'Abris :</strong> Les rats attaquent en priorité les abris non protégés par des boucliers actifs.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-toxique font-bold">•</span>
                <span><strong>Défense Collective ou Trahison :</strong> Vous pouvez placer des boucliers communs avec d'autres joueurs ou utiliser des lance-flammes pour dériver la horde vers un abri concurrent.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-toxique font-bold">•</span>
                <span><strong>Événements Imprévus :</strong> En plus du grand rendez-vous hebdomadaire, les Maîtres du Jeu peuvent déclencher des invasions surprises à tout moment.</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5 bg-toxique/10 border border-toxique/30 p-6 rounded-2xl font-mono text-xs space-y-4">
            <div className="text-toxique font-bold uppercase border-b border-toxique/30 pb-2">Stats de la Dernière Horde</div>
            <div className="space-y-2 text-cendre/80">
              <div className="flex justify-between">
                <span>Rats Mutants Spawnés :</span>
                <span className="text-toxique font-bold">12 450</span>
              </div>
              <div className="flex justify-between">
                <span>Abris Détruits :</span>
                <span className="text-red-400 font-bold">38</span>
              </div>
              <div className="flex justify-between">
                <span>Joueurs Précipités en Chute :</span>
                <span className="text-braise font-bold">14</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SOMMET ET BOSS */}
        <section className="bg-basalte border border-braise/40 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
          <Crown className="w-14 h-14 text-braise mx-auto mb-4" />
          <h2 className="font-title text-4xl font-black uppercase mb-4">Le Sommet & Le Boss de la Tour</h2>
          <p className="text-cendre/80 font-sans max-w-2xl mx-auto text-base leading-relaxed mb-8">
            Le joueur atteignant l'altitude maximale devient le **Boss du Sommet**. Il obtient l'accès à la tourelle d'interception et peut faire tomber des rochers de basalte sur les grimpeurs en contrebas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/classement"
              className="px-8 py-4 bg-braise hover:bg-braise/90 text-cendre font-mono font-bold uppercase text-xs rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Voir le Classement des Boss</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/achat"
              className="px-8 py-4 bg-basalte border border-braise text-braise hover:bg-braise hover:text-cendre font-mono font-bold uppercase text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>Acheter le Pass Boss</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
