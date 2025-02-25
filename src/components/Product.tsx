"use client";

import {motion} from 'framer-motion';
import Image from 'next/image';
import React, {useEffect, useState,useRef} from 'react';
import Counter from '@/components/Counter';
import {useTranslations} from 'next-intl';
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { GiCarWheel } from "react-icons/gi";
import { FaLock } from "react-icons/fa";
import { BsFillLuggageFill } from "react-icons/bs";
import { GiHammerBreak } from "react-icons/gi";
import { GiUnplugged } from "react-icons/gi";
import { useCart } from '@/context/CartContext';  // Use CartContext
import { useSearchParams, useRouter  } from 'next/navigation'; // Added for reading URL params



// ColorSelector Component
const ColorSelector: React.FC<{
  colors: Array<any>;
  selectedColor: any;
  onColorChange(color: any): void;
}> = ({colors, onColorChange, selectedColor}) => {
  const t = useTranslations('Color');
  
  const selectedColorKey = selectedColor.color.replace(/[, ]+/g, '_'); // Replace spaces with underscores

  

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

const ProductImage: React.FC<{ images: string[]; color: string }> = ({
  images,
  color,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const thumbnailsRef = useRef<(HTMLDivElement | null)[]>([]) as any;
  const carouselRef = useRef<HTMLDivElement | null>(null)as any;

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

  useEffect(() => {
    if (thumbnailsRef.current[currentImageIndex]) {
      thumbnailsRef.current[currentImageIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentImageIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Image Container */}
      <div className="relative aspect-[12/10] w-full mb-2">
        <div className="relative w-full h-full rounded-2xl bg-white overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <motion.div
            key={images[currentImageIndex]}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative h-full"
          >
            <Image
              alt={`${color} product image ${currentImageIndex + 1}`}
              className={`h-full w-full object-cover object-center ${
                isLoading ? "hidden" : "block"
              }`}
              fill
              onLoad={handleImageLoad}
              priority
              src={images[currentImageIndex]}
            />
          </motion.div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/75 text-white text-sm px-3 py-1 rounded-full">
          {currentImageIndex + 1}/{images.length}
        </div>
      </div>

      {/* Thumbnails Navigation */}
      <div className="relative px-12">
        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handlePrevImage}
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray"
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
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleNextImage}
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray"
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
        </button>

        {/* Thumbnails Scroll Container */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden"
        >
          <div className=" flex gap-2 overflow-x-hidden snap-x snap-mandatory scrollbar-hide py-2">
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el:any) => (thumbnailsRef.current[index] = el)}
                className={`mx-1 flex-shrink-0 snap-center cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                  currentImageIndex === index
                    ? "ring-2 ring-black/75 ring-offset-2"
                    : "ring-1 ring-gray-200 opacity-65"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <div className="relative w-20 h-20">
                  <Image
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover"
                    fill
                    src={image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const ProductPage: React.FC<{product: any}> = ({product}) => {
  const searchParams = useSearchParams(); // To read URL parameters
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLoading, setIsLoading] = useState(true);
  const { addItemToCart } = useCart();
console.log('productprice', product)

  // ✅ **Track Product View (ViewContent) on Page Load**
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: product.name,
        content_category: "Luggage",
        content_ids: [product.id],
        value: product.price,
        currency: product.currency,
      });
    }
  }, [product]);

const addItemToBasket = async (quantity:any)=>{

  const newItem = {
    ...product,
    selectedColor,
    quantity

  }

  addItemToCart(newItem)

  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "AddToCart", {
      content_name: product.name,
      content_category: "Luggage",
      content_ids: [product.id],
      value: product.price * quantity,
      currency: product.currency,
      quantity: quantity,
    });
  }

}

// ✅ **Handle Checkout Event (Optional)**
const handleCheckout = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Cart Checkout",
      value: product.price,
      currency: product.currency,
    });
  }
  router.push("/checkout");
};

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
            <a className="text-gray-400 whitespace-nowrap truncate" href="#">
              Shop
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
            <a className="text-gray-400 whitespace-nowrap truncate" href="#">
              Luggage Set
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
              <h1 className="font-bold text-2xl">{product.name}</h1>
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

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="font-bold text-3xl">
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
