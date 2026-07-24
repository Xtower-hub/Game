import React from 'react';
import { Trophy, Award, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Classement Général & France — XTOWER',
  description: 'Consultez les records d’altitude max atteints par les meilleurs joueurs du monde et de France sur XTOWER.',
};

export default function LeaderboardPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <Trophy className="w-14 h-14 text-braise mx-auto mb-4" />
        <h1 className="font-title text-5xl md:text-7xl font-black uppercase">Classement Mondial & France</h1>
        <p className="text-cendre/75 text-lg max-w-2xl mx-auto mt-4 font-sans">
          Les 3 premiers joueurs du classement hebdomadaire obtiennent les privilèges et le contrôle de la tour.
        </p>
      </div>

      <div className="bg-basalte border border-braise/40 rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
        <div className="grid grid-cols-12 bg-braise/20 p-5 font-mono text-xs text-cendre/80 font-bold uppercase tracking-wider">
          <span className="col-span-2">Rang</span>
          <span className="col-span-5">Joueur / Pseudo</span>
          <span className="col-span-2">Statut</span>
          <span className="col-span-3 text-right">Altitude Max</span>
        </div>

        <div className="divide-y divide-braise/10 font-mono text-sm">
          <div className="grid grid-cols-12 p-5 items-center bg-braise/10">
            <span className="col-span-2 font-bold text-braise flex items-center space-x-1">
              <Award className="w-4 h-4 inline" />
              <span>#1</span>
            </span>
            <span className="col-span-5 font-bold text-cendre">ApexPredator_3D</span>
            <span className="col-span-2 text-xs text-emerald-400">En Ligne</span>
            <span className="col-span-3 text-right text-braise font-bold text-base">4 892 m</span>
          </div>

          <div className="grid grid-cols-12 p-5 items-center">
            <span className="col-span-2 font-bold text-cendre/60">#2</span>
            <span className="col-span-5 text-cendre font-semibold">Valkyrie_FR</span>
            <span className="col-span-2 text-xs text-cendre/50">Abri Fortifié</span>
            <span className="col-span-3 text-right text-cendre font-bold">4 510 m</span>
          </div>

          <div className="grid grid-cols-12 p-5 items-center">
            <span className="col-span-2 font-bold text-cendre/60">#3</span>
            <span className="col-span-5 text-cendre font-semibold">BasaltKing</span>
            <span className="col-span-2 text-xs text-cendre/50">Hors Ligne</span>
            <span className="col-span-3 text-right text-cendre font-bold">4 120 m</span>
          </div>

          <div className="grid grid-cols-12 p-5 items-center">
            <span className="col-span-2 font-bold text-cendre/40">#4</span>
            <span className="col-span-5 text-cendre/80">TowerGhost</span>
            <span className="col-span-2 text-xs text-emerald-400">En Ligne</span>
            <span className="col-span-3 text-right text-cendre/80 font-bold">3 890 m</span>
          </div>

          <div className="grid grid-cols-12 p-5 items-center">
            <span className="col-span-2 font-bold text-cendre/40">#5</span>
            <span className="col-span-5 text-cendre/80">ShadowClimber</span>
            <span className="col-span-2 text-xs text-cendre/50">Hors Ligne</span>
            <span className="col-span-3 text-right text-cendre/80 font-bold">3 450 m</span>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-basalte border border-cendre/20 p-6 rounded-2xl max-w-4xl mx-auto flex items-center space-x-4 font-mono text-xs text-cendre/70">
        <ShieldAlert className="w-6 h-6 text-braise flex-shrink-0" />
        <span>Le reset du classement a lieu tous les dimanches à minuit. Les récompenses de saison sont distribuées automatiquement.</span>
      </div>
    </main>
  );
}
