"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useTranslations } from "next-intl";
import { data } from "@/constant/config";
type Card = {
  id: string;
  idCategory: string;
  image: string;
  price: string;
  description: string;
  details?: string;
};
function Carousel() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStore, setSelectedStore] = useState("TN");
  const [loading, setLoading] = useState(true);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);
  const t = useTranslations("StoreLanding");
  const p = useTranslations("ProductList");

  // Memoize the cards array to prevent recreating on every render
  const cards = useMemo(
    () => [
      {
        id: data[selectedStore].categories[0].colors[0].idColor,
        idCategory: data[selectedStore].categories[0].id,
        image: data[selectedStore].categories[0].colors[0].transparent,
        price: data[selectedStore].categories[0].price,
        description: p(data[selectedStore].categories[0].id),
      },
      {
        id: data[selectedStore].categories[1].colors[8].idColor,
        idCategory: data[selectedStore].categories[1].id,
        image: data[selectedStore].categories[1].colors[8].transparent,
        price: data[selectedStore].categories[1].price,
        description: p(data[selectedStore].categories[1].id),
      },
      {
        id: data[selectedStore].categories[1].colors[0].idColor,
        idCategory: data[selectedStore].categories[1].id,
        image: data[selectedStore].categories[1].colors[0].transparent,
        price: data[selectedStore].categories[1].price,
        description: p(data[selectedStore].categories[1].id),
      },
      {
        id: data[selectedStore].categories[1].colors[4].idColor,
        idCategory: data[selectedStore].categories[1].id,
        image: data[selectedStore].categories[1].colors[4].transparent,
        price: data[selectedStore].categories[1].price,
        description: p(data[selectedStore].categories[1].id),
      },
      {
        id: data[selectedStore].categories[0].colors[4].idColor,
        idCategory: data[selectedStore].categories[0].id,
        image: data[selectedStore].categories[0].colors[4].transparent,
        price: data[selectedStore].categories[0].price,
        description: p(data[selectedStore].categories[0].id),
      },
      {
        id: data[selectedStore].categories[2].colors[11].idColor,
        idCategory: data[selectedStore].categories[2].id,
        image: data[selectedStore].categories[2].colors[11].transparent,
        price: data[selectedStore].categories[2].price,
        description: p(data[selectedStore].categories[2].id),
      },
    ],
    [data, selectedStore, p]
  );
  useEffect(() => {
    if (document && document.cookie) {
      let store =
        document?.cookie
          .split("; ")
          .find((row) => row.startsWith("selectedStore="))
          ?.split("=")[1] || "TN";
      setSelectedStore(store);
    }
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const updateVisibleCardsCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCardsCount(1);
      } else {
        setVisibleCardsCount(4);
      }
    };
    updateVisibleCardsCount();
    window.addEventListener("resize", updateVisibleCardsCount);
    return () => window.removeEventListener("resize", updateVisibleCardsCount);
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
  const handleProductClick = (colorId: string, idCategory: string) => {
    const sanitizedColorId = encodeURIComponent(
      colorId.trim().replace(/\s+/g, "-").toLowerCase()
    );
    const url = `/${selectedStore}/products/${idCategory}?color=${sanitizedColorId}`;
    router.push(url);
  };
  const visibleCards = cards.slice(
    currentIndex,
    currentIndex + visibleCardsCount
  );
  const handleInfiniteLoop = (cardsToDisplay: Array<Card>) => {
    if (cardsToDisplay.length < visibleCardsCount) {
      const remainingCount = visibleCardsCount - cardsToDisplay.length;
      return [...cardsToDisplay, ...cards.slice(0, remainingCount)];
    }
    return cardsToDisplay;
  };
  return (
    <div className="relative w-full overflow-hidden rounded-custom-card bg-[#F0E7D5] pb-4 mb-8">
      <h1 className="px-20 py-10 text-center text-3xl">{t("BestSeller")}</h1>
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="flex w-full gap-x-4 sm:gap-x-10 overflow-hidden px-6 sm:px-6 py-4 sm:py-10"
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {handleInfiniteLoop(visibleCards).map((card) => (
            <motion.div
              key={`${card.id}-${currentIndex}`}
              className="w-full sm:w-1/4 flex flex-col items-center transform transition-transform "
              onClick={() => handleProductClick(card.id, card.idCategory)}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ cursor: "pointer" }}
            >
              <div className="rounded-custom-card bg-white p-4 text-left shadow-lg max-h-[200px] min-h-[200px] w-full hover:shadow-2xl hover:scale-102">
                {loading ? (
                  <div className="mx-auto mb-6 mt-2 h-[200px] w-[200px] animate-pulse bg-gray-200" />
                ) : (
                  <Image
                    alt={card.description}
                    className="mx-auto hover:scale-110  -mt-12 md:mb-8 md:-mt-20"
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
