'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SliderItem {
  id: number;
  image: string;
  title: string;
  description1: string;
  description2: string;
}

const sliderData: SliderItem[] = [
  {
    id: 1,
    image: '/images/slider/1.jpg',
    title: 'SLIDER IMAGE BASI',
    description1: 'Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.',
    description2: 'Ex irure minim eiusmod tempor cillum consectetur ullamco.'
  },
  {
    id: 2,
    image: '/images/slider/2.jpg',
    title: 'SLIDER IMAGE MAGIC',
    description1: 'Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.',
    description2: 'Ex irure minim eiusmod tempor cillum consectetur ullamco.'
  },
  {
    id: 3,
    image: '/images/slider/3.jpg',
    title: 'SLIDER IMAGE ANIS',
    description1: 'Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.',
    description2: 'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
  }
];

export default function SliderComponent() {
  const [active, setActive] = useState(0);
  const [diameter, setDiameter] = useState('1432px');
 const [isModelLoaded, setIsModelLoaded] = useState(false);
  const calculateDiameter = useCallback(() => {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      const widthSlider = slider.offsetWidth;
      const heightSlider = slider.offsetHeight;
      const calcDiameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
      setDiameter(`${calcDiameter}px`);
    }
  }, []);

  const setSlider = useCallback((newActive: number) => {
    let finalActive = newActive;
    if (finalActive > sliderData.length - 1) finalActive = 0;
    if (finalActive < 0) finalActive = sliderData.length - 1;
    setActive(finalActive);
  }, []);

  useEffect(() => {
    calculateDiameter();
    const resizeHandler = () => calculateDiameter();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [calculateDiameter]);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setSlider(active + 1);
    }, 3500);

    return () => clearInterval(autoSlideInterval);
  }, [active, setSlider]);

  return (
    <section 
      className="slider relative w-screen h-screen overflow-hidden -mt-[70px] text-[#eee]"
      style={{ 
        '--diameter': diameter 
      } as React.CSSProperties}
    >
      <div className="list relative w-full h-full">
        {sliderData.map((item, index) => (
          <div 
            key={item.id} 
            className={`item absolute inset-0 flex justify-center items-center transition-all duration-1000 
              ${active === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <div 
              className={`image flex-shrink-0 w-[var(--diameter)] h-[var(--diameter)] 
                bg-cover bg-center rounded-full relative transition-all duration-1000 
                ${active === index ? 'blur-0 rotate-0' : 'blur-[30px] -rotate-[60deg]'}`}
              style={{ 
                backgroundImage: `url('${item.image}')`,
                backgroundSize: `var(--diameter) var(--diameter)` 
              }}
            >
              {/* Image overlay divs can be added here if needed */}
            </div>
            
            <div className="content absolute top-[20%] left-1/2 -translate-x-1/2 
              max-w-full text-left grid grid-cols-[repeat(2,_400px)] gap-[80px] 
              text-[1.2em] uppercase font-poppins text-shadow-[0_0_80px_#000]">
              <h2 className={`text-[10em] font-bebas leading-[0.9em] transition-transform duration-1000
                ${active === index ? 'translate-y-0' : '-translate-y-full'}`}>
                {item.title}
              </h2>
              <p>{item.description1}</p>
              <p className="flex justify-start items-end pb-[25px]">{item.description2}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Model Image */}
      <div 
        className={`absolute bottom-0 w-[min(1000px,_100vw)] h-full left-1/2 
          -translate-x-1/2 bg-cover bg-top pointer-events-none 
          ${isModelLoaded ? 'animate-showModel' : 'scale-[1.3] translate-y-[88px]'}`}
      >
        <Image 
          src="/images/slider/model.png" 
          alt="Model" 
          fill
          priority
          className="object-cover object-top"
          onLoadingComplete={() => setIsModelLoaded(true)}
        />
      </div>
      <div className="arrows absolute left-1/2 -translate-x-1/2 bottom-[30px] 
        w-[var(--width-default)] flex justify-between">
        <button 
          className={`unset cursor-pointer 
            ${active === 0 ? 'opacity-0 pointer-events-none' : ''}`} 
          onClick={() => setSlider(active - 1)}
        >
          <svg 
            className="w-6 h-6 text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
        <button 
          className={`unset cursor-pointer 
            ${active === sliderData.length - 1 ? 'opacity-0 pointer-events-none' : ''}`} 
          onClick={() => setSlider(active + 1)}
        >
          <svg 
            className="w-6 h-6 text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}