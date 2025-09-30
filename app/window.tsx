"use client";

import React from 'react';
import { TrendingUp, Wrench, PlugZap, Network, Clock, CheckCircle2 } from 'lucide-react';

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between py-2 border-b last:border-0">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-sm font-semibold text-blue-800">{value}</div>
  </div>
);

export default function OutlookAndConclusions() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-56 h-56 rounded-full bg-blue-700 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '18%', right: '12%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Prospectiva (5 años) y conclusiones
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg border p-6 animate-fade-in-up">
            <div className="flex items-center gap-2 font-semibold mb-2"><TrendingUp className="text-blue-600" size={18} /> Tendencias 2026–2030</div>
            <Row label="Fibra campus/core" value="400G→800G (ZR/ZR+)" />
            <Row label="Ethernet cobre" value="2.5G/5G PoE++ en acceso" />
            <Row label="Backbone industrial" value="SMF OS2 por inmunidad EMI" />
            <Row label="Wi‑Fi/LAN" value="Wi‑Fi 7 multi‑link coordinado" />
            <Row label="5G Privado" value="URLLC para control tiempo‑real" />
    </div>
    
          <div className="bg-white rounded-lg border p-6 animate-fade-in-up">
            <div className="flex items-center gap-2 font-semibold mb-2"><PlugZap className="text-blue-600" size={18} /> USB‑C y HDMI en el ecosistema</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>USB‑C se estandariza como conector universal (USB4/Thunderbolt, hasta 100 W, 40 Gbps) [62][70][71].</li>
              <li>HDMI 2.1 domina AV con 48 Gbps para 8K [49][50]; convive con Ethernet/fibra para transporte.</li>
              <li>Regulación UE obliga USB‑C desde 2024 en móviles, reduciendo residuos electrónicos [63][72][73].</li>
            </ul>
    </div>
    
          <div className="bg-white rounded-lg border p-6 animate-fade-in-up">
            <div className="flex items-center gap-2 font-semibold mb-2"><Network className="text-blue-600" size={18} /> IPv6, protocolos y estándares</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>IPv6 nativo (SLAAC, SRv6) en campus/DC e IoT masivo, superando el 30% de penetración [61].</li>
              <li>TSN (IEEE 802.1) para determinismo en industria sobre Ethernet [55].</li>
              <li>PoE bt (90 W) para APs/cámaras y edge inteligente [44][45][51].</li>
        </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30 animate-fade-in-up">
            <div className="flex items-center gap-2 font-semibold mb-3"><Wrench className="text-blue-600" size={18} /> Recomendaciones de diseño</div>
            <ul className="list-disc ml-6 text-sm space-y-2">
              <li>Planificar Cat6A mínimo [14]; fibra OS2/OM4 en troncales y enlaces críticos [28][29].</li>
              <li>Separar potencia/datos, cuidar curvaturas y certificar según TIA‑568 [39][40].</li>
              <li>PoE++ para APs/cámaras [51]; segmentación IPv6 con QoS/TSN donde aplique [55].</li>
            </ul>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30 animate-fade-in-up">
            <div className="flex items-center gap-2 font-semibold mb-3"><Clock className="text-blue-600" size={18} /> ¿Dónde se encuentran y usos cotidianos?</div>
            <p className="text-sm text-gray-700">
              Hogares: UTP para FTTH/routers [30][31] y Wi‑Fi para acceso [48]. Empresas: fibra en backbone [28] y UTP Cat6A en horizontales [53][54]. 
              Industria: SMF por inmunidad EMI [33] y Ethernet/TSN para control [55]; 5G privado/RF para movilidad.
            </p>
          </div>
              </div>
              
        <div className="mt-8 bg-white rounded-lg border p-6 animate-fade-in-up">
          <div className="flex items-center gap-2 font-semibold mb-2"><CheckCircle2 className="text-blue-600" size={18} /> Conclusiones clave</div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            <li><span className="font-semibold">Fibra domina</span> en capacidad, distancia e inmunidad.</li>
            <li><span className="font-semibold">UTP Cat6A</span> ofrece costo/beneficio excelente con PoE hasta 10G.</li>
            <li><span className="font-semibold">RF/5G/Wi‑Fi</span> complementan por movilidad; el backbone queda en guiado.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}