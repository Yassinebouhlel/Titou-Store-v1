import {Metadata} from 'next';

type Category = {
  id: string;
  name: string;
  colors: Array<{
    color: string;
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
        code: ['#621620','#d2ccc0'],
        images: [
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-199.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-200.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-201.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-202.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-203.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-204.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-205.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-206.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-207.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-208.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-209.JPG',
          '/images/Multicouleur/BORDEAUX WITH CREAM ACCESSORIES/titou-photos-210.JPG'
        ]
      },
      {
        color: 'CREAM WITH BORDEAUX ACCESSORIES',
        code: ['#d2ccc0','#621620'],
        images: [
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-94.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-95.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-96.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-97.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-98.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-99.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-100.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-101.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-102.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-103.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-104.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-105.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-106.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-107.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-109.JPG',
          '/images/Multicouleur/CREAM WITH BORDEAUX ACCESSORIES/titou-photos-110.JPG'
        ]
      },
      {
        color: 'CREAM WITH GREEN CHEWING GUM ACCESSORIES',
        code: ['#d2ccc0','#94dcd9'],
        images: [
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-142.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-143.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-144.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-145.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-146.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-147.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-148.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-149.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-150.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-151.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-152.JPG',
          '/images/Multicouleur/CREAM WITH GREEN CHEWING GUM ACCESSORIES/titou-photos-153.JPG'
        ]
      },
      {
        color: 'CREAM WITH NAVY BLUE ACCESSORIES',
        code: ['#d2ccc0','#1f2f48'],
        images: [
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-33.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-34.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-35.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-36.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-37.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-38.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-39.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-40.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-41.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-42.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-43.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-44.JPG',
          '/images/Multicouleur/CREAM WITH NAVY BLUE ACCESSORIES/titou-photos-45.JPG'
        ]
      },
      {
        color: 'CREAM WITH RED ACCESSORIES',
        code: ['#d2ccc0','#FF0000'],
        images: [
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-16.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-17.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-18.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-19.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-20.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-21.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-22.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-23.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-24.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-25.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-26.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-27.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-28.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-29.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-30.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-31.JPG',
          '/images/Multicouleur/CREAM WITH RED ACCESSORIES/titou-photos-32.JPG',
        ]
      },
      {
        color: 'CREAM WITH TURQUOISE BLUE ACCESSORIES',
        code: ['#d2ccc0','#02658c'],
        images: [
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-167.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-168.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-169.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-170.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-171.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-172.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-173.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-174.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-175.JPG',
          '/images/Multicouleur/CREAM WITH TURQUOISE BLUE ACCESSORIES/titou-photos-166.JPG',
        ]
      },
      {
        color: 'CREAM WITH YELLOW ACCESSORIES',
        code: ['#d2ccc0','#fccd01'],
        images: [
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-62.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-63.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-64.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-65.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-66.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-67.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-68.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-69.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-70.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-71.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-72.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-73.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-74.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-75.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-76.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-77.JPG',
          '/images/Multicouleur/CREAM WITH YELLOW ACCESSORIES/titou-photos-61.JPG'
        ]
      },
      {
        color: 'GRAY WITH SALMON ACCESSORIES',
        code: ['#5f6065','#be8e80'],
        images: [
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-211.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-212.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-213.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-214.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-215.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-216.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-217.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-218.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-219.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-220.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-221.JPG',
          '/images/Multicouleur/GRAY WITH SALMON ACCESSORIES/titou-photos-222.JPG',
        ]
      },
      {
        color: 'GRAY WITH SKY BLUE ACCESSORIES',
        code: ['#5f6065','#a9d9e7'],
        images: [
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-177.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-178.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-179.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-180.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-182.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-183.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-184.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-185.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-186.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-187.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-188.JPG',
          '/images/Multicouleur/GRAY WITH SKY BLUE ACCESSORIES/titou-photos-176.JPG'
        ]
      },
      {
        color: 'NAVY BLUE WITH CREAM ACCESSORIES',
        code: ['#1f2f48','#d2ccc0'],
        images: [
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-46.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-47.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-48.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-49.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-50.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-51.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-52.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-53.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-54.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-55.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-56.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-57.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-58.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-59.JPG',
          '/images/Multicouleur/NAVY BLUE WITH CREAM ACCESSORIES/titou-photos-60.JPG'
        ]
      },
      {
        color: 'NAVY BLUE WITH SALMON ACCESSORIES',
        code: ['#1f2f48','#be8e80'],
        images: [
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-16.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-17.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-18.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-19.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-20.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-21.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-22.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-23.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-24.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-25.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-26.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-27.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-28.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/démontabe-15.JPG'
        ]
      },
      {
        color: 'SALMON WITH CREAM ACCESSORIES',
        code: ['#be8e80','#d2ccc0'],
        images: [
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-132.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-131.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-133.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-134.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-135.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-136.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-137.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-138.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-139.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-140.JPG',
          '/images/Multicouleur/NAVY BLUE WITH SALMON ACCESSORIES/titou-photos-141.JPG'
        ]
      },
      {
        color: 'SALMON WITH GRAY ACCESSORIES',
        code: ['#be8e80','#5f6065'],
        images: [
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-111.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-112.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-113.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-114.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-115.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-116.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-117.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-118.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-119.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-120.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-121.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-122.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-123.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-124.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-125.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-126.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-127.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-128.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-129.JPG',
          '/images/Multicouleur/SALMON WITH GRAY ACCESSORIES/titou-photos-130.JPG'
        ]
      },
      {
        color: 'SALMON WITH NAVY BLUE ACCESSORIES',
        code: ['#be8e80','#1f2f48'],
        images: [
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-2.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-3.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-4.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-5.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-6.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-7.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-8.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-9.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-10.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-11.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-12.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-13.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-14.JPG',
          '/images/Multicouleur/SALMON WITH NAVY BLUE ACCESSORIES/démontabe-1.JPG'
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
