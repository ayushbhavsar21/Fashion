import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [totalAmount, setTotalAmount] = useState(localStorage.getItem('totalAmount') || '');

  const storeAmountInLS = (Amount) => {
    localStorage.setItem('totalAmount', totalAmount);
    setTotalAmount(Amount);
}

const removeAmount = () => {
  localStorage.removeItem('totalAmount');
  setTotalAmount("");
}

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const newCartItems = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (id) => {

    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, removeFromCart, totalAmount, storeAmountInLS, removeAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
