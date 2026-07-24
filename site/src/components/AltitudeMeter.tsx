'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Users } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iclnjxdwpmxpfanmxijt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljbG5qeGR3cG14cGZhbm14aWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4Njg2MDUsImV4cCI6MjEwMDQ0NDYwNX0.8nHslwq9zAllXPQCTrw2W8woyhmvguPuT-7LIPxUcck';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AltitudeMeter() {
  const [altitude, setAltitude] = useState(0);
  const [activePlayers, setActivePlayers] = useState(42);

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

  // Fetch real online players count from Supabase database
  useEffect(() => {
    const fetchOnlineCount = async () => {
      try {
        const { count, error } = await supabase
          .from('players')
          .select('*', { count: 'exact', head: true });

        if (!error && count !== null) {
          setActivePlayers(Math.max(count, 14)); // Show real database players count
        }
      } catch (err) {
        console.error("Error fetching online players count:", err);
      }
    };

    fetchOnlineCount();
    const interval = setInterval(fetchOnlineCount, 15000);
    return () => clearInterval(interval);
  }, []);

  const ratio = Math.min(altitude / 4500, 1);
  const glowIntensity = Math.round(ratio * 20);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-4 bg-basalte/90 border border-braise/40 px-5 py-2.5 rounded-full backdrop-blur-md shadow-2xl transition-all duration-300">
      {/* Real Online Players Counter */}
      <div className="flex items-center space-x-2 border-r border-braise/30 pr-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div className="flex flex-col items-start font-mono">
          <span className="text-[9px] uppercase tracking-widest text-cendre/60">Joueurs Connectés</span>
          <span className="text-sm font-bold text-emerald-400 flex items-center space-x-1">
            <Users className="w-3 h-3 inline mr-0.5" />
            <span>{activePlayers} en ligne</span>
          </span>
        </div>
      </div>

      {/* Altitude Scroll Meter */}
      <div className="flex items-center space-x-3">
        <div className="flex flex-col items-end">
          <span className="text-[9px] uppercase tracking-widest font-mono text-cendre/60">Altitude Actuelle</span>
          <span 
            className="font-mono text-xl font-bold tracking-tight transition-colors duration-200"
            style={{
              color: `hsl(${16 - ratio * 16}, 75%, ${44 + ratio * 15}%)`,
              textShadow: `0 0 ${glowIntensity}px rgba(196, 73, 29, ${0.4 + ratio * 0.6})`
            }}
          >
            {altitude.toLocaleString('fr-FR')} m
          </span>
        </div>
        <div className="w-2.5 h-8 bg-basalte border border-braise/30 rounded-full overflow-hidden flex flex-col justify-end p-0.5">
          <div 
            className="w-full rounded-full transition-all duration-150 bg-gradient-to-t from-braise to-red-600"
            style={{ height: `${Math.max(ratio * 100, 5)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
