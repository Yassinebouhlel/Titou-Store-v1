"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCartItems, saveCartItems } from '@/services/cartStorage';

// Cart context
const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    // Load cart items from local storage on initial render
    const storedItems = getCartItems();
    setCartItems(storedItems);
  }, []);

  const addItemToCart = (item: any) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    saveCartItems(updatedCart);  // Save to local storage
    setIsCartModalOpen(true);
  };

  const removeItemFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index); // Remove the item by index
    setCartItems(updatedCart);
    saveCartItems(updatedCart); // Save the updated cart to local storage
  };

  const updateCartItemQuantity = (index: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    saveCartItems(updatedCart); // Save updated cart to local storage
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartModalOpen,
        setIsCartModalOpen,
        addItemToCart,
        removeItemFromCart,
        updateCartItemQuantity,  // Expose the quantity update function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);
