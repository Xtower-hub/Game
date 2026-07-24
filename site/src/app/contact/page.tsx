'use client';

import React, { useState } from 'react';
import { Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-braise font-mono font-bold text-sm tracking-widest uppercase mb-3">Support & Partenariats</div>
          <h1 className="font-title text-4xl md:text-6xl font-black uppercase mb-6">Contactez Studio Xgame</h1>
          <p className="text-cendre/75 text-base leading-relaxed mb-8 font-sans">
            Une question technique sur le serveur 3D, une demande de partenariat média ou un problème d'accès ? Remplissez ce formulaire et nous vous répondrons sous 24h.
          </p>

          <div className="space-y-4 font-mono text-sm text-cendre/80">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-braise" />
              <span>contact@xtower-game.fr</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-braise" />
              <span>https://site-xi-seven-39.vercel.app</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-braise" />
              <span>Paris, France — Studio Xgame</span>
            </div>
          </div>
        </div>

        <div className="bg-basalte border border-braise/30 p-8 rounded-2xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 font-mono">
              <CheckCircle2 className="w-12 h-12 text-braise mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Message Envoyé !</h3>
              <p className="text-cendre/70 text-xs">Merci pour votre message. Notre équipe technique reviendra vers vous rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div>
                <label className="block text-xs uppercase mb-2 text-cendre/70">Nom / Pseudo</label>
                <input
                  type="text"
                  required
                  placeholder="Grimpeur_75"
                  className="w-full bg-basalte border border-cendre/20 focus:border-braise px-4 py-3 rounded-lg text-cendre text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-2 text-cendre/70">Adresse E-mail</label>
                <input
                  type="email"
                  required
                  placeholder="vous@domaine.fr"
                  className="w-full bg-basalte border border-cendre/20 focus:border-braise px-4 py-3 rounded-lg text-cendre text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-2 text-cendre/70">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Votre message ou question..."
                  className="w-full bg-basalte border border-cendre/20 focus:border-braise px-4 py-3 rounded-lg text-cendre text-sm outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-braise hover:bg-braise/90 text-cendre font-bold rounded-lg uppercase tracking-wider text-sm transition-all"
              >
                Envoyer le Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
