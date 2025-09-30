"use client";

import React from 'react';
import { GitCompare, Cable, Radio } from 'lucide-react';

export default function SlideComparativa() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '25%', right: '10%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="mb-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Análisis comparativo
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up flex items-center gap-4">
          <GitCompare size={40} className="text-blue-600" />
          Guiados vs No Guiados
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Guiados */}
          <div className="bg-white rounded-lg p-8 border-2 border-blue-300 shadow-lg animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Cable size={32} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Medios Guiados</h2>
                <p className="text-sm text-gray-600">Cable físico</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-sm">Latencia</div>
                <div className="text-xs text-gray-600">Muy baja y predecible (&lt;1ms LAN)</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-sm">Seguridad</div>
                <div className="text-xs text-gray-600">Contención física, no emite RF</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-sm">EMI/Interferencias</div>
                <div className="text-xs text-gray-600">Inmune (fibra) o blindado (STP)</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-sm">Capacidad</div>
                <div className="text-xs text-gray-600">Hasta 800G+ fibra, 40G cobre</div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold text-sm">Movilidad</div>
                <div className="text-xs text-gray-600">Limitada, requiere cableado</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-sm">Coste</div>
                <div className="text-xs text-gray-600">Medio-alto instalación, bajo mantenimiento</div>
              </div>
            </div>
          </div>

          {/* No Guiados */}
          <div className="bg-white rounded-lg p-8 border-2 border-blue-300 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Radio size={32} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Medios No Guiados</h2>
                <p className="text-sm text-gray-600">Ondas electromagnéticas</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold text-sm">Latencia</div>
                <div className="text-xs text-gray-600">Variable (10-500ms satélite)</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-sm">Seguridad</div>
                <div className="text-xs text-gray-600">Expuesto, requiere cifrado robusto</div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold text-sm">EMI/Interferencias</div>
                <div className="text-xs text-gray-600">Sensible a obstáculos y ruido RF</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-sm">Capacidad</div>
                <div className="text-xs text-gray-600">Hasta 9.6 Gbps (Wi-Fi 7), compartido</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-sm">Movilidad</div>
                <div className="text-xs text-gray-600">Total, sin limitaciones físicas</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-sm">Coste</div>
                <div className="text-xs text-gray-600">Bajo despliegue inicial, infraestructura simple</div>
              </div>
            </div>
          </div>
        </div>

        {/* Matriz de escenarios */}
        <div className="bg-white rounded-lg p-6 border border-blue-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-bold mb-4">Aplicación por escenario</h3>
          <div className="grid grid-cols-4 gap-2 text-sm">
            <div className="font-semibold">Escenario</div>
            <div className="font-semibold">Recomendado</div>
            <div className="font-semibold">Motivo</div>
            <div className="font-semibold">Protocolo</div>
            
            <div className="bg-blue-50 p-2 rounded">Doméstico</div>
            <div className="bg-blue-50 p-2 rounded">Híbrido</div>
            <div className="bg-blue-50 p-2 rounded text-xs">FTTH + Wi-Fi</div>
            <div className="bg-blue-50 p-2 rounded text-xs">IPv6 dual-stack</div>
            
            <div className="bg-green-50 p-2 rounded">Empresarial</div>
            <div className="bg-green-50 p-2 rounded">Guiado + Wi-Fi</div>
            <div className="bg-green-50 p-2 rounded text-xs">Backbone fibra, acceso RF</div>
            <div className="bg-green-50 p-2 rounded text-xs">VLANs, QoS</div>
            
            <div className="bg-yellow-50 p-2 rounded">Industrial</div>
            <div className="bg-yellow-50 p-2 rounded">Guiado (SMF)</div>
            <div className="bg-yellow-50 p-2 rounded text-xs">Inmunidad EMI, TSN</div>
            <div className="bg-yellow-50 p-2 rounded text-xs">Ethernet/TSN</div>
            
            <div className="bg-red-50 p-2 rounded">Remoto</div>
            <div className="bg-red-50 p-2 rounded">No guiado</div>
            <div className="bg-red-50 p-2 rounded text-xs">5G/Satélite</div>
            <div className="bg-red-50 p-2 rounded text-xs">SD-WAN</div>
          </div>
        </div>
      </div>
    </div>
  );
}

