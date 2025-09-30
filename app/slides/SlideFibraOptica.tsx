"use client";

import React from 'react';
import { Gauge, Lightbulb } from 'lucide-react';

export default function SlideFibraOptica() {
 return (
 <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
 <div className="absolute inset-0 overflow-hidden bg-grid">
 <div className="absolute w-64 h-64 rounded-full bg-green-600 opacity-15 animate-pulse-glow" style={{ filter: 'blur(80px)', bottom: '20%', right: '15%' }} />
 </div>
 
 <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
 <div className="mb-6 animate-fade-in-up">
 <div className="inline-block px-4 py-2 rounded-full border border-green-400 bg-green-50 text-sm font-medium">
 Alta velocidad y larga distancia
 </div>
 </div>

 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 animate-fade-in-up flex items-center gap-2 md:gap-4">
 <Gauge size={32} className="sm:w-10 sm:h-10 text-green-600" />
 <span>Fibra Óptica</span>
 </h1>

 {/* Fechas importantes */}
 <div className="bg-white rounded-lg p-3 border border-green-200 shadow-sm mb-4 animate-fade-in-up">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 <div className="border-l-4 border-green-400 pl-3">
 <div className="text-xl font-bold text-green-600">1970</div>
 <div className="text-xs text-gray-600">Primera fibra óptica práctica (Corning) [26]</div>
 </div>
 <div className="border-l-4 border-green-500 pl-3">
 <div className="text-xl font-bold text-green-600">1988</div>
 <div className="text-xs text-gray-600">Primer cable transatlántico [27]</div>
 </div>
 <div className="border-l-4 border-green-600 pl-3">
 <div className="text-xl font-bold text-green-600">2010s</div>
 <div className="text-xs text-gray-600">OM4/OM5 y 100G Ethernet [28]</div>
 </div>
 <div className="border-l-4 border-green-700 pl-3">
 <div className="text-xl font-bold text-green-600">2020+</div>
 <div className="text-xs text-gray-600">400G/800G coherente ZR+ [29]</div>
 </div>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 {/* SVG Animado de propagación de luz */}
 <div className="bg-white rounded-lg p-8 border border-green-200 shadow-sm animate-fade-in-up">
 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
 <Lightbulb className="text-yellow-500" size={24} />
 Propagación de Luz por Reflexión Total
 </h3>
 <svg viewBox="0 0 600 400" className="w-full h-80">
 <defs>
 <linearGradient id="fiber-core" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" style={{stopColor:'#fbbf24', stopOpacity: 0.8}}>
 <animate attributeName="stop-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
 </stop>
 <stop offset="50%" style={{stopColor:'#fcd34d', stopOpacity: 1}}>
 <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
 </stop>
 <stop offset="100%" style={{stopColor:'#fbbf24', stopOpacity: 0.8}}>
 <animate attributeName="stop-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
 </stop>
 </linearGradient>
 
 <filter id="glow">
 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
 <feMerge>
 <feMergeNode in="coloredBlur"/>
 <feMergeNode in="SourceGraphic"/>
 </feMerge>
 </filter>
 </defs>
 
 {/* Estructura de la fibra - Núcleo */}
 <rect x="50" y="180" width="500" height="40" fill="#fbbf24" opacity="0.3" rx="20"/>
 <text x="300" y="205" textAnchor="middle" className="text-xs" fill="#92400e">Núcleo (8-62.5 μm)</text>
 
 {/* Revestimiento */}
 <rect x="50" y="170" width="500" height="60" fill="#10b981" opacity="0.2" rx="30"/>
 <text x="300" y="167" textAnchor="middle" className="text-xs" fill="#065f46">Revestimiento (125 μm)</text>
 
 {/* Cubierta protectora */}
 <rect x="45" y="160" width="510" height="80" fill="#1f2937" opacity="0.1" rx="40"/>
 <text x="300" y="250" textAnchor="middle" className="text-xs" fill="#374151">Cubierta (250-900 μm)</text>
 
 {/* Haz de luz con reflexiones */}
 <path d="M60 200 L150 185 L240 200 L330 185 L420 200 L510 185" 
 stroke="url(#fiber-core)" strokeWidth="3" fill="none" filter="url(#glow)"/>
 
 {/* Partículas de luz */}
 <circle cx="80" cy="200" r="4" fill="#fbbf24" className="wave-circle" filter="url(#glow)"/>
 <circle cx="180" cy="192" r="4" fill="#fbbf24" className="wave-circle" style={{animationDelay:'0.3s'}} filter="url(#glow)"/>
 <circle cx="280" cy="200" r="4" fill="#fbbf24" className="wave-circle" style={{animationDelay:'0.6s'}} filter="url(#glow)"/>
 <circle cx="380" cy="192" r="4" fill="#fbbf24" className="wave-circle" style={{animationDelay:'0.9s'}} filter="url(#glow)"/>
 <circle cx="480" cy="200" r="4" fill="#fbbf24" className="wave-circle" style={{animationDelay:'1.2s'}} filter="url(#glow)"/>
 
 {/* Fuente de luz (láser/LED) */}
 <circle cx="40" cy="200" r="15" fill="#ef4444" opacity="0.8" className="animate-pulse"/>
 <circle cx="40" cy="200" r="8" fill="#fbbf24"/>
 <text x="40" y="240" textAnchor="middle" className="text-xs" fill="#ef4444">LASER</text>
 
 {/* Receptor */}
 <rect x="550" y="190" width="30" height="20" fill="#3b82f6" rx="3"/>
 <text x="565" y="225" textAnchor="middle" className="text-xs" fill="#3b82f6">RX</text>
 
 {/* Indicadores de reflexión total interna */}
 <path d="M150 185 L145 175" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2"/>
 <path d="M150 185 L145 195" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2"/>
 <path d="M330 185 L325 175" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2"/>
 <path d="M330 185 L325 195" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2"/>
 </svg>
 <div className="text-xs text-gray-600 mt-2">
 La luz se refleja totalmente en la interfaz núcleo-revestimiento por reflexión interna total [26][27], 
 propagándose sin pérdida significativa. Permite transmisión de datos a gran velocidad con baja atenuación [28].
 </div>
 </div>

 {/* Tipos y especificaciones */}
 <div className="space-y-6">
 <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm animate-fade-in-up" style={{animationDelay:'0.1s'}}>
 <h3 className="text-xl font-bold mb-4">Multimodo (MMF)</h3>
 <div className="space-y-3">
 <div className="bg-orange-50 border-l-4 border-orange-400 pl-4 py-2">
 <div className="font-semibold">OM1 (62.5/125 μm)</div>
 <div className="text-sm text-gray-600">1 Gbps • 300m • LED 850nm</div>
 </div>
 <div className="bg-orange-50 border-l-4 border-orange-500 pl-4 py-2">
 <div className="font-semibold">OM2 (50/125 μm)</div>
 <div className="text-sm text-gray-600">1 Gbps • 550m • LED 850nm</div>
 </div>
 <div className="bg-orange-50 border-l-4 border-orange-600 pl-4 py-2">
 <div className="font-semibold">OM3 (50/125 μm optimizada)</div>
 <div className="text-sm text-gray-600">10 Gbps • 300m • VCSEL 850nm</div>
 </div>
 <div className="bg-orange-50 border-l-4 border-orange-700 pl-4 py-2">
 <div className="font-semibold">OM4 (50/125 μm láser)</div>
 <div className="text-sm text-gray-600">10 Gbps • 550m / 100 Gbps • 150m</div>
 </div>
 <div className="bg-orange-50 border-l-4 border-orange-800 pl-4 py-2">
 <div className="font-semibold">OM5 (50/125 μm WDM)</div>
 <div className="text-sm text-gray-600">40/100 Gbps • 150m+ • SWDM</div>
 </div>
 </div>
 </div>

 <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm animate-fade-in-up" style={{animationDelay:'0.2s'}}>
 <h3 className="text-xl font-bold mb-4">Monomodo (SMF)</h3>
 <div className="space-y-3">
 <div className="bg-blue-50 border-l-4 border-blue-600 pl-4 py-2">
 <div className="font-semibold">OS1 (9/125 μm indoor)</div>
 <div className="text-sm text-gray-600">10+ km • Láser 1310/1550nm</div>
 </div>
 <div className="bg-blue-50 border-l-4 border-blue-700 pl-4 py-2">
 <div className="font-semibold">OS2 (9/125 μm outdoor)</div>
 <div className="text-sm text-gray-600">100G+ • 40-80+ km • DWDM capable</div>
 </div>
 <div className="bg-blue-50 border-l-4 border-blue-800 pl-4 py-2">
 <div className="font-semibold">ZR/ZR+ Coherente</div>
 <div className="text-sm text-gray-600">400G/800G • 80-120 km sin amplificación</div>
 </div>
 </div>
 </div>

 <div className="bg-green-50 rounded-lg p-4 border border-green-300 animate-fade-in-up" style={{animationDelay:'0.3s'}}>
 <div className="grid grid-cols-2 gap-3 text-sm">
 <div>
 <div className="font-semibold text-green-700">✓✓ Ventajas</div>
 <ul className="space-y-1 text-gray-700 text-xs">
 <li>• Inmune total EMI [33][34]</li>
 <li>• Máxima capacidad (Tbps) [29]</li>
 <li>• Largas distancias sin amplificación</li>
 <li>• Baja atenuación y latencia</li>
 </ul>
 </div>
 <div>
 <div className="font-semibold text-red-600">✗ Desventajas</div>
 <ul className="space-y-1 text-gray-700 text-xs">
 <li>• Costo alto</li>
 <li>• Instalación delicada</li>
 <li>• Requiere limpieza</li>
 <li>• Transceptores caros</li>
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

