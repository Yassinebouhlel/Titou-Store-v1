'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState, useMemo  } from 'react';
import { BiUser } from 'react-icons/bi';
import { PiHandbag } from 'react-icons/pi';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai'; // Icons for minus, plus, and delete
import LocaleSwitcher from './LocaleSwitcher';
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';

const Navbar: React.FC = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState('home');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const { cartItems, isCartModalOpen, setIsCartModalOpen, removeItemFromCart, updateCartItemQuantity } = useCart();
  const t = useTranslations('NavBar');
  const p = useTranslations('ProductList');
  const c = useTranslations('Color');
  const f = useTranslations('Cart');

  // Calculate the total price dynamically using useMemo for optimization
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
  }, [cartItems]); // Recalculate whenever cartItems change

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(scrollTop <= lastScrollTop);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  if (cartItems.length > 0){
    console.log('cartItems',cartItems)
  }
  return (
    <>
      <nav
        className={`bg-primary px-4 pt-4 pb-2 flex flex-col w-full fixed top-0 w-full transition-transform duration-300 z-50 ${
          isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="mt-2 flex justify-between">
          <div className="flex items-center space-x-8">
            <Image alt="titou logo" className="w-20" height={20} src="/svg/Logo.svg" width={20} />
            <Link href="/" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === 'home' ? 'underline underline-offset-2' : ''
                }`}
                onClick={() => handleNavigation('home')}
              >
                {t('home')}
              </span>
            </Link>

            {/* Other navigation items */}
            <Link href="/products" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === 'products' ? 'underline underline-offset-2' : ''
                }`}
                onClick={() => handleNavigation('products')}
              >
                {t('products')}
              </span>
            </Link>

            <Link href="/about-us" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === 'aboutUs' ? 'underline underline-offset-2' : ''
                }`}
                onClick={() => handleNavigation('aboutUs')}
              >
                {t('aboutUs')}
              </span>
            </Link>

            <Link href="/contact" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === 'contact' ? 'underline underline-offset-2' : ''
                }`}
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

              {/* Cart Icon with Badge */}
              <div
                className="relative rounded-full bg-white p-2 hover:bg-[#b2ac9c7d]"
                onClick={() => setIsCartModalOpen((prev: boolean) => !prev)}
              >
                <PiHandbag size={24} />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="w-full h-full bg-black opacity-50"
            onClick={() => setIsCartModalOpen(false)}
          />

          {/* Cart Panel */}
          <div className="w-full md:w-120 bg-[#F4EEE1] h-full p-6 shadow-lg transition-transform transform translate-x-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{f('ShoppingCart')}</h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsCartModalOpen(false)}
              >
                <span className="text-xl">&times;</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* Cart Items */}
              {cartItems.length > 0 ? (
                cartItems.map((item: any, index: any) => (
                  <div
                    className="flex justify-between items-center p-3 rounded-md border border-gray-300 bg-gray-50 shadow-sm"
                    key={index}
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.selectedColor.images[0]}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <div className="ml-3">
                        <p className="font-medium text-gray-800">{p(`${item.id}`)}</p>
                        <p className="text-sm text-gray-500">{c(`${item.selectedColor.idColor}`)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Quantity Selector */}
                      <button
                        onClick={() => updateCartItemQuantity(index, item.quantity - 1)}  // Decrease quantity
                        className="px-2 py-1 border rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200"
                        disabled={item.quantity === 1} // Disable if quantity is 1
                      >
                        <AiOutlineMinus />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateCartItemQuantity(index, item.quantity + 1)}  // Increase quantity
                        className="px-2 py-1 border rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200"
                      >
                        <AiOutlinePlus />
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={() => removeItemFromCart(index)} // Remove item
                        className="px-2 py-1 text-[#b2ab9a]-500 hover:text-red-700 focus:outline-none"
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">{f('EmptyCart')}</div>
              )}
            </div>

            {/* Total and Checkout */}
            {cartItems.length > 0 && (
              <>
                <div className="border-t border-gray-300 mt-6 pt-4">
                  <p className="font-bold text-right text-lg text-gray-800">
                    Total: {totalPrice.toFixed(2)} {cartItems[0]?.currency || '$'} {/* Show total */}
                  </p>
                </div>
                <Button className="w-full mt-4 bg-[#ffd500] font-bold text-xl text-black hover:bg-black hover:text-white py-2 rounded-lg">
                  {f('CartButton')}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
