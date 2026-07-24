'use client';

import React, { useEffect, useState } from 'react';

export default function AltitudeMeter() {
  const [altitude, setAltitude] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const calculatedAltitude = Math.round((currentScroll / (scrollHeight || 1)) * 4500);
      setAltitude(calculatedAltitude);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute color progression from braise (#C4491D) to intense incandescent red (#FF1E00)
  const ratio = Math.min(altitude / 4500, 1);
  const glowIntensity = Math.round(ratio * 20);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-3 bg-basalte/90 border border-braise/40 px-5 py-2.5 rounded-full backdrop-blur-md shadow-2xl transition-all duration-300">
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase tracking-widest font-mono text-cendre/60">Altitude Actuelle</span>
        <span 
          className="font-mono text-2xl font-bold tracking-tight transition-colors duration-200"
          style={{
            color: `hsl(${16 - ratio * 16}, 75%, ${44 + ratio * 15}%)`,
            textShadow: `0 0 ${glowIntensity}px rgba(196, 73, 29, ${0.4 + ratio * 0.6})`
          }}
        >
          {altitude.toLocaleString('fr-FR')} m
        </span>
      </div>
      <div className="w-3 h-10 bg-basalte border border-braise/30 rounded-full overflow-hidden flex flex-col justify-end p-0.5">
        <div 
          className="w-full rounded-full transition-all duration-150 bg-gradient-to-t from-braise to-red-600"
          style={{ height: `${Math.max(ratio * 100, 5)}%` }}
        />
      </div>
    </div>
  );
}
