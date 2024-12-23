"use client"

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import React, {useEffect, useState} from 'react';

export default function ProductPage() {
  const t = useTranslations('ContactUs');
  const f = useTranslations('ContactForm');

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Your message was sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };


  return (
    <div>
      <section className="bg-primary px-2 pt-20">
        {/* Title Section */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col justify-center items-start">
          <h1 className="text-black text-[30px] md:text-[40px] font-bold uppercase tracking-wide">
            {t('Title')}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {t('Description1')}
          </p>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {t('Description2')}
          </p>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {t('Description3')}
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="bg-[#f0e7d5] p-6 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col items-center">
          <h2 className="text-black text-[24px] md:text-[32px] font-bold uppercase tracking-wide">
            {f('ContactUs')}
          </h2>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700 text-center mb-6">
            {f('Description')}
          </p>

          {/* Contact Us Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-3/4 space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                placeholder={f('Name')}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                // rows="5"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                placeholder={f('Message')}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="tr-contact-button bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center space-x-2 transition-all duration-300"
              >
                <span>{f('Submit')}</span>
                <div className="arrow flex items-center justify-center transition-transform duration-300 transform group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M1 12H21M21 12L15 6M21 12L15 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
          </form>
        </div>

        {/* Location Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-[50px]">
          
        </div>
        {/* Tunisia */}
       

        {/* Saudi Arabia */}
 

        {/* Canada */}
  

        {/* USA */}
     

        {/* France */}

      </section>
    </div>
  );
}
