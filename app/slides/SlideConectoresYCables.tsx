"use client";

import React from 'react';
import { Cable, Plug } from 'lucide-react';

export default function SlideConectoresYCables() {
 return (
 <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
 <div className="absolute inset-0 overflow-hidden bg-grid">
 <div className="absolute w-64 h-64 rounded-full bg-indigo-600 opacity-15 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '25%', left: '15%' }} />
 </div>
 
 <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
 <div className="mb-4 animate-fade-in-up">
 <div className="inline-block px-4 py-2 rounded-full border border-indigo-400 bg-indigo-50 text-sm font-medium">
 Conectores y cables adicionales
 </div>
 </div>

 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-up flex items-center gap-2 md:gap-4">
 <Plug size={32} className="sm:w-10 sm:h-10 text-indigo-600" />
 <span>Conectores y Cables Especializados</span>
 </h1>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
 {/* Cable RG-8 */}
 <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm animate-fade-in-up">
 <h3 className="text-xl font-bold mb-4 text-indigo-800">Cable RG-8 (Coaxial Grueso)</h3>
 
 <svg viewBox="0 0 500 280" className="w-full h-64 mb-4">
 <text x="250" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Cable RG-8 - Vista de Corte</text>
 
 {/* Vista transversal */}
 <g transform="translate(120, 80)">
 {/* Cubierta exterior */}
 <circle cx="100" cy="80" r="70" fill="#1f2937" opacity="0.3"/>
 <text x="180" y="85" className="text-xs" fill="#1f2937">Cubierta PVC (Ø 10.3mm)</text>
 
 {/* Blindaje trenzado */}
 <circle cx="100" cy="80" r="58" fill="#78716c" opacity="0.5"/>
 <pattern id="mesh-rg8" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
 <line x1="0" y1="0" x2="8" y2="8" stroke="#44403c" strokeWidth="1"/>
 <line x1="8" y1="0" x2="0" y2="8" stroke="#44403c" strokeWidth="1"/>
 </pattern>
 <circle cx="100" cy="80" r="58" fill="url(#mesh-rg8)" opacity="0.7"/>
 <text x="180" y="105" className="text-xs" fill="#78716c">Malla de cobre 95%</text>
 
 {/* Dieléctrico polietileno */}
 <circle cx="100" cy="80" r="45" fill="#f0f9ff" opacity="0.8"/>
 <text x="180" y="125" className="text-xs" fill="#0284c7">Dieléctrico PE</text>
 
 {/* Conductor central */}
 <circle cx="100" cy="80" r="12" fill="#fbbf24"/>
 <circle cx="100" cy="80" r="8" fill="#f59e0b"/>
 <text x="100" y="85" textAnchor="middle" className="text-xs font-bold" fill="#fff">Cu</text>
 <text x="180" y="145" className="text-xs" fill="#f59e0b">Conductor 2.17mm</text>
 </g>
 
 {/* Especificaciones */}
 <g transform="translate(20, 200)">
 <rect x="0" y="0" width="220" height="70" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" rx="4"/>
 <text x="110" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Especificaciones RG-8</text>
 <text x="10" y="38" className="text-xs" fill="#1f2937">• Impedancia: 50 Ω (±2Ω)</text>
 <text x="10" y="52" className="text-xs" fill="#1f2937">• Frecuencia: DC - 1000 MHz</text>
 <text x="10" y="66" className="text-xs" fill="#1f2937">• Uso: Radio CB, Ham radio, WiFi</text>
 </g>
 
 <g transform="translate(260, 200)">
 <rect x="0" y="0" width="220" height="70" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="4"/>
 <text x="110" y="20" textAnchor="middle" className="text-sm font-bold" fill="#92400e">Ventajas</text>
 <text x="10" y="38" className="text-xs" fill="#1f2937">• Baja pérdida señal (&lt;7dB/100m)</text>
 <text x="10" y="52" className="text-xs" fill="#1f2937">• Alta potencia (3 kW pico)</text>
 <text x="10" y="66" className="text-xs" fill="#1f2937">• Blindaje excelente 95%+</text>
 </g>
 </svg>
 </div>

 {/* Conector RJ45 detallado */}
 <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm animate-fade-in-up" style={{animationDelay:'0.1s'}}>
 <h3 className="text-xl font-bold mb-4 text-indigo-800 flex items-center gap-2">
 <Cable size={24} />
 Conector RJ45 (8P8C)
 </h3>
 
 <svg viewBox="0 0 500 280" className="w-full h-64 mb-4">
 <text x="250" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">RJ45 - Registered Jack 45</text>
 
 {/* Vista frontal del conector */}
 <g transform="translate(50, 40)">
 <rect x="0" y="0" width="180" height="120" fill="#e5e7eb" stroke="#374151" strokeWidth="3" rx="8"/>
 <text x="90" y="-10" textAnchor="middle" className="text-xs font-bold">Vista Frontal</text>
 
 {/* 8 contactos dorados */}
 {[0,1,2,3,4,5,6,7].map((i) => (
 <g key={i}>
 <rect x={10 + i*20} y="10" width="16" height="100" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" rx="2"/>
 <text x={18 + i*20} y="65" textAnchor="middle" className="text-xs font-bold" fill="#92400e">{i+1}</text>
 </g>
 ))}
 
 {/* Pestaña de bloqueo */}
 <rect x="70" y="-15" width="40" height="15" fill="#94a3b8" stroke="#475569" strokeWidth="2" rx="3"/>
 <text x="90" y="-5" textAnchor="middle" className="text-xs" fill="#fff">Clip</text>
 </g>
 
 {/* Vista lateral */}
 <g transform="translate(280, 40)">
 <path d="M0 0 L150 0 L150 50 L130 70 L20 70 L0 50 Z" fill="#d1d5db" stroke="#374151" strokeWidth="3"/>
 <text x="75" y="-10" textAnchor="middle" className="text-xs font-bold">Vista Lateral</text>
 
 {/* Pestaña flexible */}
 <path d="M75 0 L75 -25 L85 -30 L95 -25 L95 0" fill="#94a3b8" stroke="#475569" strokeWidth="2"/>
 <text x="85" y="-35" textAnchor="middle" className="text-xs">Pestaña</text>
 
 {/* Cable entrando */}
 <rect x="110" y="30" width="60" height="20" fill="#6b7280" rx="10"/>
 <line x1="120" y1="35" x2="160" y2="35" stroke="#f97316" strokeWidth="2"/>
 <line x1="120" y1="40" x2="160" y2="40" stroke="#10b981" strokeWidth="2"/>
 <line x1="120" y1="45" x2="160" y2="45" stroke="#3b82f6" strokeWidth="2"/>
 </g>
 
 {/* Características */}
 <g transform="translate(20, 180)">
 <rect x="0" y="0" width="460" height="90" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" rx="4"/>
 <text x="230" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Características RJ45</text>
 
 <text x="10" y="40" className="text-xs" fill="#1f2937">• <tspan fontWeight="bold">8P8C</tspan>: 8 posiciones, 8 contactos</text>
 <text x="10" y="55" className="text-xs" fill="#1f2937">• <tspan fontWeight="bold">Estándar</tspan>: TIA/EIA-568-B para Ethernet</text>
 <text x="10" y="70" className="text-xs" fill="#1f2937">• <tspan fontWeight="bold">Aplicaciones</tspan>: LAN, telefonía, PoE, consolas</text>
 <text x="10" y="85" className="text-xs" fill="#1f2937">• <tspan fontWeight="bold">Velocidades</tspan>: 10/100/1000/2500/5000/10000 Mbps</text>
 </g>
 </svg>
 </div>

 {/* Conector RJ11 */}
 <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm animate-fade-in-up" style={{animationDelay:'0.2s'}}>
 <h3 className="text-xl font-bold mb-4 text-indigo-800">Conector RJ11 (6P4C/6P2C)</h3>
 
 <svg viewBox="0 0 500 300" className="w-full h-72 mb-4">
 <text x="250" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">RJ11 - Telefonía Analógica</text>
 
 {/* Comparación de tamaños RJ11 vs RJ45 */}
 <g transform="translate(50, 40)">
 {/* RJ11 (más pequeño) */}
 <rect x="0" y="0" width="110" height="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" rx="6"/>
 <text x="55" y="-10" textAnchor="middle" className="text-xs font-bold" fill="#1e40af">RJ11</text>
 
 {/* 6 posiciones pero solo 2 o 4 contactos */}
 {[0,1,2,3,4,5].map((i) => {
 const isActive = i === 2 || i === 3; // Solo pines centrales para línea telefónica
 return (
 <g key={i}>
 <rect 
 x={5 + i*17} 
 y="10" 
 width="13" 
 height="60" 
 fill={isActive ?"#fbbf24" :"#e5e7eb"} 
 stroke={isActive ?"#f59e0b" :"#9ca3af"} 
 strokeWidth="1" 
 rx="2"
 />
 {isActive && (
 <text x={11.5 + i*17} y="45" textAnchor="middle" className="text-xs font-bold" fill="#92400e">{i+1}</text>
 )}
 </g>
 );
 })}
 
 <text x="55" y="100" textAnchor="middle" className="text-xs">6P2C (2 contactos)</text>
 <text x="55" y="115" textAnchor="middle" className="text-xs">o 6P4C (4 contactos)</text>
 </g>
 
 {/* RJ45 para comparación */}
 <g transform="translate(200, 40)">
 <rect x="0" y="0" width="180" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" rx="6"/>
 <text x="90" y="-10" textAnchor="middle" className="text-xs font-bold" fill="#92400e">RJ45 (comparación)</text>
 
 {/* 8 contactos */}
 {[0,1,2,3,4,5,6,7].map((i) => (
 <g key={i}>
 <rect x={10 + i*20} y="10" width="16" height="60" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" rx="2"/>
 </g>
 ))}
 
 <text x="90" y="100" textAnchor="middle" className="text-xs">8P8C (8 contactos)</text>
 </g>
 
 {/* Pinout RJ11 */}
 <g transform="translate(50, 160)">
 <text x="0" y="0" className="text-sm font-bold" fill="#1f2937">Pinout RJ11 (6P2C):</text>
 
 <rect x="0" y="10" width="180" height="25" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="3"/>
 <text x="10" y="27" className="text-xs font-bold" fill="#1f2937">Pin 3 (Tip):</text>
 <text x="90" y="27" className="text-xs" fill="#1f2937">Línea + (Rojo)</text>
 
 <rect x="0" y="40" width="180" height="25" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="3"/>
 <text x="10" y="57" className="text-xs font-bold" fill="#1f2937">Pin 4 (Ring):</text>
 <text x="90" y="57" className="text-xs" fill="#1f2937">Línea - (Verde)</text>
 
 <text x="0" y="85" className="text-xs italic" fill="#6b7280">* Pines 2 y 5 para 2ª línea (6P4C)</text>
 </g>
 
 {/* Aplicaciones */}
 <g transform="translate(260, 160)">
 <rect x="0" y="0" width="220" height="95" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" rx="4"/>
 <text x="110" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Aplicaciones RJ11</text>
 <text x="10" y="38" className="text-xs" fill="#1f2937">• Teléfonos analógicos (POTS)</text>
 <text x="10" y="52" className="text-xs" fill="#1f2937">• Módems dial-up antiguos</text>
 <text x="10" y="66" className="text-xs" fill="#1f2937">• Fax</text>
 <text x="10" y="80" className="text-xs" fill="#1f2937">• Sistemas de alarma</text>
 </g>
 </svg>
 </div>

 {/* Cable Trenzado STP vs UTP */}
 <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm animate-fade-in-up" style={{animationDelay:'0.3s'}}>
 <h3 className="text-xl font-bold mb-4 text-indigo-800">Cable Trenzado: UTP vs STP</h3>
 
 <svg viewBox="0 0 500 300" className="w-full h-72 mb-4">
 <text x="250" y="20" textAnchor="middle" className="text-sm font-bold" fill="#4338ca">Comparación UTP y STP</text>
 
 {/* UTP - Unshielded Twisted Pair */}
 <g transform="translate(30, 50)">
 <text x="100" y="-10" textAnchor="middle" className="text-sm font-bold" fill="#10b981">UTP (Sin Blindaje)</text>
 
 {/* Cubierta exterior */}
 <rect x="0" y="0" width="200" height="60" rx="30" fill="#d1d5db" opacity="0.4"/>
 
 {/* 4 pares sin blindaje individual */}
 <path d="M20 20 Q30 15, 40 20 T60 20 T80 20 T100 20 T120 20 T140 20 T160 20 T180 20" 
 stroke="#f97316" strokeWidth="2" fill="none"/>
 <path d="M20 20 Q30 25, 40 20 T60 20 T80 20 T100 20 T120 20 T140 20 T160 20 T180 20" 
 stroke="#fb923c" strokeWidth="2" fill="none"/>
 
 <path d="M20 30 Q30 25, 40 30 T60 30 T80 30 T100 30 T120 30 T140 30 T160 30 T180 30" 
 stroke="#10b981" strokeWidth="2" fill="none"/>
 <path d="M20 30 Q30 35, 40 30 T60 30 T80 30 T100 30 T120 30 T140 30 T160 30 T180 30" 
 stroke="#34d399" strokeWidth="2" fill="none"/>
 
 <path d="M20 40 Q30 35, 40 40 T60 40 T80 40 T100 40 T120 40 T140 40 T160 40 T180 40" 
 stroke="#3b82f6" strokeWidth="2" fill="none"/>
 <path d="M20 40 Q30 45, 40 40 T60 40 T80 40 T100 40 T120 40 T140 40 T160 40 T180 40" 
 stroke="#60a5fa" strokeWidth="2" fill="none"/>
 
 {/* Características */}
 <text x="0" y="80" className="text-xs" fill="#1f2937">✓ Económico</text>
 <text x="0" y="95" className="text-xs" fill="#1f2937">✓ Fácil instalación</text>
 <text x="0" y="110" className="text-xs" fill="#1f2937">✗ Sensible a EMI</text>
 </g>
 
 {/* STP - Shielded Twisted Pair */}
 <g transform="translate(270, 50)">
 <text x="100" y="-10" textAnchor="middle" className="text-sm font-bold" fill="#6366f1">STP (Blindado)</text>
 
 {/* Cubierta exterior */}
 <rect x="0" y="0" width="200" height="60" rx="30" fill="#d1d5db" opacity="0.4"/>
 
 {/* Blindaje de aluminio */}
 <rect x="5" y="5" width="190" height="50" rx="25" fill="#94a3b8" opacity="0.6"/>
 <text x="100" y="-25" textAnchor="middle" className="text-xs" fill="#64748b">Lámina de aluminio</text>
 
 {/* 4 pares con blindaje */}
 <path d="M20 20 Q30 15, 40 20 T60 20 T80 20 T100 20 T120 20 T140 20 T160 20 T180 20" 
 stroke="#f97316" strokeWidth="2" fill="none"/>
 <path d="M20 20 Q30 25, 40 20 T60 20 T80 20 T100 20 T120 20 T140 20 T160 20 T180 20" 
 stroke="#fb923c" strokeWidth="2" fill="none"/>
 
 <path d="M20 30 Q30 25, 40 30 T60 30 T80 30 T100 30 T120 30 T140 30 T160 30 T180 30" 
 stroke="#10b981" strokeWidth="2" fill="none"/>
 <path d="M20 30 Q30 35, 40 30 T60 30 T80 30 T100 30 T120 30 T140 30 T160 30 T180 30" 
 stroke="#34d399" strokeWidth="2" fill="none"/>
 
 <path d="M20 40 Q30 35, 40 40 T60 40 T80 40 T100 40 T120 40 T140 40 T160 40 T180 40" 
 stroke="#3b82f6" strokeWidth="2" fill="none"/>
 <path d="M20 40 Q30 45, 40 40 T60 40 T80 40 T100 40 T120 40 T140 40 T160 40 T180 40" 
 stroke="#60a5fa" strokeWidth="2" fill="none"/>
 
 {/* Características */}
 <text x="0" y="80" className="text-xs" fill="#1f2937">✓ Protección EMI</text>
 <text x="0" y="95" className="text-xs" fill="#1f2937">✓ Entornos ruidosos</text>
 <text x="0" y="110" className="text-xs" fill="#1f2937">✗ Más costoso</text>
 </g>
 
 {/* Tabla comparativa */}
 <g transform="translate(30, 180)">
 <rect x="0" y="0" width="440" height="100" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="4"/>
 <text x="220" y="20" textAnchor="middle" className="text-sm font-bold" fill="#065f46">Cuándo usar cada tipo</text>
 
 <text x="10" y="40" className="text-xs font-bold" fill="#1f2937">UTP:</text>
 <text x="60" y="40" className="text-xs" fill="#1f2937">Oficinas, hogares, entornos limpios eléctricamente</text>
 
 <text x="10" y="55" className="text-xs font-bold" fill="#1f2937">STP:</text>
 <text x="60" y="55" className="text-xs" fill="#1f2937">Fábricas, hospitales, cerca de equipos eléctricos potentes</text>
 
 <text x="10" y="70" className="text-xs font-bold" fill="#1f2937">F/UTP:</text>
 <text x="60" y="70" className="text-xs" fill="#1f2937">Blindaje global sin blindar pares individuales</text>
 
 <text x="10" y="85" className="text-xs font-bold" fill="#1f2937">S/FTP:</text>
 <text x="60" y="85" className="text-xs" fill="#1f2937">Máxima protección: blindaje global + individual por par</text>
 </g>
 </svg>
 </div>
 </div>

 {/* Resumen comparativo */}
 <div className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200 animate-fade-in-up" style={{animationDelay:'0.4s'}}>
 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Cable className="text-indigo-600" size={24} />
 Resumen de Conectores y Cables
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
 <div className="bg-white p-4 rounded-lg shadow-sm">
 <div className="font-bold mb-2 text-indigo-700">RG-8</div>
 <div className="text-xs text-gray-600">Coaxial grueso 50Ω para radio y alta potencia</div>
 </div>
 <div className="bg-white p-4 rounded-lg shadow-sm">
 <div className="font-bold mb-2 text-indigo-700">RJ45</div>
 <div className="text-xs text-gray-600">8P8C estándar para Ethernet y PoE</div>
 </div>
 <div className="bg-white p-4 rounded-lg shadow-sm">
 <div className="font-bold mb-2 text-indigo-700">RJ11</div>
 <div className="text-xs text-gray-600">6P2C/4C para telefonía analógica</div>
 </div>
 <div className="bg-white p-4 rounded-lg shadow-sm">
 <div className="font-bold mb-2 text-indigo-700">UTP/STP</div>
 <div className="text-xs text-gray-600">Par trenzado con o sin blindaje EMI</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}

