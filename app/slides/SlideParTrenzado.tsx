"use client";

import React from 'react';
import { Cable, Zap } from 'lucide-react';

export default function SlideParTrenzado() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '25%', left: '15%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Detalles técnicos
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 animate-fade-in-up flex items-center gap-4">
          <Cable size={40} className="text-blue-600" />
          Par Trenzado (UTP/STP)
        </h1>

        {/* Fechas de estandarización */}
        <div className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm mb-4 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="border-l-4 border-blue-400 pl-3 text-left">
              <div className="text-xl font-bold text-blue-600">1988</div>
              <div className="text-xs text-gray-600">Estándar TIA-568 inicial [5]</div>
            </div>
            <div className="border-l-4 border-blue-500 pl-3 text-left">
              <div className="text-xl font-bold text-blue-600">2001</div>
              <div className="text-xs text-gray-600">Cat5e y Cat6 estandarizadas [6]</div>
            </div>
            <div className="border-l-4 border-blue-600 pl-3 text-left">
              <div className="text-xl font-bold text-blue-600">2008</div>
              <div className="text-xs text-gray-600">Cat6A y 10GBASE-T [7]</div>
            </div>
            <div className="border-l-4 border-blue-700 pl-3 text-left">
              <div className="text-xl font-bold text-blue-600">2016</div>
              <div className="text-xs text-gray-600">Cat8 para datacenter [8]</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* SVG Animado de estructura del cable */}
          <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm animate-fade-in-up">
            <h3 className="text-lg font-bold mb-4">Estructura y Función de los 4 Pares (8 Hilos)</h3>
            <svg viewBox="0 0 600 550" className="w-full h-auto">
              {/* Título superior */}
              <text x="300" y="30" textAnchor="middle" className="text-sm font-bold" fill="#1f2937">Estándar T568B - Pinout RJ45</text>
              
              {/* Cable exterior */}
              <rect x="50" y="170" width="500" height="100" rx="50" fill="#6b7280" opacity="0.3"/>
              
              {/* Par 1 - Naranja (TX+/TX-) Pines 1-2 */}
              <path d="M100 190 Q130 180, 160 190 T220 190 T280 190 T340 190 T400 190 T460 190" 
                    stroke="#f97316" strokeWidth="4" fill="none" className="line-animated"/>
              <path d="M100 190 Q130 200, 160 190 T220 190 T280 190 T340 190 T400 190 T460 190" 
                    stroke="#fb923c" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '0.2s'}}/>
              
              {/* Par 2 - Verde (RX+/RX-) Pines 3-6 */}
              <path d="M100 210 Q130 200, 160 210 T220 210 T280 210 T340 210 T400 210 T460 210" 
                    stroke="#10b981" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '0.4s'}}/>
              <path d="M100 210 Q130 220, 160 210 T220 210 T280 210 T340 210 T400 210 T460 210" 
                    stroke="#34d399" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '0.6s'}}/>
              
              {/* Par 3 - Azul (Reserva/PoE) Pines 4-5 */}
              <path d="M100 230 Q130 220, 160 230 T220 230 T280 230 T340 230 T400 230 T460 230" 
                    stroke="#3b82f6" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '0.8s'}}/>
              <path d="M100 230 Q130 240, 160 230 T220 230 T280 230 T340 230 T400 230 T460 230" 
                    stroke="#60a5fa" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '1s'}}/>
              
              {/* Par 4 - Marrón (Reserva/PoE) Pines 7-8 */}
              <path d="M100 250 Q130 240, 160 250 T220 250 T280 250 T340 250 T400 250 T460 250" 
                    stroke="#92400e" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '1.2s'}}/>
              <path d="M100 250 Q130 260, 160 250 T220 250 T280 250 T340 250 T400 250 T460 250" 
                    stroke="#b45309" strokeWidth="4" fill="none" className="line-animated" style={{animationDelay: '1.4s'}}/>
              
              {/* Pulsos de señal */}
              <circle cx="120" cy="190" r="5" fill="#ef4444" className="wave-circle"/>
              <circle cx="140" cy="210" r="5" fill="#ef4444" className="wave-circle" style={{animationDelay: '0.3s'}}/>
              <circle cx="160" cy="230" r="5" fill="#ef4444" className="wave-circle" style={{animationDelay: '0.6s'}}/>
              <circle cx="180" cy="250" r="5" fill="#ef4444" className="wave-circle" style={{animationDelay: '0.9s'}}/>
              
              {/* Conector RJ45 detallado con pines numerados */}
              <g transform="translate(480, 60)">
                <rect x="0" y="0" width="80" height="200" fill="#1f2937" rx="6"/>
                <text x="40" y="-10" textAnchor="middle" className="text-xs font-bold" fill="#1f2937">RJ45</text>
                
                {/* Pin 1 - Naranja/Blanco (TX+) */}
                <rect x="8" y="10" width="64" height="18" fill="#fb923c" rx="2"/>
                <text x="15" y="22" className="text-xs font-bold" fill="#fff">1</text>
                <text x="45" y="22" className="text-xs" fill="#fff">TX+ (Naranja/Blanco)</text>
                
                {/* Pin 2 - Naranja (TX-) */}
                <rect x="8" y="32" width="64" height="18" fill="#f97316" rx="2"/>
                <text x="15" y="44" className="text-xs font-bold" fill="#fff">2</text>
                <text x="45" y="44" className="text-xs" fill="#fff">TX- (Naranja)</text>
                
                {/* Pin 3 - Verde/Blanco (RX+) */}
                <rect x="8" y="54" width="64" height="18" fill="#34d399" rx="2"/>
                <text x="15" y="66" className="text-xs font-bold" fill="#fff">3</text>
                <text x="45" y="66" className="text-xs" fill="#fff">RX+ (Verde/Blanco)</text>
                
                {/* Pin 4 - Azul (PoE+) */}
                <rect x="8" y="76" width="64" height="18" fill="#3b82f6" rx="2"/>
                <text x="15" y="88" className="text-xs font-bold" fill="#fff">4</text>
                <text x="45" y="88" className="text-xs" fill="#fff">PoE+ (Azul)</text>
                
                {/* Pin 5 - Azul/Blanco (PoE+) */}
                <rect x="8" y="98" width="64" height="18" fill="#60a5fa" rx="2"/>
                <text x="15" y="110" className="text-xs font-bold" fill="#fff">5</text>
                <text x="45" y="110" className="text-xs" fill="#fff">PoE+ (Azul/Blanco)</text>
                
                {/* Pin 6 - Verde (RX-) */}
                <rect x="8" y="120" width="64" height="18" fill="#10b981" rx="2"/>
                <text x="15" y="132" className="text-xs font-bold" fill="#fff">6</text>
                <text x="45" y="132" className="text-xs" fill="#fff">RX- (Verde)</text>
                
                {/* Pin 7 - Marrón/Blanco (PoE-) */}
                <rect x="8" y="142" width="64" height="18" fill="#b45309" rx="2"/>
                <text x="15" y="154" className="text-xs font-bold" fill="#fff">7</text>
                <text x="45" y="154" className="text-xs" fill="#fff">PoE- (Marrón/Blanco)</text>
                
                {/* Pin 8 - Marrón (PoE-) */}
                <rect x="8" y="164" width="64" height="18" fill="#92400e" rx="2"/>
                <text x="15" y="176" className="text-xs font-bold" fill="#fff">8</text>
                <text x="45" y="176" className="text-xs" fill="#fff">PoE- (Marrón)</text>
              </g>
              
              {/* Tabla de funciones */}
              <g transform="translate(50, 330)">
                <text x="0" y="0" className="text-sm font-bold" fill="#1f2937">Función de cada par:</text>
                
                <rect x="0" y="10" width="240" height="30" fill="#fff7ed" stroke="#f97316" strokeWidth="2" rx="4"/>
                <text x="10" y="28" className="text-xs font-bold" fill="#f97316">Par 1 (Naranja):</text>
                <text x="120" y="28" className="text-xs" fill="#1f2937">Transmisión TX (10/100/1000)</text>
                
                <rect x="0" y="45" width="240" height="30" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="4"/>
                <text x="10" y="63" className="text-xs font-bold" fill="#10b981">Par 2 (Verde):</text>
                <text x="120" y="63" className="text-xs" fill="#1f2937">Recepción RX (10/100/1000)</text>
                
                <rect x="0" y="80" width="240" height="30" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" rx="4"/>
                <text x="10" y="98" className="text-xs font-bold" fill="#3b82f6">Par 3 (Azul):</text>
                <text x="120" y="98" className="text-xs" fill="#1f2937">Datos GigE + PoE (+)</text>
                
                <rect x="0" y="115" width="240" height="30" fill="#fef3c7" stroke="#92400e" strokeWidth="2" rx="4"/>
                <text x="10" y="133" className="text-xs font-bold" fill="#92400e">Par 4 (Marrón):</text>
                <text x="120" y="133" className="text-xs" fill="#1f2937">Datos GigE + PoE (-)</text>
                
                <text x="0" y="165" className="text-xs italic" fill="#6b7280">* En 10/100BASE-T solo se usan pares 1 y 2</text>
                <text x="0" y="180" className="text-xs italic" fill="#6b7280">* En 1000BASE-T y PoE se usan los 4 pares</text>
              </g>
            </svg>
            <div className="text-xs text-gray-600 mt-2">
              4 pares trenzados (8 hilos) reducen crosstalk y EMI mediante cancelación magnética. 
              Inventado en 1881 por Alexander Graham Bell [11][12]. Variantes UTP y STP según necesidad de blindaje [13].
            </div>
          </div>

          {/* Especificaciones */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-blue-600" size={24} />
                Categorías y Rendimiento
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="font-semibold">Cat5e (Enhanced)</div>
                  <div className="text-sm text-gray-600">1 Gbps • 100 MHz • Más de 20 años en uso [14]</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-semibold">Cat6</div>
                  <div className="text-sm text-gray-600">1 Gbps (55m: 10 Gbps) • 250 MHz • Estándar actual [15]</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="font-semibold">Cat6A (Augmented)</div>
                  <div className="text-sm text-gray-600">10 Gbps • 500 MHz • 100m full duplex [14][15]</div>
                </div>
                <div className="border-l-4 border-blue-700 pl-4">
                  <div className="font-semibold">Cat7/7A</div>
                  <div className="text-sm text-gray-600">10 Gbps • 600-1000 MHz • S/FTP blindado</div>
                </div>
                <div className="border-l-4 border-blue-800 pl-4">
                  <div className="font-semibold">Cat8</div>
                  <div className="text-sm text-gray-600">40 Gbps • 2000 MHz • 30m datacenter [16][64]</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h4 className="font-bold mb-3">Ventajas / Desventajas</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-green-600 mb-1">✓ Ventajas</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Bajo costo</li>
                    <li>• Fácil instalación</li>
                    <li>• Flexible</li>
                    <li>• PoE (hasta 90W)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-red-600 mb-1">✗ Desventajas</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 100m máximo</li>
                    <li>• Sensible EMI (UTP)</li>
                    <li>• Atenuación por distancia</li>
                    <li>• Crosstalk interno</li>
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

