'use client';
  
  import { useState, useEffect } from 'react';
  import CarouselItem, { Product } from './CarouselItem';

  
  const SAMPLE_PRODUCTS: Product[] = [
    {
      id: 1,
      title: "Falija",
      price: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      backgroundColor: "#bef008",
      imageUrl: "/images/Transparent/titou-photos-132-removebg-preview.png"
    },
    {
      id: 5,
      title: "Falija",
      price: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      backgroundColor: "#bef008",
      imageUrl: "/images/Transparent/96-removebg-preview.png"
    },
    {
      id: 2,
      title: "Falija",
      price: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      backgroundColor: "#bef008",
      imageUrl: "/images/Transparent/titou-photos-132-removebg-preview.png"
    },
    {
      id: 15,
      title: "3asba",
      price: 20,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      backgroundColor: "#bef008",
      imageUrl: "/images/Transparent/96-removebg-preview.png"
    },
    // Add other products...
  ];
  
  const ProductCarousel = () => {
    const [active, setActive] = useState(1);
    const [other1, setOther1] = useState(0);
    const [other2, setOther2] = useState(2);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
  
    const handleNext = () => {
      setDirection('next');
      setActive(prev => (prev + 1) >= SAMPLE_PRODUCTS.length ? 0 : prev + 1);
      setOther1(prev => prev - 1 < 0 ? SAMPLE_PRODUCTS.length - 1 : prev - 1);
      setOther2(prev => (prev + 1) >= SAMPLE_PRODUCTS.length ? 0 : prev + 1);
    };
  
    const handlePrev = () => {
      setDirection('prev');
      setActive(prev => prev - 1 < 0 ? SAMPLE_PRODUCTS.length - 1 : prev - 1);
      setOther1(prev => (prev + 1) >= SAMPLE_PRODUCTS.length ? 0 : prev + 1);
      setOther2(prev => (other1 + 1) >= SAMPLE_PRODUCTS.length ? 0 : other1 + 1);
    };
  
    useEffect(() => {
      const interval = setInterval(handleNext, 500);
      return () => clearInterval(interval);
    }, [active]);
  
    return (
      <section className={`-mt-20 w-full h-screen overflow-hidden ${direction}`}>
        <div className="h-full relative">
          {SAMPLE_PRODUCTS.map((product, index) => (
            <CarouselItem
              key={product.id}
              product={product}
              className={`
                
                ${index === active ? 'block active' : ''}
                ${index === other1 ? 'block other_1' : ''}
                ${index === other2 ? 'block other_2' : ''}
              `}
            />
          ))}
        </div>
        <div className="absolute bottom-5 right-[750px] grid grid-cols-2 gap-2.5 z-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-transparent border border-white/30 text-white font-mono text-lg font-bold leading-none shadow-lg transition-colors hover:bg-white/30"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-transparent border border-white/30 text-white font-mono text-lg font-bold leading-none shadow-lg transition-colors hover:bg-white/30"
          >
            {">"}
          </button>
        </div>
      </section>
    );
  };
  
  export default ProductCarousel;
  