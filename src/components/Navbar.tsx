'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import React, {useEffect, useState} from 'react';
import {BiUser} from 'react-icons/bi';
import {PiHandbag} from 'react-icons/pi';
import LocaleSwitcher from './LocaleSwitcher';
import Button from '@/components/Button';

const Navbar: React.FC = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState('home');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const t = useTranslations('NavBar');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleNavigation = (navItem: string) => {
    setSelectedNavItem(navItem);
    localStorage.setItem('path', navItem);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPath = localStorage.getItem('path');
      if (savedPath) {
        setSelectedNavItem(savedPath);
      }
    }
  }, []);
  return (
    <nav
      className={
        'bg-primary px-4 pt-4 pb-2 flex flex-col w-full fixed ' +
        ` top-0 w-full  transition-transform duration-300 z-50 ${
          isScrollingUp
            ? 'transform translate-y-0  '
            : 'transform -translate-y-full  '
        }`
      }
    >
      <div className="mt-2 flex justify-between">
        <div className="flex items-center space-x-8">
          <Image
            alt="titou logo"
            className="w-20"
            height={20}
            src="/svg/Logo.svg"
            width={20}
          />

          <Link href="/" passHref>
            <span
              className={`font-bold text-black hover:text-[#b2ac9c7d] ${selectedNavItem === 'home' ? 'underline underline-offset-2' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              {t('home')}
            </span>
          </Link>

          <Link href="/products" passHref>
            <span
              className={`font-bold text-black hover:text-[#b2ac9c7d] ${selectedNavItem === 'products' ? 'underline underline-offset-2' : ''}`}
              onClick={() => handleNavigation('products')}
            >
              {t('products')}
            </span>
          </Link>

          <Link href="/about-us" passHref>
            <span
              className={`font-bold text-black hover:text-[#b2ac9c7d] ${selectedNavItem === 'aboutUs' ? 'underline underline-offset-2' : ''}`}
              onClick={() => handleNavigation('aboutUs')}
            >
              {t('aboutUs')}
            </span>
          </Link>

          <Link href="/contact" passHref>
            <span
              className={`font-bold text-black hover:text-[#b2ac9c7d] ${selectedNavItem === 'contact' ? 'underline underline-offset-2' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              {t('contact')}
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button className="flex items-center space-x-2">
                <BiUser size={24} />
                <span>{t('login')}</span>
              </Button>
            </Link>

            <div className=" rounded-full bg-white p-2 hover:bg-[#b2ac9c7d]  ">
              <PiHandbag size={24} />
            </div>
          </div>
          <div className="relative">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
