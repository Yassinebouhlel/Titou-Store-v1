'use client';

import { useState, useEffect } from 'react';
import ProductListing from '@/components/ProductsList';
import {data} from '@/constant/config';
import { useShopifyData } from "@/hooks/useShopifyData"; // Import the custom hook
import { transformShopifyData } from '@/utils/transformShopifyData';
import { getSelectedStore } from '@/utils/selectedStore';




const filters = [
  {
    title: 'Couleurs',
    options: [
      {id: 'apple', label: 'Lorem', count: 24},
      {id: 'samsung', label: 'Ipsuim', count: 13},
      {id: 'xyz', label: 'Dolran', count: 12}
      // ... more options
    ]
  }
  // ... more filter sections
];
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

export default function ProductPage() {
  const [products, setProducts] = useState<TransformedProduct[]>([]);
  const selectedCountry = getSelectedStore() || "TN";
  const { shopifyData, loading, error } = useShopifyData(selectedCountry);
  console.log("🚀 ~ ProductPage ~ shopifyData:", shopifyData)
  console.log("🚀 ~ ProductPage ~ selectedCountry:", selectedCountry)
  
  useEffect(() => {
    if (shopifyData) {
      const transformedProducts = shopifyData.map(item =>
        transformShopifyData(item.products.edges)
      );
  
      setProducts(transformedProducts);
    }
  }, [shopifyData]);

  return (
    <div>
      <section className="bg-primary px-2 pt-20">
        <ProductListing filters={filters} products={products} />
      </section>
    </div>
  );
}
