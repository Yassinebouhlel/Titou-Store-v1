'use client';

import ProductListing from '@/components/ProductsList';
import {categories} from '@/constant/config';

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
  return (
    <div>
      <section className="bg-primary px-2 pt-20">
        <ProductListing filters={filters} products={categories} />
      </section>
    </div>
  );
}
