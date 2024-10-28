'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useTranslations } from 'next-intl';

type Card = {
  id: number;
  image: string;
  price: string;
  description: string;
  details: string;
};

const cards: Array<Card> = [
  {
    id: 1,
    image: '/images/Transparent/1-removebg-preview.png',
    price: '199.99',
    description: 'Ensemble de 3 valise Shine',
    details: 'Roues démontables Color Brillant'
  },
  {
    id: 2,
    image: '/images/Transparent/2-removebg-preview.png',
    price: '199.99',
    description: 'Ensemble de 3 valise Mat',
    details: 'Roues démontables  Color Mat Pro'
  },
  {
    id: 3,
    image: '/images/Transparent/82-removebg-preview.png',
    price: '199.99',
    description: 'Ensemble de 3 valise Multicolor',
    details: 'Roues démontables Multi Color Pro'
  },
  {
    id: 4,
    image: '/images/Transparent/96-removebg-preview.png',
    price: '199.99',
    description: 'Ensemble de 2 valise',
    details: '28 - 70 mm'
  },
  {
    id: 5,
    image: '/images/Transparent/titou-photos-1-removebg-preview.png',
    price: '199.99',
    description: 'Ensemble de 2 valise',
    details: '28 - 70 mm'
  },
  {
    id: 6,
    image: '/images/Transparent/titou-photos-132-removebg-preview.png',
    price: '199.99',
    description: 'Ensemble de 2 valise',
    details: '28 - 70 mm'
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4); // Default to 4 cards at a time
  const t = useTranslations('StoreLanding');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  // Handle window resize to update visibleCardsCount based on screen size
  useEffect(() => {
    const updateVisibleCardsCount = () => {
      // Check if the screen width is less than 640px (mobile)
      if (window.innerWidth < 640) {
        setVisibleCardsCount(1); // Show 1 card on mobile
      } else {
        setVisibleCardsCount(4); // Show 4 cards on larger screens
      }
    };

    updateVisibleCardsCount(); // Run initially
    window.addEventListener('resize', updateVisibleCardsCount);
    return () => window.removeEventListener('resize', updateVisibleCardsCount);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - visibleCardsCount : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cards.length - visibleCardsCount ? 0 : prev + 1
    );
  };

  const visibleCards = cards.slice(
    currentIndex,
    currentIndex + visibleCardsCount
  );

  const handleInfiniteLoop = (
    cardsToDisplay: Array<Card>,
    totalCards: number
  ) => {
    if (cardsToDisplay.length < visibleCardsCount) {
      return [
        ...cardsToDisplay,
        ...cards.slice(0, visibleCardsCount - cardsToDisplay.length)
      ];
    }
    return cardsToDisplay;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-custom-card bg-[#F0E7D5] pb-4 mb-8">
      <h1 className="px-20 py-10 text-center text-3xl">{t('BestSeller')}</h1>
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="flex w-full gap-x-4 sm:gap-x-10 overflow-hidden px-6 sm:px-6 py-4 sm:py-10"
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          
          {handleInfiniteLoop(visibleCards, cards.length).map((card) => (
            <motion.div
              key={card.id}
              className="w-full sm:w-1/4 flex flex-col items-center"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="rounded-custom-card bg-white p-4 text-left shadow-lg max-h-[200px] min-h-[200px]">
                {loading ? (
                  <div className="mx-auto mb-6 mt-2 h-[200px] w-[200px] animate-pulse bg-gray-200" />
                ) : (
                  <Image
                    alt={card.description}
                    className="mx-auto hover:scale-125 mb-6 -mt-20"
                    height={300}
                    loading="lazy"
                    src={card.image}
                    width={300}
                  />
                )}
              </div>
              <div className="flex flex-col items-center mt-4">
                <div className="-mb-1 font-bold text-2xl">{card.price} $</div>
                <div className="text-sm text-gray-500">{card.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Navigation buttons */}
      <div className="absolute -bottom-3 right-4 flex w-full justify-end gap-x-4 p-4 text-white">
        <button
          className="rounded-full bg-[#d3cdbd8e] p-2 hover:bg-[#b2ac9cad]"
          onClick={prevSlide}
        >
          <GrPrevious size={24} />
        </button>
        <button
          className="rounded-full bg-[#d3cdbd8e] p-2 hover:bg-[#b2ac9cad]"
          onClick={nextSlide}
        >
          <GrNext size={24} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
