"use client";

import React from 'react';
import Image from 'next/image';

const CodeIntegrityPlatformWithBackground = () => {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Replaced triangle with star */}
        <div 
          className="absolute w-12 h-12 bg-orchid-700 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            filter: 'blur(4px)',
            top: '40%',
            right: '15%',
            animation: 'float2 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        {/* Added more small stars */}
        <div 
          className="absolute w-8 h-8 bg-orchid-600 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            filter: 'blur(3px)',
            top: '25%',
            left: '30%',
            animation: 'float3 7s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-10 h-10 bg-orchid-400 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            filter: 'blur(4px)',
            bottom: '20%',
            right: '25%',
            animation: 'float1 9s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute w-6 h-6 bg-orchid-800 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            filter: 'blur(2px)',
            bottom: '30%',
            left: '20%',
            animation: 'float2 11s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />
      </div>
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(15px) rotate(-2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        
        @keyframes float2 {
          0% {
            transform: translateY(0px) rotate(180deg);
          }
          25% {
            transform: translateY(-15px) rotate(182deg);
          }
          50% {
            transform: translateY(0px) rotate(180deg);
          }
          75% {
            transform: translateY(15px) rotate(178deg);
          }
          100% {
            transform: translateY(0px) rotate(180deg);
          }
        }
        
        @keyframes float3 {
          0% {
            transform: translateY(0px) rotate(60deg);
          }
          25% {
            transform: translateY(-15px) rotate(62deg);
          }
          50% {
            transform: translateY(0px) rotate(60deg);
          }
          75% {
            transform: translateY(15px) rotate(58deg);
          }
          100% {
            transform: translateY(0px) rotate(60deg);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-orchid-400 text-sm font-medium">
            Maka y Javi
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left section - Main heading and logo */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
              Que es el diseño de interfaces en web?
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48">
                {/* Stylized logo with proper orchid colors */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" width="120" height="120">
                    <circle cx="60" cy="60" r="25" className="bg-orchid-600 opacity-70" />
                    <text x="60" y="65" textAnchor="middle" fill="white" className="text-xl font-bold">q</text>
                  </svg>
                </div>
                {/* Fixed image implementation using Next.js Image component */}
                <div className="absolute inset-0">
                  <Image 
                    src="/cerdito.png" 
                    alt="Qodo mascot" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Progress steps */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center">
                <span className="text-orchid-500 font-medium">Usabilidad</span>
                <div className="w-full h-px bg-gray-700 mt-2"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orchid-500 font-medium">Accesibilidad</span>
                <div className="w-full h-px bg-gray-700 mt-2"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orchid-500 font-medium">Consistencia</span>
                <div className="w-full h-px bg-gray-700 mt-2"></div>
              </div>
            </div>
          </div>
          
          {/* Right section - Features */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Que es el diseño de interfaces web?</h2>
              <p className="text-gray-400">
              El diseño de interfaces web es el proceso de crear y organizar los elementos visuales de una página web, como botones, menús y textos, para que los usuarios puedan navegar y usar el sitio de manera fácil y agradable.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Como funciona el diseño de interfaces web?</h2>
              <p className="text-gray-400">
              Los componentes de una interfaz, como la cabecera, cuerpo, pie de página, barra lateral, menú de navegación y elementos interactivos, se combinan para facilitar la navegación y mejorar la experiencia del usuario.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Componentes</h3>
            <p className="text-gray-400 mb-4">Los componentes de una interfaz normalmente son:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Header</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Body</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Footer</span>
              </li>
              <p className="text-gray-400 mb-4">Estos pueden variar</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orchid-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-800 rounded-full opacity-70"></div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Es muy importante tener</h3>
            <p className="text-gray-400 mb-4">Dentro de un diseño</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Contenido de calidad</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Retroalimentacion clara</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Interactividad</span>
              </li>
              <p className="text-gray-400 mb-4">Es importante tener estas cualidades para asegurar un producto de calidad</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orchid-700 rounded-full opacity-70"></div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">En codigo</h3>
            <p className="text-gray-400 mb-4">Es importante asegurar</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Optimizacion de carga</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Seguridad</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Buena arquitectura de software </span>
              </li>
              <p className="text-gray-400 mb-4">Estas practicas aseguran que se entregue un codigo limpio.</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orchid-400 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-500 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-700 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
        
        {/* Footer process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Codigo limpio</div>
            <div className="hidden md:block text-orchid-500">→</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Codido seguro</div>
            <div className="hidden md:block text-orchid-500">→</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-400">Codigo optimizado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeIntegrityPlatformWithBackground;