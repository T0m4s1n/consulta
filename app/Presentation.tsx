"use client";

import React from 'react';
import { Users } from 'lucide-react';

const HeroBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs">
    {children}
  </span>
);

export default function Presentation() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div 
          className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow"
          style={{ filter: 'blur(80px)', top: '10%', right: '10%' }}
        />
        <div 
          className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-10 animate-pulse-glow"
          style={{ filter: 'blur(50px)', bottom: '10%', left: '15%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-4 md:mb-6 animate-fade-in-up">
          <HeroBadge>Presentación técnica</HeroBadge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 md:mb-4">
              Medios de transmisión guiados y cableado estructurado
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
              Qué son, cómo evolucionaron, dónde se usan hoy y hacia dónde van. Compararemos guiados vs no guiados con foco en redes domésticas, empresariales e industriales.
            </p>
            <div className="flex flex-wrap gap-2">
              <Pill>Redes domésticas</Pill>
              <Pill>Empresariales</Pill>
              <Pill>Industriales</Pill>
              <Pill>Estándares TIA/EIA · ISO/IEC</Pill>
                    </div>

            <div className="mt-6 md:mt-8 text-sm text-gray-500">
              <div className="font-semibold mb-1">Autores</div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-blue-600" /> River Bonilla · Tomas Benavides
                </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm animate-fade-in-up-delayed">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-blue-100 dark:divide-gray-700">
              <div className="p-4 md:p-6">
                <div className="text-blue-700 dark:text-blue-400 font-semibold mb-2">
                  Guiados
                </div>
                <ul className="text-xs md:text-sm text-gray-700 dark:text-gray-300 space-y-1 md:space-y-2">
                  <li>UTP/STP, Coaxial, Fibra óptica</li>
                  <li>Categorías Cat5e–Cat8, conectores RJ45, LC/SC</li>
                  <li>Topologías y canal permanente</li>
                </ul>
                    </div>
              <div className="p-4 md:p-6">
                <div className="text-blue-700 dark:text-blue-400 font-semibold mb-2">
                  No guiados
                </div>
                <ul className="text-xs md:text-sm text-gray-700 dark:text-gray-300 space-y-1 md:space-y-2">
                  <li>Radio, microondas, IR</li>
                  <li>Wi‑Fi, Bluetooth, 5G</li>
                  <li>Rendimiento vs latencia vs EMI</li>
                </ul>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-blue-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
              Incluye comparativas guiado vs no guiado e impacto de IPv4/IPv6 y protocolos.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Conceptos y estándares</div>
            <div className="hidden md:block text-blue-500">→</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Comparativas técnicas</div>
            <div className="hidden md:block text-blue-500">→</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-500">Prospectiva 2026–2030</div>
          </div>
        </div>
      </div>
    </div>
  );
}