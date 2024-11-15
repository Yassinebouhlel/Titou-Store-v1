
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    backgroundColor: string;
    imageUrl: string;
  }
  
  // components/Layout/Header.tsx

  

  
  // components/Carousel/CarouselItem.tsx
  import Image from 'next/image';

  
  interface CarouselItemProps {
    product: Product;
    className?: string;
  }
  
  const CarouselItem = ({ product, className = '' }: CarouselItemProps) => {
    return (
      <article className={`absolute top-0 left-0 w-full h-full ${className}`}>
        <div 
          className="h-full grid grid-cols-[calc(100%-750px)]"
          style={{ backgroundColor: product.backgroundColor }}
        >
          <div className="content pt-40 px-20">
            <h2 className="text-6xl font-aboreto">{product.title}</h2>
            <p className="font-aboreto text-4xl my-5">${product.price}</p>
            <p className="description">
              {product.description}
            </p>
            <button className="mt-5 px-8 py-2.5 bg-[#869f4b] text-white rounded-full font-medium">
              Add To Card
            </button>
          </div>
        </div>
        <figure className="w-[500px] h-full absolute top-0 right-[250px] p-5 flex flex-col justify-end items-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={450}
            height={450}
            className="w-[90%] mb-5 filter drop-shadow-[0_150px_50px_rgba(158,12,12,0.33)]"
          />
          <figcaption className="font-aboreto font-bold text-xl text-right mb-8 w-[70%]">
            {product.title}
          </figcaption>
        </figure>
      </article>
    );
  };
  
  export default CarouselItem;
  

