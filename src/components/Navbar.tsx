"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useEffect, useState, useMemo } from "react";
import { BiUser } from "react-icons/bi";
import { PiHandbag } from "react-icons/pi";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai"; // Added menu and close icons
import LocaleSwitcher from "./LocaleSwitcher";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle
  const [selectedNavItem, setSelectedNavItem] = useState("home");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const {
    cartItems,
    isCartModalOpen,
    setIsCartModalOpen,
    removeItemFromCart,
    updateCartItemQuantity,
  } = useCart();
  const t = useTranslations("NavBar");
  const p = useTranslations("ProductList");
  const c = useTranslations("Color");
  const f = useTranslations("Cart");

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(scrollTop <= lastScrollTop);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleNavigation = (navItem: string) => {
    setSelectedNavItem(navItem);
    localStorage.setItem("path", navItem);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPath = localStorage.getItem("path");
      if (savedPath) {
        setSelectedNavItem(savedPath);
      }
    }
  }, []);
  const router = useRouter();
  const handleCheckout = () => {
    // Save cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Close the cart modal
    setIsCartModalOpen(false);

    // Navigate to the checkout page
    router.push("/checkout");
  };
  async function handleCheckoutx() {
    const SHOPIFY_STORE_URL = "https://v1dj9z-e5.myshopify.com/api/2023-10/graphql.json";
    const SHOPIFY_ACCESS_TOKEN = "ce8754195ee3bf24158bff3879689518";
  
    const lineItems = cartItems.map((item:any) => ({
      variantId: item.id, // Shopify variant ID
      quantity: item.quantity,
    }));
  const lineItemsw2 = [{merchandiseId:'gid://shopify/ProductVariant/41929672949878',quantity:1},{merchandiseId:'gid://shopify/ProductVariant/41927593066614',quantity:1}];
  const response = await fetch(`${SHOPIFY_STORE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query: `
        mutation createCart($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: { input: { lines: lineItemsw2 } },
    }),
  });
console.log(response)
  const result = await response.json();

  if (result.data?.cartCreate?.cart?.checkoutUrl) {
    // Redirect to Shopify checkout
    window.location.href = result.data.cartCreate.cart.checkoutUrl;
  } else {
    console.error("Cart API Error:", result.data?.cartCreate?.userErrors || result.errors);
  }
  }
  

  return (
    <>
      <nav
        className={`bg-primary   pb-2 w-full fixed top-0 transition-transform duration-300 z-50 ${
          isScrollingUp
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div style={{fontSize:'0.875rem',lineHeight:'150%',wordSpacing:'1px'}} className={`md:h-10 w-full bg-[#FFD500]  flex flex-col md:flex-row items-center justify-center text-center`}>
          <p>{t("FreeShipping")}</p> 

        </div>
        <div className="pt-4 px-4 flex justify-between items-center w-full">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" passHref>
              <Image
                alt="titou logo"
                className="w-20 cursor-pointer"
                height={20}
                src="/svg/old-logo.svg"
                width={20}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" passHref>
                <span
                  className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                    selectedNavItem === "home"
                      ? ""
                      : ""
                  }`}
                  onClick={() => handleNavigation("home")}
                >
                  {t("home")}
                </span>
              </Link>

              <Link href="/products" passHref>
                <span
                  className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                    selectedNavItem === "products"
                      ? ""
                      : ""
                  }`}
                  onClick={() => handleNavigation("products")}
                >
                  {t("products")}
                </span>
              </Link>

              <Link href="/about-us" passHref>
                <span
                  className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                    selectedNavItem === "aboutUs"
                      ? ""
                      : ""
                  }`}
                  onClick={() => handleNavigation("aboutUs")}
                >
                  {t("aboutUs")}
                </span>
              </Link>

              <Link href="/contact" passHref>
                <span
                  className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                    selectedNavItem === "contact"
                      ? ""
                      : ""
                  }`}
                  onClick={() => handleNavigation("contact")}
                >
                  {t("contact")}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side - User, Cart, Locale */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/sign-in">
              <Button className="flex items-center space-x-2">
                <BiUser size={24} />
                <span>{t("login")}</span>
              </Button>
            </Link>

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
            <LocaleSwitcher />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col  gap-6 text-xl space-y-4 h-screen mt-16 relative">
            <div className="flex items-end justify-between absolute top-0 right-0">
              <div></div>
              <LocaleSwitcher />
            </div>
            <Link href="/" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === "home"
                    ? ""
                    : ""
                }`}
                onClick={() => handleNavigation("home")}
              >
                {t("home")}
              </span>
            </Link>

            <Link href="/products" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === "products"
                    ? ""
                    : ""
                }`}
                onClick={() => handleNavigation("products")}
              >
                {t("products")}
              </span>
            </Link>

            <Link href="/about-us" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === "aboutUs"
                    ? ""
                    : ""
                }`}
                onClick={() => handleNavigation("aboutUs")}
              >
                {t("aboutUs")}
              </span>
            </Link>

            <Link href="/contact" passHref>
              <span
                className={`font-bold text-black hover:text-[#b2ac9c7d] ${
                  selectedNavItem === "contact"
                    ? ""
                    : ""
                }`}
                onClick={() => handleNavigation("contact")}
              >
                {t("contact")}
              </span>
            </Link>

            <Link href="/sign-in">
              <Button className="flex items-center space-x-2">
                <BiUser size={24} />
                <span>{t("login")}</span>
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:flex-row justify-end">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsCartModalOpen(false)}
          />

          {/* Cart Slide Panel */}
          <div
            className="relative w-full md:w-[500px] h-full md:h-full bg-[#F4EEE1] p-4 md:p-6 shadow-lg 
            overflow-y-auto 
            transform transition-transform duration-300 
            translate-x-0 
            md:ml-auto 
            flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {f("ShoppingCart")}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsCartModalOpen(false)}
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>
            </div>

            {/* Cart Items Container */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-2">
              {cartItems.length > 0 ? (
                cartItems.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-center 
                      p-3 rounded-md border border-gray-300 bg-gray-50 shadow-sm 
                      space-y-2 sm:space-y-0"
                  >
                    {/* Product Info */}
                    <div className="flex items-center w-full sm:w-auto">
                      <Image
                        src={item.selectedColor.images[0]}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md mr-3"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {p(`${item.id}`)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {c(`${item.selectedColor.idColor}`)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateCartItemQuantity(index, item.quantity - 1)
                          }
                          className="px-2 py-1 border rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200"
                          disabled={item.quantity === 1}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateCartItemQuantity(index, item.quantity + 1)
                          }
                          className="px-2 py-1 border rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItemFromCart(index)}
                        className="ml-2 text-[#b2ab9a]-500 hover:text-red-700 focus:outline-none"
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  {f("EmptyCart")}
                </div>
              )}
            </div>

            {/* Total and Checkout */}
            {cartItems.length > 0 && (
              <div className="mt-4">
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-right text-lg text-gray-800">
                    Total: {totalPrice.toFixed(2)}{" "}
                    {cartItems[0]?.currency || "$"}
                  </p>
                </div>
                <Button
                  className="w-full mt-4 bg-[#ffd500] font-bold text-xl text-black hover:bg-black hover:text-white py-2 rounded-lg"
                  onClick={handleCheckoutx}
                >
                  {f("CartButton")}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
