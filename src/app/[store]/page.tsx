import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import {FaArrowRight} from 'react-icons/fa6';
import '@/lib/env';

import CardComponent from '@/components/CardComponent';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import ProductOnePage from '@/components/Product';
import ProductPage from '@/components/ProductsPage';
import ScrollEffectWrapper from '@/components/ScrollEffectWrapper';
import VideoScroll from '@/components/VideoScroll';

export default function HomePage() {
  return (
    <main>
      <section className="bg-primary e px-2 pt-20">
        <div className="relative   flex flex-col  items-center justify-center px-6  text-center ">
          {/* Banner */}

          <div className="imageBg h-full   w-full rounded-custom ">
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
          </div>
          {/* Banner end */}
          <Carousel />
        </div>

        <VideoScroll />
        <ScrollEffectWrapper>
          <div className="m-4 flex min-h-screen flex-col gap-2 rounded-custom bg-white ">
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
                  Livraison gratuite
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  Commandez maintenant – Aucun frais de livraison.
                </p>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  Paiement 100% sécurisé
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  Achetez en toute confiance..
                </p>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  Service clientèle
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  De 9h30-13h00 / 14h00-17h30.
                </p>
              </div>
              <div className="flex w-1/4 flex-col items-center  ">
                <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                  Satisfait ou remboursé
                </h1>
                <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                  15 jours de délai de rétractation.
                </p>
              </div>
            </div>
          </div>
        </ScrollEffectWrapper>
        <ScrollEffectWrapper>
          <h1 className="px-20 py-10 text-center text-3xl">
            Pourquoi une valise en polypropylène ?
          </h1>
          <p className="text-center font-sans text-2xl ">
            Rent the latest electronics and enjoy limitless freedom
          </p>
          <span className="" />

          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
            <CardComponent
              bgColor="bg-[#DFB7FF]"
              description="Avec Yuno, loue tes appareils en toute flexibilité. Cela préserve non seulement l'environnement, mais aussi ton porte-monnaie."
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/plumes-90x90.png"
              textColor="text-[#4B007E]"
              title=" Poids léger"
            />
            <CardComponent
              bgColor="bg-[#FFB4AB]"
              description="Une question ou un commentaire à nous faire parvenir ? Contacte-nous par e-mail et nous te répondrons le plus rapidement possible."
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/bouclier-securise-90x90.png"
              textColor="text-[#690005]"
              title="Sécurité"
            />
            <CardComponent
              bgColor="bg-[#AAD0B1]"
              description="Notre modèle de location circulaire aide à prolonger la vie des appareils et à diminuer les déchets électroniques."
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/roue-de-voiture1-90x90.png"
              textColor="text-[#163721]"
              title="Valises à 4 roues"
            />
            <CardComponent
              bgColor="bg-[#76C6E7]"
              description="Avec Yuno, loue tes appareils en toute flexibilité. Cela préserve non seulement l'environnement, mais aussi ton porte-monnaie."
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/escalader-90x90.png"
              textColor="text-[#00363E]"
              title="Plusieurs tailles"
            />
            <CardComponent
              bgColor="bg-[#D1BFA5]"
              description="Une question ou un commentaire à nous faire parvenir ? Contacte-nous par e-mail et nous te répondrons le plus rapidement possible."
              iconUrl="	https://www.titou.ma/wp-content/uploads/2024/01/taille-reelle-90x90.png"
              textColor="text-[#574F43]"
              title="Extensible"
            />
            <CardComponent
              bgColor="bg-[#9FD67C]"
              description="Notre modèle de location circulaire aide à prolonger la vie des appareils et à diminuer les déchets électroniques."
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/pp-90x90.png"
              textColor="text-[#143800]"
              title="Haute qualité 100%"
            />
          </div>
        </ScrollEffectWrapper>
        <div className="min-h-[160px]" />
      </section>

      <div>
        <section className="h-screen bg-gray-100">
          <div className="flex h-full items-center justify-center">
            <h2 className="font-bold text-3xl">More content as you scroll!</h2>
          </div>
        </section>
      </div>
    </main>
  );
}
