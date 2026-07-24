import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-basalte border-t border-braise/30 pt-16 pb-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
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
            © 2026 Studio Xgame. Tous droits réservés.
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
            <li><Link href="/mentions-legales" className="hover:text-braise transition-colors">• Mentions Légales</Link></li>
            <li><Link href="/cgv" className="hover:text-braise transition-colors">• CGV (Conditions Générales de Vente)</Link></li>
            <li><Link href="/cgu" className="hover:text-braise transition-colors">• CGU (Conditions d'Utilisation)</Link></li>
            <li><Link href="/confidentialite" className="hover:text-braise transition-colors">• Politique de Confidentialité & RGPD</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-braise/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-cendre/40">
        <div>Studio Xgame — Développé avec Next.js 14, Three.js 3D & Supabase.</div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <Link href="/" className="hover:text-braise">Retour Accueil ↑</Link>
        </div>
      </div>
    </footer>
  );
}
