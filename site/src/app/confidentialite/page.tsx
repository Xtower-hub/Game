import React from 'react';

export const metadata = {
  title: 'Politique de Confidentialité — XTOWER',
};

export default function ConfidentialitePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans text-cendre/80 space-y-6">
      <h1 className="font-title text-4xl font-black uppercase text-cendre mb-6">Politique de Confidentialité & RGPD</h1>
      
      <div className="bg-basalte border border-braise/20 p-6 rounded-2xl space-y-4 font-mono text-sm">
        <h2 className="text-braise font-bold text-base uppercase">Données Collectées</h2>
        <p>XTOWER stocke de façon sécurisée votre adresse e-mail, pseudonyme et statistiques d'altitude de jeu via Supabase Auth & Postgres.</p>
        
        <h2 className="text-braise font-bold text-base uppercase mt-4">Vos Droits</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant contact@xtower-game.fr.</p>
      </div>
    </main>
  );
}
