'use client';

import React, { useState } from 'react';
import AltitudeMeter from '@/components/AltitudeMeter';
import { Shield, Trophy, Skull, Flame, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <main className="relative min-h-screen bg-basalte text-cendre overflow-hidden">
      <AltitudeMeter />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center border-b border-braise/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-braise/15 via-basalte to-basalte pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-braise/40 bg-braise/10 text-braise font-mono text-xs font-semibold uppercase tracking-widest mb-8 animate-pulse">
          <Flame className="w-4 h-4 text-braise" />
          <span>Jeu Multijoueur 3D Évolutif</span>
        </div>

        <h1 className="font-title text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-cendre via-cendre to-braise mb-6">
          XTOWER
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-cendre/80 font-sans leading-relaxed mb-10">
          Une tour 3D infinie. Des milliers de joueurs. Un seul trône au sommet. Escaladez, construisez votre abri, résistez aux invasions et précipitez vos rivaux dans l’abîme.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#beta"
            className="w-full sm:w-auto px-8 py-4 bg-braise hover:bg-braise/90 text-cendre font-bold rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-braise/25 flex items-center justify-center space-x-2"
          >
            <span>Rejoindre la Bêta</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="/client"
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 bg-basalte border border-cendre/20 hover:border-braise text-cendre font-semibold rounded-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>Lancer la Démo 3D</span>
          </a>
        </div>
      </section>

      {/* Palier 1: Grimper */}
      <section className="py-28 px-6 border-b border-braise/20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-braise font-mono font-bold text-sm tracking-widest uppercase mb-3">Palier I — Vertige</div>
            <h2 className="font-title text-4xl md:text-5xl font-black mb-6 uppercase">
              Escaladez la Tour Infinie
            </h2>
            <p className="text-cendre/75 text-lg leading-relaxed mb-6">
              L’ascension est sans fin. Chaque étage franchi augmente la pression. Utilisez la physique 3D pour sauter de rebord en rebord, éviter les pièges et dépasser les autres joueurs en temps réel.
            </p>
            <div className="flex items-center space-x-4 font-mono text-sm text-braise">
              <Zap className="w-5 h-5" />
              <span>Plus vous montez, plus les collisions entre joueurs sont meurtrières.</span>
            </div>
          </div>
          <div className="bg-basalte border border-braise/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-braise/10 rounded-full blur-3xl group-hover:bg-braise/20 transition-all" />
            <div className="font-mono text-xs text-cendre/50 uppercase mb-4">Statistiques d'ascension</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-cendre/10 pb-3">
                <span className="text-cendre/80">Record Mondial d'Altitude</span>
                <span className="font-mono font-bold text-braise">4 892 m</span>
              </div>
              <div className="flex justify-between items-center border-b border-cendre/10 pb-3">
                <span className="text-cendre/80">Joueurs sur la même instance</span>
                <span className="font-mono font-bold text-cendre">Monde Partagé Unique</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cendre/80">Dégâts de chute</span>
                <span className="font-mono font-bold text-red-500">Proportionnels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Palier 2: S'abriter */}
      <section className="py-28 px-6 border-b border-braise/20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="bg-basalte border border-rouille/40 rounded-2xl p-8 shadow-2xl relative">
            <Shield className="w-12 h-12 text-braise mb-6" />
            <h3 className="font-title text-2xl font-bold mb-3 uppercase">Système de Vulnérabilité</h3>
            <p className="text-cendre/70 text-sm leading-relaxed mb-4">
              Quand vous vous déconnectez, votre abri reste vulnérable pendant 3 minutes dans le monde 3D. Fortifiez vos murs avec le minerai récolté pour résister aux pillages.
            </p>
            <div className="bg-rouille/20 border border-rouille/30 rounded-lg p-3 text-xs font-mono text-cendre/90">
              Délai ajustable en temps réel via le Game Config Server.
            </div>
          </div>
          <div>
            <div className="text-braise font-mono font-bold text-sm tracking-widest uppercase mb-3">Palier II — Fortification</div>
            <h2 className="font-title text-4xl md:text-5xl font-black mb-6 uppercase">
              Construisez votre Abri
            </h2>
            <p className="text-cendre/75 text-lg leading-relaxed">
              Ne dormez pas à découvert. Récoltez des métaux sur les parois de la tour, construisez un sanctuaire étanche et activez vos boucliers énergétiques avant de quitter le jeu.
            </p>
          </div>
        </div>
      </section>

      {/* Palier 3: Invasions Toxiques */}
      <section className="py-28 px-6 border-b border-toxique/30 bg-toxique/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-toxique/20 border border-toxique/40 text-toxique font-mono text-xs font-bold uppercase mb-6">
            <Skull className="w-4 h-4" />
            <span>Événement Hebdomadaire</span>
          </div>
          <h2 className="font-title text-4xl md:text-6xl font-black mb-6 uppercase text-cendre">
            Invasions de Rats Mutants
          </h2>
          <p className="max-w-2xl mx-auto text-cendre/80 text-lg mb-10">
            Une fois par semaine, la horde déferle du sommet. Des milliers de vermines toxiques dévalent la tour, détruisent les abris et précipitent les joueurs impréparés tout au bas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-basalte/80 border border-toxique/30 p-6 rounded-xl">
              <div className="font-mono text-toxique font-bold text-lg mb-2">01. Alerte Générale</div>
              <p className="text-sm text-cendre/70">Un cor strident retentit dans toute la tour 3D. Vous avez 60 secondes pour vous abriter.</p>
            </div>
            <div className="bg-basalte/80 border border-toxique/30 p-6 rounded-xl">
              <div className="font-mono text-toxique font-bold text-lg mb-2">02. Défense Collective</div>
              <p className="text-sm text-cendre/70">Posez des boucliers thermiques et utilisez vos armes fabriquées pour repousser la vague.</p>
            </div>
            <div className="bg-basalte/80 border border-toxique/30 p-6 rounded-xl">
              <div className="font-mono text-toxique font-bold text-lg mb-2">03. Survivre ou Chuter</div>
              <p className="text-sm text-cendre/70">Ceux dont l'abri cède perdent leur altitude et doivent tout recommencer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Palier 4: Classement */}
      <section className="py-28 px-6 border-b border-braise/20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Trophy className="w-12 h-12 text-braise mx-auto mb-4" />
          <h2 className="font-title text-4xl md:text-5xl font-black uppercase mb-4">Classement Mondial & France</h2>
          <p className="text-cendre/70 max-w-xl mx-auto">Le Top 3 hebdomadaire reçoit les récompenses exclusives de l'Hexagone et du Sommet.</p>
        </div>

        <div className="bg-basalte border border-braise/30 rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-2xl">
          <div className="grid grid-cols-12 bg-braise/20 p-4 font-mono text-xs text-cendre/80 font-bold uppercase tracking-wider">
            <span className="col-span-2">Rang</span>
            <span className="col-span-6">Joueur</span>
            <span className="col-span-4 text-right">Altitude Max</span>
          </div>
          <div className="divide-y divide-braise/10 font-mono text-sm">
            <div className="grid grid-cols-12 p-4 items-center bg-braise/10">
              <span className="col-span-2 font-bold text-braise">#1</span>
              <span className="col-span-6 font-bold text-cendre">ApexPredator_3D</span>
              <span className="col-span-4 text-right text-braise font-bold">4 892 m</span>
            </div>
            <div className="grid grid-cols-12 p-4 items-center">
              <span className="col-span-2 font-bold text-cendre/60">#2</span>
              <span className="col-span-6 text-cendre">Valkyrie_FR</span>
              <span className="col-span-4 text-right text-cendre/90">4 510 m</span>
            </div>
            <div className="grid grid-cols-12 p-4 items-center">
              <span className="col-span-2 font-bold text-cendre/60">#3</span>
              <span className="col-span-6 text-cendre">BasaltKing</span>
              <span className="col-span-4 text-right text-cendre/90">4 120 m</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Form Bêta */}
      <section id="beta" className="py-28 px-6 max-w-4xl mx-auto text-center">
        <h2 className="font-title text-4xl md:text-6xl font-black uppercase mb-6">
          Prêt à conquérir la Tour ?
        </h2>
        <p className="text-cendre/75 text-lg mb-8 max-w-xl mx-auto">
          Inscrivez-vous pour obtenir votre accès prioritaire à la première bêta fermée du serveur 3D XTOWER.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center space-x-3 bg-braise/20 border border-braise p-6 rounded-2xl text-braise font-semibold">
            <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
            <span className="text-left">Inscrit avec succès ! Vous recevrez votre clé d'accès bêta directement par e-mail.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="votre.email@domaine.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-basalte border border-cendre/30 focus:border-braise px-5 py-3.5 rounded-lg text-cendre placeholder-cendre/40 outline-none transition-all font-mono text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-braise hover:bg-braise/90 text-cendre font-bold rounded-lg transition-all flex items-center justify-center space-x-2 font-mono uppercase tracking-wider text-sm shadow-lg shadow-braise/20"
            >
              <span>S'inscrire</span>
            </button>
          </form>
        )}
      </section>

      <footer className="border-t border-braise/20 py-8 px-6 text-center text-xs font-mono text-cendre/40">
        © 2026 XTOWER Monorepo — Tous droits réservés.
      </footer>
    </main>
  );
}
