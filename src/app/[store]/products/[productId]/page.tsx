'use client'
import { useParams } from 'next/navigation';
import ProductOnePage from '@/components/Product';
import { categories } from '../page';


export default function ProductPage() {
  const { productId } = useParams();
  const productIndex = productId ==='brillant' ? 0 :  productId ==='mat' ? 1 :2
  console.log("🚀 ~ ProductPage ~ productId:", productId)
const product  = categories[productIndex]
  console.log("🚀 ~ ProductPage ~ product:", product)
  return <div>
   
    <section className='bg-primary px-2 pt-20 '>
    <ProductOnePage product={product}  />
    </section>
  </div>;
}