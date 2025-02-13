"use client";
import React from "react";
import Image from "next/image";

import { Minus, Plus } from "lucide-react";
import { useCartContext } from "@/context/cart_context";
import { cartType } from "@/types/cart";
import { toast } from "react-toastify";

type CartItemsProps = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  productId: string;
  _id: string;
};

export const CartItem = ({
  image,
  name,
  price,
  quantity,
  productId,
  _id,
}: CartItemsProps) => {

  const { addToCart, removeFromCart } = useCartContext() as {
    addToCart: (cartItem: cartType) => string;
    removeFromCart: (cartItem: cartType) => string;
  };


  const cartItem = {
    _id,
    productId,
    name,
    image,
    price,
    quantity,
  }
  
  const totalPrice = price * quantity;

  const handleDecrement = async () => {
   const response = await removeFromCart(cartItem);

   if (response) {
    toast.dismiss();
    toast.success("Item removed from cart");
   }
  }

const handleIncrement = async () => {
  const response = await addToCart(cartItem);

  if (response) {
    toast.dismiss();
    toast.success("quantity increased");
    return;
  }

  toast.dismiss();
  toast.error("Failed to increase quanitity");
};

  return (
    <>
      <tr className="mt-5">
        {/* Product Info */}
        <td className="flex items-center px-4 py-2">
          <Image
            src={image}
            width={83}
            height={87}
            alt="Product Image"
            className="rounded object-contain"
          />
          <div className="flex flex-col pl-3">
            <h3 className="text-[14px] font-josefin text-[#1D3178]">{name}</h3>
            <div className="flex gap-1">
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                Color:
              </span>
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                Brown
              </span>
            </div>
            <div className="flex gap-1">
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                Size:
              </span>
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                XL
              </span>
            </div>
          </div>
        </td>

        {/* Price */}
        <td className="px-4 py-2 text-center">
          <span className="text-[14px] font-josefin text-[#15245E]">
            ${price}
          </span>
        </td>

        {/* Quantity */}
        <td className="px-4 py-2">
          <div className="flex items-center justify-center">
            <button
              onClick={handleDecrement}
              className="bg-[#E7E7EF] w-[24px] h-[24px] flex items-center justify-center rounded"
            >
              <Minus width={12} />
            </button>
            <p className="bg-[#F0EFF2] w-[51px] h-[24px] text-[#BEBFC2] text-[12px] text-center flex items-center justify-center">
              {quantity}
            </p>
            <button
              onClick={handleIncrement}
              className="bg-[#E7E7EF] w-[24px] h-[24px] flex items-center justify-center rounded"
            >
              <Plus width={12} />
            </button>
          </div>
        </td>

        {/* Total */}
        <td className="px-4 py-2 text-center">
          <span className="text-[14px] font-josefin text-[#15245E]">
            ${totalPrice}
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          <div className="py-4">
            <hr />
          </div>
        </td>
      </tr>
    </>
  );
};
