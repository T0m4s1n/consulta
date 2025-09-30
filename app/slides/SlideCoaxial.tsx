"use client";

import React from 'react';
import { Zap } from 'lucide-react';

export default function SlideCoaxial() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-gray-600 opacity-15 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '25%', right: '20%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-gray-400 bg-gray-50 text-sm font-medium">
            Cable blindado clásico
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 animate-fade-in-up flex items-center gap-4">
          <Zap size={40} className="text-gray-600" />
          Cable Coaxial
        </h1>

        {/* Fechas de evolución */}
        <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm mb-4 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border-l-4 border-gray-400 pl-3">
              <div className="text-xl font-bold text-gray-600">1880</div>
              <div className="text-xs text-gray-600">Patente original (Oliver Heaviside) [21]</div>
            </div>
            <div className="border-l-4 border-gray-500 pl-3">
              <div className="text-xl font-bold text-gray-600">1941</div>
              <div className="text-xs text-gray-600">Primera aplicación comercial AT&T [22]</div>
            </div>
            <div className="border-l-4 border-gray-600 pl-3">
              <div className="text-xl font-bold text-gray-600">2006</div>
              <div className="text-xs text-gray-600">DOCSIS 3.0 estandarizado [23]</div>
            </div>
            <div className="border-l-4 border-gray-700 pl-3">
              <div className="text-xl font-bold text-gray-600">2020</div>
              <div className="text-xs text-gray-600">DOCSIS 4.0 full duplex [24]</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SVG Animado de estructura coaxial */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6">Estructura por Capas</h3>
            <svg viewBox="0 0 600 400" className="w-full h-80">
              <defs>
                <radialGradient id="coax-gradient">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8"/>
                </radialGradient>
              </defs>
              
              {/* Vista lateral del cable */}
              <g transform="translate(50, 100)">
                {/* Cubierta exterior */}
                <rect x="0" y="80" width="500" height="140" rx="70" fill="#1f2937" opacity="0.3"/>
                <text x="250" y="250" textAnchor="middle" className="text-sm" fill="#1f2937">4. Cubierta protectora (PVC/PE)</text>
                
                {/* Blindaje de malla */}
                <rect x="20" y="95" width="460" height="110" rx="55" fill="#6b7280" opacity="0.4"/>
                <pattern id="mesh" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="10" y2="10" stroke="#374151" strokeWidth="1"/>
                  <line x1="10" y1="0" x2="0" y2="10" stroke="#374151" strokeWidth="1"/>
                </pattern>
                <rect x="20" y="95" width="460" height="110" rx="55" fill="url(#mesh)" opacity="0.6"/>
                <text x="250" y="77" textAnchor="middle" className="text-sm" fill="#374151">3. Blindaje de malla (aluminio/cobre)</text>
                
                {/* Dieléctrico */}
                <rect x="60" y="120" width="380" height="60" rx="30" fill="#fff" opacity="0.8"/>
                <text x="250" y="105" textAnchor="middle" className="text-sm" fill="#6b7280">2. Dieléctrico aislante (polietileno)</text>
                
                {/* Conductor central */}
                <rect x="200" y="135" width="100" height="30" rx="15" fill="url(#coax-gradient)"/>
                <text x="250" y="195" textAnchor="middle" className="text-sm font-bold" fill="#f59e0b">1. Conductor central (cobre)</text>
                
                {/* Señal eléctrica */}
                <path d="M210 150 Q230 140, 250 150 T290 150" stroke="#ef4444" strokeWidth="3" fill="none" className="line-animated"/>
                <circle cx="220" cy="150" r="4" fill="#ef4444" className="wave-circle"/>
                <circle cx="270" cy="150" r="4" fill="#ef4444" className="wave-circle" style={{animationDelay: '0.5s'}}/>
              </g>
              
              {/* Vista frontal */}
              <g transform="translate(450, 50)">
                <text x="50" y="-10" textAnchor="middle" className="text-sm font-bold">Vista frontal</text>
                {/* Cubierta */}
                <circle cx="50" cy="50" r="50" fill="#1f2937" opacity="0.3"/>
                {/* Blindaje */}
                <circle cx="50" cy="50" r="40" fill="url(#mesh)" opacity="0.6"/>
                {/* Dieléctrico */}
                <circle cx="50" cy="50" r="25" fill="#fff" opacity="0.8"/>
                {/* Conductor */}
                <circle cx="50" cy="50" r="8" fill="url(#coax-gradient)"/>
                
                {/* Dimensiones */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3"/>
                <text x="65" y="55" className="text-xs" fill="#3b82f6">Ø 6-10 mm</text>
              </g>
            </svg>
            <div className="text-xs text-gray-600 mt-2">
              El blindaje de malla proporciona inmunidad a EMI y retorno de corriente. Esta construcción concéntrica 
              le otorga buena inmunidad al ruido y capacidad de transportar señales de alta frecuencia [21][22].
            </div>
          </div>

          {/* Tipos y aplicaciones */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold mb-4">Tipos Estándar</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-gray-400 pl-4 py-2 bg-gray-50">
                  <div className="font-semibold">RG-6 (75Ω)</div>
                  <div className="text-sm text-gray-600">TV por cable, DOCSIS, señal satelital</div>
                </div>
                <div className="border-l-4 border-gray-500 pl-4 py-2 bg-gray-50">
                  <div className="font-semibold">RG-59 (75Ω)</div>
                  <div className="text-sm text-gray-600">CCTV, video analógico, aplicaciones cortas</div>
                </div>
                <div className="border-l-4 border-gray-600 pl-4 py-2 bg-gray-50">
                  <div className="font-semibold">RG-58 (50Ω)</div>
                  <div className="text-sm text-gray-600">Ethernet 10BASE2 (legado), radio CB</div>
                </div>
                <div className="border-l-4 border-gray-700 pl-4 py-2 bg-gray-50">
                  <div className="font-semibold">RG-11 (75Ω)</div>
                  <div className="text-sm text-gray-600">Largas distancias HFC, baja atenuación</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold mb-4">DOCSIS (Data Over Cable)</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <div className="font-semibold">DOCSIS 3.0</div>
                  <div className="text-sm text-gray-600">1 Gbps down / 200 Mbps up • Canal bonding</div>
                </div>
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <div className="font-semibold">DOCSIS 3.1</div>
                  <div className="text-sm text-gray-600">10 Gbps down / 1 Gbps up • OFDM modulation</div>
                </div>
                <div className="bg-blue-50 p-3 rounded border border-blue-300">
                  <div className="font-semibold">DOCSIS 4.0 (Full Duplex)</div>
                  <div className="text-sm text-gray-600">10 Gbps simétrico • Latencia ultra-baja (&lt;1ms) [24]</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-bold text-gray-600">10 Gb/s</div>
                <div className="text-xs text-gray-500">Capacidad DOCSIS 3.1</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                <div className="text-3xl font-bold text-gray-600">500 m</div>
                <div className="text-xs text-gray-500">Alcance típico RG-6</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-semibold text-green-600">✓ Ventajas</div>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Blindaje EMI excelente</li>
                    <li>• Infraestructura existente</li>
                    <li>• Buena relación S/N</li>
                    <li>• Soporta alta frecuencia</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-red-600">✗ Desventajas</div>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Rígido y pesado</li>
                    <li>• Difícil instalación</li>
                    <li>• No ideal para switching</li>
                    <li>• Topología limitada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

