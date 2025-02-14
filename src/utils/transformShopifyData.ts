
import { formatCurrency } from "@/utils/formatCurrency";
export function transformShopifyData(shopifyProducts: any[]) {
    const transformedProduct = {
        id: 'brilliant',
        name: '',
        colors: [] as any[],
        subtitle: 'subtitleRemove',
        price: '',
        originalPrice: '',
        currency: '',
        rating: 4.64,
        sizes: [],
        reviews: 6,
        additionalInfo: {
            care: 'Titou Care, livraison et support inclus.',
            paymentNote: ''
        }
    };
console.log('This is shopify products', shopifyProducts)
    shopifyProducts.forEach(product => {
        const colorOption = product.node.options.find((opt: { name: string; }) => opt.name === 'color_description');
        const colorCodeOption = product.node.options.find((opt: { name: string; }) => opt.name === 'color_code');
        function processColorCodes(colorCodeObject: { values: string[] }): string[] {
            let processedColors: string[] = [];
            const colorCodeString = colorCodeObject.values[0];

            if (colorCodeString.split('#').length - 1 === 2) {
                processedColors = colorCodeString
                    .split('#')
                    .filter(Boolean)
                    .map((color: string) => `#${color}`);
            } else {
                processedColors = colorCodeObject.values;
            }
            return processedColors;
        }

        if (!colorOption || !colorCodeOption) return;
        
        const colorCodes = processColorCodes(colorCodeOption);
       
        transformedProduct.colors.push({
            color: colorOption.values.join(', ').toUpperCase(),
            idColor: colorOption.values.join('_').toUpperCase(),
            code: colorCodes,
            images: product.node.images.edges.map((img: { node: { transformedSrc: any; }; }) => img.node.transformedSrc),
            shopifyVarId: product.node.variants.edges[0].node.id,
        });

        if (!transformedProduct.name) {
            transformedProduct.id = product.node.title.split(" - ")[1];
            console.log('transformedProduct.id', transformedProduct.id)
            transformedProduct.name = product.node.title;
            transformedProduct.price = formatCurrency(product.node.variants.edges[0].node.price.amount , product.node.variants.edges[0].node.price.currencyCode);
            transformedProduct.originalPrice = formatCurrency(product.node.variants.edges[0].node.compareAtPrice.amount , product.node.variants.edges[0].node.price.currencyCode);
        }
    });

    return transformedProduct;
}