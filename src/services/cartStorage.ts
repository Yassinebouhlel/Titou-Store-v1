export const CART_KEY = 'cartItems';

// Get cart items from local storage
export const getCartItems = () => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

// Save cart items to local storage
export const saveCartItems = (items: any[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }
};

// Add an item to the cart
export const addItemToCart = (item: any) => {
  const currentCart = getCartItems();
  const updatedCart = [...currentCart, item];
  saveCartItems(updatedCart);
};