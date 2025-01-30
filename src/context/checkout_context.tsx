"use client";

import { checkoutOrder } from "@/service/checkout";
import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext({});

export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

    const handleCheckout = async (cartItems:[], totalPrice: () => number,) => {
      const userData = {
        firstName,
        lastName,
        email,
      };

      const checkoutData = {
        items: cartItems,
        address,
        appartment,
        city,
        postalCode,
        totalPrice: totalPrice(),
      };

      const order = await checkoutOrder(userData, checkoutData);

      if (order) {
        return order;
      }
    };

  const values = {
    firstName,
    lastName,
    email,
    address,
    appartment,
    city,
    postalCode,
    setFirstName,
    setLastName,
    setEmail,
    setAddress,
    setAppartment,
    setCity,
    setPostalCode,
    handleCheckout,
  };
  return <CheckoutContext.Provider value={values}>{children}</CheckoutContext.Provider>;
};
