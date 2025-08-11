import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
        const existing = prev.find(p => p.id === item.id);
        if (existing) {
        return prev.map(p =>
            p.id === item.id ? { ...p, count: p.count + item.count } : p
        );
        } else {
        return [...prev, item];
        }
    });
  };

  const updateQuantity = (id, delta) => {
  setCart(prev =>
    prev
      .map(item =>
        item.id === id ? { ...item, count: item.count + delta } : item
      )
      .filter(item => item.count > 0) // elimina los que queden en 0
    );
  };

  const clearCart = () => {
  setCart([]);
};

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;