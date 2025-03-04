"use client";

import React, { useState } from 'react';

const RealTimeBrowserWindow = () => {
  const [activePage, setActivePage] = useState(0);
  
  const pages = [
    {
      title: "GitHub",
      url: "https://miit-game-front.vercel.app/",
      icon: "🐙"
    },
    {
      title: "Stack Overflow",
      url: "https://stackoverflow.com",
      icon: "📚"
    },
    {
      title: "Dev.to",
      url: "https://dev.to",
      icon: "👩‍💻"
    }
  ];

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle 1 */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-[#e953dc] opacity-30"
          style={{
            filter: 'blur(60px)',
            top: '10%',
            left: '15%',
            animation: 'float1 12s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        
        {/* Additional circle for more visual interest */}
        <div 
          className="absolute w-80 h-80 rounded-full bg-[#e953dc] opacity-20"
          style={{
            filter: 'blur(70px)',
            bottom: '15%',
            right: '10%',
            animation: 'float2 15s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(-20px, 15px); }
          100% { transform: translate(0px, 0px); }
        }
        
        @keyframes float2 {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(20px, -15px); }
          100% { transform: translate(0px, 0px); }
        }
        
        @keyframes float3 {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(-15px, -15px); }
          100% { transform: translate(0px, 0px); }
        }
        
        @keyframes float4 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(10px, 10px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Header with logo */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-[#e953dc] text-sm font-medium">
            Dylan
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Top section - Main heading */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Malas practicas &gt;:(
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A continuacion veremos malas practicas que nunca deberian verse
            </p>
          </div>
          
          {/* Browser Window Component */}
          <div className="bg-background bg-opacity-30 backdrop-blur-lg rounded-lg border border-[#e953dc] border-opacity-50 overflow-hidden shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-background bg-opacity-80 border-b border-[#e953dc] border-opacity-30 px-4 py-3 flex items-center">
              {/* Window Controls */}
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full opacity-70"></div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex space-x-3 mr-4">
                <button className="text-gray-400 hover:text-[#e953dc]">
                  ←
                </button>
                <button className="text-gray-400 hover:text-[#e953dc]">
                  →
                </button>
                <button className="text-gray-400 hover:text-[#e953dc]">
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
            <div className="flex border-b border-[#e953dc] border-opacity-30 bg-background bg-opacity-50">
              {pages.map((page, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 relative flex items-center ${
                    activePage === index 
                      ? 'text-[#e953dc] border-b-2 border-[#e953dc]' 
                      : 'text-gray-400 hover:text-[#e953dc]'
                  }`}
                  onClick={() => setActivePage(index)}
                >
                  <span className="mr-2">{page.icon}</span>
                  {page.title}
                </button>
              ))}
            </div>
            
            {/* Increased height iFrame Content - h-96 to h-128 */}
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
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-[#e953dc] border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-[#e953dc]">Distraction-Free Focus</h3>
              <p className="text-gray-400">
                Keep your development flow uninterrupted with seamless integration of web resources.
              </p>
            </div>
            
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-[#e953dc] border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-[#e953dc]">Performance Optimized</h3>
              <p className="text-gray-400">
                Smoothly rendered UI elements and efficient memory usage for a responsive experience.
              </p>
            </div>
            
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-[#e953dc] border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-[#e953dc]">Developer-Centric</h3>
              <p className="text-gray-400">
                Tailored for developers with quick access to code references and technical resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeBrowserWindow;