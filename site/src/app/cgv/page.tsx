import React from 'react';

export const metadata = {
  title: 'CGV — Conditions Générales de Vente — XTOWER',
};

export default function CGVPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans text-cendre/80 space-y-6">
      <h1 className="font-title text-4xl font-black uppercase text-cendre mb-6">Conditions Générales de Vente (CGV)</h1>
      
      <div className="bg-basalte border border-braise/20 p-6 rounded-2xl space-y-4 font-mono text-sm">
        <h2 className="text-braise font-bold text-base uppercase">Article 1 — Objet</h2>
        <p>Les présentes CGV régissent les ventes d'accès à la Bêta et de micro-transactions virtuelles au sein du jeu XTOWER.</p>
        
        <h2 className="text-braise font-bold text-base uppercase mt-4">Article 2 — Droit de Rétractation</h2>
        <p>Conformément à la réglementation sur les contenus numériques immédiatement fournis, l'accès au service prend effet dès validation.</p>
      </div>
    </main>
  );
}
