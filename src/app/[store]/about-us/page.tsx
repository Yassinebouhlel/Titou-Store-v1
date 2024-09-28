import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function ProductPage() {
  const t = useTranslations('benefits');
  const a = useTranslations('aboutTitou');
  return (
    <section className="bg-primary e px-2 pt-20">
      {/* Image */}
      <div className="mx-[60px] mt-[100px]  flex h-[700px]  bg-[#f0e7d5] ">
      <Image
        src="/images/bn-green.jpg"
        alt="Red banner"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    {/* Description */}
      {/* <div className="mx-[60px]  mb-[100px] flex h-[700px] rounded-[30px] bg-[#f0e7d5] ">


      </div> */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 m-4  mt-[100px]">
        <div className="bg-[#f0e7d5] p-4 rounded-[30px]">
          <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
            {a('company')}
          </h1>
          <p className="mt-1 px-6  font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
            {a('companystart')}
          </p>
        </div>

        {/* Image with relative positioning and increased height */}
        <div className="relative p-4 h-[900px] rounded-[30px]">
          <Image
            src="/images/aboutpic1.jpg"
            alt="Red banner"
            fill
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>

        {/* Another image with proper container */}
        <div className="relative p-4 h-[900px] rounded-[30px]">
          <Image
            src="/images/aboutpic2.jpg"
            alt="Red banner"
            fill
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>

        <div className="bg-[#f0e7d5] p-4 rounded-[30px]">
          <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
            {a('aboutmission')}
          </h1>
          <p className="mt-1 px-6  font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
            {a('missiondescription')}
          </p>
        </div>
      </div>
    </section>
    
  );
}
