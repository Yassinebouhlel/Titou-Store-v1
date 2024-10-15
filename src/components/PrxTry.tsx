import {motion} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import {FaArrowRight} from 'react-icons/fa6';
import ColorPicker from '@/components/ColorSelector';
import {useTranslations} from 'next-intl';

type Product = {
  name: string;
  description: string;
  price: number;
  colors: Array<string>;
  images: Array<string>;
};

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const [selectedColor, setSelectedColor] = useState<any>(product.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const arrayOfImgs = [];


  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedColor.images.length
    );
  };
  const t = useTranslations('ProductList');
  {console.log("🚀 ~ product.colors:", product.colors)}
  return (
    <motion.div
      animate={{opacity: 1}}
      className="relative max-w-xs rounded-[32px] bg-white p-4 shadow-md hover:shadow-custom"
      initial={{opacity: 0}}
      transition={{duration: 0.3}}
      whileHover={{scale: 1.05}}
    >
      <ImageSlider
        currentImageIndex={currentImageIndex}
        handleNextImage={handleNextImage}
        images={selectedColor.images}
      />
      <ColorPicker
        productColors={product.colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <div className="mt-4 w-full">
        <h2 className="font-bold text-lg">{t(`${product.id}`)}</h2>
        
        <div className="flex items-center justify-between ">
          <p className="mt-2 text-lg font-semibold">${product.price}</p>
        </div>
      </div>
      <Link href={`/products/${product.id}`}>
        <div className="absolute bottom-0 right-0 flex h-[60px] min-w-[75px] items-center justify-center rounded-b-[32px] rounded-l-[24px] border bg-[#FFD500]  ">
          <div className=" cursor-pointer  rounded-full p-2  hover:bg-white   ">
            <FaArrowRight className="" size={24} />
          </div>
        </div>
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
      alt="Product"
      className="h-full w-full object-cover"
      onClick={handleNextImage}
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
