"use client";
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {FaArrowRight} from 'react-icons/fa6';
import '@/lib/env';
import { FaFeatherAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiCarWheel } from "react-icons/gi";
import { GiResize } from "react-icons/gi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";


import CardComponent from '@/components/CardComponent';
import Carousel from '@/components/Carousel';
// import { Carousel } from "@material-tailwind/react";
import Hero from '@/components/Hero';
import ProductOnePage from '@/components/Product';
import ProductPage from '@/components/ProductsPage';
import ScrollEffectWrapper from '@/components/ScrollEffectWrapper';
import VideoScroll from '@/components/VideoScroll';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('benefits');
  const w = useTranslations('why');
  const s = useTranslations('newsletter');

  const images = [
    // { src: '/images/HomePage/bn-blue.jpg', alt: 'Blue banner' },
    // { src: '/images/HomePage/bn-green.jpg', alt: 'Green banner' },
    // { src: '/images/HomePage/bn-red.jpg', alt: 'Red banner' },
    { src: '/images/HomePage/Titou Saudia Web Banner.png', alt: 'Saudi store' },
    { src: '/images/HomePage/Titou Canada Web Banner v2.png', alt: 'Canada store' },
    { src: '/images/HomePage/Titou America web banner 2.png', alt: 'USA store' }
  ];

  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length); // Moves to the next slide every 5 seconds
    }, 5000); // 5000ms = 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <main>
      <section className="bg-primary e px-2 pt-20">
      <div className="relative flex flex-col items-center justify-center px-6 text-center">
          <div className="relative h-[900px] w-full overflow-hidden rounded-lg ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Slider controls */}  
            <button
            type="button"
            className="absolute top-0 start-0 ml-8 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button
              type="button"
              className="absolute top-0 end-0 mr-8 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
        </div>

        {/* <VideoScroll /> */}
        <ScrollEffectWrapper>
          <div className="m-4 flex min-h-[500px] py-4 gap-2 rounded-[60px] bg-white itmes-center justify-center  ">
            <div className="   flex flex-col  items-center md:flex-row justify-between gap-x-6 gap-y-6  ">
              <div className="flex  flex-col items-center   ">
                <div className="flex h-[150px] w-[150px]  items-center justify-center rounded-full bg-[#76c7e7] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/camion-100x100.png" />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t('FreeDelivery')}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t('FreeDeliveryDescription')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#f0e7ff] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/paiement-securise-100x100.png" />
                </div>
                <div className="flex flex-col items-center  ">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t('SecurePayment')}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t('SecurePaymentDescription')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#fcaa9f] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/service-clients-100x100.png" />
                </div>
                <div className="flex flex-col items-center  ">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t('FullSupport')}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t('FullSupportDescription')}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#a6cbac] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/remise-en-argent-100x100.png" />
                </div>
                <div className="flex flex-col items-center  ">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t('ReturnPolicy')}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t('ReturnPolicyDescription')}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className=" flex flex-row   ">
              <div className="flex w-1/4 flex-col items-center   ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  {t('FreeDelivery')}
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  {t('FreeDeliveryDescription')}
                </p>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  {t('SecurePayment')}
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  {t('SecurePaymentDescription')}
                </p>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  {t('FullSupport')}
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  {t('FullSupportDescription')}
                </p>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  {t('ReturnPolicy')}
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  {t('ReturnPolicyDescription')}
                </p>
              </div>
            </div> */}
          </div>
          <div className="m-4 mt-[50px] flex h-[700px] rounded-[60px] bg-[#ececec] ">
            <video className="w-full h-full rounded-[30px]" controls autoPlay muted loop>
              <source src="/videos/videoValise.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollEffectWrapper>
        <ScrollEffectWrapper>
          <h1 className="px-20 py-10 text-center text-3xl">
            {w('WhyPP')}
          </h1>
          <span className="" />

          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
            <CardComponent
              bgColor="bg-[#DFB7FF]"
              description={w('LightweightDescription')}
              icon={<FaFeatherAlt />}
              textColor="text-[#4B007E]"
              title= {w('Lightweight')}
            />
            <CardComponent
              bgColor="bg-[#FFB4AB]"
              description={w('SecureDescription')}
              icon={<IoShieldCheckmark />}
              textColor="text-[#690005]"
              title= {w('Secure')}
            />
            <CardComponent
              bgColor="bg-[#AAD0B1]"
              description={w('RemovalbleWheelsDescription')}
              icon={<GiCarWheel />}
              textColor="text-[#163721]"
              title= {w('RemovalbleWheels')}
            />
            <CardComponent
              bgColor="bg-[#76C6E7]"
              description={w('MultipleSizesDescription')}
              icon={<GiResize />}
              textColor="text-[#00363E]"
              title= {w('MultipleSizes')}
            />
            <CardComponent
              bgColor="bg-[#D1BFA5]"
              description={w('StretchableDescription')}
              icon={<FaExpandArrowsAlt />}
              textColor="text-[#574F43]"
              title= {w('Stretchable')}
            />
            <CardComponent
              bgColor="bg-[#9FD67C]"
              description={w('QualityDescription')}
              icon={<FaRecycle />}
              textColor="text-[#143800]"
              title= {w('Quality')}
            />
          </div>
        </ScrollEffectWrapper>
        <div className="min-h-[160px]" />
      </section>

      <div>
        {/* <section className="h-screen bg-gray-100"> */}
          {/* <div className="flex h-full items-center justify-center bg-[url('/images/infolettre.png')]" > */}
          {/* <div className="flex h-full items-center justify-center bg-[url('/images/infolettre.png')] bg-no-repeat bg-center bg-cover"> */}
            {/* <h2 className="font-bold text-3xl">More content as you scroll!</h2> */}
          {/* </div> */}
        {/* </section> */}
        <div className="m-4 mb-[80px] flex flex-col md:flex-row h-auto rounded-[60px]">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="rounded-[30px] flex flex-col justify-center items-center h-[300px] md:h-[668px] w-full md:w-1/3">
              <video className="w-full h-full rounded-[30px]" controls autoPlay muted loop>
                <source src="/videos/videoValise2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center h-[300px] md:h-[668px] w-full md:w-1/3">
              <video className="w-full h-full rounded-[30px]" controls autoPlay muted loop>
                <source src="/videos/videoValise3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center h-[300px] md:h-[668px] w-full md:w-1/3">
              <video className="w-full h-full rounded-[30px]" controls autoPlay muted loop>
                <source src="/videos/videoValise4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center bg-[#724740] py-10 px-5">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-70">
        <Image
          src="/images/infolettre.png"
          alt="Background Suitcase"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
      {/* Foreground Content */}
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full space-y-5 md:space-y-0 md:space-x-5">
        {/* Left Section: Text */}
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl font-medium">
            {s('subscribe')}
          </h2>
        </div>
        {/* Right Section: Input and Button */}
        <div className="flex space-x-3">
          <input
            type="email"
            placeholder="Email address"
            className="px-5 py-3 rounded-full focus:outline-none text-black"
          />
          <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-6 py-3 rounded-full font-medium">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
}
