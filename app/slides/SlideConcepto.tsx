"use client";

import React from 'react';
import { Cable, CheckCircle } from 'lucide-react';

export default function SlideConcepto() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '20%', right: '10%' }} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Conceptos básicos
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-8 animate-fade-in-up">
          ¿Qué son los Medios Guiados?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border border-blue-900 border-opacity-30 animate-fade-in-up">
            <Cable size={48} className="text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Definición</h2>
            <p className="text-gray-600 leading-relaxed">
              Los medios de transmisión guiados son aquellos que utilizan un soporte físico (cables o alambres) 
              para transportar datos entre dispositivos [1][2]. La señal viaja confinada en un cable, ya sea metálico 
              (cobre que conduce señales eléctricas) o fibra óptica (hilos de vidrio que conducen pulsos de luz) [1][3].
            </p>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-8 border border-blue-900 border-opacity-30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold mb-4">¿Para qué sirven?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Redes LAN empresariales con requisitos de baja latencia</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Backbone de campus y enlaces troncales críticos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Entornos con alta inmunidad al ruido electromagnético</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Aplicaciones que requieren seguridad física de datos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 border border-blue-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold mb-4">Ventajas clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Control EMI/RFI</div>
              <p className="text-sm text-gray-600">Blindajes y trenzado reducen interferencias</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Predictibilidad</div>
              <p className="text-sm text-gray-600">Ancho de banda determinado por categoría</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Baja BER</div>
              <p className="text-sm text-gray-600">Menor tasa de error en entornos ruidosos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

