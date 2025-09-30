"use client";

import React from 'react';
import { Layers, Cog, ShieldCheck } from 'lucide-react';

export default function SlideCableadoEstructurado() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', bottom: '20%', left: '10%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Estándares TIA-568 / ISO/IEC 11801 [39]
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-up">
          Cableado Estructurado
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Subsistemas */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border border-blue-900 border-opacity-30 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold">Subsistemas</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded p-3 border border-blue-100">
                <div className="font-semibold text-sm">1. Entrada de servicios</div>
                <div className="text-xs text-gray-600">Punto de demarcación con proveedor [37][38]</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <div className="font-semibold text-sm">2. Cuarto de equipos</div>
                <div className="text-xs text-gray-600">Servidores, switches core, UPS</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <div className="font-semibold text-sm">3. Backbone</div>
                <div className="text-xs text-gray-600">Fibra vertical entre pisos</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <div className="font-semibold text-sm">4. Cuartos de telecom</div>
                <div className="text-xs text-gray-600">Patch panels, switches distribución</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <div className="font-semibold text-sm">5. Cableado horizontal</div>
                <div className="text-xs text-gray-600">UTP/STP hasta 90m permanente</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-100">
                <div className="font-semibold text-sm">6. Área de trabajo</div>
                <div className="text-xs text-gray-600">Toma + patch cord (5m máx)</div>
              </div>
            </div>
          </div>

          {/* Prácticas y Certificación */}
          <div className="space-y-8">
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border border-blue-900 border-opacity-30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Cog className="text-blue-600" size={32} />
                <h2 className="text-2xl font-bold">Mejores Prácticas</h2>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Canal permanente: 90m máximo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Patch cords: 5m cada extremo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Radio de curvatura: 4× diámetro cable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Separación líneas potencia: 30cm mínimo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Gestión patch panels: identificación clara</span>
                </li>
              </ul>
            </div>

            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border border-blue-900 border-opacity-30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-blue-600" size={32} />
                <h2 className="text-2xl font-bold">Certificación</h2>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center bg-white rounded p-2">
                  <span className="font-semibold">NEXT/PSNEXT</span>
                  <span className="text-gray-600">Crosstalk</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded p-2">
                  <span className="font-semibold">Return Loss (RL)</span>
                  <span className="text-gray-600">Impedancia</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded p-2">
                  <span className="font-semibold">ACR-F</span>
                  <span className="text-gray-600">Relación señal/ruido</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded p-2">
                  <span className="font-semibold">Delay Skew</span>
                  <span className="text-gray-600">Sincronización</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded p-2">
                  <span className="font-semibold">Atenuación</span>
                  <span className="text-gray-600">Pérdida señal</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-600">
                Niveles: II (básico), III (campo), IV (laboratorio)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

