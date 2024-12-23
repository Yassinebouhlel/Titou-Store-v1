import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ReactFlagsSelect from "react-flags-select";

function Footer() {
  const t = useTranslations("footer");
  const l = useTranslations("LearnMore");

  return (
    <footer className="h-auto bg-[#01141b] p-6 flex flex-col">
      <div className="flex justify-between">
        {/* Logo Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-start justify-center px-4 mb-6">
          <div className="flex flex-col rounded-full bg-[#FFD500] px-2 py-1">
            <Image
              alt="titou logo"
              className="w-20"
              height={20}
              src="/svg/Logo.svg"
              width={20}
            />
          </div>
          <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
            {t("description")}
          </p>
        </div>

        {/* Services Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-start justify-center px-4 mb-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">{l("more")}</p>
          </div>
          <Link href="/constructionPage">
            <p className="mt-3 text-start font-sans text-[0.875rem] text-white cursor-pointer">
              {l("LuggageTesting")}
            </p>
          </Link>
          <Link href="/constructionPage">
            <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
              {l("Airlines")}
            </p>
          </Link>
          <Link href="/constructionPage">
            <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
              {l("tsa")}
            </p>
          </Link>
          <Link href="/constructionPage">
            <p className="mt-3 text-start font-sans text-[0.875rem] text-white">
              {l("tips")}
            </p>
          </Link>
        </div>

        {/* Stores */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-start justify-center px-4 mb-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Stores</p>
          </div>
          <Link href="/US">
          <div className="mt-3 flex w-full flex-row gap-x-2 items-center">
            <Image
                src="/images/countries/usa.jpg"
                alt="Usa flag"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="  font-sans text-[0.875rem] text-white">
                United State
              </p>
           
            </div>
          </Link>
          <Link href="/CA">
          <div className="mt-3 flex w-full flex-row gap-x-2 items-center">
            <Image
                src="/images/countries/Flag_of_Canada.png"
                alt="Tunisia flag"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="  font-sans text-[0.875rem] text-white">
                Canada
              </p>
           
            </div>
          </Link>
          <Link href="/TN">
            <div className="mt-3 flex w-full flex-row gap-x-2 items-center">
            <Image
                src="/images/countries/Flag_of_Tunisia.png"
                alt="Tunisia flag"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="  font-sans text-[0.875rem] text-white">
                Tunisa
              </p>
           
            </div>
          </Link>
          <Link href="/SA">
          <div className="mt-3 flex w-full flex-row gap-x-2 items-center">
            <Image
                src="/images/countries/saudi-arabia-flag.png"
                alt="Tunisia flag"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="  font-sans text-[0.875rem] text-white">
              Saudi Arabia
              </p>
           
            </div>
          </Link>
        </div>
        {/* Contact Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-start justify-center px-4 mb-6">
          <div className="flex flex-col rounded-full px-2 py-1">
            <p className="font-bold text-[1rem] text-[#FFD500]">Contact</p>
          </div>
          <p className="mt-4 text-start font-sans text-[0.875rem] text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            contact@titouluggage.com
          </p>
          <p className="mt-4 text-start font-sans text-[0.875rem] text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            +216 98 123 456
          </p>
          <p className="mt-1 text-start font-sans text-[0.875rem] text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            Route de Monastir 4070 Msaken Tunisie
          </p>
          <div className="mt-4 flex w-full items-center justify-center gap-x-4">
            <a
              href="https://www.instagram.com/titou.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Instagram"
            >
              <Image
                alt="Instagram"
                height={20}
                src="https://yuno.ch/_next/static/media/Instagram.793a4314.svg"
                width={20}
              />
            </a>
            <a
              href="https://www.facebook.com/Titou.com.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Facebook"
            >
              <Image
                alt="Facebook"
                height={10}
                src="https://yuno.ch/_next/static/media/facebook.e60616f9.svg"
                width={10}
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </footer>
  );
}

export default Footer;
