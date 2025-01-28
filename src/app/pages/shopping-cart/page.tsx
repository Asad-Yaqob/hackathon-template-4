import React from "react";

import TitleHeader from "@/components/common/header/TitleHeader";
import { CartITemList } from "@/components/common/cart/CartITemList";
import { CartTotal } from "@/components/common/cart/CartTotal";
import { CalculateShipping } from "@/components/common/cart/CalculateShipping";
import { CartProvider } from "@/context/cart_context";
// import { removeFromCart } from "@/actions/cart_actions";

const ShoppingCart =  () => {
  // const response = await removeFromCart("zFlvhXQzgVggibpxua15cY");
  // if (response) {
  //   console.log(response);
  // }
  return (
    <>
      <CartProvider>
        <TitleHeader title="Shopping Cart" />
        <div className="flex   justify-center my-20 px-4">
          <CartITemList />
          <div className="flex flex-col gap-12">
            <CartTotal  />
            <CalculateShipping />
          </div>
        </div>
      </CartProvider>
    </>
  );
};

export default ShoppingCart;
