/* eslint-disable react/no-children-prop */


import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "@/styles/globals.css";
import { ReactNode } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <title>Titou luggage Store</title>
      </Head>
      <body className='bg-primary'>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
