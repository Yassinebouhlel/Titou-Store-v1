export function getSelectedStore(): string | null {
  if (typeof document === 'undefined') {
      return null; // Prevents errors when running on the server
  }

  const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith("selectedStore="));

  return match ? match.split("=")[1] : null;
}