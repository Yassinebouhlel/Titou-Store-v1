export function formatCurrency(amount: string | number, currencyCode: string) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "symbol", // Show currency symbol ($, €, د.ت)
      minimumFractionDigits: 2,
    }).format(Number(amount)) + ` ${currencyCode}`; // Append code like "$ 129.99 USD"
  }