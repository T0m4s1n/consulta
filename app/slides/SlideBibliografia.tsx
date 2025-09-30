"use client";

import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function SlideBibliografia() {
  const referencias = [
    {
      numeros: [1, 2, 3, 4, 9, 10, 13],
      titulo: "Medio de transmisión - Wikipedia, la enciclopedia libre",
      url: "https://es.wikipedia.org/wiki/Medio_de_transmisi%C3%B3n",
      descripcion: "Conceptos básicos de medios de transmisión guiados y no guiados"
    },
    {
      numeros: [5, 6, 7, 8, 11, 12, 14, 15, 16, 18, 58, 59, 65],
      titulo: "Cable de par trenzado - Wikipedia, la enciclopedia libre",
      url: "https://es.wikipedia.org/wiki/Cable_de_par_trenzado",
      descripcion: "Historia, tipos y categorías del cable de par trenzado UTP/STP"
    },
    {
      numeros: [17, 53, 54, 60, 64],
      titulo: "La evolución del cableado estructurado en la era de las comunicaciones de alta velocidad",
      url: "https://msitgroup.com.mx/detallesdeblog_27_1401/",
      descripcion: "Evolución de estándares y categorías de cableado"
    },
    {
      numeros: [19, 20, 56, 57],
      titulo: "Single Pair Ethernet | Phoenix Contact",
      url: "https://www.phoenixcontact.com/es-pc/tecnologias/single-pair-ethernet",
      descripcion: "Tecnología SPE para aplicaciones industriales y automatización"
    },
    {
      numeros: [21, 22, 23],
      titulo: "Cable coaxial - Wikipedia, la enciclopedia libre",
      url: "https://es.wikipedia.org/wiki/Cable_coaxial",
      descripcion: "Historia, estructura y aplicaciones del cable coaxial"
    },
    {
      numeros: [24],
      titulo: "CABLE COAXIAL PARA INTERNET Y TV - CABLEX",
      url: "https://cablex.pe/blogs/articulos/cable-coaxial-para-internet-y-tv-explicacion-de-los-tipos-de-cables",
      descripcion: "Tipos de cable coaxial y estándar DOCSIS"
    },
    {
      numeros: [25],
      titulo: "Fibra óptica vs cable coaxial: ¿Cuál es mejor? - WIN",
      url: "https://win.pe/blog/diferencias-fibra-optica-y-cable-coaxial/",
      descripcion: "Comparativa de rendimiento entre fibra óptica y coaxial"
    },
    {
      numeros: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 66],
      titulo: "Fibra óptica, qué es, cómo funciona y mejores aplicaciones",
      url: "https://www.redestelecom.es/especiales/fibra-optica-que-es-como-funciona-y-mejores-aplicaciones/",
      descripcion: "Tecnología de fibra óptica, tipos MMF/SMF y despliegue FTTH"
    },
    {
      numeros: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 51, 52, 67, 68, 69],
      titulo: "Cableado estructurado, qué es, tipos y utilidades",
      url: "https://www.redestelecom.es/infraestructuras/cableado-estructurado-que-es-tipos-y-utilidades/",
      descripcion: "Estándares TIA-568, subsistemas y mejores prácticas de cableado"
    },
    {
      numeros: [48],
      titulo: "Ethernet vs WiFi: ¿Cuál es internet es mejor? - HighSpeedInternet.com",
      url: "https://www.highspeedinternet.com/es/recursos/ethernet-vs-wifi-cual-internet-es-mejor",
      descripcion: "Comparativa entre conexiones cableadas e inalámbricas"
    },
    {
      numeros: [49, 50],
      titulo: "High-Definition Multimedia Interface - Wikipedia, la enciclopedia libre",
      url: "https://es.wikipedia.org/wiki/High-Definition_Multimedia_Interface",
      descripcion: "Estándar HDMI para transmisión de video y audio digital"
    },
    {
      numeros: [55],
      titulo: "Diferencia entre Ethernet y Ethernet industrial - NewLinko",
      url: "https://newlinko.com/es/difference-ethernet-and-industrial-ethernet/",
      descripcion: "Ethernet industrial y protocolos TSN para automatización"
    },
    {
      numeros: [61],
      titulo: "Acelerando el desarrollo de la banda ancha por fibra para iluminar LATAM digital - Huawei",
      url: "https://www.huawei.com/mx/news/mx/2023/acelerando-el-desarrollo-de-la-banda-ancha-por-fibra-e-iluminar-latam-digital",
      descripcion: "Despliegue de fibra óptica en Latinoamérica"
    },
    {
      numeros: [62, 63, 70, 71, 72, 73],
      titulo: "Estandarización USB Type-C | DigiKey",
      url: "https://www.digikey.es/es/articles/usb-type-c-standardization-where-when-what",
      descripcion: "Estándar USB-C, capacidades técnicas y regulación europea"
    },
  ];

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-grid">
        <div className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-20 animate-pulse-glow" style={{ filter: 'blur(80px)', top: '40%', left: '50%' }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8">
        <div className="mb-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Referencias consultadas
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-8 animate-fade-in-up flex items-center gap-4">
          <BookOpen size={48} className="text-blue-600" />
          Bibliografía
        </h1>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-8 animate-fade-in-up">
          <p className="text-sm text-gray-700">
            <strong>Total de referencias:</strong> 73 citas distribuidas en 14 fuentes principales. 
            Todas las fuentes han sido verificadas y consultadas durante la elaboración de esta presentación técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin' }}>
          {referencias.map((ref, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 px-3 py-2 rounded text-xs font-mono font-bold text-blue-700">
                    [{ref.numeros[0]}]
                  </div>
                  {ref.numeros.length > 1 && (
                    <div className="text-xs text-gray-500 mt-1 text-center">
                      +{ref.numeros.length - 1}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-2 text-gray-900">
                    {ref.titulo}
                  </h3>
                  
                  {ref.descripcion && (
                    <p className="text-xs text-gray-600 mb-2 italic">
                      {ref.descripcion}
                    </p>
                  )}
                  
                  <a 
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 break-all mb-2"
                  >
                    <ExternalLink size={12} className="flex-shrink-0" />
                    <span className="truncate">{ref.url}</span>
                  </a>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {ref.numeros.slice(0, 8).map((num) => (
                      <span 
                        key={num}
                        className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded font-mono"
                      >
                        [{num}]
                      </span>
                    ))}
                    {ref.numeros.length > 8 && (
                      <span className="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
                        +{ref.numeros.length - 8} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota metodológica */}
        <div className="mt-8 bg-white rounded-lg p-6 border border-blue-200 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <BookOpen size={18} className="text-blue-600" />
            Nota Metodológica
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Las citas numeradas <span className="font-mono bg-gray-100 px-1">[N]</span> se encuentran distribuidas 
            a lo largo de toda la presentación en los slides correspondientes. Cada número de cita hace referencia 
            a información específica extraída de las fuentes listadas. Las referencias incluyen fuentes académicas 
            (Wikipedia), sitios técnicos especializados (RedesTelecom, Phoenix Contact), fabricantes líderes 
            (Huawei, DigiKey) y organizaciones de estandarización. Todas las URLs fueron verificadas y son 
            accesibles a la fecha de elaboración (2024-2025).
          </p>
        </div>

        {/* Agradecimientos */}
        <div className="mt-6 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg text-white">
            <p className="font-bold text-lg mb-1">
              Presentación elaborada por
            </p>
            <p className="text-xl">
              <strong>River Bonilla</strong> y <strong>Tomas Benavides</strong>
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Medios de Transmisión Guiados y Cableado Estructurado
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Presentación Técnica para Ingenieros • 2025
          </p>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
}
