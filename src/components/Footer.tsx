import Image from 'next/image';
import React from 'react';
import {useTranslations} from 'next-intl';

function Footer() {
  const t = useTranslations('footer');
  const l = useTranslations('LearnMore');
  return (
    <footer className="h-[300px] bg-[#01141b]">
      <div className="flex justify-between pt-6">
        {/* Logo Section */}
        <div className="flex w-1/4 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full bg-[#FFD500] px-2 py-1">
            <Image
              alt="titou logo"
              className="w-20"
              height={20}
              src="/svg/logo.svg"
              width={20}
            />
          </div>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
              {t('description')}
          </p>
        </div>

        {/* Services Section */}
        <div className="flex w-1/3 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">{l('more')}</p>
          </div>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
          {l('LuggageTesting')}
          </p>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
          {l('Airlines')}
          </p>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
          {l('tsa')}
          </p>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
          {l('tips')}
          </p>
        </div>

        {/* Société Section */}
        {/* <div className="flex w-1/4 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Société</p>
          </div>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div> */}

        {/* Contact Section */}
        <div className="flex w-1/3 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Contact</p>
          </div>
          <h1 className="mt-1 text-start text-[20px] text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
               hello@titou.ca
          </h1>
          <h1 className="mt-1 text-start text-[20px] text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            514.444.8350
          </h1>
          <h1 className="mt-1 text-start text-[20px] text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            Canada.Tunisie.USA
          </h1>
          <div className="mt-2 flex w-full items-center gap-x-10 align-middle">
            <Image
              alt="Instagram"
              height={20}
              src="https://yuno.ch/_next/static/media/Instagram.793a4314.svg"
              width={20}
            />
            <Image
              alt="Facebook"
              height={10}
              src="https://yuno.ch/_next/static/media/facebook.e60616f9.svg"
              width={10}
            />
            <Image
              alt="LinkedIn"
              height={20}
              src="https://yuno.ch/_next/static/media/linkedIn.be76f2a3.svg"
              width={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
