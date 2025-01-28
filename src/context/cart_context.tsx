"use client";

import { fetchCartItems } from "@/actions/cart_actions";
import { cartType } from "@/types/cart";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [dynamicCartItems, setDynamicCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || '[]')
      : []
  );

  useEffect(() => {
    const loadCartItems = async () => {
      const cartItems = await fetchCartItems();
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    loadCartItems();
  }, []);

  const addToCart = async (item: cartType) => {
    const isItemInCart = dynamicCartItems.find(
      (cartItem: cartType) => cartItem.productId === item.productId
    );

    if (isItemInCart) {
      setDynamicCartItems(
        dynamicCartItems.map(
          (
            cartItem: cartType // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.productId === item.productId
              ? { ...cartItem, quantity: item.quantity + 1 }
              : cartItem // otherwise, return the cart item
        )
      );
    } else {
      // await addItemToCart(productId);
      setDynamicCartItems([...dynamicCartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
  };

  const removeFromCart = (item: cartType) => {
    const isItemInCart = dynamicCartItems.find(
      (cartItem:cartType) => cartItem.productId === item.productId
    );

    if (isItemInCart && isItemInCart.quantity === 1) {
      setDynamicCartItems(
        dynamicCartItems.filter(
          (cartItem: cartType) => cartItem.productId !== item.productId
        )
      );
    } else {
      setDynamicCartItems(
        dynamicCartItems.map((cartItem: cartType) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setDynamicCartItems([]);
  };

  const getCartTotal = () => {
    return dynamicCartItems.reduce(
      (total:number, item:cartType) => total + item.price * item.quantity,
      0
    );
  };

  const values = {
    addToCart,
    dynamicCartItems,
    getCartTotal,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
