"use client";

import React from 'react';
import { Cable, Cog, Layers, Gauge, Zap, ShieldCheck } from 'lucide-react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
 <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-blue-900 border-opacity-30">
 <h2 className="text-2xl font-bold mb-3">{title}</h2>
 <div className="text-gray-600 leading-relaxed">{children}</div>
 </div>
);

const Stat = ({ label, value, note }: { label: string; value: string; note?: string }) => (
 <div className="border border-blue-200 rounded-lg p-4 bg-white">
 <div className="text-sm text-gray-500">{label}</div>
 <div className="text-2xl font-bold text-blue-800">{value}</div>
 {note && <div className="text-xs text-gray-500 mt-1">{note}</div>}
 </div>
);

export default function GuidedMediaAndCabling() {
 return (
 <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
 <div className="absolute inset-0 overflow-hidden bg-grid">
 <div 
 className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow"
 style={{ filter: 'blur(80px)', top: '20%', right: '10%' }}
 />
 </div>
 
 <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
 <div className="mb-8 animate-fade-in-up">
 <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
 Medios guiados y cableado estructurado
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
 <Stat label="Par trenzado (Cat6A)" value="10 Gb/s" note="hasta 100 m, 500 MHz" />
 <Stat label="Fibra monomodo" value=">100 Gb/s" note=">10 km con DWDM" />
 <Stat label="Coaxial DOCSIS 3.1" value="10 Gb/s" note="HFC, baja latencia local" />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <Section title="Concepto y para qué sirven">
 <p>
 Los medios de transmisión guiados conducen señales a través de un soporte físico delimitado (cables). 
 Se emplean para redes LAN, backbone de campus y enlaces troncales con requisitos de baja latencia, 
 alta inmunidad al ruido y seguridad física.
 </p>
 <ul className="list-disc ml-6 mt-3 space-y-1">
 <li>Control de EMI/RFI y crosstalk (par trenzado y blindajes).</li>
 <li>Capacidad predecible (ancho de banda por categoría o tipo de fibra).</li>
 <li>Menor BER y jitter frente a entornos ruidosos industriales.</li>
 </ul>
 </Section>

 <Section title="Evolución de los cables guiados">
 <p>
 Del coaxial 10BASE2/5 a Ethernet sobre par trenzado (10/100/1000BASE‑T, 2.5G/5G/10GBASE‑T) y la adopción masiva de fibra (100/200/400G).
 </p>
 <div className="grid grid-cols-2 gap-3 mt-3">
 <div className="p-3 rounded-lg border bg-white">
 <div className="text-sm font-semibold">Par trenzado</div>
 <div className="text-xs text-gray-600">Cat3→Cat5e→Cat6/6A→Cat7/7A→Cat8</div>
 </div>
 <div className="p-3 rounded-lg border bg-white">
 <div className="text-sm font-semibold">Fibra óptica</div>
 <div className="text-xs text-gray-600">MMF OM1–OM5, SMF OS1/OS2</div>
 </div>
 <div className="p-3 rounded-lg border bg-white">
 <div className="text-sm font-semibold">Coaxial</div>
 <div className="text-xs text-gray-600">HFC, DOCSIS 3.1/4.0</div>
 </div>
 <div className="p-3 rounded-lg border bg-white">
 <div className="text-sm font-semibold">PoE</div>
 <div className="text-xs text-gray-600">802.3af/at/bt (hasta 90 W)</div>
 </div>
 </div>
 </Section>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
 <Section title="Cableado estructurado (TIA‑568 / ISO/IEC 11801)">
 <div className="grid grid-cols-1 gap-3">
 <div className="flex items-start gap-3">
 <Layers className="text-blue-600 mt-1" size={18} />
 <div>
 <div className="font-semibold">Subsistemas</div>
 <div className="text-sm text-gray-600">Entrada de servicios, cuarto de equipos, backbone, cuartos de telecomunicaciones, cableado horizontal, área de trabajo.</div>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <Cog className="text-blue-600 mt-1" size={18} />
 <div>
 <div className="font-semibold">Prácticas</div>
 <div className="text-sm text-gray-600">Canal permanente (90 m) + patch cords (5 m); radio de curvatura, separación de potencia, gestión de patch panels.</div>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <ShieldCheck className="text-blue-600 mt-1" size={18} />
 <div>
 <div className="font-semibold">Certificación</div>
 <div className="text-sm text-gray-600">Mediciones de NEXT/PSNEXT, RL, ACR‑F, delay skew, atenuación; niveles II/III/IV.</div>
 </div>
 </div>
 </div>
 </Section>

 <Section title="Diagrama animado: flujo sobre cableado">
 <svg viewBox="0 0 600 260" className="w-full h-64" xmlns="http://www.w3.org/2000/svg">
 <defs>
 <linearGradient id="g" x1="0" x2="1">
 <stop offset="0%" stopColor="#60a5fa" />
 <stop offset="100%" stopColor="#2563eb" />
 </linearGradient>
 </defs>
 <rect x="20" y="30" width="120" height="60" rx="10" fill="#fff" stroke="#93c5fd" />
 <text x="80" y="65" textAnchor="middle" className="text-xs" fill="#1f2937">Host A</text>

 <rect x="240" y="30" width="120" height="60" rx="10" fill="#fff" stroke="#93c5fd" />
 <text x="300" y="65" textAnchor="middle" className="text-xs" fill="#1f2937">Switch</text>

 <rect x="460" y="30" width="120" height="60" rx="10" fill="#fff" stroke="#93c5fd" />
 <text x="520" y="65" textAnchor="middle" className="text-xs" fill="#1f2937">Host B</text>

 <path d="M140 60 L240 60" stroke="url(#g)" strokeWidth="4" className="line-animated" fill="none" />
 <path d="M360 60 L460 60" stroke="url(#g)" strokeWidth="4" className="line-animated" fill="none" />

 <circle cx="140" cy="60" r="4" fill="#2563eb" className="wave-circle" />
 <circle cx="360" cy="60" r="4" fill="#2563eb" className="wave-circle" style={{ animationDelay:'0.6s' }} />
 </svg>
 <div className="text-xs text-gray-500 mt-2">El flujo se representa con líneas animadas; el switch segmenta dominios de colisión y aplica QoS/VLANs.</div>
 </Section>
 </div>

 <div className="mt-8">
 <Section title="Características por tipo de medio">
 <div className="grid grid-cols-1 gap-3">
 <div className="p-3 rounded-lg border bg-white">
 <div className="font-semibold flex items-center gap-2"><Cable size={16} /> UTP/STP</div>
 <div className="text-sm text-gray-600">Hasta 10G (Cat6A) 100 m; sensible a EMI (UTP), mejor inmunidad (STP); coste bajo/medio.</div>
 </div>
 <div className="p-3 rounded-lg border bg-white">
 <div className="font-semibold flex items-center gap-2"><Gauge size={16} /> Fibra MMF/SMF</div>
 <div className="text-sm text-gray-600">Altísimo BW y distancia; inmune a EMI; requiere transceptores (SFP+/QSFP) y limpieza de conectores.</div>
 </div>
 <div className="p-3 rounded-lg border bg-white">
 <div className="font-semibold flex items-center gap-2"><Zap size={16} /> Coaxial</div>
 <div className="text-sm text-gray-600">Buen blindaje y BW; dominante en HFC y RF industrial; menos flexible para switching Ethernet moderno.</div>
 </div>
 </div>
 </Section>
 </div>
 </div>
 </div>
 );
}
