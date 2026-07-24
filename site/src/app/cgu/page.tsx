import React from 'react';

export const metadata = {
  title: 'CGU — Conditions Générales d’Utilisation — XTOWER',
};

export default function CGUPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans text-cendre/80 space-y-6">
      <h1 className="font-title text-4xl font-black uppercase text-cendre mb-6">Conditions Générales d’Utilisation (CGU)</h1>
      
      <div className="bg-basalte border border-braise/20 p-6 rounded-2xl space-y-4 font-mono text-sm">
        <h2 className="text-braise font-bold text-base uppercase">1. Règles de Conduite</h2>
        <p>Tout comportement d'anti-jeu abusif, triche ou modification des scripts client 3D entraînera le bannissement définitif du compte par l'administrateur.</p>
        
        <h2 className="text-braise font-bold text-base uppercase mt-4">2. Propriété Intellectuelle</h2>
        <p>L'ensemble des visuels 3D, codes source et marques XTOWER restent la propriété exclusive de XTOWER Studio.</p>
      </div>
    </main>
  );
}
