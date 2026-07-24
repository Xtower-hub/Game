import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Shield, Zap, Sparkles, Check } from 'lucide-react';

export const metadata = {
  title: 'Boutique & Pass de Saison — XTOWER',
  description: 'Achetez des packs de ressources, des skins d’abri et le Pass de Saison XTOWER.',
};

export default function AchatPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-braise/40 bg-braise/10 text-braise font-mono text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Boutique Officielle</span>
        </div>
        <h1 className="font-title text-5xl md:text-7xl font-black uppercase">Offres & Pass de Saison</h1>
        <p className="text-cendre/75 text-lg max-w-2xl mx-auto mt-4 font-sans">
          Équiper votre abri, débloquez des boucliers renforcés et dominez les invasions hebdomadaires.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Pack Découverte */}
        <div className="bg-basalte border border-cendre/20 p-8 rounded-3xl flex flex-col justify-between hover:border-braise/40 transition-all">
          <div>
            <div className="font-mono text-xs text-cendre/60 uppercase tracking-widest mb-2">Pack Débutant</div>
            <h3 className="font-title text-2xl font-bold uppercase mb-4">Kit d'Escalade</h3>
            <div className="font-mono text-4xl font-black text-cendre mb-6">
              4,99 € <span className="text-xs text-cendre/40 font-normal">/ unique</span>
            </div>
            <ul className="space-y-3 font-mono text-xs text-cendre/80 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>+ 500 unités de Métal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>+ 200 unités de Basalte</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>Bouclier d'Abri 24h</span>
              </li>
            </ul>
          </div>
          <button className="w-full py-3.5 bg-basalte border border-braise text-braise hover:bg-braise hover:text-cendre font-mono font-bold uppercase rounded-xl transition-all text-xs">
            Acheter le Kit
          </button>
        </div>

        {/* Pass de Saison Premier (Mis en avant) */}
        <div className="bg-basalte border-2 border-braise p-8 rounded-3xl flex flex-col justify-between relative shadow-2xl shadow-braise/20 transform md:-translate-y-2">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-braise text-cendre font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest">
            Populaire
          </div>
          <div>
            <div className="font-mono text-xs text-braise uppercase tracking-widest mb-2">Pass Annuel</div>
            <h3 className="font-title text-3xl font-black uppercase mb-4">Pass Boss de Tour</h3>
            <div className="font-mono text-4xl font-black text-braise mb-6">
              14,99 € <span className="text-xs text-cendre/60 font-normal">/ saison</span>
            </div>
            <ul className="space-y-3 font-mono text-xs text-cendre/90 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>Skin 3D Néon Braise pour Abri</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>Protection Vulnérabilité -50% (90s)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>Boost d'Altitude XP x2</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>Accès prioritaire Bêta & Serveur</span>
              </li>
            </ul>
          </div>
          <button className="w-full py-4 bg-braise hover:bg-braise/90 text-cendre font-mono font-bold uppercase rounded-xl transition-all shadow-lg text-xs">
            Obtenir le Pass
          </button>
        </div>

        {/* Pack Guilde & Horde */}
        <div className="bg-basalte border border-cendre/20 p-8 rounded-3xl flex flex-col justify-between hover:border-braise/40 transition-all">
          <div>
            <div className="font-mono text-xs text-cendre/60 uppercase tracking-widest mb-2">Pack Guilde</div>
            <h3 className="font-title text-2xl font-bold uppercase mb-4">Fortification Ultime</h3>
            <div className="font-mono text-4xl font-black text-cendre mb-6">
              29,99 € <span className="text-xs text-cendre/40 font-normal">/ pack</span>
            </div>
            <ul className="space-y-3 font-mono text-xs text-cendre/80 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>+ 5000 unités de Métal & Basalte</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>3x Boucliers Anti-Rats Toxiques</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-braise" />
                <span>Emplacement d'Abri Multiple</span>
              </li>
            </ul>
          </div>
          <button className="w-full py-3.5 bg-basalte border border-braise text-braise hover:bg-braise hover:text-cendre font-mono font-bold uppercase rounded-xl transition-all text-xs">
            Acheter la Fortification
          </button>
        </div>
      </div>
    </main>
  );
}
