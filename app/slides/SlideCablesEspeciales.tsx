"use client";

import React from 'react';
import { Radio, Waves } from 'lucide-react';

export default function SlideCablesEspeciales() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-yellow-600 opacity-15 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '30%', right: '20%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-yellow-400 bg-yellow-50 text-sm font-medium">
            Transmisión de alta frecuencia
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-up flex items-center gap-2 md:gap-4">
          <Radio size={32} className="sm:w-10 sm:h-10 text-yellow-600" />
          <span>Cables Especiales RF</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cable Heliax */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-yellow-200 dark:border-gray-700 shadow-sm animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-yellow-800">Cable Heliax (Coaxial Elíptico)</h3>
            
            <svg viewBox="0 0 500 350" className="w-full h-80 mb-4">
              {/* Vista de corte transversal */}
              <text x="250" y="25" textAnchor="middle" className="text-sm font-bold" fill="#78716c">Vista de Corte Transversal</text>
              
              {/* Cubierta exterior */}
              <circle cx="250" cy="120" r="80" fill="#1f2937" opacity="0.2"/>
              <text x="350" y="125" className="text-xs" fill="#1f2937">Cubierta PE/PVC</text>
              
              {/* Conductor exterior corrugado */}
              <circle cx="250" cy="120" r="65" fill="#78716c" opacity="0.4"/>
              {/* Simulación de corrugaciones */}
              <circle cx="250" cy="120" r="67" fill="none" stroke="#57534e" strokeWidth="2" strokeDasharray="8,4"/>
              <circle cx="250" cy="120" r="63" fill="none" stroke="#57534e" strokeWidth="2" strokeDasharray="8,4"/>
              <text x="350" y="145" className="text-xs" fill="#78716c">Conductor exterior corrugado (cobre)</text>
              
              {/* Dieléctrico (aire + soportes) */}
              <circle cx="250" cy="120" r="45" fill="#e0f2fe" opacity="0.3"/>
              <text x="350" y="165" className="text-xs" fill="#0284c7">Dieléctrico (aire + soportes)</text>
              
              {/* Soportes helicoidales */}
              <line x1="205" y1="120" x2="295" y2="120" stroke="#94a3b8" strokeWidth="2"/>
              <line x1="250" y1="75" x2="250" y2="165" stroke="#94a3b8" strokeWidth="2"/>
              <circle cx="220" cy="95" r="3" fill="#94a3b8"/>
              <circle cx="280" cy="95" r="3" fill="#94a3b8"/>
              <circle cx="220" cy="145" r="3" fill="#94a3b8"/>
              <circle cx="280" cy="145" r="3" fill="#94a3b8"/>
              
              {/* Conductor central */}
              <circle cx="250" cy="120" r="15" fill="#fbbf24"/>
              <circle cx="250" cy="120" r="10" fill="#f59e0b"/>
              <text x="250" y="125" textAnchor="middle" className="text-xs font-bold" fill="#fff">Cu</text>
              <text x="350" y="185" className="text-xs" fill="#f59e0b">Conductor central (cobre macizo)</text>
              
              {/* Vista lateral ondulada */}
              <text x="250" y="240" textAnchor="middle" className="text-sm font-bold" fill="#78716c">Vista Lateral (corrugaciones)</text>
              
              <rect x="80" y="260" width="340" height="60" fill="#78716c" opacity="0.2" rx="8"/>
              
              {/* Patrón ondulado/corrugado */}
              <path d="M90 290 L110 270 L130 290 L150 270 L170 290 L190 270 L210 290 L230 270 L250 290 L270 270 L290 290 L310 270 L330 290 L350 270 L370 290 L390 270 L410 290" 
                    stroke="#57534e" strokeWidth="3" fill="none"/>
              <path d="M90 290 L110 310 L130 290 L150 310 L170 290 L190 310 L210 290 L230 310 L250 290 L270 310 L290 290 L310 310 L330 290 L350 310 L370 290 L390 310 L410 290" 
                    stroke="#57534e" strokeWidth="3" fill="none"/>
              
              <line x1="150" y1="290" x2="350" y2="290" stroke="#f59e0b" strokeWidth="3"/>
              <text x="250" y="305" textAnchor="middle" className="text-xs" fill="#f59e0b">Conductor central</text>
            </svg>

            <div className="space-y-3 text-sm">
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                <div className="font-semibold">Características</div>
                <ul className="text-xs text-gray-700 dark:text-gray-200 mt-1 space-y-1">
                  <li>• Conductor exterior corrugado para flexibilidad</li>
                  <li>• Dieléctrico de aire minimiza pérdidas</li>
                  <li>• Diámetros típicos: 1/2&quot;, 7/8&quot;, 1-5/8&quot;</li>
                  <li>• Baja atenuación en UHF/microondas</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-600">
                <div className="font-semibold">Aplicaciones</div>
                <ul className="text-xs text-gray-700 dark:text-gray-200 mt-1 space-y-1">
                  <li>• Antenas de radio y TV broadcasting</li>
                  <li>• Torres celulares (conexión antena-equipo)</li>
                  <li>• Enlaces de microondas terrestres</li>
                  <li>• Sistemas de comunicación militar</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded border text-center">
                  <div className="text-lg font-bold text-yellow-700">-0.5 dB/100m</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Atenuación @ 1 GHz</div>
                </div>
                <div className="bg-white p-2 rounded border text-center">
                  <div className="text-lg font-bold text-yellow-700">50 Ω</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Impedancia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guía de Ondas */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-yellow-200 dark:border-gray-700 shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold mb-6 text-yellow-800 flex items-center gap-2">
              <Waves size={28} />
              Guía de Ondas (Waveguide)
            </h3>
            
            <svg viewBox="0 0 500 350" className="w-full h-80 mb-4">
              {/* Vista 3D simulada de guía de ondas rectangular */}
              <text x="250" y="25" textAnchor="middle" className="text-sm font-bold" fill="#78716c">Guía de Ondas Rectangular</text>
              
              {/* Vista frontal */}
              <rect x="80" y="50" width="120" height="80" fill="#cbd5e1" stroke="#475569" strokeWidth="3" rx="4"/>
              <text x="140" y="95" textAnchor="middle" className="text-xs font-bold" fill="#1e293b">Vista Frontal</text>
              
              {/* Dimensiones */}
              <line x1="80" y1="140" x2="200" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
              <text x="140" y="155" textAnchor="middle" className="text-xs" fill="#3b82f6">a (ancho mayor)</text>
              
              <line x1="210" y1="50" x2="210" y2="130" stroke="#10b981" strokeWidth="2"/>
              <text x="245" y="90" className="text-xs" fill="#10b981">b (alto)</text>
              
              {/* Vista isométrica */}
              <g transform="translate(280, 50)">
                {/* Cara frontal */}
                <rect x="0" y="0" width="100" height="70" fill="#94a3b8" stroke="#475569" strokeWidth="2"/>
                
                {/* Cara superior (perspectiva) */}
                <path d="M0 0 L25 -20 L125 -20 L100 0 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2"/>
                
                {/* Cara lateral derecha (perspectiva) */}
                <path d="M100 0 L125 -20 L125 50 L100 70 Z" fill="#64748b" stroke="#475569" strokeWidth="2"/>
                
                {/* Interior hueco */}
                <rect x="10" y="10" width="80" height="50" fill="#1e293b" opacity="0.3"/>
                
                <text x="50" y="100" textAnchor="middle" className="text-xs font-bold" fill="#1e293b">WR-90</text>
              </g>
              
              {/* Patrón de ondas electromagnéticas */}
              <text x="250" y="200" textAnchor="middle" className="text-sm font-bold" fill="#6366f1">Propagación del Campo EM (Modo TE10)</text>
              
              <g transform="translate(0, 220)">
                {/* Campo eléctrico (líneas verticales) */}
                <line x1="100" y1="20" x2="100" y2="60" stroke="#ef4444" strokeWidth="2" className="wave-circle"/>
                <line x1="150" y1="30" x2="150" y2="50" stroke="#ef4444" strokeWidth="2" className="wave-circle" style={{animationDelay: '0.2s'}}/>
                <line x1="200" y1="20" x2="200" y2="60" stroke="#ef4444" strokeWidth="2" className="wave-circle" style={{animationDelay: '0.4s'}}/>
                <line x1="250" y1="30" x2="250" y2="50" stroke="#ef4444" strokeWidth="2" className="wave-circle" style={{animationDelay: '0.6s'}}/>
                <line x1="300" y1="20" x2="300" y2="60" stroke="#ef4444" strokeWidth="2" className="wave-circle" style={{animationDelay: '0.8s'}}/>
                <line x1="350" y1="30" x2="350" y2="50" stroke="#ef4444" strokeWidth="2" className="wave-circle" style={{animationDelay: '1s'}}/>
                <line x1="400" y1="20" x2="400" y2="60" stroke="#ef4444" strokeWidth="2" className="wave-circle" style={{animationDelay: '1.2s'}}/>
                
                <text x="90" y="75" className="text-xs" fill="#ef4444">E (Campo Eléctrico)</text>
                
                {/* Campo magnético (círculos) */}
                <ellipse cx="175" cy="40" rx="15" ry="8" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-pulse"/>
                <ellipse cx="275" cy="40" rx="15" ry="8" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <ellipse cx="375" cy="40" rx="15" ry="8" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}}/>
                
                <text x="390" y="75" className="text-xs" fill="#3b82f6">H (Campo Magnético)</text>
                
                {/* Dirección de propagación */}
                <path d="M90 90 L410 90" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)"/>
                <text x="250" y="110" textAnchor="middle" className="text-xs" fill="#10b981">Dirección de propagación</text>
              </g>
              
              {/* Definiciones de flechas */}
              <defs>
                <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
                </marker>
                <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                </marker>
              </defs>
            </svg>

            <div className="space-y-3 text-sm">
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                <div className="font-semibold">Características</div>
                <ul className="text-xs text-gray-700 dark:text-gray-200 mt-1 space-y-1">
                  <li>• Tubo metálico hueco (rectangular o circular)</li>
                  <li>• Sin conductor central, ondas guiadas por paredes</li>
                  <li>• Frecuencias: 1 GHz - 300 GHz (mmWave)</li>
                  <li>• Pérdidas mínimas en altas frecuencias</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-600">
                <div className="font-semibold">Modos Comunes</div>
                <ul className="text-xs text-gray-700 dark:text-gray-200 mt-1 space-y-1">
                  <li>• <strong>TE10</strong>: Modo fundamental (más usado)</li>
                  <li>• <strong>TE20, TE01</strong>: Modos superiores</li>
                  <li>• Frecuencia de corte depende de dimensiones</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-700">
                <div className="font-semibold">Aplicaciones</div>
                <ul className="text-xs text-gray-700 dark:text-gray-200 mt-1 space-y-1">
                  <li>• Radar aeronáutico y naval</li>
                  <li>• Enlaces de microondas de alta potencia</li>
                  <li>• Sistemas satelitales Ka-band</li>
                  <li>• Aceleradores de partículas</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded border text-center">
                  <div className="text-lg font-bold text-yellow-700">WR-90</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">X-band (8-12 GHz)</div>
                </div>
                <div className="bg-white p-2 rounded border text-center">
                  <div className="text-lg font-bold text-yellow-700">&lt;0.05 dB/m</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Pérdida típica</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativa rápida */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-yellow-200 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h3 className="text-xl font-bold mb-4">¿Cuándo usar cada uno?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-yellow-50 p-4 rounded">
              <div className="font-bold mb-2">Cable Heliax/Coaxial</div>
              <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-200">
                <li>✓ Frecuencias hasta ~10 GHz</li>
                <li>✓ Instalación flexible (se dobla)</li>
                <li>✓ Torres celulares, broadcasting</li>
                <li>✓ Conexiones de antenas</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
              <div className="font-bold mb-2">Guía de Ondas</div>
              <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-200">
                <li>✓ Frecuencias &gt;10 GHz (mmWave)</li>
                <li>✓ Pérdidas ultrabajas en alta frecuencia</li>
                <li>✓ Radar, satélites, investigación</li>
                <li>✓ Alta potencia sin dieléctrico que se degrade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

