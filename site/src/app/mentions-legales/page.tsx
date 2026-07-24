import React from 'react';

export const metadata = {
  title: 'Mentions Légales — XTOWER',
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans text-cendre/80 space-y-6">
      <h1 className="font-title text-4xl font-black uppercase text-cendre mb-6">Mentions Légales</h1>
      
      <section className="bg-basalte border border-braise/20 p-6 rounded-2xl space-y-3 font-mono text-sm">
        <h2 className="text-braise font-bold text-base uppercase">1. Éditeur du Site</h2>
        <p>Studio Xgame SAS</p>
        <p>Siège social : Paris, France</p>
        <p>E-mail : contact@xtower-game.fr</p>
      </section>

      <section className="bg-basalte border border-braise/20 p-6 rounded-2xl space-y-3 font-mono text-sm">
        <h2 className="text-braise font-bold text-base uppercase">2. Hébergement</h2>
        <p>Vercel Inc. — 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
        <p>Infrastructure Base de Données : Supabase Inc.</p>
      </section>
    </main>
  );
}
