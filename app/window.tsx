"use client";

import React, { useState } from 'react';

const RealTimeBrowserWindow = () => {
  const [activePage, setActivePage] = useState(0);
  
  const pages = [
    {
      title: "csszengarden",
      url: "https://csszengarden.com/",
      icon: "🐙"
    },
    {
      title: "Monita",
      url: "https://monita.es/",
      icon: "📚"
    },
    {
      title: "Pollen design",
      url: "https://www.pollen.design/",
      icon: "👩‍💻"
    }
  ];

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Star 1 - Replaced triangle */}
        <div 
          className="absolute w-16 h-16 bg-orchid-500 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            filter: 'blur(5px)',
            top: '15%',
            left: '10%',
            animation: 'float1 8s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        {/* Added additional stars */}
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
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(2deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(15px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes float2 {
          0% { transform: translateY(0px) rotate(180deg); }
          25% { transform: translateY(-15px) rotate(182deg); }
          50% { transform: translateY(0px) rotate(180deg); }
          75% { transform: translateY(15px) rotate(178deg); }
          100% { transform: translateY(0px) rotate(180deg); }
        }
        
        @keyframes float3 {
          0% { transform: translateY(0px) rotate(60deg); }
          25% { transform: translateY(-15px) rotate(62deg); }
          50% { transform: translateY(0px) rotate(60deg); }
          75% { transform: translateY(15px) rotate(58deg); }
          100% { transform: translateY(0px) rotate(60deg); }
        }
      `}</style>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Header with logo */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-orchid-400 text-sm font-medium">
            Dylan
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Top section - Main heading */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ejemplos de buenas practicas
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A continuacion mostraremos unas paginas que tienen buenas practicas
            </p>
          </div>
          
          {/* Browser Window Component */}
          <div className="bg-background bg-opacity-30 backdrop-blur-lg rounded-lg border border-orchid-900 border-opacity-50 overflow-hidden shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-background bg-opacity-80 border-b border-orchid-900 border-opacity-30 px-4 py-3 flex items-center">
              {/* Window Controls */}
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full opacity-70"></div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex space-x-3 mr-4">
                <button className="text-gray-400 hover:text-orchid-400">
                  ←
                </button>
                <button className="text-gray-400 hover:text-orchid-400">
                  →
                </button>
                <button className="text-gray-400 hover:text-orchid-400">
                  ↻
                </button>
              </div>
              
              {/* Address Bar */}
              <div className="flex-grow">
                <div className="bg-background bg-opacity-50 rounded-md py-1 px-3 text-sm text-gray-400 flex items-center">
                  <span className="mr-2">🔒</span>
                  <span>{pages[activePage].url}</span>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-orchid-900 border-opacity-30 bg-background bg-opacity-50">
              {pages.map((page, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 relative flex items-center ${
                    activePage === index 
                      ? 'text-orchid-400 border-b-2 border-orchid-500' 
                      : 'text-gray-400 hover:text-orchid-300'
                  }`}
                  onClick={() => setActivePage(index)}
                >
                  <span className="mr-2">{page.icon}</span>
                  {page.title}
                </button>
              ))}
            </div>
            
            {/* taller iFrame Content - changed height from h-96 to h-128 */}
            <div className="h-128 bg-white">
              {pages.map((page, index) => (
                <div 
                  key={index}
                  className="w-full h-full"
                  style={{ display: activePage === index ? 'block' : 'none' }}
                >
                  <iframe 
                    src={page.url} 
                    title={page.title} 
                    className="w-full h-full border-0"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Feature description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-orchid-400">Csszengarden</h3>
              <p className="text-gray-400">
              paleta de colores consistentes no sobre saturacion espacio para cada cosa intuitiva no maneja links dispersos todo mantiene un orden y es perfectamente legible
              </p>
            </div>
            
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-orchid-400">Monita</h3>
              <p className="text-gray-400">
              paleta de colores consistentes no sobre saturacion intuitiva mantiene un orden legible
              </p>
            </div>
            
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-orchid-900 border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-orchid-400">Pollen Design</h3>
              <p className="text-gray-400">
              manejo de bastante informacion sin saturacion buen manejo del espacio diseño consistente en colores
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeBrowserWindow;