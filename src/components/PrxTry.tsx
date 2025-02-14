import {motion} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import {FaArrowRight} from 'react-icons/fa6';
import ColorPicker from '@/components/ColorSelector';
import {useTranslations} from 'next-intl';
import { formatCurrency } from "@/utils/formatCurrency";

type Product = {
  name: string;
  description: string;
  price: number;
  colors: Array<string>;
  images: Array<string>;
};

type ProductCardProps = {
  product: any;
  oneImage?:boolean
};
 const ProductCard: React.FC<ProductCardProps> = ({product,oneImage=false}) => {
  const [selectedColor, setSelectedColor] = useState<any>(product.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);  


  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedColor.images.length
    );
  };
  const t = useTranslations('ProductList');
 
  return (
    <motion.div
      animate={{opacity: 1}}
      className="relative min-w-1/3 max-w-[28rem] rounded-[32px] bg-white p-4 shadow-md hover:shadow-custom"
      initial={{opacity: 0}}
      transition={{duration: 0.3}}
      whileHover={{scale: 1.05}}
    >
      <ImageSlider
        currentImageIndex={currentImageIndex}
        handleNextImage={handleNextImage}
        images={oneImage ?selectedColor.images : selectedColor.images}
      />
      <ColorPicker
        productColors={product.colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <div className="mt-4 w-9/12">
        <p className="font-bold ">{t(`${product.id}`)}</p>
        
        <div className="flex items-center justify-between ">
          <p className="mt-2  font-semibold">
            {/* {product.price} {product.currency} */}
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
      <Link href={`/products/${product.id}`}>
  {!oneImage &&      <div className="absolute bottom-0 right-0 flex h-[60px] min-w-[70px] md:min-w-[75px] items-center justify-center rounded-b-[32px] rounded-l-[24px] border bg-[#FFD500]  ">
          <div className=" cursor-pointer  rounded-full p-2  hover:bg-white   ">
            <FaArrowRight className="" size={24} />
          </div>
        </div>}
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
  images
}) => (
  <div className="relative h-64 w-full overflow-hidden rounded-t-[24px] ">
    <img
      alt="luggage suitcase"
      className="h-full w-full object-cover"
      onClick={images.length > 1 ? handleNextImage : ()=>{}}
    
      src={images[currentImageIndex]}
    />
    {images.length > 1 && (
      <div className="absolute bottom-2 right-2 cursor-pointer rounded-full bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
        Tap to slide
      </div>
    )}
  </div>
);

export default ProductCard;
