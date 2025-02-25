import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';

type Props = {
  children: ReactNode;
  params: {store: string};
};

export default async function StoreLayout({children, params}: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CartProvider>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
      </CartProvider>
      
    </NextIntlClientProvider>
  );
}
