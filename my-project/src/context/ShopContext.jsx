
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const { user } = useAuth();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
    
  
  // function safa(){
     
  // }
   
  // Load cart & wishlist when user logs in
  useEffect(() => {
    if (!user) {
      setCart([]);
      setWishlist([]);
      return;
    }

    const savedCart =
      JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

    const savedWishlist =
      JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

    setCart(savedCart);
    setWishlist(savedWishlist);
  }, [user]);

  // Save cart
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  // Save wishlist
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `wishlist_${user.id}`,
        JSON.stringify(wishlist)
      );
    }
  }, [wishlist, user]);

  // Add to Cart
  const addToCart = (product) => {
    if (!user) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Increase Quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Wishlist
  const toggleWishlist = (product) => {
    if (!user) return;

    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [...prev, product];
    });
  };

  // Clear Cart (Checkout കഴിഞ്ഞ് ഉപയോഗിക്കാം)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        toggleWishlist,
        clearCart,
        // safa
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};