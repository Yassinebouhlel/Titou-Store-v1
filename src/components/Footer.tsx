import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className='bg-[#01141b] min-h-svh'>
      <div className='flex justify-between pt-6'>
        {/* Logo Section */}
        <div className='flex flex-col justify-center items-start w-1/4 px-6'>
          <div className='rounded-full bg-[#FFD500] py-1 px-2 flex flex-col'>
            <Image
              
                width={20}
                height={20} className='w-20' src={'/svg/logo.svg'} alt={'titou logo'} />
          </div>
          <p className='text-white text-start mt-3 font-sans text-[0.875rem]'>
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div>

        {/* Services Section */}
        <div className='flex flex-col justify-center items-start w-1/4 px-6'>
          <div className='rounded-full py-1 px-2 flex flex-col'>
            <p className='text-[1rem] text-[#FFD500] font-bold'>Services</p>
          </div>
          <p className='text-white text-start mt-3 font-sans text-[0.875rem]'>
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div>

        {/* Société Section */}
        <div className='flex flex-col justify-center items-start w-1/4 px-6'>
          <div className='rounded-full py-1 px-2 flex flex-col'>
            <p className='text-[1rem] text-[#FFD500] font-bold'>Société</p>
          </div>
          <p className='text-white text-start mt-3 font-sans text-[0.875rem]'>
            Une entreprise du groupe Migros 8002 Zürich 🇨🇭
          </p>
        </div>

        {/* Contact Section */}
        <div className='flex flex-col justify-center items-start w-1/4 px-6'>
          <div className='rounded-full py-1 px-2 flex flex-col'>
            <p className='text-[1rem] text-[#FFD500] font-bold'>Contact</p>
          </div>
          <h1 className='text-white text-start mt-1 text-[20px]'>
            hello@titou.ca
          </h1>
          <div className='flex w-full gap-x-10 items-center align-middle mt-2'>
            <Image
              src="https://yuno.ch/_next/static/media/Instagram.793a4314.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
            <Image
              src="https://yuno.ch/_next/static/media/facebook.e60616f9.svg"
              alt="Facebook"
              width={10}
              height={10}
            />
            <Image
              src="https://yuno.ch/_next/static/media/linkedIn.be76f2a3.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
