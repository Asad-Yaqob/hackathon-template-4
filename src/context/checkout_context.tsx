"use client";

import { checkoutOrder } from "@/service/checkout";

import { createContext, useContext, useState } from "react";

// Define a CartItem type
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// TotalPriceFunction type remains the same
type TotalPriceFunction = () => number;

type CheckoutType = {
  items: CartItem[]; 
  address: string;
  appartment: string;
  city: string;
  postalCode: string;
  totalPrice: number;
};

type CheckoutContextType = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  appartment: string;
  city: string;
  postalCode: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setAppartment: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCheckout: (
    cartItems: CartItem[],
    totalPrice: TotalPriceFunction
  ) => Promise<unknown>;
};

// Create the context with an initial value
const CheckoutContext = createContext<CheckoutContextType>(
  {} as CheckoutContextType
);

// Custom hook to use the checkout context
export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};

// CheckoutProvider component
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

  // Handle the checkout process
  const handleCheckout = async (
    cartItems: CartItem[], 
    totalPrice: TotalPriceFunction
  ) => {
    const userData = {
      firstName,
      lastName,
      email,
    };

    const checkoutData: CheckoutType = {
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

    return ;
  };

  // Provide the context values
  const values: CheckoutContextType = {
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

  return (
    <CheckoutContext.Provider value={values}>
      {children}
    </CheckoutContext.Provider>
  );
};
