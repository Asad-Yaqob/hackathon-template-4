

import { CartProvider } from "@/context/cart_context";
import { CheckoutProvider } from "@/context/checkout_context";
import React, { ReactNode } from "react";

const ContextWrapper = ({ children }: {children: ReactNode}) => {
  return (
    <CartProvider>
      <CheckoutProvider>{children}</CheckoutProvider>
    </CartProvider>
  );
};

export default ContextWrapper;
