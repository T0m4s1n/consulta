"use client";

import React, { useEffect, useRef } from 'react';

const CleanCodePlatform = () => {
  const hasAnimatedRef = useRef(false);
  
  // Animation effect when component mounts
  useEffect(() => {
    // Prevent animation from running twice in development due to StrictMode
    if (hasAnimatedRef.current) return;
    
    // Animate elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, 300 * index);
    });
    
    hasAnimatedRef.current = true;
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-white to-purple-50 font-sans overflow-hidden">
      {/* Animated Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient blob with floating animation */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 opacity-40"
          style={{
            filter: 'blur(100px)',
            bottom: '-10%',
            right: '-5%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        
        {/* Secondary gradient blob with floating animation */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-300 to-indigo-200 opacity-30"
          style={{
            filter: 'blur(80px)',
            top: '20%',
            right: '10%',
            animation: 'floatReverse 10s ease-in-out infinite',
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header with tagline */}
        <div className="text-center mb-20 fade-in opacity-0 transition-opacity duration-1000">
          <div className="text-sm font-semibold text-purple-800 tracking-widest uppercase mb-3">
            DEVELOPERS. ENTERPRISES.
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 transition-transform duration-700 hover:scale-105">
            Clean code for all
          </h1>
        </div>
        
        {/* Two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Left column - For Developers */}
          <div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-purple-500 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-purple-700">
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-purple-700 tracking-wider uppercase">
                FOR DEVELOPERS
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Spending too much time fixing the fix?
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Take control of your code with a solution that delivers real-time insights directly into your agile workflow at the most useful points. Sonar delivers the developer tools and intelligence for clean, quality code, with fewer fix-commits required.
            </p>
            
            <a href="#" className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors group">
              View developer solutions
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          {/* Right column - For Enterprise */}
          <div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-purple-500 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-purple-700">
                  <path fill="currentColor" d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-purple-700 tracking-wider uppercase">
                FOR ENTERPRISE
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need to mitigate risk and maximize resiliency?
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Minimize risk across your enterprise with the Sonar tool kit. A clean, stable code environment lays the foundation for attracting top developer talent and keeps data safer from breaches and costly remediation cycles.
            </p>
            
            <a href="#" className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors group">
              View enterprise solutions
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="text-center fade-in opacity-0 transition-all duration-700">
          <h2 className="text-sm font-bold text-purple-800 tracking-widest uppercase animate-pulse">
            OUR UNIQUE APPROACH
          </h2>
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
        
        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default CleanCodePlatform;