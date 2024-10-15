import React from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function ProductPage() {
  const t = useTranslations('benefits');
  const a = useTranslations('aboutTitou');
  return (
    <section className="bg-primary e px-2 pt-20">
      <h1 className="mt-2 px-6 text-center font-bold text-[45px] leading-[130%] ">
        {a('histoire')}
      </h1>

    {/* Description */}
      <div className="grid grid-cols-2 grid-rows-3 gap-4 m-4  mt-[100px]">
        <div className="relative p-4 h-[900px] rounded-[30px]">
          <Image
            src="/images/aboutpic3.jpg"
            alt="Red banner"
            fill
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>
        <div className=" p-4 rounded-[30px] flex flex-col justify-center items-center h-[900px]">
          <h1 className="text-black text-[40px] font-bold uppercase tracking-wide">
            {a('loveDo')} {/* Your original title here */}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div> {/* This is for the underline element */}
          <p className="text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {a('loveDoDescription')} {/* Your original paragraph content here */}
          </p>
        </div>
        <div className=" p-4 rounded-[30px] flex flex-col justify-center items-center h-[900px]">
          <h1 className="text-black text-[40px] font-bold uppercase tracking-wide">
            {a('company')} {/* Your original title here */}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div> {/* This is for the underline element */}
          <p className="text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {a('companystart')} {/* Your original paragraph content here */}
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

        <div className=" p-4 rounded-[30px] flex flex-col justify-center items-center h-[900px]">
          <h1 className="text-black text-[40px] font-bold uppercase tracking-wide">
            {a('aboutmission')} {/* Your original title here */}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div> {/* This is for the underline element */}
          <p className="text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {a('missiondescription')} {/* Your original paragraph content here */}
          </p>
        </div>
      </div>
    </section>
    
  );
}
