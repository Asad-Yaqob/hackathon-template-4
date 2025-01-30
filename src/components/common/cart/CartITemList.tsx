"use client";

import React from "react";

import { CartItem } from "./CartItem";
import { useCartContext } from "@/context/cart_context";
import { cartItems } from "@/app/data/sample_data";
import { cartType } from "@/types/cart";

export const CartITemList = () => {
  const { dynamicCartItems, clearCart } = useCartContext();
// console.log(dynamicCartItems);
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-[20px] text-left font-josefin text-[#1D3178] px-4 py-2">
              Product
            </th>
            <th className="text-[20px] font-josefin text-[#1D3178] px-4 py-2">
              Price
            </th>
            <th className="text-[20px] font-josefin text-[#1D3178] px-4 py-2">
              Quantity
            </th>
            <th className="text-[20px] font-josefin text-[#1D3178] px-4 py-2">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {dynamicCartItems == null
            ? cartItems.map((item) => (
                <CartItem
                  _id={item.name}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  productId={item.price}
                  key={item.name}
                />
              ))
            : dynamicCartItems.map((product: cartType) => (
                <CartItem
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price.toString()}
                  quantity={product.quantity}
                  productId={product.productId}
                  key={product.productId}
                />
              ))}
          <tr>
            <td colSpan={4}>
              <div className="flex items-center justify-between">
                <button className="w-[134px] h-[39px] bg-[#FB2E86] text-[16px] text-[#FFFFFF] rounded">
                  Update Cart
                </button>
                <button
                  onClick={clearCart}
                  className="w-[134px] h-[39px] bg-[#FB2E86] text-[16px] text-[#FFFFFF] rounded"
                >
                  Clear Cart
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
