'use client';

import React, { useState } from 'react';
import AltitudeMeter from '@/components/AltitudeMeter';
import { Shield, Trophy, Skull, Flame, ArrowUpRight, Zap, CheckCircle2, Menu, X, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-basalte text-cendre overflow-hidden">
      {/* Dynamic Altitude & Real Online Players Counter */}
      <AltitudeMeter />

      {/* Navigation Header Menu */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-basalte/80 backdrop-blur-md border-b border-braise/20 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#accueil" className="flex items-center space-x-3 font-title text-2xl font-black text-cendre tracking-wider">
            <span className="w-9 h-9 rounded-lg bg-braise flex items-center justify-center text-basalte font-mono font-bold text-xl">X</span>
            <span>XTOWER</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-mono text-sm uppercase tracking-wider">
            <a href="#accueil" className="text-cendre/80 hover:text-braise transition-colors">Accueil</a>
            <a href="#gameplay" className="text-cendre/80 hover:text-braise transition-colors">Gameplay</a>
            <a href="#classement" className="text-cendre/80 hover:text-braise transition-colors">Classement</a>
            <a href="#contact" className="text-cendre/80 hover:text-braise transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#beta"
              className="px-5 py-2.5 bg-braise hover:bg-braise/90 text-cendre font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-braise/20"
            >
              Rejoindre la Bêta
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cendre hover:text-braise focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-basalte border-b border-braise/30 px-6 py-6 font-mono text-sm flex flex-col space-y-4">
            <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="text-cendre hover:text-braise py-1 border-b border-cendre/10">Accueil</a>
            <a href="#gameplay" onClick={() => setMobileMenuOpen(false)} className="text-cendre hover:text-braise py-1 border-b border-cendre/10">Gameplay</a>
            <a href="#classement" onClick={() => setMobileMenuOpen(false)} className="text-cendre hover:text-braise py-1 border-b border-cendre/10">Classement</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-cendre hover:text-braise py-1 border-b border-cendre/10">Contact</a>
            <a
              href="#beta"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 bg-braise text-cendre font-bold uppercase rounded-lg"
            >
              Rejoindre la Bêta
            </a>
          </div>
        )}
      </header>

      {/* Hero Section / Accueil */}
      <section id="accueil" className="relative min-h-screen pt-24 flex flex-col justify-center items-center px-6 text-center border-b border-braise/20">
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
            href="https://client-mu-amber-43.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-basalte border border-cendre/20 hover:border-braise text-cendre font-semibold rounded-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>Lancer la Démo 3D</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
          </a>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="py-28 px-6 border-b border-braise/20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-braise font-mono font-bold text-sm tracking-widest uppercase mb-3">Expérience Immersive</div>
          <h2 className="font-title text-4xl md:text-6xl font-black uppercase">Gameplay & Survie 3D</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-basalte border border-braise/30 p-8 rounded-2xl relative overflow-hidden group hover:border-braise transition-all">
            <div className="w-12 h-12 rounded-xl bg-braise/20 border border-braise/50 flex items-center justify-center text-braise mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-title text-2xl font-bold uppercase mb-3">1. Escalade Réelle</h3>
            <p className="text-cendre/75 text-sm leading-relaxed">
              Ascension verticale temps réel dans un monde 3D partagé. Sautez entre les rebords de basalte et utilisez les collisions contre les autres joueurs.
            </p>
          </div>

          <div className="bg-basalte border border-rouille/40 p-8 rounded-2xl relative overflow-hidden group hover:border-rouille transition-all">
            <div className="w-12 h-12 rounded-xl bg-rouille/20 border border-rouille/50 flex items-center justify-center text-rouille mb-6">
              <Shield className="w-6 h-6 text-braise" />
            </div>
            <h3 className="font-title text-2xl font-bold uppercase mb-3">2. Abri & Sécurité</h3>
            <p className="text-cendre/75 text-sm leading-relaxed">
              Fortifiez votre sanctuaire. Vos abris restent vulnérables 3 minutes après déconnexion. Posez des boucliers énergétiques pour protéger vos ressources.
            </p>
          </div>

          <div className="bg-basalte border border-toxique/40 p-8 rounded-2xl relative overflow-hidden group hover:border-toxique transition-all">
            <div className="w-12 h-12 rounded-xl bg-toxique/20 border border-toxique/50 flex items-center justify-center text-toxique mb-6">
              <Skull className="w-6 h-6" />
            </div>
            <h3 className="font-title text-2xl font-bold uppercase mb-3">3. Invasions Toxiques</h3>
            <p className="text-cendre/75 text-sm leading-relaxed">
              Une fois par semaine, des hordes de rats mutants dévalent la tour depuis le sommet. Repoussez la vague avec votre guilde ou chutez à zéro.
            </p>
          </div>
        </div>
      </section>

      {/* Classement Section */}
      <section id="classement" className="py-28 px-6 border-b border-braise/20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Trophy className="w-12 h-12 text-braise mx-auto mb-4" />
          <h2 className="font-title text-4xl md:text-5xl font-black uppercase mb-4">Classement Général & France</h2>
          <p className="text-cendre/70 max-w-xl mx-auto font-sans">Le Top 3 hebdomadaire remporte les récompenses exclusives et le titre de Boss de la Tour.</p>
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

      {/* Form Bêta */}
      <section id="beta" className="py-24 px-6 border-b border-braise/20 max-w-4xl mx-auto text-center">
        <h2 className="font-title text-4xl md:text-6xl font-black uppercase mb-6">
          Prêt à conquérir la Tour ?
        </h2>
        <p className="text-cendre/75 text-lg mb-8 max-w-xl mx-auto">
          Inscrivez-vous pour obtenir votre accès prioritaire à la première bêta fermée du serveur 3D XTOWER.
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

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 max-w-6xl mx-auto border-b border-braise/20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-braise font-mono font-bold text-sm tracking-widest uppercase mb-3">Équipe & Support</div>
            <h2 className="font-title text-4xl md:text-5xl font-black uppercase mb-6">Contactez XTOWER Studio</h2>
            <p className="text-cendre/75 text-base leading-relaxed mb-8 font-sans">
              Une question sur le jeu 3D, un partenariat média ou un problème technique ? Remplissez ce formulaire et notre équipe technique vous répondra sous 24h.
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
                <span>Paris, France — Studio Indépendant</span>
              </div>
            </div>
          </div>

          <div className="bg-basalte border border-braise/30 p-8 rounded-2xl shadow-2xl">
            {contactSubmitted ? (
              <div className="text-center py-8 font-mono">
                <CheckCircle2 className="w-12 h-12 text-braise mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Envoyé !</h3>
                <p className="text-cendre/70 text-xs">Merci pour votre message. Nous reviendrons vers vous très rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono">
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
      </section>

      {/* Complete Footer with Partenaires, Mentions, CGV, CGU */}
      <footer className="bg-basalte border-t border-braise/30 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center space-x-3 font-title text-xl font-black text-cendre mb-4">
              <span className="w-7 h-7 rounded bg-braise flex items-center justify-center text-basalte font-mono font-bold text-sm">X</span>
              <span>XTOWER 3D</span>
            </div>
            <p className="text-cendre/60 text-xs leading-relaxed font-sans mb-4">
              Le jeu multijoueur d'escalade verticale et de fortification d'abris 3D.
            </p>
            <div className="font-mono text-[10px] text-cendre/40">
              © 2026 XTOWER Studio. Tous droits réservés.
            </div>
          </div>

          {/* Nos Partenaires */}
          <div className="font-mono text-xs">
            <div className="font-bold text-cendre uppercase tracking-wider mb-4 border-b border-braise/20 pb-2">Nos Partenaires</div>
            <ul className="space-y-2 text-cendre/70">
              <li className="hover:text-braise transition-colors flex items-center space-x-1">
                <span>• Supabase Cloud Postgres</span>
              </li>
              <li className="hover:text-braise transition-colors flex items-center space-x-1">
                <span>• Vercel Edge Network</span>
              </li>
              <li className="hover:text-braise transition-colors flex items-center space-x-1">
                <span>• Railway Infrastructure</span>
              </li>
              <li className="hover:text-braise transition-colors flex items-center space-x-1">
                <span>• Colyseus Multiplayer Engine</span>
              </li>
            </ul>
          </div>

          {/* Liens Juridiques */}
          <div className="font-mono text-xs">
            <div className="font-bold text-cendre uppercase tracking-wider mb-4 border-b border-braise/20 pb-2">Juridique & Légal</div>
            <ul className="space-y-2 text-cendre/70">
              <li><a href="#contact" className="hover:text-braise transition-colors">• Mentions Légales</a></li>
              <li><a href="#contact" className="hover:text-braise transition-colors">• CGV (Conditions Générales de Vente)</a></li>
              <li><a href="#contact" className="hover:text-braise transition-colors">• CGU (Conditions d'Utilisation)</a></li>
              <li><a href="#contact" className="hover:text-braise transition-colors">• Politique de Confidentialité & RGPD</a></li>
            </ul>
          </div>

          {/* Liens Utiles & Status */}
          <div className="font-mono text-xs">
            <div className="font-bold text-cendre uppercase tracking-wider mb-4 border-b border-braise/20 pb-2">Ressources & Serveurs</div>
            <ul className="space-y-2 text-cendre/70">
              <li>
                <a href="https://client-mu-amber-43.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-braise transition-colors flex items-center space-x-1">
                  <span>• Serveur 3D Temps Réel</span>
                  <ExternalLink className="w-3 h-3 inline ml-1 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://admin-three-pied-43.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-braise transition-colors flex items-center space-x-1">
                  <span>• Dashboard Administration</span>
                  <ExternalLink className="w-3 h-3 inline ml-1 opacity-60" />
                </a>
              </li>
              <li><a href="#gameplay" className="hover:text-braise transition-colors">• Documentation des Rôles & Abris</a></li>
              <li><a href="#contact" className="hover:text-braise transition-colors">• Centre de Signalement Joueurs</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-braise/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-cendre/40">
          <div>XTOWER Studio — Développé avec Next.js 14, Three.js 3D & Supabase.</div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#accueil" className="hover:text-braise">Haut de page ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
