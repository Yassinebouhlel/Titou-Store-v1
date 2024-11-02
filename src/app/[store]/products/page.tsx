'use client';

import { useState, useEffect } from 'react';
import ProductListing from '@/components/ProductsList';
import {data} from '@/constant/config';

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

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  function getSelectedStore() {
    // Find the 'selectedStore' cookie in document.cookie
    const match = document.cookie.split("; ").find(row => row.startsWith("selectedStore="));
    // If found, return the value after '=', otherwise return null
    return match ? match.split("=")[1] : null;
  }
  
  useEffect(() => {
    // Retrieve the selected country from localStorage (or any global state management method you prefer)
    const selectedCountry = getSelectedStore() || "TN";

    setProducts(data[selectedCountry].categories)
   
  }, []);

 

  return (
    <div>
      <section className="bg-primary px-2 pt-20">
        <ProductListing filters={filters} products={products} />
      </section>
    </div>
  );
}
