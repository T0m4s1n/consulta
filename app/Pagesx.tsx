"use client";

import React, { useState } from 'react';

const RealTimeBrowserWindow = () => {
  const [activePage, setActivePage] = useState(0);
  
  const pages = [
    {
      title: "GitHub",
      url: "https://github.com",
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
          className="absolute w-64 h-64 rounded-full bg-indigo-500 opacity-30"
          style={{
            filter: 'blur(60px)',
            top: '10%',
            left: '15%',
            animation: 'float1 12s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        {/* Circle 3 */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-indigo-400 opacity-25"
          style={{
            filter: 'blur(70px)',
            bottom: '-10%',
            left: '25%',
            animation: 'float3 18s ease-in-out infinite',
            animationDelay: '1.5s'
          }}
        />
        
        {/* Small Circle 4 */}
        <div 
          className="absolute w-40 h-40 rounded-full bg-purple-400 opacity-20"
          style={{
            filter: 'blur(30px)',
            top: '20%',
            right: '30%',
            animation: 'float4 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 pointer-events-none bg-overlay-dark" />
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
          <div className="inline-block px-4 py-2 rounded-full border border-indigo-400 text-sm font-medium">
            Nova Web Browser
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Top section - Main heading */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Developer Experience
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access developer tools and resources in one unified workspace
            </p>
          </div>
          
          {/* Browser Window Component */}
          <div className="bg-background bg-opacity-30 backdrop-blur-lg rounded-lg border border-indigo-900 border-opacity-50 overflow-hidden shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-background bg-opacity-80 border-b border-indigo-900 border-opacity-30 px-4 py-3 flex items-center">
              {/* Window Controls */}
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-70"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full opacity-70"></div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex space-x-3 mr-4">
                <button className="text-gray-400 hover:text-indigo-400">
                  ←
                </button>
                <button className="text-gray-400 hover:text-indigo-400">
                  →
                </button>
                <button className="text-gray-400 hover:text-indigo-400">
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
            <div className="flex border-b border-indigo-900 border-opacity-30 bg-background bg-opacity-50">
              {pages.map((page, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 relative flex items-center ${
                    activePage === index 
                      ? 'text-indigo-400 border-b-2 border-indigo-500' 
                      : 'text-gray-400 hover:text-indigo-300'
                  }`}
                  onClick={() => setActivePage(index)}
                >
                  <span className="mr-2">{page.icon}</span>
                  {page.title}
                </button>
              ))}
            </div>
            
            {/* Simple iFrame Content without security attributes */}
            <div className="h-96 bg-white">
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
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-indigo-900 border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">Distraction-Free Focus</h3>
              <p className="text-gray-400">
                Keep your development flow uninterrupted with seamless integration of web resources.
              </p>
            </div>
            
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-indigo-900 border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">Performance Optimized</h3>
              <p className="text-gray-400">
                Smoothly rendered UI elements and efficient memory usage for a responsive experience.
              </p>
            </div>
            
            <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-indigo-900 border-opacity-30">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">Developer-Centric</h3>
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