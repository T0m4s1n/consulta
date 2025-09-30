"use client";

import React from 'react';
import { Radio, Waves } from 'lucide-react';

export default function SlideSeñalesRF() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-purple-600 opacity-15 animate-pulse-glow" style={{ filter: 'blur(80px)', bottom: '25%', right: '15%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-purple-400 bg-purple-50 text-sm font-medium">
            Modulación y codificación
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-up flex items-center gap-2 md:gap-4">
          <Radio size={32} className="sm:w-10 sm:h-10 text-purple-600" />
          <span>Señales RF y Modulación</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SVG Animado de modulación */}
          <div className="bg-white rounded-lg p-8 border border-purple-200 shadow-sm animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Waves className="text-purple-500" size={24} />
              Tipos de Modulación
            </h3>
            <svg viewBox="0 0 600 450" className="w-full h-96">
              {/* Señal portadora */}
              <text x="10" y="40" className="text-sm font-bold" fill="#6366f1">Portadora (Carrier)</text>
              <path d="M50 50 Q60 30, 70 50 T90 50 T110 50 T130 50 T150 50 T170 50 T190 50 T210 50 T230 50 T250 50 T270 50 T290 50 T310 50 T330 50 T350 50 T370 50 T390 50 T410 50 T430 50 T450 50 T470 50 T490 50 T510 50 T530 50 T550 50" 
                    stroke="#6366f1" strokeWidth="2" fill="none"/>
              <circle cx="100" cy="50" r="3" fill="#6366f1" className="wave-circle"/>
              
              {/* Señal de datos */}
              <text x="10" y="120" className="text-sm font-bold" fill="#8b5cf6">Datos (Mensaje)</text>
              <rect x="50" y="110" width="100" height="20" fill="#8b5cf6" opacity="0.6"/>
              <rect x="150" y="110" width="50" height="20" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="200" y="110" width="150" height="20" fill="#8b5cf6" opacity="0.6"/>
              <rect x="350" y="110" width="100" height="20" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
              <text x="560" y="125" className="text-xs" fill="#8b5cf6">1 0 1 0</text>
              
              {/* AM (Amplitude Modulation) */}
              <text x="10" y="190" className="text-sm font-bold" fill="#10b981">AM - Amplitud</text>
              <path d="M50 200 Q60 180, 70 200 T90 200 T110 200 T130 200 T150 200 Q160 220, 170 200 T190 200 T210 200 Q220 180, 230 200 T250 200 T270 200 T290 200 T310 200 T330 200 Q340 220, 350 200 T370 200 T390 200 T410 200 T430 200 Q440 220, 450 200 T470 200 T490 200 T510 200 T530 200 T550 200" 
                    stroke="#10b981" strokeWidth="2.5" fill="none" className="line-animated"/>
              <text x="560" y="205" className="text-xs" fill="#10b981">Varía amplitud</text>
              
              {/* FM (Frequency Modulation) */}
              <text x="10" y="280" className="text-sm font-bold" fill="#f59e0b">FM - Frecuencia</text>
              <path d="M50 290 Q55 270, 60 290 T65 290 T70 290 T75 290 T80 290 T85 290 T90 290 T95 290 T100 290 T105 290 T110 290 T115 290 T120 290 T125 290 T130 290 T135 290 T140 290 T145 290 T150 290 Q160 270, 170 290 T180 290 T190 290 T200 290 Q205 270, 210 290 T215 290 T220 290 T225 290 T230 290 T235 290 T240 290 T245 290 T250 290 T255 290 T260 290 T265 290 T270 290 T275 290 T280 290 T285 290 T290 290 T295 290 T300 290 T305 290 T310 290 T315 290 T320 290 T325 290 T330 290 T335 290 T340 290 T345 290 T350 290 Q360 270, 370 290 T380 290 T390 290 T400 290 T410 290 T420 290 T430 290 Q440 270, 450 290 T460 290 T470 290 T480 290 T490 290 T500 290 T510 290 T520 290 T530 290 T540 290 T550 290" 
                    stroke="#f59e0b" strokeWidth="2.5" fill="none" className="line-animated"/>
              <text x="560" y="295" className="text-xs" fill="#f59e0b">Varía frecuencia</text>
              
              {/* QAM (Quadrature Amplitude Modulation) */}
              <text x="10" y="370" className="text-sm font-bold" fill="#ec4899">QAM - Amplitud+Fase</text>
              <path d="M50 380 Q60 360, 70 380 T90 380 T110 380 Q120 400, 130 380 T150 380 Q160 360, 170 380 T190 380 T210 380 T230 380 Q240 400, 250 380 T270 380 Q280 360, 290 380 T310 380 T330 380 T350 380 Q360 400, 370 380 T390 380 T410 380 Q420 360, 430 380 T450 380 T470 380 Q480 400, 490 380 T510 380 T530 380 T550 380" 
                    stroke="#ec4899" strokeWidth="2.5" fill="none" className="line-animated"/>
              <text x="560" y="385" className="text-xs" fill="#ec4899">Más eficiente</text>
              
              {/* Indicadores de bits */}
              <text x="50" y="430" className="text-xs" fill="#6b7280">1 bit/Hz</text>
              <text x="200" y="430" className="text-xs" fill="#6b7280">2-4 bits/Hz</text>
              <text x="400" y="430" className="text-xs" fill="#6b7280">6-10 bits/Hz</text>
            </svg>
            <div className="text-xs text-gray-600 mt-2">
              Modulaciones más avanzadas (QAM) permiten mayor eficiencia espectral
            </div>
          </div>

          {/* Técnicas y aplicaciones */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold mb-4">Técnicas de Modulación Digital</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
                  <div className="font-semibold">BPSK / QPSK</div>
                  <div className="text-sm text-gray-600">Phase Shift Keying • GPS, satélites, enlaces confiables</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <div className="font-semibold">16-QAM / 64-QAM</div>
                  <div className="text-sm text-gray-600">Wi-Fi 4/5 • LTE • Balance velocidad/robustez</div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
                  <div className="font-semibold">256-QAM / 1024-QAM</div>
                  <div className="text-sm text-gray-600">Wi-Fi 6 • LTE-A • Alta velocidad en buenas condiciones</div>
                </div>
                <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-50">
                  <div className="font-semibold">4096-QAM</div>
                  <div className="text-sm text-gray-600">Wi-Fi 7 • Máxima eficiencia espectral</div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">OFDM / OFDMA</div>
                  <div className="text-sm text-gray-600">Múltiples subportadoras • Wi-Fi 6/7, 5G, LTE</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold mb-4">Espectro y Eficiencia</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                  <span className="font-semibold">BPSK</span>
                  <span className="text-sm text-gray-600">1 bit/símbolo</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                  <span className="font-semibold">QPSK</span>
                  <span className="text-sm text-gray-600">2 bits/símbolo</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                  <span className="font-semibold">16-QAM</span>
                  <span className="text-sm text-gray-600">4 bits/símbolo</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                  <span className="font-semibold">64-QAM</span>
                  <span className="text-sm text-gray-600">6 bits/símbolo</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                  <span className="font-semibold">256-QAM</span>
                  <span className="text-sm text-gray-600">8 bits/símbolo</span>
                </div>
                <div className="flex justify-between items-center bg-purple-100 p-3 rounded border-2 border-purple-400">
                  <span className="font-semibold">4096-QAM</span>
                  <span className="text-sm font-bold text-purple-700">12 bits/símbolo</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h4 className="font-bold mb-2 text-sm">Relación SNR y Modulación</h4>
              <p className="text-xs text-gray-700">
                A mayor SNR (señal/ruido), se puede usar modulación más compleja. QAM alto requiere excelente calidad de señal. 
                Sistemas adaptativos (AMC) cambian modulación según condiciones del canal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

