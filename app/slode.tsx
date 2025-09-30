"use client";

import React from 'react';
import { Radio, Satellite, GitCompare, Zap, Signal, CheckCircle2 } from 'lucide-react';

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-lg p-6 border border-blue-200 dark:border-gray-700">
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <div className="text-gray-600 dark:text-gray-300 leading-relaxed">{children}</div>
  </div>
);

export default function UnguidedMediaAndComparisons() {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '25%', left: '10%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Medios no guiados y comparativas
          </div>
        </div>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-4">
            Medios de Transmisión No Guiados
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Ondas electromagnéticas en el espacio</p>
        </div>

        {/* Sección: Introducción */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
            <Radio size={32} className="mb-4 text-blue-600" />
            <div className="text-xl font-bold mb-2">Flexibilidad</div>
            <p className="text-gray-600 dark:text-gray-300">Movilidad total sin cables físicos</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
            <Satellite size={32} className="mb-4 text-blue-600" />
            <div className="text-xl font-bold mb-2">Alcance</div>
            <p className="text-gray-600 dark:text-gray-300">Sin límites de cableado</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
            <Signal size={32} className="mb-4 text-blue-600" />
            <div className="text-xl font-bold mb-2">Escalabilidad</div>
            <p className="text-gray-600 dark:text-gray-300">Fácil expansión de red</p>
          </div>
        </div>

        {/* Sección: Ondas de Radio */}
        <div className="mb-8">
          <Card title="Ondas de Radio">
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Radio size={32} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Ondas de Radio</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">3 kHz - 300 GHz</div>
                </div>
              </div>
              
              <svg viewBox="0 0 600 140" className="w-full h-32 mb-4">
                <circle cx="300" cy="70" r="20" fill="#3b82f6" />
                <circle cx="300" cy="70" r="40" fill="#3b82f6" opacity="0.6" className="wave-circle" />
                <circle cx="300" cy="70" r="60" fill="#3b82f6" opacity="0.4" className="wave-circle" style={{animationDelay: '0.3s'}} />
                <circle cx="300" cy="70" r="80" fill="#3b82f6" opacity="0.2" className="wave-circle" style={{animationDelay: '0.6s'}} />
                
                <text x="300" y="75" textAnchor="middle" className="text-sm font-bold" fill="#fff">TX</text>
              </svg>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Velocidad: hasta 300 Mbps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Alcance: varios kilómetros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Uso: WiFi, Bluetooth, Radio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Penetración: Alta</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sección: Microondas */}
        <div className="mb-8">
          <Card title="Microondas">
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Signal size={32} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Microondas</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">1 GHz - 300 GHz</div>
                </div>
              </div>
              
              <svg viewBox="0 0 600 100" className="w-full h-20 mb-4">
                <line x1="50" y1="50" x2="550" y2="50" stroke="#3b82f6" strokeWidth="3" strokeDasharray="15,5" />
                
                <circle cx="100" cy="50" r="5" fill="#2563eb" className="wave-circle" />
                <circle cx="200" cy="50" r="5" fill="#2563eb" className="wave-circle" style={{animationDelay: '0.2s'}} />
                <circle cx="300" cy="50" r="5" fill="#2563eb" className="wave-circle" style={{animationDelay: '0.4s'}} />
                <circle cx="400" cy="50" r="5" fill="#2563eb" className="wave-circle" style={{animationDelay: '0.6s'}} />
                <circle cx="500" cy="50" r="5" fill="#2563eb" className="wave-circle" style={{animationDelay: '0.8s'}} />
                
                <polygon points="50,40 50,60 35,50" fill="#3b82f6" />
                <polygon points="550,40 550,60 565,50" fill="#3b82f6" />
              </svg>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Velocidad: hasta 1 Gbps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Uso: Enlaces punto a punto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Alcance: 50 km</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Visión directa requerida</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sección: Satélite */}
        <div className="mb-8">
          <Card title="Comunicación Satelital">
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Satellite size={32} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Satélite</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cobertura global</div>
                </div>
              </div>

              <svg viewBox="0 0 600 140" className="w-full h-32 mb-4">
                <circle cx="300" cy="70" r="80" fill="#3b82f6" opacity="0.1" />
                <circle cx="300" cy="70" r="20" fill="#3b82f6" />
                <text x="300" y="75" textAnchor="middle" className="text-sm" fill="#fff">SAT</text>
                
                <path d="M300 90 Q250 120, 100 130" stroke="#3b82f6" strokeWidth="3" strokeDasharray="8,4" fill="none" />
                <path d="M300 90 Q350 120, 500 130" stroke="#3b82f6" strokeWidth="3" strokeDasharray="8,4" fill="none" />
                
                <rect x="80" y="125" width="40" height="12" rx="3" fill="#2563eb" />
                <text x="100" y="134" textAnchor="middle" className="text-xs" fill="#fff">A</text>
                
                <rect x="480" y="125" width="40" height="12" rx="3" fill="#2563eb" />
                <text x="500" y="134" textAnchor="middle" className="text-xs" fill="#fff">B</text>
              </svg>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-800">50 Mbps</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Velocidad</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-800">Global</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Cobertura</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-800">500ms</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Latencia</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-800">Alto</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Costo</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sección: Infrarrojo */}
        <div className="mb-8">
          <Card title="Infrarrojo">
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap size={32} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Infrarrojo</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Corto alcance</div>
                </div>
              </div>
              
              <svg viewBox="0 0 600 100" className="w-full h-20 mb-4">
                <defs>
                  <radialGradient id="ir-glow">
                    <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0}} />
                  </radialGradient>
                </defs>
                
                <circle cx="100" cy="50" r="25" fill="url(#ir-glow)" className="wave-circle" />
                <circle cx="100" cy="50" r="12" fill="#2563eb" />
                
                <line x1="130" y1="50" x2="470" y2="50" stroke="#60a5fa" strokeWidth="5" opacity="0.7" />
                
                <circle cx="500" cy="50" r="25" fill="url(#ir-glow)" className="wave-circle" style={{animationDelay: '0.5s'}} />
                <circle cx="500" cy="50" r="12" fill="#2563eb" />
              </svg>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Velocidad: hasta 16 Mbps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Alcance: 5-10 metros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Uso: Controles remotos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  <span>Línea de vista necesaria</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparación de medios inalámbricos */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Comparación de Medios Inalámbricos</h2>
            <p className="text-gray-600 dark:text-gray-300">¿Cuál es mejor para tu proyecto?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-sm">
              <div className="text-xl font-bold mb-3">Radio</div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Penetra obstáculos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Económico</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Interferencias</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-blue-600">WiFi, Bluetooth</div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-sm">
              <div className="text-xl font-bold mb-3">Microondas</div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Alta velocidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Gran ancho banda</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Línea de vista</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-blue-600">Enlaces rurales</div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-sm">
              <div className="text-xl font-bold mb-3">Satélite</div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Cobertura global</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Alta latencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Muy costoso</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-blue-600">Zonas remotas</div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-sm">
              <div className="text-xl font-bold mb-3">Infrarrojo</div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Muy seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Corto alcance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Línea de vista</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-blue-600">Control remoto</div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
            <div className="text-xl font-bold mb-2">Conclusión</div>
            <p className="text-gray-700 dark:text-gray-200">La tecnología inalámbrica ofrece movilidad y flexibilidad, ideal cuando el cableado no es viable</p>
          </div>
        </div>

        {/* Comparativa guiado vs no guiado y protocolos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <Card title="Comparativa: guiado vs no guiado">
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Latencia: guiado (fibra/UTP) &lt; no guiado (aire).</li>
              <li>EMI/seguridad: guiado inmune; RF expuesto a interferencias.</li>
              <li>Movilidad y despliegue: no guiado es más flexible y rápido.</li>
              <li>Capacidad pico: fibra &gt;&gt; RF; Wi‑Fi 7 mejora LAN.</li>
              <li>Costes: RF menor cableado inicial; guiado reduce retrabajos.</li>
            </ul>
          </Card>

          <Card title="Protocolos y direccionamiento (IPv4/IPv6)">
            <p className="text-sm">
              IP funciona igual sobre ambos medios. IPv6 aporta autoconfiguración (SLAAC), más subredes y mejor soporte IoT. 
              Capa 2 cambia (802.3 vs 802.11/3GPP), pero IP se encapsula de forma uniforme.
            </p>
          </Card>

          <Card title="Pico de uso y más utilizado">
            <p className="text-sm">
              El acceso más usado es Wi‑Fi. El backbone y las troncales siguen dominados por fibra hacia 400G/800G.
            </p>
          </Card>
        </div>

        <div className="mt-8 bg-white rounded-lg border p-6 animate-fade-in-up">
          <div className="flex items-center gap-2 font-semibold mb-2"><GitCompare size={18} className="text-blue-600" /> Matriz resumida</div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-xs">
            <div className="font-semibold">Criterio</div>
            <div className="font-semibold">Guiado</div>
            <div className="font-semibold">No guiado</div>
            <div className="font-semibold">Doméstico</div>
            <div className="font-semibold">Empresarial</div>
            <div className="font-semibold">Industrial</div>
            <div>Latencia</div>
            <div>Muy baja</div>
            <div>Variable</div>
            <div>Baja‑media</div>
            <div>Muy baja</div>
            <div>Muy baja</div>
            <div>EMI</div>
            <div>Inmune (fibra)</div>
            <div>Sensible</div>
            <div>Media</div>
            <div>Baja</div>
            <div>Muy baja</div>
            <div>Movilidad</div>
            <div>Baja</div>
            <div>Alta</div>
            <div>Alta</div>
            <div>Media</div>
            <div>Alta</div>
            <div>Coste</div>
            <div>Medio‑alto</div>
            <div>Bajo‑medio</div>
            <div>Bajo</div>
            <div>Medio</div>
            <div>Medio‑alto</div>
          </div>
        </div>
      </div>
    </div>
  );
}
