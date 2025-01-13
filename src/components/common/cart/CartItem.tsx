import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CartItemsProps {
  image: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  total: number;
}

export const CartItem = ({
  image,
  name,
  price,
  color,
  size,
  quantity,
  total,
}: CartItemsProps) => {
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
            <h3 className="text-[14px] font-josefin text-[#1D3178]">
             {name}
            </h3>
            <div className="flex gap-1">
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                Color:
              </span>
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                {color}
              </span>
            </div>
            <div className="flex gap-1">
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                Size:
              </span>
              <span className="text-[12px] font-josefin text-[#A1A8C1]">
                {size}
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
            <span className="bg-[#E7E7EF] w-[24px] h-[24px] flex items-center justify-center rounded">
              <Minus width={12} />
            </span>
            <p className="bg-[#F0EFF2] w-[51px] h-[24px] text-[#BEBFC2] text-[12px] text-center flex items-center justify-center">
              {quantity}
            </p>
            <span className="bg-[#E7E7EF] w-[24px] h-[24px] flex items-center justify-center rounded">
              <Plus width={12} />
            </span>
          </div>
        </td>

        {/* Total */}
        <td className="px-4 py-2 text-center">
          <span className="text-[14px] font-josefin text-[#15245E]">
            ${total}
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
