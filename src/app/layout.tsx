/* eslint-disable react/no-children-prop */
// "use client";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "@/styles/globals.css";
import { ReactNode, useEffect } from "react";
import Script from "next/script";
import Footer from "@/components/Footer";
import { siteConfig } from "@/constant/config";

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
   
      <html lang={locale} className="scroll-smooth">
  <head>
    <title>{siteConfig.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={siteConfig.description} />
    <link rel="canonical" href={siteConfig.url} />
    
    {/* Open Graph */}
    <meta property="og:title" content={siteConfig.title} />
    <meta property="og:description" content={siteConfig.description} />
    <meta property="og:image" content={`${siteConfig.url}/images/og.jpg`} />
    <meta property="og:url" content={siteConfig.url} />
    <meta property="og:type" content="website" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <Script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Titou Pro Traveler",
        "description": `${siteConfig.description} ${siteConfig.keywords.join(' ')}`,
        "keywords": siteConfig.keywords.join(', '),
        // ... rest of schema
      })}
    </Script>
  </head>

    
      <body className="bg-primary">
        {/* Inject Facebook Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq) return; n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
                n.queue=[]; t=b.createElement(e); t.async=!0;
                t.src=v; s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Provide translations & content */}
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
