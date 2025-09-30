"use client";

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function SlideEvolucion() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '30%', left: '10%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Historia y evolución
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 animate-fade-in-up flex items-center gap-2 md:gap-4">
          <TrendingUp size={32} className="sm:w-10 sm:h-10 text-blue-600" />
          <span>Evolución de los Cables Guiados</span>
        </h1>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-12">
            {/* 1980s */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div className="text-right animate-fade-in-up">
                <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm inline-block">
                  <div className="text-sm text-blue-600 font-semibold mb-2">1980s</div>
                  <h3 className="text-xl font-bold mb-2">Coaxial (10BASE2/5)</h3>
                  <p className="text-gray-600 text-sm">10 Mbps, topología bus, hasta 185m/500m</p>
                </div>
              </div>
              <div></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>

            {/* 1990s */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div></div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm inline-block">
                  <div className="text-sm text-blue-600 font-semibold mb-2">1990s</div>
                  <h3 className="text-xl font-bold mb-2">Par Trenzado Cat3/Cat5</h3>
                  <p className="text-gray-600 text-sm">10/100 Mbps, RJ45, topología estrella</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>

            {/* 2000s */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div className="text-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm inline-block">
                  <div className="text-sm text-blue-600 font-semibold mb-2">2000s</div>
                  <h3 className="text-xl font-bold mb-2">Cat5e/Cat6 + Fibra OM1-OM3</h3>
                  <p className="text-gray-600 text-sm">1G/10G Ethernet, fibra multimodo para backbone</p>
                </div>
              </div>
              <div></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>

            {/* 2010s */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div></div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm inline-block">
                  <div className="text-sm text-blue-600 font-semibold mb-2">2010s</div>
                  <h3 className="text-xl font-bold mb-2">Cat6A/Cat7 + SMF OS2</h3>
                  <p className="text-gray-600 text-sm">10GBASE-T, 40G/100G fibra, PoE++</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>

            {/* 2020s */}
            <div className="relative grid grid-cols-2 gap-8 items-center">
              <div className="text-right animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-400 shadow-lg inline-block">
                  <div className="text-sm text-blue-600 font-semibold mb-2">2020s - Actualidad</div>
                  <h3 className="text-xl font-bold mb-2">Cat8 + 200G/400G/800G Fibra</h3>
                  <p className="text-gray-600 text-sm">40G cobre datacenter, coherente ZR/ZR+, TSN</p>
                </div>
              </div>
              <div></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

