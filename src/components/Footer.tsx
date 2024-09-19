import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="min-h-svh bg-[#01141b]">
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
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div>

        {/* Services Section */}
        <div className="flex w-1/4 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Services</p>
          </div>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div>

        {/* Société Section */}
        <div className="flex w-1/4 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Société</p>
          </div>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex w-1/4 flex-col items-start justify-center px-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Contact</p>
          </div>
          <h1 className="mt-1 text-start text-[20px] text-white">
            hello@titou.ca
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
