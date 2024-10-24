import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function ProductPage() {
  const t = useTranslations('benefits');
  const a = useTranslations('aboutTitou');
  return (
    <section className="bg-primary px-2 pt-20">
      <h1 className="mt-2 px-6 text-center font-bold text-[30px] leading-[130%] md:text-[45px]">
        {a('histoire')}
      </h1>
    
      {/* Description */}
      <div className="grid grid-cols-1 gap-4 m-4 mt-[50px] md:grid-cols-2 md:grid-rows-3">
        {/* Image first row */}
        <div className="relative p-4 h-[400px] md:h-[900px] rounded-[30px] order-1">
          <Image
            src="/images/aboutpic3.jpg"
            alt="Red banner"
            fill
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>
    
        {/* Text first row */}
        <div className="p-4 rounded-[30px] flex flex-col justify-center items-center h-auto md:h-[900px] order-2">
          <h1 className="text-black text-[30px] font-bold uppercase tracking-wide md:text-[40px]">
            {a('loveDo')}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {a('loveDoDescription')}
          </p>
        </div>
    
        {/* Text second row */}
        <div className="p-4 rounded-[30px] flex flex-col justify-center items-center h-auto md:h-[900px] md:order-3 order-4">
          <h1 className="text-black text-[30px] font-bold uppercase tracking-wide md:text-[40px]">
            {a('company')}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {a('companystart')}
          </p>
        </div>
    
        {/* Image second row */}
        <div className="relative p-4 h-[400px] md:h-[900px] md:order-4 order-3">
          <Image
            src="/images/aboutpic1.jpg"
            alt="Red banner"
            fill
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>
    
        {/* Image third row */}
        <div className="relative p-4 h-[400px] md:h-[900px] order-5">
          <Image
            src="/images/aboutpic2.jpg"
            alt="Red banner"
            fill
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>
    
        {/* Text third row */}
        <div className="p-4 rounded-[30px] flex flex-col justify-center items-center h-auto md:h-[900px] order-6">
          <h1 className="text-black text-[30px] font-bold uppercase tracking-wide md:text-[40px]">
            {a('aboutmission')}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {a('missiondescription')}
          </p>
        </div>
      </div>
    </section>  
    
  );
}
