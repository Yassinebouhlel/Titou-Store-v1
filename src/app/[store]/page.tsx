import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import {FaArrowRight} from 'react-icons/fa6';
import '@/lib/env';

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
  return (
    <main>
      <section className="bg-primary e px-2 pt-20">
        <div className="relative   flex flex-col  items-center justify-center px-6  text-center ">
          {/* Banner */}

          {/* <div className="imageBg h-full   w-full rounded-custom ">
            <div
              className={`flex h-full min-h-80 w-2/5 flex-col justify-center  gap-6  rounded-br-custom-bottom-right rounded-tl-custom-top-left bg-[#FFD500]
                  p-10 text-[#01141B]`}
            >
              <p className=" pt-8 text-start font-sans text-2xl">
                Give the gift of travel
              </p>
              <h1 className="pb-8 text-start font-bold text-5xl">
                {' '}
                Discover our last collections
              </h1>
            </div>
            <div
              className={`text-md flex min-h-24 w-1/4 flex-row items-center 
                  justify-between rounded-br-custom-bottom-right rounded-tr-custom-top-right bg-[#FFD500] 
                  p-0  pl-8 font-sans text-[#01141B] `}
            >
              Discover bestsellers
              <div className=" mr-2  cursor-pointer rounded-full p-3 hover:bg-white   ">
                <FaArrowRight className="" size={46} />
              </div>
            </div>
          </div> */}

          {/* Slider*/}
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-96 overflow-hidden rounded-lg md:h-96" style={{ position: 'relative' }}>
                    {/* <!-- Item 1 --> */}
                      <div className="block duration-700 ease-in-out" data-carousel-item>
                        <Image
                          src="/images/bn-blue.jpg"
                          alt="Blue banner"
                          fill
                          priority
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      {/* <!-- Item 2 --> */}
                      <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image
                          src="/images/bn-green.jpg"
                          alt="Green banner"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      {/* <!-- Item 3 --> */}
                      <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image
                          src="/images/bn-red.jpg"
                          alt="Red banner"
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
          {/* Slider end*/}
          {/* Banner end */}
          <Carousel />
        </div>

        {/* <VideoScroll /> */}
        <ScrollEffectWrapper>
          <div className="m-4 flex h-[500px] flex-col gap-2 rounded-[60px] bg-white ">
            <div className="  mt-36 flex flex-row  items-center  ">
              <div className="flex w-1/4 flex-col items-center   ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#76c7e7] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/camion-100x100.png" />
                </div>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#f0e7ff] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/paiement-securise-100x100.png" />
                </div>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#fcaa9f] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/service-clients-100x100.png" />
                </div>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#a6cbac] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/remise-en-argent-100x100.png" />
                </div>
              </div>
            </div>

            <div className=" flex flex-row   ">
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
            </div>
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
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/plumes-90x90.png"
              textColor="text-[#4B007E]"
              title= {w('Lightweight')}
            />
            <CardComponent
              bgColor="bg-[#FFB4AB]"
              description={w('SecureDescription')}
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/bouclier-securise-90x90.png"
              textColor="text-[#690005]"
              title= {w('Secure')}
            />
            <CardComponent
              bgColor="bg-[#AAD0B1]"
              description={w('RemovalbleWheelsDescription')}
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/roue-de-voiture1-90x90.png"
              textColor="text-[#163721]"
              title= {w('RemovalbleWheels')}
            />
            <CardComponent
              bgColor="bg-[#76C6E7]"
              description={w('MultipleSizesDescription')}
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/escalader-90x90.png"
              textColor="text-[#00363E]"
              title= {w('MultipleSizes')}
            />
            <CardComponent
              bgColor="bg-[#D1BFA5]"
              description={w('StretchableDescription')}
              iconUrl="	https://www.titou.ma/wp-content/uploads/2024/01/taille-reelle-90x90.png"
              textColor="text-[#574F43]"
              title= {w('Stretchable')}
            />
            <CardComponent
              bgColor="bg-[#9FD67C]"
              description={w('QualityDescription')}
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/pp-90x90.png"
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
