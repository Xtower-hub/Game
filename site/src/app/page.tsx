'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, ArrowUpRight, CheckCircle2, Shield, Zap, Skull } from 'lucide-react';

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
    <div className="relative min-h-[calc(100vh-80px)] bg-basalte text-cendre flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative py-20 px-6 flex flex-col justify-center items-center text-center">
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
          <Link
            href="/gameplay"
            className="w-full sm:w-auto px-8 py-4 bg-braise hover:bg-braise/90 text-cendre font-bold rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-braise/25 flex items-center justify-center space-x-2 font-mono uppercase text-sm"
          >
            <span>Découvrir le Gameplay</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <a
            href="https://client-mu-amber-43.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-basalte border border-cendre/20 hover:border-braise text-cendre font-semibold rounded-lg transition-all flex items-center justify-center space-x-2 font-mono uppercase text-sm"
          >
            <span>Lancer la Démo 3D</span>
          </a>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full border-t border-braise/20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-basalte border border-braise/30 p-8 rounded-2xl">
            <Zap className="w-8 h-8 text-braise mb-4" />
            <h3 className="font-title text-2xl font-bold uppercase mb-2">Escalade 3D Temps Réel</h3>
            <p className="text-cendre/70 text-sm">Monde partagé unique à physique 3D temps réel avec collisions.</p>
          </div>

          <div className="bg-basalte border border-rouille/40 p-8 rounded-2xl">
            <Shield className="w-8 h-8 text-braise mb-4" />
            <h3 className="font-title text-2xl font-bold uppercase mb-2">Abris Fortifiés</h3>
            <p className="text-cendre/70 text-sm">Système de vulnérabilité de 3 minutes post-déconnexion avec boucliers.</p>
          </div>

          <div className="bg-basalte border border-toxique/40 p-8 rounded-2xl">
            <Skull className="w-8 h-8 text-toxique mb-4" />
            <h3 className="font-title text-2xl font-bold uppercase mb-2">Invasions Hebdomadaires</h3>
            <p className="text-cendre/70 text-sm">Vagues massives de rats mutants dévalant du sommet de la tour.</p>
          </div>
        </div>
      </section>

      {/* Bêta Registration Section */}
      <section id="beta" className="py-16 px-6 max-w-4xl mx-auto text-center w-full border-t border-braise/20">
        <h2 className="font-title text-3xl md:text-5xl font-black uppercase mb-4">
          Rejoindre la Bêta Fermée
        </h2>
        <p className="text-cendre/75 text-base mb-8 max-w-xl mx-auto">
          Inscrivez-vous pour obtenir votre accès prioritaire à la première bêta du serveur 3D XTOWER.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center space-x-3 bg-braise/20 border border-braise p-6 rounded-2xl text-braise font-semibold font-mono">
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
    </div>
  );
}
