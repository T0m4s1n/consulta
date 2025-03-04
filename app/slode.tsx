"use client";

import React, { useEffect, useRef } from 'react';

const CleanCodePlatform = () => {
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, 300 * index);
    });
    
    hasAnimatedRef.current = true;
  }, []);

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-64 h-64 rounded-full bg-orchid-700 opacity-30"
          style={{
            filter: 'blur(80px)',
            top: '20%',
            right: '10%',
            animation: 'floatReverse 10s ease-in-out infinite',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-orchid-400 text-sm font-medium">
            River y Tomas
          </div>
        </div>
      

        <div className="text-center mb-20 fade-in opacity-0 transition-opacity duration-1000">
          <div className="text-sm font-semibold text-orchid-400 tracking-widest uppercase mb-3">
            Diseño. WEB.
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold transition-transform duration-700 hover:scale-105">
            Buenas practicas
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-orchid-900 border-opacity-30 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-orchid-500">
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-orchid-500 tracking-wider uppercase">
                Para usuarios
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Buenas practicas UX
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
            La simplicidad y claridad son clave en el diseño. Evita sobrecargar la interfaz con demasiada información y usa una jerarquía visual clara. Mantén la consistencia en colores, tipografía y estilos para que el usuario se familiarice fácilmente. La navegación debe ser intuitiva, con menús bien estructurados y accesibles.
            </p>
            
            <a href="#" className="inline-flex items-center text-orchid-500 font-medium hover:text-orchid-400 transition-colors group">
              Ahora lee a la derecha xD
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-orchid-900 border-opacity-30 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-orchid-500">
                  <path fill="currentColor" d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-orchid-500 tracking-wider uppercase">
                Para programadores
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Buenas practicas en codigo
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
            La modularidad y reutilización optimizan el código. Usa componentes reutilizables en Vue para evitar duplicaciones innecesarias. Mantén una clara separación de responsabilidades dividiendo HTML, CSS y JavaScript en archivos organizados. El código limpio y documentado facilita el mantenimiento y colaboración en equipo.
            </p>
            
            <a href="#" className="inline-flex items-center text-orchid-500 font-medium hover:text-orchid-400 transition-colors group">
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 fade-in opacity-0 transition-all duration-700">
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Regla de los 3 clicks</h3>
            <p className="text-gray-400 mb-4">Esta regla consta de </p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">La información clave debe estar accesible en un máximo de tres clicks.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Si los usuarios tardan demasiado en encontrar lo que buscan, podrían abandonar el sitio.</span>
              </li>

            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orchid-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-800 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Regla de la visibilidad</h3>
            <p className="text-gray-400 mb-4">Esta regla consta de</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Los elementos más importantes deben estar visibles sin necesidad de hacer scroll excesivo. </span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Un diseño bien estructurado guía la atención del usuario de manera natural.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orchid-700 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Regla de la carga rápida</h3>
            <p className="text-gray-400 mb-4">Esta regla consta de</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">La página debe cargar en menos de 3 segundos.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Un sitio lento frustra a los usuarios y afecta negativamente el SEO.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-orchid-500">•</span>
                <span className="text-gray-400">Optimiza imágenes y usa técnicas como la carga diferida.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orchid-400 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-500 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-orchid-600 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 fade-in opacity-0 transition-all duration-700">
          <h2 className="text-sm font-bold text-orchid-500 tracking-widest uppercase">
            BUEN DISEÑO WEB
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Codigo limpio</div>
              <div className="hidden md:block text-orchid-500">→</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">SOLID</div>
              <div className="hidden md:block text-orchid-500">→</div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-400">Comunicacion</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes floatReverse {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .fade-in {
          transform: translateY(10px);
        }
        
        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default CleanCodePlatform;