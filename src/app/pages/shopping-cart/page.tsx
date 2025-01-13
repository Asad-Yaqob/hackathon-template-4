import React from "react";

import TitleHeader from "@/components/common/header/TitleHeader";
import { CartITemList } from "@/components/common/cart/CartITemList";
import { CartTotal } from "@/components/common/cart/CartTotal";
import { CalculateShipping } from "@/components/common/cart/CalculateShipping";

const ShoppingCart = () => {
  return (
    <>
      <TitleHeader title="Shopping Cart" />
      <div className="flex  items-center justify-center my-20 px-4">
        <CartITemList />
        <div className="flex flex-col gap-12">
          <CartTotal />
          <CalculateShipping />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
