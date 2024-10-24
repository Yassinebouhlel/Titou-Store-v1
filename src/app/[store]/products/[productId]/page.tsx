'use client';
import {useParams} from 'next/navigation';
import ProductOnePage from '@/components/Product';
import {categories} from '@/constant/config';
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import {useTranslations} from 'next-intl';

export default function ProductPage() {
  const t = useTranslations('Product');
  const {productId} = useParams();
  const productIndex =
    productId === 'brillant' ? 0 : productId === 'mat' ? 1 : 2;

  const product = categories[productIndex];

  return (
    <div>
      <section className="bg-primary px-2 pt-20 ">
        <ProductOnePage product={product} />
        <div className="relative flex flex-col sm:flex-row justify-between items-center h-auto bg-[#f0e7d5] py-10 px-5 mb-8">
          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
            <FaShippingFast className="text-6xl mb-4" />
            <h1 className="text-black text-[30px] sm:text-[40px] font-bold uppercase tracking-wide">{t('Shipping')}</h1>
            <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div> {/* Underline element */}
            <p className="text-[14px] sm:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
              {t('ShippingDescription')}
            </p>
          </div>
          {/* Free return */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
            <TbTruckReturn className="text-7xl mb-4" />
            <h1 className="text-black text-[30px] sm:text-[40px] font-bold uppercase tracking-wide">{t('Return')}</h1>
            <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div> {/* Underline element */}
            <p className="text-[14px] sm:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
              {t('ReturnDescription')}
            </p>
          </div>
          {/* Warranty */}
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
            </svg>
            <h1 className="text-black text-[30px] sm:text-[40px] font-bold uppercase tracking-wide">{t('Warranty')}</h1>
            <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div> {/* Underline element */}
            <p className="text-[14px] sm:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
              {t('WarrantyDescription')}
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
