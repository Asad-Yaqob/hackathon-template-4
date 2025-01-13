import Image from "next/image";
import React from "react";

interface checkoutItemProps {
  image: string;
  color: string;
  size: string;
  price: number;
  name: string;
}

const CheckoutItem = ({
  image,
  color,
  size,
  price,
  name,
}: checkoutItemProps) => {
  return (
    <div className="flex flex-col ms-10 my-4">
      <div className="flex">
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
        <div className=" flex items-center justify-end ms-28">
          <span className="text-[14px] font-josefin text-[#15245E]">
            ${price}
          </span>
        </div>
      </div>

      <div className="w-full mt-5">
        <hr className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
};

export default CheckoutItem;
