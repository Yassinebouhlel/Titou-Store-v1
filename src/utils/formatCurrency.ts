export function formatCurrency(amount: string | number, currencyCode: string) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
  });

  let formatted = formatter.format(Number(amount));

  // Extract only the numeric value (remove symbols)
  const numericPart = formatted.replace(/[^\d.,]/g, "").trim();

  // If the formatted string already contains the currency code, return as-is
  if (formatted.includes(currencyCode)) {
    return formatted;
  }

  // Otherwise, return the correct format without duplication
  return `${formatted.replace(numericPart, "").trim()}${numericPart}`;
}
