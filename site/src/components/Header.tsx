'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AltitudeMeter from '@/components/AltitudeMeter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/gameplay', label: 'Gameplay' },
    { href: '/classement', label: 'Classement' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-basalte/90 backdrop-blur-md border-b border-braise/20">
      <AltitudeMeter />
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 font-title text-2xl font-black text-cendre tracking-wider">
          <span className="w-9 h-9 rounded-lg bg-braise flex items-center justify-center text-basalte font-mono font-bold text-xl">X</span>
          <span>XTOWER</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-mono text-sm uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-braise border-braise font-bold'
                    : 'text-cendre/80 border-transparent hover:text-braise'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4 pr-72">
          <Link
            href="/#beta"
            className="px-5 py-2.5 bg-braise hover:bg-braise/90 text-cendre font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-braise/20"
          >
            Rejoindre la Bêta
          </Link>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-cendre hover:text-braise py-2 border-b border-cendre/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#beta"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-braise text-cendre font-bold uppercase rounded-lg"
          >
            Rejoindre la Bêta
          </Link>
        </div>
      )}
    </header>
  );
}
