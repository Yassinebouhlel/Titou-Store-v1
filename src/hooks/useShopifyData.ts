import { useState, useEffect } from "react";

interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  images: { edges: { node: { transformedSrc: string; altText: string } }[] };
  variants: { 
    edges: { 
      node: { 
        id: string; 
        title: string; 
        price: { amount: string; currencyCode: string };
        compareAtPrice?: { amount: string; currencyCode: string };
      } 
    }[] 
  };
  options: { name: string; values: string[] }[];
}

interface ShopifyCollection {
  id: string;
  title: string;
  description: string;
  products: { edges: { node: ShopifyProduct }[] };
}

interface ShopifyResponse {
  data?: { collections: { edges: { node: ShopifyCollection }[] } };
  errors?: { message: string }[];
}

export const useShopifyData = (countryCode: string = "US") => {
  const [shopifyData, setData] = useState<ShopifyCollection[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const shopifyStorefrontUrl = "https://v1dj9z-e5.myshopify.com/api/2023-10/graphql.json";
  const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN || "your-access-token-here";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const query = `
          query getAllCollections($country: CountryCode!) @inContext(country: $country) {
            collections(first: 100) {
              edges {
                node {
                  id
                  title
                  description
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
                                currencyCode
                              }
                              compareAtPrice {
                                amount
                                currencyCode
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
            }
          }
        `;

        const response = await fetch(shopifyStorefrontUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": accessToken,
          },
          body: JSON.stringify({
            query,
            variables: { country: countryCode },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result: ShopifyResponse = await response.json();

        if (result.errors) {
          throw new Error(result.errors.map(err => err.message).join(", "));
        }

        setData(result.data?.collections.edges.map(edge => edge.node) || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countryCode]);

  return { shopifyData, loading, error };
};
