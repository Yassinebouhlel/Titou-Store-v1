"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
  AnimatePresence,
} from "framer-motion";
import { SkeletonCard } from "./ProductsList";
import { showCaseData } from "@/constant/config";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useShopifyData } from "@/hooks/useShopifyData";
import { transformShopifyData } from '@/utils/transformShopifyData';

type Product = {
  name: string;
  description: string;
  price: number;
  colors: Array<string>;
  images: Array<string>;
};

type ProductCardProps = {
  product: any;
  oneImage?: boolean;
};

function ColorPicker({ productColors, selectedColor, setSelectedColor }: any) {
  const [showAllColors, setShowAllColors] = useState(false);
  const dotsContainerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const dotVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const colorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const buttonVariantsClose = {
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.95,
    },
  };

  const dotVariantsClose = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  // Function to apply background style based on the number of colors
  const getBackgroundStyle = (codes: string[]) => {
    if (codes.length > 1) {
      return {
        background: `linear-gradient(45deg, ${codes[0]} 50%, ${codes[1]} 50%)`,
      };
    }
    return { backgroundColor: codes[0] };
  };

  return (
    <div className=" my-2 flex flex-wrap gap-4">
      {/* Display initial color buttons */}
      {productColors.slice(0, 7).map((color: any) => (
        <motion.button
          key={color.code}
          className={"h-4 w-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"+`${color.code === selectedColor.code && "ring-offset-2 ring-2 outline-none  " }`}
          onClick={() => setSelectedColor(color)}
          style={getBackgroundStyle(color.code)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        />
      ))}

      {productColors.length > 3 && (
        <div className="relative">
          {!showAllColors ? (
            <motion.button
              className="flex h-4  w-4 items-center justify-center rounded-full bg-white "
              onClick={() => setShowAllColors(true)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            ></motion.button>
          ) : (
            <motion.button
              className="flex h-4  w-4 items-center justify-center rounded-full bg-white "
              onClick={() => setShowAllColors(false)}
              variants={buttonVariantsClose}
              whileHover="hover"
              whileTap="tap"
            ></motion.button>
          )}

          {/* Absolute positioned dropdown for additional colors */}
          <AnimatePresence>
            {showAllColors && (
              <motion.div
                animate="visible"
                className="absolute -right-1 top-4 flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg"
                exit="hidden"
                initial="hidden"
                variants={containerVariants}
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
const ProductCard: React.FC<ProductCardProps & { initialImageIndex?: number }> = ({
  product,
  oneImage = false,
  initialImageIndex = 0, // Default to first image
}) => {
  const [selectedColor, setSelectedColor] = useState<any>(product.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const arrayOfImgs = [];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedColor.images.length
    );
  };
  const t = useTranslations("ProductList");

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="relative  max-w-sm rounded-[32px] bg-white p-4 shadow-md hover:shadow-custom"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={`/products/${product.id}`}>
        <ImageSlider
          currentImageIndex={currentImageIndex}
          handleNextImage={handleNextImage}
          images={oneImage ? selectedColor.images : selectedColor.images}
        />
        {/* <ColorPicker
          productColors={product.colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        /> */}
        <div className="mt-4 w-full">
          <p className="font-bold ">{t(`${product.id}`)}</p>

          <div className="flex items-center justify-center ">
            <p className="mt-2 text-center  font-semibold">
            {parseFloat(product.originalPrice.replace(/[^0-9.]/g, '')) > 0 ? (
                    <>
                      <span className="line-through text-gray-500 text-xl mr-2"> {/* Smaller font size for original price */}
                        {product.originalPrice} {product.currency}
                      </span>
                      <span>
                        {product.price} {product.currency}
                      </span>
                    </>
                  ) : (
                    <span>
                      {product.price} {product.currency}
                    </span>
            )}  
            </p>
            {parseFloat(product.originalPrice.replace(/[^0-9.]/g, ''))> 0 && (
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded self-start sm:self-auto"> {/* Sale label */}
                    Sale
                  </span>
            )}
          </div>
        </div>

        {!oneImage && (
          <div className="absolute bottom-0 right-0 flex h-[60px] min-w-[75px] items-center justify-center rounded-b-[32px] rounded-l-[24px] border bg-[#FFD500]  ">
            <div className=" cursor-pointer  rounded-full p-2  hover:bg-white   ">
              <FaArrowRight className="" size={24} />
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
};

type ImageSliderProps = {
  images: Array<string>;
  currentImageIndex: number;
  handleNextImage(): void;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  currentImageIndex,
  handleNextImage,
  images,
}) => (
  <div className="relative h-64  md:w-full overflow-hidden rounded-t-[24px] ">
    <img
      alt="lugaage Product"
      className="h-full w-full object-cover"
      src={images[currentImageIndex]}
    />

  </div>
);

interface TransformedProduct {
  id: string;
  name: string;
  colors: any[];
  subtitle: string;
  price: string;
  originalPrice: string;
  currency: string;
  rating: number;
  sizes: string[]; // Change from `never[]` to a valid array type
  reviews: number;
  additionalInfo: {
    care: string;
    paymentNote: string;
  };
}

export default function ProductCarousel() {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const baseVelocity = useTransform(x, [0, 100], [0, 0.2]);
  const [products, setProducts] = useState<TransformedProduct[]>([]);
  const selectedCountry = getSelectedStore() || "TN";
  const { shopifyData, loading, error } = useShopifyData(selectedCountry);

  function getSelectedStore() {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith("selectedStore="));
    return match ? match.split("=")[1] : null;
  }

  useEffect(() => {
    
    if (shopifyData) {
          const transformedProducts = shopifyData.map(item =>
            transformShopifyData(item.products.edges)
          );
      
          setProducts(transformedProducts);
        }
    // setProducts(showCaseData[selectedCountry].categories);
  }, [shopifyData]);

  const animateToPosition = (velocity: number = 0) => {
    const container = containerRef.current
    if (!container) return

    const containerWidth = container.offsetWidth
    const contentWidth = container.scrollWidth
    const maxScroll = -(contentWidth - containerWidth)

    let newX = x.get() + velocity
    newX = Math.max(maxScroll, Math.min(0, newX))

    animate(x, newX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
    })
  }
  const handleNext = () => {
    const container = containerRef.current
    if (!container) return
    const containerWidth = container.offsetWidth
    animateToPosition(-containerWidth)
  }

  const handlePrev = () => {
    const container = containerRef.current
    if (!container) return
    const containerWidth = container.offsetWidth
    animateToPosition(containerWidth)
  }
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (event: Event, info: PanInfo) => {
    setIsDragging(false);
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;
    const maxScroll = -(contentWidth - containerWidth);

    let newX = x.get() + info.velocity.x * 50;
    newX = Math.max(maxScroll, Math.min(0, newX));

    animate(x, newX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
    });
  };

  return (
    <div className="w-full overflow-hidden px-4 pt-8 pb-16 relative">
      <motion.div
        ref={containerRef}
        className="flex space-x-6"
        style={{ x }}
        drag="x"
        dragConstraints={{ right: 0, left: -1000 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <main className="flex space-x-6">
          {products.length === 0
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <SkeletonCard />
                </div>
              ))
            : products.flatMap((product, productIndex) =>
                product.colors.slice(0, 2).map((color, colorIndex) => (
                  <motion.div
                    key={`${product.id}-${color.name}`}
                    className={`flex-shrink-0 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                  >
                    <ProductCard
                      product={{ ...product, colors: [color] }} // Pass only one color at a time
                      oneImage={true}
                      initialImageIndex={1} 
                    />
                  </motion.div>
                ))
              )}
        </main>
      </motion.div>
       <div className="absolute -bottom-0 right-4 flex w-full justify-end gap-x-4 p-4 text-white">
              <button
                className="rounded-full bg-[#d3cdbd8e] p-2 hover:bg-[#b2ac9cad]"
                onClick={handlePrev}
              >
                <GrPrevious size={24} />
              </button>
              <button
                className="rounded-full bg-[#d3cdbd8e] p-2 hover:bg-[#b2ac9cad]"
                onClick={handleNext}
              >
                <GrNext size={24} />
              </button>
            </div>
    </div>
  );
}
