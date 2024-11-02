import {Metadata} from 'next';

type Category = {
  id: string;
  name: string;
  colors: Array<{
    color: string;
    idColor: string;
    code: Array<string> ;
    images: Array<string>;
  }>;
  subtitle: string;
  price: number;
  currency: string;
  rating: number;
  sizes: Array<never>;
  reviews: number;
  storage: Array<string>;
  leaseDurations: Array<number>;
  defaultLeaseDuration: number;
  features: Array<string>;
  additionalInfo: any;
};
export const siteConfig = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    'A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://tsnext-tw.thcl.dev'
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  robots: {index: true, follow: true},
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png'
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`]
    // creator: '@th_clarence',
  }
};
export const categories: Array<Category> = [
  {
    id: 'brillant',
    name: 'Ensemble de 3 valise - Brilliant',
    colors: [
      {
        color: 'BLACK',
        idColor:'BLACK',
        code: ['#000000'],
        images: [
          '/images/Brillant/Black/1.png',
          '/images/Brillant/Black/2.png',
          '/images/Brillant/Black/3.png',
          '/images/Brillant/Black/4.png',
          '/images/Brillant/Black/5.png'
        ]
      },
      {
        color: 'BLUE CHEWING',
        idColor:'BLUE_CHEWING',
        code: ['#79c8c3'],
        images: [
          '/images/Brillant/blue_2/1.png',
          '/images/Brillant/blue_2/2.png',
          '/images/Brillant/blue_2/3.png',
          '/images/Brillant/blue_2/4.png',
          '/images/Brillant/blue_2/5.png',
        ]
      },
      {
        color: 'BORDEAUX',
        idColor:'BORDEAUX',
        code: ['#621620'],
        images: [
          '/images/Brillant/BORDEAUX/titou-photos-190.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-191.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-192.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-193.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-194.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-195.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-196.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-197.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-198.jpg',
          '/images/Brillant/BORDEAUX/titou-photos-189.jpg',
        ]
      },
      {
        color: 'CREAM',
        idColor:'BORDEAUX',
        code: ['#d2ccc0'],
        images: [
          '/images/Brillant/CREAM/titou-photos-155.jpg',
          '/images/Brillant/CREAM/titou-photos-156.jpg',
          '/images/Brillant/CREAM/titou-photos-157.jpg',
          '/images/Brillant/CREAM/titou-photos-158.jpg',
          '/images/Brillant/CREAM/titou-photos-159.jpg',
          '/images/Brillant/CREAM/titou-photos-160.jpg',
          '/images/Brillant/CREAM/titou-photos-161.jpg',
          '/images/Brillant/CREAM/titou-photos-162.jpg',
          '/images/Brillant/CREAM/titou-photos-163.jpg',
          '/images/Brillant/CREAM/titou-photos-164.jpg',
          '/images/Brillant/CREAM/titou-photos-165.jpg',
          '/images/Brillant/CREAM/titou-photos-154.jpg'
        ]
      },
      {
        color: 'NAVY BLUE',
        idColor:'NAVY_BLUE',
        code: ['#1f2f48'],
        images: [
          '/images/Brillant/NAVY BLUE/titou-photos-1.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-2.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-3.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-4.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-5.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-6.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-7.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-8.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-9.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-10.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-11.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-12.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-13.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-14.jpg',
          '/images/Brillant/NAVY BLUE/titou-photos-15.jpg'
        ]
      },
      {
        color: 'SALMON',
        idColor:'SALMON',
        code: ['#be8e80'],
        images: [
          '/images/Brillant/SALMON/titou-photos-79.jpg',
          '/images/Brillant/SALMON/titou-photos-80.jpg',
          '/images/Brillant/SALMON/titou-photos-81.jpg',
          '/images/Brillant/SALMON/titou-photos-82.jpg',
          '/images/Brillant/SALMON/titou-photos-83.jpg',
          '/images/Brillant/SALMON/titou-photos-84.jpg',
          '/images/Brillant/SALMON/titou-photos-85.jpg',
          '/images/Brillant/SALMON/titou-photos-86.jpg',
          '/images/Brillant/SALMON/titou-photos-87.jpg',
          '/images/Brillant/SALMON/titou-photos-88.jpg',
          '/images/Brillant/SALMON/titou-photos-89.jpg',
          '/images/Brillant/SALMON/titou-photos-90.jpg',
          '/images/Brillant/SALMON/titou-photos-91.jpg',
          '/images/Brillant/SALMON/titou-photos-92.jpg',
          '/images/Brillant/SALMON/titou-photos-93.jpg',
          '/images/Brillant/SALMON/titou-photos-78.jpg',
        ]
      }
    ],
    subtitle:'subtitleRemove',
    price: 249.99,
    currency: '$',
    rating: 4.64,
    sizes: [],
    reviews: 6,
    storage: ['128GB', '256GB', '512GB', '1TB'],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
    features: [
      'A17 Pro chip',
      'Pro camera system',
      'Action button',
      'Always-On display'
    ],
    additionalInfo: {
      care: 'Titou Care, livraison et support inclus.',
      paymentNote: ''
    }
  },
  {
    id: 'mat',
    name: 'Ensemble de 3 valise - Mat',
    colors: [
      {
        color: 'CREAM WITH BLACK ACCESSORIES',
        idColor:'CREAM_WITH_BLACK_ACCESSORIES',
        code: ['#d2ccc0','#000000'],
        images: [
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/82.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/83.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/84.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/85.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/86.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/87.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/88.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/89.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/90.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/91.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/92.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/93.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/94.jpg',
          '/images/Mat/CREAM WITH BLACK ACCESSORIES/95.jpg'
        ]
      },
      {
        color: "CREAM WITH BLUE CHEWING GUM ACCESSORIES",
        idColor:'CREAM_WITH_BLUE_CHEWING_GUM_ACCESSORIES',
        code: ['#d2ccc0', '#8eccdb'],
        images: [
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/110.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/111.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/112.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/113.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/114.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/115.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/116.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/117.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/118.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/119.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/120.jpg",
          "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/121.jpg"
        ]
      },
      {
        color: "CREAM WITH GRAY ACCESSORIES",
        idColor:'CREAM_WITH_GRAY_ACCESSORIES',
        code: ['#d2ccc0','#5f6065'],
        images: [
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/35.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/30.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/31.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/32.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/33.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/34.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/37.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/38.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/39.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/40.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/41.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/42.jpg",
          "/images/Mat/CREAM WITH GRAY ACCESSORIES/29.jpg"
        ]
      },
      {
        color: "CREAM WITH NAVY BLUE ACCESSORIES",
        idColor:'CREAM_WITH_NAVY_BLUE_ACCESSORIES',
        code: ['#d2ccc0','#1f2f48'],
        images: [
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/69.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/70.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/71.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/72.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/73.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/74.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/75.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/76.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/77.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/78.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/79.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/80.jpg",
          "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/81.jpg",
        ]
      },
      {
        color: "GREEN CHEWING GUM WITH BLACK ACCESSORIES",
        idColor:'GREEN_CHEWING_GUM_WITH_BLACK_ACCESSORIES',
        code: ['#94dcd9','#000000'],
        images: [
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/96.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/97.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/98.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/99.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/100.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/101.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/102.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/103.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/104.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/105.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/106.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/107.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/108.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/109.jpg",
        ]
      },
      {
        color: "GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES",
        idColor:'GREEN_CHEWING_GUM_WITH_GREEN_CHEWING_GUM_ACCESSORIES',
        code: ['#94dcd9'],
        images: [
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/44.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/45.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/46.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/47.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/48.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/49.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/50.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/51.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/52.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/53.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/54.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/55.jpg",
          "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/43.jpg",
        ]
      },
      {
        color: "SALMON WITH BLACK ACCESSORIES",
        idColor:'SALMON_WITH_BLACK_ACCESSORIES',
        code: ['#be8e80','#000000'],
        images: [
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/21.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/16.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/17.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/18.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/19.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/20.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/22.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/23.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/24.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/25.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/26.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/27.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/28.jpg",
          "/images/Mat/SALMON WITH BLACK ACCESSORIES/15.jpg",

        ]
      },
      {
        color: "SALMON WITH GRAY ACCESSORIES",
        idColor:'SALMON_WITH_GRAY_ACCESSORIES',
        code: ['#be8e80','#5f6065'],
        images: [
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/57.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/58.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/59.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/60.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/61.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/62.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/63.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/64.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/65.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/66.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/67.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/68.jpg",
          "/images/Mat/SALMON WITH GRAY ACCESSORIES/56.jpg",
        ]
      },
      {
        color: "YELLOW WITH BLACK ACCESSORIES",
        idColor:'YELLOW_WITH_BLACK_ACCESSORIES',
        code: ['#e5d01f','#000000'],
        images: [
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/2.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/3.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/4.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/5.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/6.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/7.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/8.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/9.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/10.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/11.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/12.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/13.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/14.jpg",
          "/images/Mat/YELLOW WITH BLACK ACCESSORIES/1.jpg"
        ]
      },
    ],
    subtitle:'subtitlefix',
    price: 199.99,
    currency: '$',
    rating: 4.64,
    sizes: [],
    reviews: 6,
    storage: ['128GB', '256GB', '512GB', '1TB'],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
    features: [
      'A17 Pro chip',
      'Pro camera system',
      'Action button',
      'Always-On display'
    ],
    additionalInfo: {
      care: 'Titou Care, livraison et support inclus.',
      paymentNote: ''
    }
  },
  {
    id: 'multicolor',
    name: 'Ensemble de 3 valise - Multicouleur',
    colors: [
      {
        color: 'BORDEAUX WITH CREAM ACCESSORIES',
        idColor:'BORDEAUX_WITH_CREAM_ACCESSORIES',
        code: ['#621620','#d2ccc0'],
        images: [
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-199.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-200.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-201.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-202.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-203.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-204.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-205.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-206.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-207.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-208.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-209.jpg',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-210.jpg'
        ]
      },
      {
        color: 'CREAM WITH BORDEAUX ACCESSORIES',
        idColor:'CREAM_WITH_BORDEAUX_ACCESSORIES',
        code: ['#d2ccc0','#621620'],
        images: [
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-94.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-95.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-96.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-97.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-98.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-99.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-100.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-101.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-102.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-103.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-104.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-105.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-106.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-107.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-109.jpg',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-110.jpg'
        ]
      },
      {
        color: 'CREAM WITH GREEN CHEWING GUM ACCESSORIES',
        idColor:'CREAM_WITH_GREEN_CHEWING_GUM_ACCESSORIES',
        code: ['#d2ccc0','#94dcd9'],
        images: [
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-142.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-143.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-144.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-145.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-146.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-147.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-148.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-149.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-150.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-151.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-152.jpg',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-153.jpg'
        ]
      },
      {
        color: 'CREAM WITH NAVY BLUE ACCESSORIES',
        idColor:'CREAM_WITH_NAVY_BLUE_ACCESSORIES',
        code: ['#d2ccc0','#1f2f48'],
        images: [
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-33.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-34.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-35.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-36.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-37.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-38.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-39.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-40.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-41.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-42.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-43.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-44.jpg',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-45.jpg'
        ]
      },
      {
        color: 'CREAM WITH RED ACCESSORIES',
        idColor:'CREAM_WITH_RED_ACCESSORIES',
        code: ['#d2ccc0','#FF0000'],
        images: [
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-16.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-17.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-18.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-19.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-20.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-21.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-22.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-23.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-24.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-25.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-26.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-27.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-28.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-29.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-30.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-31.jpg',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-32.jpg',
        ]
      },
      {
        color: 'CREAM WITH TURQUOISE BLUE ACCESSORIES',
        idColor:'CREAM_WITH_TURQUOISE_BLUE_ACCESSORIES',
        code: ['#d2ccc0','#02658c'],
        images: [
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-167.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-168.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-169.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-170.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-171.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-172.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-173.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-174.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-175.jpg',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-166.jpg',
        ]
      },
      {
        color: 'CREAM WITH YELLOW ACCESSORIES',
        idColor:'CREAM_WITH_YELLOW_ACCESSORIES',
        code: ['#d2ccc0','#fccd01'],
        images: [
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-62.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-63.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-64.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-65.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-66.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-67.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-68.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-69.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-70.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-71.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-72.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-73.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-74.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-75.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-76.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-77.jpg',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-61.jpg'
        ]
      },
      {
        color: 'GRAY WITH SALMON ACCESSORIES',
        idColor:'GRAY_WITH_SALMON_ACCESSORIES',
        code: ['#5f6065','#be8e80'],
        images: [
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-211.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-212.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-213.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-214.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-215.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-216.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-217.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-218.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-219.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-220.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-221.jpg',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-222.jpg',
        ]
      },
      {
        color: 'GRAY WITH SKY BLUE ACCESSORIES',
        idColor:'GRAY_WITH_SKY_BLUE_ACCESSORIES',
        code: ['#5f6065','#a9d9e7'],
        images: [
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-177.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-178.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-179.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-180.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-182.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-183.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-184.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-185.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-186.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-187.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-188.jpg',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-176.jpg'
        ]
      },
      {
        color: 'NAVY BLUE WITH CREAM ACCESSORIES',
        idColor:'NAVY_BLUE_WITH_CREAM_ACCESSORIES',
        code: ['#1f2f48','#d2ccc0'],
        images: [
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-46.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-47.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-48.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-49.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-50.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-51.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-52.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-53.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-54.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-55.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-56.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-57.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-58.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-59.jpg',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-60.jpg'
        ]
      },
      {
        color: 'NAVY BLUE WITH SALMON ACCESSORIES',
        idColor:'NAVY_BLUE_WITH_SALMON_ACCESSORIES',
        code: ['#1f2f48','#be8e80'],
        images: [
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-16.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-17.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-18.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-19.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-20.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-21.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-22.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-23.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-24.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-25.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-26.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-27.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-28.jpg',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-15.jpg'
        ]
      },
      {
        color: 'SALMON WITH CREAM ACCESSORIES',
        idColor:'SALMON_WITH_CREAM_ACCESSORIES',
        code: ['#be8e80','#d2ccc0'],
        images: [
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-132.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-131.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-133.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-134.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-135.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-136.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-137.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-138.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-139.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-140.jpg',
          '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-141.jpg'
        ]
      },
      {
        color: 'SALMON WITH GRAY ACCESSORIES',
        idColor:'SALMON_WITH_GRAY_ACCESSORIES',
        code: ['#be8e80','#5f6065'],
        images: [
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-111.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-112.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-113.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-114.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-115.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-116.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-117.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-118.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-119.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-120.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-121.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-122.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-123.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-124.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-125.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-126.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-127.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-128.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-129.jpg',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-130.jpg'
        ]
      },
      {
        color: 'SALMON WITH NAVY BLUE ACCESSORIES',
        idColor:'SALMON_WITH_NAVY_BLUE_ACCESSORIES',
        code: ['#be8e80','#1f2f48'],
        images: [
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-2.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-3.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-4.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-5.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-6.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-7.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-8.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-9.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-10.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-11.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-12.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-13.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-14.jpg',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-1.jpg'
        ]
      }
      
    ],
    subtitle:'subtitleRemove',
    price: 299.99,
    currency: '$',
    rating: 4.64,
    sizes: [],
    reviews: 6,
    storage: ['128GB', '256GB', '512GB', '1TB'],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
    features: [
      'A17 Pro chip',
      'Pro camera system',
      'Action button',
      'Always-On display'
    ],
    additionalInfo: {
      care: 'Titou Care, livraison et support inclus.',
      paymentNote: ''
    }
  }
];

export const data: any = {
  CA:{ 
    categories: [
      {
        id: 'brillant',
        name: 'Ensemble de 3 valise - Brilliant',
        colors: [
          {
            color: 'BLACK',
            idColor:'BLACK',
            code: ['#000000'],
            images: [
              '/images/Brillant/Black/1.png',
              '/images/Brillant/Black/2.png',
              '/images/Brillant/Black/3.png',
              '/images/Brillant/Black/4.png',
              '/images/Brillant/Black/5.png'
            ]
          },
          {
            color: 'BLUE CHEWING',
            idColor:'BLUE_CHEWING',
            code: ['#79c8c3'],
            images: [
              '/images/Brillant/blue_2/1.png',
              '/images/Brillant/blue_2/2.png',
              '/images/Brillant/blue_2/3.png',
              '/images/Brillant/blue_2/4.png',
              '/images/Brillant/blue_2/5.png',
            ]
          },
          {
            color: 'BORDEAUX',
            idColor:'BORDEAUX',
            code: ['#621620'],
            images: [
              '/images/Brillant/BORDEAUX/titou-photos-190.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-191.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-192.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-193.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-194.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-195.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-196.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-197.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-198.jpg',
              '/images/Brillant/BORDEAUX/titou-photos-189.jpg',
            ]
          },
          {
            color: 'CREAM',
            idColor:'BORDEAUX',
            code: ['#d2ccc0'],
            images: [
              '/images/Brillant/CREAM/titou-photos-155.jpg',
              '/images/Brillant/CREAM/titou-photos-156.jpg',
              '/images/Brillant/CREAM/titou-photos-157.jpg',
              '/images/Brillant/CREAM/titou-photos-158.jpg',
              '/images/Brillant/CREAM/titou-photos-159.jpg',
              '/images/Brillant/CREAM/titou-photos-160.jpg',
              '/images/Brillant/CREAM/titou-photos-161.jpg',
              '/images/Brillant/CREAM/titou-photos-162.jpg',
              '/images/Brillant/CREAM/titou-photos-163.jpg',
              '/images/Brillant/CREAM/titou-photos-164.jpg',
              '/images/Brillant/CREAM/titou-photos-165.jpg',
              '/images/Brillant/CREAM/titou-photos-154.jpg'
            ]
          },
          {
            color: 'NAVY BLUE',
            idColor:'NAVY_BLUE',
            code: ['#1f2f48'],
            images: [
              '/images/Brillant/NAVY BLUE/titou-photos-1.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-2.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-3.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-4.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-5.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-6.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-7.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-8.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-9.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-10.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-11.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-12.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-13.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-14.jpg',
              '/images/Brillant/NAVY BLUE/titou-photos-15.jpg'
            ]
          },
          {
            color: 'SALMON',
            idColor:'SALMON',
            code: ['#be8e80'],
            images: [
              '/images/Brillant/SALMON/titou-photos-79.jpg',
              '/images/Brillant/SALMON/titou-photos-80.jpg',
              '/images/Brillant/SALMON/titou-photos-81.jpg',
              '/images/Brillant/SALMON/titou-photos-82.jpg',
              '/images/Brillant/SALMON/titou-photos-83.jpg',
              '/images/Brillant/SALMON/titou-photos-84.jpg',
              '/images/Brillant/SALMON/titou-photos-85.jpg',
              '/images/Brillant/SALMON/titou-photos-86.jpg',
              '/images/Brillant/SALMON/titou-photos-87.jpg',
              '/images/Brillant/SALMON/titou-photos-88.jpg',
              '/images/Brillant/SALMON/titou-photos-89.jpg',
              '/images/Brillant/SALMON/titou-photos-90.jpg',
              '/images/Brillant/SALMON/titou-photos-91.jpg',
              '/images/Brillant/SALMON/titou-photos-92.jpg',
              '/images/Brillant/SALMON/titou-photos-93.jpg',
              '/images/Brillant/SALMON/titou-photos-78.jpg',
            ]
          }
        ],
        subtitle:'subtitleRemove',
        price: 249.99,
        currency: '$',
        rating: 4.64,
        sizes: [],
        reviews: 6,
        storage: ['128GB', '256GB', '512GB', '1TB'],
        leaseDurations: [1, 3, 6, 12, 24],
        defaultLeaseDuration: 12,
        features: [
          'A17 Pro chip',
          'Pro camera system',
          'Action button',
          'Always-On display'
        ],
        additionalInfo: {
          care: 'Titou Care, livraison et support inclus.',
          paymentNote: ''
        }
      },
      {
        id: 'mat',
        name: 'Ensemble de 3 valise - Mat',
        colors: [
          {
            color: 'CREAM WITH BLACK ACCESSORIES',
            idColor:'CREAM_WITH_BLACK_ACCESSORIES',
            code: ['#d2ccc0','#000000'],
            images: [
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/82.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/83.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/84.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/85.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/86.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/87.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/88.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/89.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/90.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/91.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/92.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/93.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/94.jpg',
              '/images/Mat/CREAM WITH BLACK ACCESSORIES/95.jpg'
            ]
          },
          {
            color: "CREAM WITH BLUE CHEWING GUM ACCESSORIES",
            idColor:'CREAM_WITH_BLUE_CHEWING_GUM_ACCESSORIES',
            code: ['#d2ccc0', '#8eccdb'],
            images: [
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/110.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/111.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/112.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/113.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/114.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/115.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/116.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/117.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/118.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/119.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/120.jpg",
              "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/121.jpg"
            ]
          },
          {
            color: "CREAM WITH GRAY ACCESSORIES",
            idColor:'CREAM_WITH_GRAY_ACCESSORIES',
            code: ['#d2ccc0','#5f6065'],
            images: [
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/35.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/30.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/31.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/32.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/33.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/34.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/37.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/38.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/39.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/40.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/41.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/42.jpg",
              "/images/Mat/CREAM WITH GRAY ACCESSORIES/29.jpg"
            ]
          },
          {
            color: "CREAM WITH NAVY BLUE ACCESSORIES",
            idColor:'CREAM_WITH_NAVY_BLUE_ACCESSORIES',
            code: ['#d2ccc0','#1f2f48'],
            images: [
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/69.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/70.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/71.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/72.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/73.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/74.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/75.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/76.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/77.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/78.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/79.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/80.jpg",
              "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/81.jpg",
            ]
          },
          {
            color: "GREEN CHEWING GUM WITH BLACK ACCESSORIES",
            idColor:'GREEN_CHEWING_GUM_WITH_BLACK_ACCESSORIES',
            code: ['#94dcd9','#000000'],
            images: [
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/96.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/97.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/98.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/99.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/100.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/101.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/102.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/103.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/104.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/105.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/106.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/107.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/108.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/109.jpg",
            ]
          },
          {
            color: "GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES",
            idColor:'GREEN_CHEWING_GUM_WITH_GREEN_CHEWING_GUM_ACCESSORIES',
            code: ['#94dcd9'],
            images: [
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/44.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/45.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/46.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/47.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/48.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/49.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/50.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/51.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/52.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/53.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/54.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/55.jpg",
              "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/43.jpg",
            ]
          },
          {
            color: "SALMON WITH BLACK ACCESSORIES",
            idColor:'SALMON_WITH_BLACK_ACCESSORIES',
            code: ['#be8e80','#000000'],
            images: [
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/21.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/16.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/17.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/18.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/19.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/20.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/22.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/23.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/24.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/25.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/26.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/27.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/28.jpg",
              "/images/Mat/SALMON WITH BLACK ACCESSORIES/15.jpg",
    
            ]
          },
          {
            color: "SALMON WITH GRAY ACCESSORIES",
            idColor:'SALMON_WITH_GRAY_ACCESSORIES',
            code: ['#be8e80','#5f6065'],
            images: [
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/57.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/58.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/59.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/60.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/61.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/62.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/63.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/64.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/65.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/66.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/67.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/68.jpg",
              "/images/Mat/SALMON WITH GRAY ACCESSORIES/56.jpg",
            ]
          },
          {
            color: "YELLOW WITH BLACK ACCESSORIES",
            idColor:'YELLOW_WITH_BLACK_ACCESSORIES',
            code: ['#e5d01f','#000000'],
            images: [
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/2.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/3.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/4.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/5.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/6.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/7.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/8.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/9.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/10.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/11.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/12.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/13.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/14.jpg",
              "/images/Mat/YELLOW WITH BLACK ACCESSORIES/1.jpg"
            ]
          },
        ],
        subtitle:'subtitlefix',
        price: 199.99,
        currency: '$',
        rating: 4.64,
        sizes: [],
        reviews: 6,
        storage: ['128GB', '256GB', '512GB', '1TB'],
        leaseDurations: [1, 3, 6, 12, 24],
        defaultLeaseDuration: 12,
        features: [
          'A17 Pro chip',
          'Pro camera system',
          'Action button',
          'Always-On display'
        ],
        additionalInfo: {
          care: 'Titou Care, livraison et support inclus.',
          paymentNote: ''
        }
      },
      {
        id: 'multicolor',
        name: 'Ensemble de 3 valise - Multicouleur',
        colors: [
          {
            color: 'BORDEAUX WITH CREAM ACCESSORIES',
            idColor:'BORDEAUX_WITH_CREAM_ACCESSORIES',
            code: ['#621620','#d2ccc0'],
            images: [
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-199.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-200.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-201.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-202.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-203.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-204.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-205.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-206.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-207.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-208.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-209.jpg',
              '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-210.jpg'
            ]
          },
          {
            color: 'CREAM WITH BORDEAUX ACCESSORIES',
            idColor:'CREAM_WITH_BORDEAUX_ACCESSORIES',
            code: ['#d2ccc0','#621620'],
            images: [
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-94.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-95.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-96.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-97.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-98.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-99.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-100.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-101.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-102.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-103.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-104.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-105.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-106.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-107.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-109.jpg',
              '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-110.jpg'
            ]
          },
          {
            color: 'CREAM WITH GREEN CHEWING GUM ACCESSORIES',
            idColor:'CREAM_WITH_GREEN_CHEWING_GUM_ACCESSORIES',
            code: ['#d2ccc0','#94dcd9'],
            images: [
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-142.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-143.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-144.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-145.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-146.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-147.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-148.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-149.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-150.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-151.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-152.jpg',
              '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-153.jpg'
            ]
          },
          {
            color: 'CREAM WITH NAVY BLUE ACCESSORIES',
            idColor:'CREAM_WITH_NAVY_BLUE_ACCESSORIES',
            code: ['#d2ccc0','#1f2f48'],
            images: [
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-33.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-34.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-35.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-36.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-37.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-38.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-39.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-40.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-41.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-42.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-43.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-44.jpg',
              '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-45.jpg'
            ]
          },
          {
            color: 'CREAM WITH RED ACCESSORIES',
            idColor:'CREAM_WITH_RED_ACCESSORIES',
            code: ['#d2ccc0','#FF0000'],
            images: [
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-16.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-17.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-18.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-19.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-20.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-21.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-22.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-23.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-24.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-25.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-26.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-27.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-28.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-29.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-30.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-31.jpg',
              '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-32.jpg',
            ]
          },
          {
            color: 'CREAM WITH TURQUOISE BLUE ACCESSORIES',
            idColor:'CREAM_WITH_TURQUOISE_BLUE_ACCESSORIES',
            code: ['#d2ccc0','#02658c'],
            images: [
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-167.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-168.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-169.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-170.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-171.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-172.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-173.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-174.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-175.jpg',
              '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-166.jpg',
            ]
          },
          {
            color: 'CREAM WITH YELLOW ACCESSORIES',
            idColor:'CREAM_WITH_YELLOW_ACCESSORIES',
            code: ['#d2ccc0','#fccd01'],
            images: [
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-62.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-63.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-64.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-65.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-66.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-67.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-68.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-69.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-70.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-71.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-72.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-73.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-74.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-75.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-76.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-77.jpg',
              '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-61.jpg'
            ]
          },
          {
            color: 'GRAY WITH SALMON ACCESSORIES',
            idColor:'GRAY_WITH_SALMON_ACCESSORIES',
            code: ['#5f6065','#be8e80'],
            images: [
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-211.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-212.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-213.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-214.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-215.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-216.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-217.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-218.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-219.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-220.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-221.jpg',
              '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-222.jpg',
            ]
          },
          {
            color: 'GRAY WITH SKY BLUE ACCESSORIES',
            idColor:'GRAY_WITH_SKY_BLUE_ACCESSORIES',
            code: ['#5f6065','#a9d9e7'],
            images: [
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-177.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-178.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-179.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-180.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-182.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-183.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-184.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-185.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-186.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-187.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-188.jpg',
              '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-176.jpg'
            ]
          },
          {
            color: 'NAVY BLUE WITH CREAM ACCESSORIES',
            idColor:'NAVY_BLUE_WITH_CREAM_ACCESSORIES',
            code: ['#1f2f48','#d2ccc0'],
            images: [
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-46.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-47.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-48.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-49.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-50.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-51.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-52.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-53.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-54.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-55.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-56.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-57.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-58.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-59.jpg',
              '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-60.jpg'
            ]
          },
          {
            color: 'NAVY BLUE WITH SALMON ACCESSORIES',
            idColor:'NAVY_BLUE_WITH_SALMON_ACCESSORIES',
            code: ['#1f2f48','#be8e80'],
            images: [
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-16.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-17.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-18.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-19.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-20.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-21.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-22.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-23.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-24.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-25.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-26.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-27.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-28.jpg',
              '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-15.jpg'
            ]
          },
          {
            color: 'SALMON WITH CREAM ACCESSORIES',
            idColor:'SALMON_WITH_CREAM_ACCESSORIES',
            code: ['#be8e80','#d2ccc0'],
            images: [
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-132.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-131.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-133.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-134.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-135.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-136.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-137.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-138.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-139.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-140.jpg',
              '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-141.jpg'
            ]
          },
          {
            color: 'SALMON WITH GRAY ACCESSORIES',
            idColor:'SALMON_WITH_GRAY_ACCESSORIES',
            code: ['#be8e80','#5f6065'],
            images: [
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-111.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-112.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-113.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-114.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-115.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-116.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-117.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-118.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-119.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-120.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-121.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-122.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-123.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-124.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-125.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-126.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-127.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-128.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-129.jpg',
              '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-130.jpg'
            ]
          },
          {
            color: 'SALMON WITH NAVY BLUE ACCESSORIES',
            idColor:'SALMON_WITH_NAVY_BLUE_ACCESSORIES',
            code: ['#be8e80','#1f2f48'],
            images: [
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-2.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-3.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-4.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-5.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-6.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-7.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-8.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-9.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-10.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-11.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-12.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-13.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-14.jpg',
              '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-1.jpg'
            ]
          }
          
        ],
        subtitle:'subtitleRemove',
        price: 299.99,
        currency: '$',
        rating: 4.64,
        sizes: [],
        reviews: 6,
        storage: ['128GB', '256GB', '512GB', '1TB'],
        leaseDurations: [1, 3, 6, 12, 24],
        defaultLeaseDuration: 12,
        features: [
          'A17 Pro chip',
          'Pro camera system',
          'Action button',
          'Always-On display'
        ],
        additionalInfo: {
          care: 'Titou Care, livraison et support inclus.',
          paymentNote: ''
        }
      }
    ], 
    PreferedLanguage:''
  }, 
  SA:{ categories: [
    {
      id: 'brillant',
      name: 'Ensemble de 3 valise - Brilliant',
      colors: [
        {
          color: 'BLACK',
          idColor:'BLACK',
          code: ['#000000'],
          images: [
            '/images/Brillant/Black/1.png',
            '/images/Brillant/Black/2.png',
            '/images/Brillant/Black/3.png',
            '/images/Brillant/Black/4.png',
            '/images/Brillant/Black/5.png'
          ]
        },
        {
          color: 'BLUE CHEWING',
          idColor:'BLUE_CHEWING',
          code: ['#79c8c3'],
          images: [
            '/images/Brillant/blue_2/1.png',
            '/images/Brillant/blue_2/2.png',
            '/images/Brillant/blue_2/3.png',
            '/images/Brillant/blue_2/4.png',
            '/images/Brillant/blue_2/5.png',
          ]
        },
        {
          color: 'BORDEAUX',
          idColor:'BORDEAUX',
          code: ['#621620'],
          images: [
            '/images/Brillant/BORDEAUX/titou-photos-190.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-191.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-192.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-193.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-194.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-195.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-196.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-197.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-198.jpg',
            '/images/Brillant/BORDEAUX/titou-photos-189.jpg',
          ]
        },
        {
          color: 'CREAM',
          idColor:'BORDEAUX',
          code: ['#d2ccc0'],
          images: [
            '/images/Brillant/CREAM/titou-photos-155.jpg',
            '/images/Brillant/CREAM/titou-photos-156.jpg',
            '/images/Brillant/CREAM/titou-photos-157.jpg',
            '/images/Brillant/CREAM/titou-photos-158.jpg',
            '/images/Brillant/CREAM/titou-photos-159.jpg',
            '/images/Brillant/CREAM/titou-photos-160.jpg',
            '/images/Brillant/CREAM/titou-photos-161.jpg',
            '/images/Brillant/CREAM/titou-photos-162.jpg',
            '/images/Brillant/CREAM/titou-photos-163.jpg',
            '/images/Brillant/CREAM/titou-photos-164.jpg',
            '/images/Brillant/CREAM/titou-photos-165.jpg',
            '/images/Brillant/CREAM/titou-photos-154.jpg'
          ]
        },
        {
          color: 'NAVY BLUE',
          idColor:'NAVY_BLUE',
          code: ['#1f2f48'],
          images: [
            '/images/Brillant/NAVY BLUE/titou-photos-1.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-2.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-3.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-4.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-5.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-6.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-7.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-8.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-9.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-10.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-11.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-12.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-13.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-14.jpg',
            '/images/Brillant/NAVY BLUE/titou-photos-15.jpg'
          ]
        },
        {
          color: 'SALMON',
          idColor:'SALMON',
          code: ['#be8e80'],
          images: [
            '/images/Brillant/SALMON/titou-photos-79.jpg',
            '/images/Brillant/SALMON/titou-photos-80.jpg',
            '/images/Brillant/SALMON/titou-photos-81.jpg',
            '/images/Brillant/SALMON/titou-photos-82.jpg',
            '/images/Brillant/SALMON/titou-photos-83.jpg',
            '/images/Brillant/SALMON/titou-photos-84.jpg',
            '/images/Brillant/SALMON/titou-photos-85.jpg',
            '/images/Brillant/SALMON/titou-photos-86.jpg',
            '/images/Brillant/SALMON/titou-photos-87.jpg',
            '/images/Brillant/SALMON/titou-photos-88.jpg',
            '/images/Brillant/SALMON/titou-photos-89.jpg',
            '/images/Brillant/SALMON/titou-photos-90.jpg',
            '/images/Brillant/SALMON/titou-photos-91.jpg',
            '/images/Brillant/SALMON/titou-photos-92.jpg',
            '/images/Brillant/SALMON/titou-photos-93.jpg',
            '/images/Brillant/SALMON/titou-photos-78.jpg',
          ]
        }
      ],
      subtitle:'subtitleRemove',
      price: 399.00,
      currency: 'SAR',
      rating: 4.64,
      sizes: [],
      reviews: 6,
      storage: ['128GB', '256GB', '512GB', '1TB'],
      leaseDurations: [1, 3, 6, 12, 24],
      defaultLeaseDuration: 12,
      features: [
        'A17 Pro chip',
        'Pro camera system',
        'Action button',
        'Always-On display'
      ],
      additionalInfo: {
        care: 'Titou Care, livraison et support inclus.',
        paymentNote: ''
      }
    },
    {
      id: 'mat',
      name: 'Ensemble de 3 valise - Mat',
      colors: [
        {
          color: 'CREAM WITH BLACK ACCESSORIES',
          idColor:'CREAM_WITH_BLACK_ACCESSORIES',
          code: ['#d2ccc0','#000000'],
          images: [
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/82.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/83.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/84.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/85.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/86.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/87.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/88.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/89.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/90.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/91.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/92.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/93.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/94.jpg',
            '/images/Mat/CREAM WITH BLACK ACCESSORIES/95.jpg'
          ]
        },
        {
          color: "CREAM WITH BLUE CHEWING GUM ACCESSORIES",
          idColor:'CREAM_WITH_BLUE_CHEWING_GUM_ACCESSORIES',
          code: ['#d2ccc0', '#8eccdb'],
          images: [
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/110.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/111.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/112.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/113.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/114.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/115.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/116.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/117.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/118.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/119.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/120.jpg",
            "/images/Mat/CREAM WITH BLUE CHEWING GUM ACCESSORIES/121.jpg"
          ]
        },
        {
          color: "CREAM WITH GRAY ACCESSORIES",
          idColor:'CREAM_WITH_GRAY_ACCESSORIES',
          code: ['#d2ccc0','#5f6065'],
          images: [
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/35.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/30.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/31.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/32.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/33.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/34.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/37.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/38.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/39.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/40.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/41.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/42.jpg",
            "/images/Mat/CREAM WITH GRAY ACCESSORIES/29.jpg"
          ]
        },
        {
          color: "CREAM WITH NAVY BLUE ACCESSORIES",
          idColor:'CREAM_WITH_NAVY_BLUE_ACCESSORIES',
          code: ['#d2ccc0','#1f2f48'],
          images: [
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/69.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/70.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/71.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/72.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/73.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/74.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/75.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/76.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/77.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/78.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/79.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/80.jpg",
            "/images/Mat/CREAM WITH NAVY BLUE ACCESSORIES/81.jpg",
          ]
        },
        {
          color: "GREEN CHEWING GUM WITH BLACK ACCESSORIES",
          idColor:'GREEN_CHEWING_GUM_WITH_BLACK_ACCESSORIES',
          code: ['#94dcd9','#000000'],
          images: [
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/96.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/97.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/98.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/99.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/100.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/101.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/102.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/103.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/104.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/105.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/106.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/107.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/108.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH BLACK ACCESSORIES/109.jpg",
          ]
        },
        {
          color: "GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES",
          idColor:'GREEN_CHEWING_GUM_WITH_GREEN_CHEWING_GUM_ACCESSORIES',
          code: ['#94dcd9'],
          images: [
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/44.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/45.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/46.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/47.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/48.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/49.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/50.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/51.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/52.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/53.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/54.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/55.jpg",
            "/images/Mat/GREEN CHEWING GUM WITH GREEN CHEWING GUM ACCESSORIES/43.jpg",
          ]
        },
        {
          color: "SALMON WITH BLACK ACCESSORIES",
          idColor:'SALMON_WITH_BLACK_ACCESSORIES',
          code: ['#be8e80','#000000'],
          images: [
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/21.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/16.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/17.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/18.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/19.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/20.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/22.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/23.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/24.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/25.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/26.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/27.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/28.jpg",
            "/images/Mat/SALMON WITH BLACK ACCESSORIES/15.jpg",
  
          ]
        },
        {
          color: "SALMON WITH GRAY ACCESSORIES",
          idColor:'SALMON_WITH_GRAY_ACCESSORIES',
          code: ['#be8e80','#5f6065'],
          images: [
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/57.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/58.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/59.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/60.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/61.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/62.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/63.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/64.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/65.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/66.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/67.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/68.jpg",
            "/images/Mat/SALMON WITH GRAY ACCESSORIES/56.jpg",
          ]
        },
        {
          color: "YELLOW WITH BLACK ACCESSORIES",
          idColor:'YELLOW_WITH_BLACK_ACCESSORIES',
          code: ['#e5d01f','#000000'],
          images: [
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/2.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/3.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/4.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/5.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/6.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/7.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/8.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/9.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/10.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/11.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/12.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/13.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/14.jpg",
            "/images/Mat/YELLOW WITH BLACK ACCESSORIES/1.jpg"
          ]
        },
      ],
      subtitle:'subtitlefix',
      price: 349.00,
      currency: 'SAR',
      rating: 4.64,
      sizes: [],
      reviews: 6,
      storage: ['128GB', '256GB', '512GB', '1TB'],
      leaseDurations: [1, 3, 6, 12, 24],
      defaultLeaseDuration: 12,
      features: [
        'A17 Pro chip',
        'Pro camera system',
        'Action button',
        'Always-On display'
      ],
      additionalInfo: {
        care: 'Titou Care, livraison et support inclus.',
        paymentNote: ''
      }
    },
    {
      id: 'multicolor',
      name: 'Ensemble de 3 valise - Multicouleur',
      colors: [
        {
          color: 'BORDEAUX WITH CREAM ACCESSORIES',
          idColor:'BORDEAUX_WITH_CREAM_ACCESSORIES',
          code: ['#621620','#d2ccc0'],
          images: [
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-199.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-200.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-201.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-202.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-203.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-204.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-205.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-206.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-207.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-208.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-209.jpg',
            '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-210.jpg'
          ]
        },
        {
          color: 'CREAM WITH BORDEAUX ACCESSORIES',
          idColor:'CREAM_WITH_BORDEAUX_ACCESSORIES',
          code: ['#d2ccc0','#621620'],
          images: [
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-94.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-95.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-96.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-97.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-98.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-99.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-100.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-101.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-102.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-103.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-104.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-105.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-106.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-107.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-109.jpg',
            '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-110.jpg'
          ]
        },
        {
          color: 'CREAM WITH GREEN CHEWING GUM ACCESSORIES',
          idColor:'CREAM_WITH_GREEN_CHEWING_GUM_ACCESSORIES',
          code: ['#d2ccc0','#94dcd9'],
          images: [
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-142.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-143.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-144.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-145.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-146.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-147.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-148.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-149.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-150.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-151.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-152.jpg',
            '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-153.jpg'
          ]
        },
        {
          color: 'CREAM WITH NAVY BLUE ACCESSORIES',
          idColor:'CREAM_WITH_NAVY_BLUE_ACCESSORIES',
          code: ['#d2ccc0','#1f2f48'],
          images: [
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-33.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-34.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-35.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-36.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-37.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-38.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-39.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-40.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-41.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-42.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-43.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-44.jpg',
            '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-45.jpg'
          ]
        },
        {
          color: 'CREAM WITH RED ACCESSORIES',
          idColor:'CREAM_WITH_RED_ACCESSORIES',
          code: ['#d2ccc0','#FF0000'],
          images: [
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-16.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-17.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-18.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-19.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-20.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-21.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-22.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-23.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-24.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-25.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-26.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-27.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-28.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-29.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-30.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-31.jpg',
            '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-32.jpg',
          ]
        },
        {
          color: 'CREAM WITH TURQUOISE BLUE ACCESSORIES',
          idColor:'CREAM_WITH_TURQUOISE_BLUE_ACCESSORIES',
          code: ['#d2ccc0','#02658c'],
          images: [
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-167.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-168.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-169.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-170.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-171.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-172.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-173.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-174.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-175.jpg',
            '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-166.jpg',
          ]
        },
        {
          color: 'CREAM WITH YELLOW ACCESSORIES',
          idColor:'CREAM_WITH_YELLOW_ACCESSORIES',
          code: ['#d2ccc0','#fccd01'],
          images: [
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-62.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-63.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-64.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-65.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-66.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-67.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-68.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-69.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-70.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-71.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-72.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-73.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-74.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-75.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-76.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-77.jpg',
            '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-61.jpg'
          ]
        },
        {
          color: 'GRAY WITH SALMON ACCESSORIES',
          idColor:'GRAY_WITH_SALMON_ACCESSORIES',
          code: ['#5f6065','#be8e80'],
          images: [
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-211.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-212.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-213.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-214.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-215.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-216.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-217.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-218.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-219.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-220.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-221.jpg',
            '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-222.jpg',
          ]
        },
        {
          color: 'GRAY WITH SKY BLUE ACCESSORIES',
          idColor:'GRAY_WITH_SKY_BLUE_ACCESSORIES',
          code: ['#5f6065','#a9d9e7'],
          images: [
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-177.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-178.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-179.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-180.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-182.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-183.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-184.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-185.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-186.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-187.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-188.jpg',
            '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-176.jpg'
          ]
        },
        {
          color: 'NAVY BLUE WITH CREAM ACCESSORIES',
          idColor:'NAVY_BLUE_WITH_CREAM_ACCESSORIES',
          code: ['#1f2f48','#d2ccc0'],
          images: [
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-46.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-47.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-48.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-49.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-50.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-51.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-52.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-53.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-54.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-55.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-56.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-57.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-58.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-59.jpg',
            '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-60.jpg'
          ]
        },
        {
          color: 'NAVY BLUE WITH SALMON ACCESSORIES',
          idColor:'NAVY_BLUE_WITH_SALMON_ACCESSORIES',
          code: ['#1f2f48','#be8e80'],
          images: [
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-16.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-17.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-18.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-19.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-20.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-21.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-22.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-23.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-24.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-25.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-26.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-27.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-28.jpg',
            '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-15.jpg'
          ]
        },
        {
          color: 'SALMON WITH CREAM ACCESSORIES',
          idColor:'SALMON_WITH_CREAM_ACCESSORIES',
          code: ['#be8e80','#d2ccc0'],
          images: [
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-132.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-131.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-133.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-134.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-135.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-136.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-137.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-138.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-139.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-140.jpg',
            '/images/Multicouleur/SALMON WITH CREAM ACCESSORIES/titou-photos-141.jpg'
          ]
        },
        {
          color: 'SALMON WITH GRAY ACCESSORIES',
          idColor:'SALMON_WITH_GRAY_ACCESSORIES',
          code: ['#be8e80','#5f6065'],
          images: [
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-111.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-112.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-113.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-114.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-115.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-116.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-117.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-118.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-119.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-120.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-121.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-122.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-123.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-124.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-125.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-126.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-127.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-128.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-129.jpg',
            '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-130.jpg'
          ]
        },
        {
          color: 'SALMON WITH NAVY BLUE ACCESSORIES',
          idColor:'SALMON_WITH_NAVY_BLUE_ACCESSORIES',
          code: ['#be8e80','#1f2f48'],
          images: [
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-2.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-3.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-4.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-5.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-6.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-7.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-8.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-9.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-10.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-11.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-12.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-13.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-14.jpg',
            '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-1.jpg'
          ]
        }
        
      ],
      subtitle:'subtitleRemove',
      price: 399.00,
      currency: 'SAR',
      rating: 4.64,
      sizes: [],
      reviews: 6,
      storage: ['128GB', '256GB', '512GB', '1TB'],
      leaseDurations: [1, 3, 6, 12, 24],
      defaultLeaseDuration: 12,
      features: [
        'A17 Pro chip',
        'Pro camera system',
        'Action button',
        'Always-On display'
      ],
      additionalInfo: {
        care: 'Titou Care, livraison et support inclus.',
        paymentNote: ''
      }
    }
  ], 
  PreferedLanguage:''}, 
  TN:{ categories: [], PreferedLanguage:''}, 
  US:{ categories: [], PreferedLanguage:''}, 
  FR:{ categories: [], PreferedLanguage:''}, 
  MA:{ categories: [], PreferedLanguage:''}
} 
