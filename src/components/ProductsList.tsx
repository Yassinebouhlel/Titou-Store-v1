import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import CardAd from '@/components/AdsCard';
import ColorPicker from '@/components/ColorSelector';
import ColorPicker2 from '@/components/ExpandedColorSelector';
import ProductCard from '@/components/PrxTry';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  isOutOfStock?: boolean;
}

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterSection {
  title: string;
  options: Array<FilterOption>;
}

const FilterSection: React.FC<{
  section: FilterSection;
  availbleColors: Array<any>;
}> = ({availbleColors, section}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      animate={{opacity: 1, y: 0}}
      className="mb-4"
      initial={{opacity: 0, y: -20}}
      transition={{duration: 0.3}}
    >
      <button
        className="mb-2 flex w-full items-center justify-between text-left font-semibold"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {section.title}
        <motion.div animate={{rotate: isExpanded ? 180 : 0}}>
          {/* <ChevronDown size={16} /> */}
        </motion.div>
      </button>
      <motion.ul
        animate={{height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0}}
        className="overflow-hidden"
        transition={{duration: 0.3}}
      >
        <ColorPicker2 productColors={availbleColors} />
      </motion.ul>
    </motion.div>
  );
};

export const SkeletonCard: React.FC = () => (
  <motion.div
    animate={{opacity: 1}}
    className="min-w-full rounded-lg bg-white p-4 shadow-md"
    initial={{opacity: 0}}
    transition={{duration: 0.5}}
  >
    {/* Image Skeleton */}
    <div className="h-64 w-full animate-pulse rounded-lg bg-gray-200" />
    <div className="mt-4 flex space-x-2">
      <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
      <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
      <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
      <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
    </div>
    {/* Product Name Skeleton */}
    <div className="mt-4 space-y-2">
      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
    </div>

    {/* Price Skeleton */}
    <div className="mt-4">
      <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200" />
    </div>

    {/* Color Picker Skeleton */}
  </motion.div>
);
function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return {r, g, b};
}
function getUniqueColorCodes(categories: Array<any>) {
  const colorCodes = new Set();

  categories.forEach((category) => {
    category.colors.forEach((colorObj: any) => {
      colorCodes.add({code: colorObj.code});
    });
  });

  return Array.from(colorCodes);
}
function getOrderedColorsByRgb(categories: Array<any>) {
  const colorCodes = new Set();

  // Extract unique color codes
  categories.forEach((category) => {
    category.colors.forEach((colorObj: any) => {
      colorCodes.add({code: colorObj.code});
    });
  });

  // Convert hex colors to RGB and sort by red, green, blue values
  return Array.from(colorCodes).sort((a: any, b: any) => {
    const rgbA = hexToRgb(a.code);
    const rgbB = hexToRgb(b.code);

    // Sort by red first, then green, then blue
    return rgbA.r - rgbB.r || rgbA.g - rgbB.g || rgbA.b - rgbB.b;
  });
}

const ProductListing: React.FC<{
  products: Array<any>;
  filters: Array<FilterSection>;
}> = ({filters, products}) => {
  const [isLoading, setIsLoading] = useState(true);
  const availbleColors = getOrderedColorsByRgb(products);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={{opacity: 1}}
      className="container mx-auto px-4 py-8 "
      initial={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <motion.h1
        animate={{y: 0, opacity: 1}}
        className="mb-4 font-bold text-2xl"
        initial={{y: -20, opacity: 0}}
        transition={{delay: 0.2, duration: 0.5}}
      />
      <div className="flex flex-col lg:flex-row ">
        <motion.aside
          animate={{x: 0, opacity: 1}}
          className="mb-8 w-full lg:mb-0 lg:mr-8 lg:w-1/4"
          initial={{x: -50, opacity: 0}}
          transition={{delay: 0.3, duration: 0.5}}
        >
          <div className=" rounded-lg p-4 ">
            <h2 className="mb-4 font-semibold">Filtres</h2>
            <div className="mb-4 flex flex-wrap gap-2">
              {['Shine', 'Shine +', 'Multi-Color'].map((duration, index) => (
                <motion.button
                  key={duration}
                  animate={{opacity: 1, y: 0}}
                  className={`rounded-full px-3 py-1 text-sm ${
                    duration === 'Shine'
                      ? 'bg-black font-semibold text-white'
                      : 'bg-white font-semibold text-black'
                  }`}
                  initial={{opacity: 0, y: 20}}
                  transition={{delay: 0.1 * index, duration: 0.3}}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  {duration}
                </motion.button>
              ))}
            </div>
            {filters.map((section, index) => (
              <FilterSection
                key={index}
                availbleColors={availbleColors}
                section={section}
              />
            ))}
          </div>
        </motion.aside>

        <main className="w-full lg:w-3/4">
          <motion.div
            animate={{opacity: 1}}
            className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
            initial={{opacity: 0}}
            transition={{delay: 0.5, duration: 0.5}}
          >
            {isLoading
              ? Array.from({length: 6}).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : products.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default ProductListing;
