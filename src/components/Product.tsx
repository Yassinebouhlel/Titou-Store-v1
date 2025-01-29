import {motion} from 'framer-motion';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import Counter from '@/components/Counter';
import {useTranslations} from 'next-intl';
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { FaLock } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { GiHammerBreak } from "react-icons/gi";
import { GiUnplugged } from "react-icons/gi";
import { useCart } from '@/context/CartContext';  // Use CartContext
import { useSearchParams } from 'next/navigation'; // Added for reading URL params



// ColorSelector Component
const ColorSelector: React.FC<{
  colors: Array<any>;
  selectedColor: any;
  onColorChange(color: any): void;
}> = ({colors, onColorChange, selectedColor}) => {
  const t = useTranslations('Color');
  
  const selectedColorKey = selectedColor.color.replace(/ /g, "_"); // Replace spaces with underscores
  

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-900">
        {t('ColorLabel')}: {selectedColor ? t(`${selectedColorKey}`) : t('colorNoneSelected')}
      </h3>
      <div className="mt-2 flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.color}
            aria-label={color.color}
            className={`h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedColor.color === color.color ? 'ring-2 ring-indigo-500' : ''
            }`}
            onClick={() => onColorChange(color)}
            style={{
              background:
                color.code.length > 1
                  ? `linear-gradient(to right, ${color.code[0]} 50%, ${color.code[1]} 50%)`
                  : color.code[0],
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ProductImage Component
const ProductImage: React.FC<{
  images: Array<string>;
  color: string;
}> = ({ color, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [color]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
 

  

  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-3xl bg-white">
        {isLoading && <div className="h-96 w-full animate-pulse bg-gray-200" />}
        <motion.div
          key={images[currentImageIndex]}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt={`${color} product image`}
            className={`h-full w-full object-cover object-center ${
              isLoading ? 'hidden' : 'block'
            }`}
            height={500}
            onLoad={handleImageLoad}
            priority
            src={images[currentImageIndex]}
            width={500}
          />
        </motion.div>

        {/* Custom Left and Right Navigation Buttons */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNextImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            aria-label={`View image ${index + 1}`}
            className={`mx-2 h-3 w-3 rounded-full ${
              currentImageIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductPage: React.FC<{product: any}> = ({product}) => {
  const searchParams = useSearchParams(); // To read URL parameters
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLoading, setIsLoading] = useState(true);
  const { addItemToCart } = useCart();

const addItemToBasket = async (quantity:any)=>{

  const newItem = {
    ...product,
    selectedColor,
    quantity

  }
  addItemToCart(newItem)

}

   // New function to handle color change with URL update
  // Function to handle color changes
  const handleColorChange = (color: any) => {
    setSelectedColor(color);

    // Update URL with the new color parameter
    const params = new URLSearchParams(searchParams);
    params.set('color', color.color.replace(/ /g, '-').toLowerCase());
    //router.push(`?${params.toString()}`, { scroll: false });
  };

  // Effect to handle initial color from URL
  useEffect(() => {
    const colorFromUrl = searchParams.get('color'); // Get `color` from URL

    if (colorFromUrl) {
      const matchedColor = product.colors.find(
        (color: any) => color.color.replace(/ /g, '_').toLowerCase() === colorFromUrl
      );
      setSelectedColor(matchedColor || product.colors[0]); // Fallback if no match

    } else {

      setSelectedColor(product.colors[0]); // Default to first color
    }
  }, [searchParams, product.colors]);
      

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };
  const t = useTranslations('Product');
  const p = useTranslations('ProductList');
  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <nav className="mb-4 text-sm">
        <ol className="inline-flex list-none p-0">
          <li className="flex items-center">
            <a className="text-gray-400" href="#">
              Boutique
            </a>
            <svg
              className="mx-3 h-3 w-3 fill-current"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li className="flex items-center">
            <a className="text-gray-400" href="#">
              Set de 3
            </a>
            <svg
              className="mx-3 h-3 w-3 fill-current"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <a aria-current="page" className="text-gray-700" href="#">
              {product.name}
            </a>
          </li>
        </ol>
      </nav>

      <motion.div
        animate={{opacity: 1, y: 0}}
        className="flex flex-col gap-8 md:flex-row"
        initial={{opacity: 0, y: 20}}
        transition={{duration: 0.5}}
      >
        <div className="md:w-1/2">
          <ProductImage
            color={selectedColor.color}
            images={selectedColor.images}
          />
        </div>

        <div className="md:w-1/2">
          {isLoading && (
            <div className="space-y-4">
              <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-32 w-full animate-pulse rounded bg-gray-200" />
            </div>
          )}

          {!isLoading && (
            <>
              <h1 className="font-bold text-2xl">{p(`${product.id}`)}</h1>
              <div className="mt-0.5 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 fill-current ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{product.rating} / 50</span>
                <span className="ml-2 text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
              <p className="mt-2 text-gray-600">{p(`${product.subtitle}`)}</p>

              <p className="mt-4 font-bold text-3xl">
                {product.price} {product.currency}{' '}
              </p>
              <p className="text-sm text-gray-500">
                {product.additionalInfo.care}
              </p>

              <ColorSelector
                colors={product.colors}
                onColorChange={handleColorChange}
                selectedColor={selectedColor}
              />
              <Counter addItemToBasket={addItemToBasket} />
              <h3 className="mt-4 text-[18px] font-bold leading-[130%] font-sans">Features:</h3>
                  <ul className="w-full max-w-2xl mx-auto space-y-4">
                    {[
                      { Icon: GiCarWheel, description: t('Description2') },
                      { Icon: FaLock, description: t('Description3') },
                      { Icon: PiAirplaneInFlightFill, description: t('Description4') },
                      { Icon: BsFillLuggageFill, description: t('Description5') },
                      { Icon: GiHammerBreak, description: t('Description6') },
                      { Icon: GiUnplugged, description: t('Description7') },
                    ].map(({ Icon, description }, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 p-2 bg-[#f0e7d5] rounded-md shadow-sm"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#ffd500] rounded-full">
                          <Icon className="text-black w-6 h-6" />
                        </div>
                        <span className="text-black-700 text-sm">{description}</span>
                      </li>
                    ))}
                  </ul>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
