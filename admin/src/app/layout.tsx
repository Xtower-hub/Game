import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'XTOWER — Dashboard Administration',
  description: 'Interface de gestion privée du serveur de jeu 3D XTOWER.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased bg-basalte text-cendre">
        {children}
      </body>
    </html>
  );
}
