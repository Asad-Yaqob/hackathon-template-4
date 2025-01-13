import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";

import { FaCheck } from "react-icons/fa";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";

const OrderCompleted = () => {
  return (
    <>
      <TitleHeader title="Order Completed" />
      <div className="flex items-center justify-center my-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <FaCheck width={46} height={37} color="#FF1788" />
          <h2 className="text-[36px] text-[#101750] font-josefin">
            Your Order Is Completed!
          </h2>
          <p className="text-[16px] font-semibold text-[#8D92A7] font-lato text-center">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. <br /> You will receive an email
            confirmation when your order is completed.
          </p>
          <button className="bg-[#FF1788] w-[208px] h-[59px] rounded text-[16px] text-[#FFFFFF] font-lato font-semibold">
            Continue Shopping
          </button>
        <BrandsHeader />
        </div>
      </div>
    </>
  );
};

export default OrderCompleted;
