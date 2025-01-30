"use client";
import { useParams } from "next/navigation";
import ProductOnePage from "@/components/Product";
import { data } from "@/constant/config";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductTabs from "@/components/ProductTabs";
import ReviewSection from "@/components/ReviewSection";
import ProductCarousel from "@/components/product-carousel";

export default function ProductPage() {
  const t = useTranslations("Product");
  const { productId } = useParams();
  // const productIndex =
  //   productId === "brillant" ? 0 : productId === "mat" ? 1 : 2;
  const productIndex = 
    productId === "brillant" ? 0 
    : productId === "mat" ? 1 
    : productId === "multicolor" ? 2
    : 3;

  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState(true);

  function getSelectedStore() {
    // Find the 'selectedStore' cookie in document.cookie
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith("selectedStore="));
    // If found, return the value after '=', otherwise return null
    return match ? match.split("=")[1] : null;
  }

  useEffect(() => {
    // Retrieve the selected country from localStorage (or any global state management method you prefer)
    const selectedCountry = getSelectedStore() || "TN";
    // setProducts(data[selectedCountry].categories[productIndex]);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    const collectionId = data[selectedCountry].categories[productIndex].shopifyId
    const shopifyStorefrontUrl = "https://v1dj9z-e5.myshopify.com/api/2023-10/graphql.json";
    const accessToken = "ce8754195ee3bf24158bff3879689518";
    
    fetchCollectionById(collectionId, shopifyStorefrontUrl, accessToken)
      .then(collection => console.log("collection",collection))
      .catch(error => console.error(error));
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  // Empty dependency array ensures the effect runs only once

  async function fetchCollectionById(collectionId: string, shopifyStorefrontUrl: string, accessToken: string) {
    const query = `
      query getCollectionById($id: ID!) {
        collection(id: $id) {
          id
          title
          description
          seo {
            title
            description
          }
          products(first: 100) {
            edges {
              node {
                id
                title
                description
                options {
                  name
                  values
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                      }
                    }
                  }
                }
                images(first: 15) {
                  edges {
                    node {
                    transformedSrc(preferredContentType: WEBP)
                      src
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
  
    const variables = { id: collectionId };
  
    try {
      const response = await fetch(shopifyStorefrontUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": accessToken,
        },
        body: JSON.stringify({ query, variables }),
      });
  
      const data = await response.json();

      const shopifyData = data.data.collection.products.edges
      let re = transformShopifyData(shopifyData)

      setProducts(re)
      return data.data.collection;
    } catch (error) {
      console.error("Error fetching collection:", error);
      return null;
    }
  }
  
  function transformShopifyData(shopifyProducts: any[]) {
    // Base product structure
    const transformedProduct = {
        id: 'brilliant',
        name: '',
        colors: [] as any[],
        subtitle: 'subtitleRemove',
        price: 0,
        currency: '$ CAD',
        rating: 4.64,
        sizes: [],
        reviews: 6,
        additionalInfo: {
            care: 'Titou Care, livraison et support inclus.',
            paymentNote: ''
        }
    };

    // Process each product
    shopifyProducts.forEach(product => {
        const colorOption = product.node.options.find((opt: { name: string; }) => opt.name === 'Color');
        const colorCodeOption = product.node.options.find((opt: { name: string; }) => opt.name === 'color_code');

        if (!colorOption || !colorCodeOption) return;

        // Collect all color codes for this product
        const colorCodes = colorCodeOption.values;

        // Create a single color entry for the product with all color codes
        transformedProduct.colors.push({
            color: colorOption.values.join(', ').toUpperCase(), // Combine all color names
            idColor: colorOption.values.join('_').toUpperCase(), // Combine all color names for ID
            code: colorCodes, // Array of all color codes
            images: product.node.images.edges.map((img: { node: { transformedSrc: any; }; }) => img.node.transformedSrc),
            shopifyVarId: product.node.variants.edges[0].node.id, // Use the first variant ID
        });
        // Set product name and price from first variant (if not already set)
        if (!transformedProduct.name) {
            transformedProduct.name = product.node.title;
            transformedProduct.price = parseFloat(
                product.node.variants.edges[0].node.price.amount
            );
        }
    });

    return transformedProduct;
}


  return (
    <div>
      <section className="bg-primary px-2 pt-20 ">
        {loading ? (
          <div className="animate-pulse">
            {/* Skeleton for ProductOnePage */}
            <div className="container mx-auto px-4 py-8 mb-12 animate-pulse">
              <nav className="mb-4 text-sm">
                <ol className="inline-flex list-none p-0">
                  <li className="flex items-center">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <svg
                      className="mx-3 h-3 w-3 fill-current text-gray-300"
                      viewBox="0 0 320 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                  </li>
                  <li className="flex items-center">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <svg
                      className="mx-3 h-3 w-3 fill-current text-gray-300"
                      viewBox="0 0 320 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                  </li>
                  <li>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </li>
                </ol>
              </nav>

              <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                className="flex flex-col gap-8 md:flex-row"
              >
                <div className="md:w-1/2">
                  <div className="relative w-full overflow-hidden rounded-3xl bg-gray-200 h-[500px]"></div>
                  <div className="mt-4 flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-3 bg-gray-300 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-10 w-full bg-gray-200 rounded"></div>
                    <div className="h-32 w-full bg-gray-200 rounded"></div>
                  </div>

                  <div className="mt-4">
                    <div className="h-6 w-24 bg-gray-200 rounded mb-2"></div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 w-8 bg-gray-300 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="h-10 w-full bg-gray-200 rounded mt-6"></div>

                  <div className="border-t border-b border-gray-300 px-6 py-4 mt-6">
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-20 w-full bg-gray-200 rounded mt-4"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skeletons for the flex container */}
            <div className="relative flex flex-col sm:flex-row justify-between items-center h-auto bg-[#f0e7d5] py-10 px-5 mb-8">
              {/* Free Shipping Skeleton */}
              <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
                <div className="h-24 w-24 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="w-[60px] h-[3px] bg-gray-400 mt-2 mb-4"></div>
                <div className="h-4 w-56 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 w-48 bg-gray-300 rounded"></div>
              </div>

              {/* Free Return Skeleton */}
              <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
                <div className="h-24 w-24 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="w-[60px] h-[3px] bg-gray-400 mt-2 mb-4"></div>
                <div className="h-4 w-56 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 w-48 bg-gray-300 rounded"></div>
              </div>

              {/* Warranty Skeleton */}
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 bg-gray-300 rounded-full mb-4"></div>
                <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="w-[60px] h-[3px] bg-gray-400 mt-2 mb-4"></div>
                <div className="h-4 w-56 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 w-48 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ProductOnePage product={products} />
            <div className="flex justify-center">
              <div className="flex flex-col w-full px-6 sm:flex-row bg-[#f0e7d5] mb-8 gap-8">
                <ProductTabs />
              </div>
            </div>
            <div className="flex justify-center mb-8">
              
                <ReviewSection />
              
            </div>
            <div className="flex justify-center mb-8">
              <div className="relative w-full overflow-hidden rounded-custom-card bg-[#F0E7D5] pb-4 mb-8">
                <h1 className="px-20 py-10 text-center text-3xl">Shop Related Items</h1>
                <ProductCarousel />
              </div> 
            </div>
            
            <div className="flex flex-col sm:flex-row bg-[#f0e7d5] py-10 px-5 mb-8 gap-8">
              {/* Free Shipping */}
              <div className="flex-1 flex flex-col items-center text-center">
                <FaShippingFast className="text-6xl mb-4" />
                <h1 className="text-black text-[30px] sm:text-[40px] font-bold uppercase tracking-wide">
                  {t("Shipping")}
                </h1>
                <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
                <p className="text-[14px] sm:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
                  {t("ShippingDescription")}
                </p>
              </div>

              {/* Free return */}
              <div className="flex-1 flex flex-col items-center text-center">
                <TbTruckReturn className="text-7xl mb-4" />
                <h1 className="text-black text-[30px] sm:text-[40px] font-bold uppercase tracking-wide">
                  {t("Return")}
                </h1>
                <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
                <p className="text-[14px] sm:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
                  {t("ReturnDescription")}
                </p>
              </div>

              {/* Warranty */}
              <div className="flex-1 flex flex-col items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z"
                  />
                </svg>
                <h1 className="text-black text-[30px] sm:text-[40px] font-bold uppercase tracking-wide">
                  {t("Warranty")}
                </h1>
                <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
                <p className="text-[14px] sm:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
                  {t("WarrantyDescription")}
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
