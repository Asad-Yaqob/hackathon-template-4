import React from "react";

import TitleHeader from "@/components/common/header/TitleHeader";
import { CartITemList } from "@/components/common/cart/CartITemList";
import { CartTotal } from "@/components/common/cart/CartTotal";
import { CalculateShipping } from "@/components/common/cart/CalculateShipping";
// import { removeFromCart } from "@/actions/cart_actions";

const ShoppingCart = () => {
  // const response = await removeFromCart("zFlvhXQzgVggibpxua15cY");
  // if (response) {
  //   console.log(response);
  // }
  return (
    <>
      <TitleHeader title="Shopping Cart" />
      <div className="flex   justify-center my-20 px-4">
        <CartITemList />
        <div className="flex flex-col gap-12">
          <CartTotal isNavigate={true}/>
          <CalculateShipping />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
