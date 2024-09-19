import {motion} from 'framer-motion';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import Counter from '@/components/Counter';

// ColorSelector Component
const ColorSelector: React.FC<{
  colors: Array<any>;
  selectedColor: any;
  onColorChange(color: any): void;
}> = ({colors, onColorChange, selectedColor}) => {
  console.log('🚀 ~ selectedColor:', selectedColor);
  console.log('🚀 ~ colors:', colors);

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-900">Color</h3>
      <div className="mt-2 flex space-x-3">
        {colors.map((color) => (
          <button
            key={color.color}
            aria-label={color.color}
            className={`h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedColor.color === color.color
                ? 'ring-2 ring-indigo-500'
                : ''
            }`}
            onClick={() => onColorChange(color)}
            style={{backgroundColor: color.code}}
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
}> = ({color, images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    console.log('com');
    setIsLoading(false);
  };
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [color]);
  return (
    <div className="relative w-full ">
      <div className="w-full overflow-hidden rounded-3xl bg-white">
        {isLoading && <div className="h-96 w-full animate-pulse bg-gray-200" />}
        <motion.div
          key={images[currentImageIndex]}
          animate={{opacity: 1, scale: 1}}
          className=""
          exit={{opacity: 0, scale: 0.95}}
          initial={{opacity: 0, scale: 0.95}}
          transition={{duration: 0.5}}
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
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  console.log('🚀 ~ selectedColor:', selectedColor);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
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
                <span className="ml-2 text-gray-600">{product.rating} / 5</span>
                <span className="ml-2 text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
              <p className="mt-2 text-gray-600">{product.subtitle}</p>

              <p className="mt-4 font-bold text-3xl">
                {product.price} {product.currency}{' '}
              </p>
              <p className="text-sm text-gray-500">
                {product.additionalInfo.care}
              </p>

              <ColorSelector
                colors={product.colors}
                onColorChange={setSelectedColor}
                selectedColor={selectedColor}
              />
              <Counter />

              <div className="mt-8 flex w-full items-center justify-center">
                <button className="mt-4 w-1/2 rounded-3xl bg-[#FFD500] px-4 py-2 font-bold  text-xl text-black hover:bg-black hover:text-white">
                  Ajouter au panier
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
