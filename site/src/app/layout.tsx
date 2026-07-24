import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <html lang="fr">
      <body className="antialiased bg-basalte text-cendre selection:bg-braise selection:text-white flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
