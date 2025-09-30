"use client";

import React from 'react';
import { Signal, Antenna } from 'lucide-react';

export default function SlideMicroondas() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-orange-600 opacity-15 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '30%', left: '20%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-orange-400 bg-orange-50 text-sm font-medium">
            Enlaces punto a punto
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 animate-fade-in-up flex items-center gap-2 md:gap-4">
          <Signal size={32} className="sm:w-10 sm:h-10 text-orange-600" />
          <span>Microondas Terrestres</span>
        </h1>

        {/* Fechas importantes */}
        <div className="bg-white rounded-lg p-4 border border-orange-200 shadow-sm mb-4 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-4">Historia de las Microondas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="text-2xl font-bold text-orange-600">1940s</div>
              <div className="text-sm text-gray-600">Primeros sistemas de radar y comunicación por microondas [1]</div>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="text-2xl font-bold text-orange-600">1970s-80s</div>
              <div className="text-sm text-gray-600">Expansión masiva de enlaces punto a punto terrestres [2]</div>
            </div>
            <div className="border-l-4 border-orange-700 pl-4">
              <div className="text-2xl font-bold text-orange-600">2000s-Hoy</div>
              <div className="text-sm text-gray-600">5G mmWave, backhaul celular de alta capacidad [3]</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SVG Animado de propagación de microondas */}
          <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Antenna className="text-orange-500" size={24} />
              Propagación Línea de Vista
            </h3>
            <svg viewBox="0 0 600 400" className="w-full h-96">
              <defs>
                <radialGradient id="wave-gradient">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
                </radialGradient>
              </defs>
              
              {/* Torre TX izquierda */}
              <rect x="80" y="200" width="20" height="150" fill="#475569"/>
              <polygon points="90,200 70,180 110,180" fill="#ef4444"/>
              
              {/* Antena parabólica TX */}
              <ellipse cx="100" cy="220" rx="25" ry="35" fill="#3b82f6" opacity="0.6"/>
              <circle cx="100" cy="220" r="8" fill="#fbbf24" className="animate-pulse"/>
              <text x="90" y="380" textAnchor="middle" className="text-sm font-bold" fill="#1f2937">TX</text>
              
              {/* Ondas electromagnéticas - múltiples */}
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                  <ellipse 
                    cx="100" 
                    cy="220" 
                    rx={40 + i * 60} 
                    ry={30 + i * 40} 
                    fill="url(#wave-gradient)" 
                    className="wave-circle"
                    style={{animationDelay: `${i * 0.3}s`}}
                  />
                </g>
              ))}
              
              {/* Haz principal */}
              <path d="M125 220 L475 220" stroke="#f97316" strokeWidth="4" strokeDasharray="15,10" opacity="0.6"/>
              <path d="M125 200 L475 240" stroke="#fb923c" strokeWidth="2" strokeDasharray="10,5" opacity="0.4"/>
              <path d="M125 240 L475 200" stroke="#fb923c" strokeWidth="2" strokeDasharray="10,5" opacity="0.4"/>
              
              {/* Frentes de onda móviles */}
              <line x1="180" y1="200" x2="180" y2="240" stroke="#dc2626" strokeWidth="3" className="wave-circle"/>
              <line x1="260" y1="200" x2="260" y2="240" stroke="#dc2626" strokeWidth="3" className="wave-circle" style={{animationDelay: '0.4s'}}/>
              <line x1="340" y1="200" x2="340" y2="240" stroke="#dc2626" strokeWidth="3" className="wave-circle" style={{animationDelay: '0.8s'}}/>
              <line x1="420" y1="200" x2="420" y2="240" stroke="#dc2626" strokeWidth="3" className="wave-circle" style={{animationDelay: '1.2s'}}/>
              
              {/* Torre RX derecha */}
              <rect x="500" y="200" width="20" height="150" fill="#475569"/>
              <polygon points="510,200 490,180 530,180" fill="#10b981"/>
              
              {/* Antena parabólica RX */}
              <ellipse cx="500" cy="220" rx="25" ry="35" fill="#3b82f6" opacity="0.6"/>
              <circle cx="500" cy="220" r="8" fill="#10b981" className="animate-pulse"/>
              <text x="510" y="380" textAnchor="middle" className="text-sm font-bold" fill="#1f2937">RX</text>
              
              {/* Distancia */}
              <line x1="100" y1="360" x2="500" y2="360" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"/>
              <text x="300" y="355" textAnchor="middle" className="text-sm" fill="#6b7280">hasta 50 km</text>
              
              {/* Obstáculos */}
              <rect x="280" y="280" width="40" height="80" fill="#94a3b8" opacity="0.5"/>
              <text x="300" y="340" textAnchor="middle" className="text-xs" fill="#475569">Obstáculo</text>
              <path d="M280 280 L300 260 L320 280" fill="#ef4444" opacity="0.3"/>
              <text x="300" y="270" textAnchor="middle" className="text-xs" fill="#dc2626">Bloquea señal</text>
              
              {/* Zona de Fresnel */}
              <ellipse cx="300" cy="220" rx="200" ry="60" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
              <text x="300" y="165" textAnchor="middle" className="text-xs" fill="#3b82f6">Zona de Fresnel</text>
            </svg>
            <div className="text-xs text-gray-600 mt-2">
              Requiere línea de vista directa. La zona de Fresnel debe estar despejada en 60% mínimo
            </div>
          </div>

          {/* Bandas y especificaciones */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold mb-4">Bandas de Frecuencia</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">Banda L (1-2 GHz)</div>
                  <div className="text-sm text-gray-600">GPS, telefonía móvil, enlaces rurales</div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">Banda S (2-4 GHz)</div>
                  <div className="text-sm text-gray-600">Wi-Fi, Bluetooth, radar meteorológico</div>
                </div>
                <div className="border-l-4 border-orange-600 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">Banda C (4-8 GHz)</div>
                  <div className="text-sm text-gray-600">Satélites, backhaul celular, Wi-Fi 5 GHz</div>
                </div>
                <div className="border-l-4 border-orange-700 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">Banda X (8-12 GHz)</div>
                  <div className="text-sm text-gray-600">Radar militar, satélites de comunicación</div>
                </div>
                <div className="border-l-4 border-orange-800 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">Banda Ku/Ka (12-40 GHz)</div>
                  <div className="text-sm text-gray-600">Enlaces punto-punto de alta capacidad, 5G</div>
                </div>
                <div className="border-l-4 border-orange-900 pl-4 py-2 bg-orange-50">
                  <div className="font-semibold">mmWave (30-300 GHz)</div>
                  <div className="text-sm text-gray-600">5G NR, enlaces backhaul 100+ Gbps</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold mb-4">Rendimiento Típico</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">1-10 Gbps</div>
                  <div className="text-xs text-gray-600">Capacidad</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">50 km</div>
                  <div className="text-xs text-gray-600">Alcance típico</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">&lt;5 ms</div>
                  <div className="text-xs text-gray-600">Latencia</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">99.99%</div>
                  <div className="text-xs text-gray-600">Disponibilidad</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-semibold text-green-600">✓ Ventajas</div>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Alta capacidad</li>
                    <li>• Sin cableado físico</li>
                    <li>• Instalación rápida</li>
                    <li>• Buena relación costo/BW</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-red-600">✗ Limitaciones</div>
                  <ul className="space-y-1 text-gray-700 text-xs">
                    <li>• Requiere línea vista</li>
                    <li>• Afectado por clima</li>
                    <li>• Latencia vs fibra</li>
                    <li>• Licencias de espectro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo visual de equipo */}
        <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h3 className="text-xl font-bold mb-6">Equipo Típico de Microondas</h3>
          <svg viewBox="0 0 400 300" className="w-full h-64">
            {/* Torre con antena parabólica */}
            <rect x="180" y="100" width="40" height="180" fill="#64748b"/>
            <polygon points="200,100 170,70 230,70" fill="#ef4444"/>
            
            {/* Antena parabólica detallada */}
            <ellipse cx="200" cy="130" rx="50" ry="70" fill="#e2e8f0" stroke="#475569" strokeWidth="3"/>
            <ellipse cx="200" cy="130" rx="45" ry="65" fill="#cbd5e1"/>
            
            {/* Feed horn */}
            <rect x="195" y="125" width="10" height="30" fill="#1e293b"/>
            <polygon points="195,155 205,155 210,165 190,165" fill="#334155"/>
            
            {/* Reflector parabólico con líneas */}
            <path d="M155 80 Q200 100, 245 80" stroke="#475569" strokeWidth="2" fill="none"/>
            <path d="M160 100 Q200 115, 240 100" stroke="#475569" strokeWidth="1.5" fill="none"/>
            <path d="M165 120 Q200 130, 235 120" stroke="#475569" strokeWidth="1.5" fill="none"/>
            
            {/* Unidad exterior (ODU) */}
            <rect x="160" y="180" width="80" height="40" fill="#3b82f6" rx="4"/>
            <rect x="165" y="185" width="10" height="10" fill="#fbbf24" rx="1"/>
            <rect x="165" y="200" width="70" height="3" fill="#94a3b8" rx="1"/>
            <rect x="165" y="207" width="70" height="3" fill="#94a3b8" rx="1"/>
            <rect x="165" y="214" width="70" height="3" fill="#94a3b8" rx="1"/>
            <text x="200" y="198" textAnchor="middle" className="text-xs font-bold" fill="#fff">ODU</text>
            
            {/* Cable coaxial hacia abajo */}
            <rect x="195" y="220" width="10" height="60" fill="#1f2937"/>
            <text x="220" y="250" className="text-xs" fill="#1f2937">Cable RF</text>
            
            {/* Unidad interior (IDU) en caseta */}
            <rect x="140" y="240" width="120" height="50" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" rx="3"/>
            <rect x="150" y="250" width="40" height="30" fill="#3b82f6" rx="2"/>
            <rect x="155" y="255" width="5" height="5" fill="#10b981" className="animate-pulse"/>
            <text x="170" y="270" textAnchor="middle" className="text-xs font-bold" fill="#fff">IDU</text>
            
            <rect x="200" y="250" width="50" height="30" fill="#8b5cf6" rx="2"/>
            <text x="225" y="268" textAnchor="middle" className="text-xs font-bold" fill="#fff">Router</text>
            
            {/* Etiquetas */}
            <text x="280" y="130" className="text-xs" fill="#64748b">Antena 2-4 ft</text>
            <text x="280" y="200" className="text-xs" fill="#64748b">ODU: modem RF</text>
            <text x="50" y="265" className="text-xs" fill="#64748b">IDU: procesamiento</text>
          </svg>
          <div className="text-xs text-gray-600 mt-3">
            <strong>Componentes típicos:</strong> Antena parabólica (0.6-1.2m), ODU (outdoor unit con transceptor), 
            cable coaxial, IDU (indoor unit con modem/router). Instalación en techos o torres [4].
          </div>
        </div>

        {/* Casos de uso real */}
        <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <h3 className="text-xl font-bold mb-4">Casos de Uso Comunes</h3>
          <div className="space-y-3">
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
              <div className="font-semibold">Backhaul Celular</div>
              <div className="text-sm text-gray-600">Conecta torres de celulares a la red troncal. 1-10 Gbps por enlace [5]</div>
            </div>
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
              <div className="font-semibold">Empresas sin fibra</div>
              <div className="text-sm text-gray-600">Edificios corporativos donde no hay FTTH. Alternativa económica [6]</div>
            </div>
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-600">
              <div className="font-semibold">Zonas rurales</div>
              <div className="text-sm text-gray-600">Conectividad en áreas remotas sin infraestructura de cable [7]</div>
            </div>
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-700">
              <div className="font-semibold">Enlaces campus</div>
              <div className="text-sm text-gray-600">Conectar edificios separados sin cableado subterráneo [8]</div>
            </div>
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-800">
              <div className="font-semibold">Redundancia</div>
              <div className="text-sm text-gray-600">Backup para enlaces de fibra críticos en redes empresariales [9]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

