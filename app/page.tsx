"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Presentation from './Presentation';
import SlideConcepto from './slides/SlideConcepto';
import SlideEvolucion from './slides/SlideEvolucion';
import SlideParTrenzado from './slides/SlideParTrenzado';
import SlideFibraOptica from './slides/SlideFibraOptica';
import SlideCoaxial from './slides/SlideCoaxial';
import SlideCablesEspeciales from './slides/SlideCablesEspeciales';
import SlideConectoresYCables from './slides/SlideConectoresYCables';
import SlideCableadoEstructurado from './slides/SlideCableadoEstructurado';
import SlideMicroondas from './slides/SlideMicroondas';
import SlideSeñalesRF from './slides/SlideSeñalesRF';
import SlideComparativa from './slides/SlideComparativa';
import Slode from './slode';
import Window from './window';
import SlideBibliografia from './slides/SlideBibliografia';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ParentComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const totalSlides = 15;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (containerRef.current) {
          const scrollPosition = containerRef.current.scrollTop;
          const windowHeight = window.innerHeight;
          const slide = Math.round(scrollPosition / windowHeight);
          setCurrentSlide(Math.max(0, Math.min(slide, totalSlides - 1)));
        }
      }, 100);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutId);
      };
    }
  }, [totalSlides]);

  const scrollToSlide = (index: number) => {
    if (isScrollingRef.current) return;
    
    isScrollingRef.current = true;
    const targetIndex = Math.max(0, Math.min(index, totalSlides - 1));
    
    if (containerRef.current) {
      const windowHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: targetIndex * windowHeight,
        behavior: 'smooth'
      });
    }
    
    setTimeout(() => {
      isScrollingRef.current = false;
      setCurrentSlide(targetIndex);
    }, 400);
  };

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, nextSlide, prevSlide]);

  const slides = [
    { id: 0, title: "Portada" },
    { id: 1, title: "Concepto" },
    { id: 2, title: "Evolución" },
    { id: 3, title: "Par Trenzado" },
    { id: 4, title: "Fibra Óptica" },
    { id: 5, title: "Coaxial" },
    { id: 6, title: "Heliax/Waveguide" },
    { id: 7, title: "RG-8/RJ45/RJ11" },
    { id: 8, title: "Cableado" },
    { id: 9, title: "Microondas" },
    { id: 10, title: "Señales RF" },
    { id: 11, title: "Comparativa" },
    { id: 12, title: "No guiados" },
    { id: 13, title: "Conclusiones" },
    { id: 14, title: "Bibliografía" }
  ];

  return (
    <>
      <div ref={containerRef} className="presentation-container">
        <div id="slide-0" className="presentation-slide">
          <Presentation/>
        </div>
        <div id="slide-1" className="presentation-slide">
          <SlideConcepto/>
        </div>
        <div id="slide-2" className="presentation-slide">
          <SlideEvolucion/>
        </div>
        <div id="slide-3" className="presentation-slide">
          <SlideParTrenzado/>
        </div>
        <div id="slide-4" className="presentation-slide">
          <SlideFibraOptica/>
        </div>
        <div id="slide-5" className="presentation-slide">
          <SlideCoaxial/>
        </div>
        <div id="slide-6" className="presentation-slide">
          <SlideCablesEspeciales/>
        </div>
        <div id="slide-7" className="presentation-slide">
          <SlideConectoresYCables/>
        </div>
        <div id="slide-8" className="presentation-slide">
          <SlideCableadoEstructurado/>
        </div>
        <div id="slide-9" className="presentation-slide">
          <SlideMicroondas/>
        </div>
        <div id="slide-10" className="presentation-slide">
          <SlideSeñalesRF/>
        </div>
        <div id="slide-11" className="presentation-slide">
          <SlideComparativa/>
        </div>
        <div id="slide-12" className="presentation-slide">
          <Slode/>
        </div>
        <div id="slide-13" className="presentation-slide">
          <Window/>
        </div>
        <div id="slide-14" className="presentation-slide">
          <SlideBibliografia/>
        </div>
      </div>

      {/* Navegación flotante mejorada */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 flex flex-col gap-2">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="group relative"
              aria-label={`Ir a slide ${slide.title}`}
            >
              <div className={`rounded-full transition-all duration-300 ${
                currentSlide === slide.id 
                  ? 'bg-blue-600 w-3 h-3 scale-125' 
                  : 'bg-gray-300 w-2 h-2 hover:bg-blue-400 hover:scale-110'
              }`} />
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Botones de navegación arriba/abajo */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full bg-white shadow-lg transition-all ${
            currentSlide === 0 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-blue-50 hover:shadow-xl'
          }`}
          aria-label="Slide anterior"
        >
          <ChevronUp size={24} className="text-blue-600" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 rounded-full bg-white shadow-lg transition-all ${
            currentSlide === totalSlides - 1 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-blue-50 hover:shadow-xl'
          }`}
          aria-label="Siguiente slide"
        >
          <ChevronDown size={24} className="text-blue-600" />
        </button>
      </div>

      {/* Indicador de slide actual */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white px-6 py-3 rounded-full shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">
            {currentSlide + 1} / {totalSlides}
          </span>
          <span className="text-xs text-gray-500">
            {slides[currentSlide].title}
          </span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </>
  );
};

export default ParentComponent;
