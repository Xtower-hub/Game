import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'XTOWER — Escaladez la tour 3D infinie',
  description: 'XTOWER est un jeu multijoueur 3D temps réel d’escalade verticale, de survie et d’abris. Conquérez le sommet, affrontez les invasions et devenez le Boss.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-basalte text-cendre selection:bg-braise selection:text-white">
        {children}
      </body>
    </html>
  );
}
