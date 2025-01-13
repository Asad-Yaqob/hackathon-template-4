import React from 'react'

export const CalculateShipping = () => {
  return (
    <div className="ms-14">
      <h2 className="text-[20px] font-josefin text-[#1D3178] text-center my-4">
       Calculate Shipping
      </h2>
      <div className="w-[371px] h-[284px] bg-[#F4F4FC] p-10 rounded">
        {/* Shipping Details */}
        <div className="mt-6">
          <span className=" text-[14px] font-josefin text-[#C5CBE3]">
            Bangladesh
          </span>
          <hr />
        </div>
        <div className="my-6">
          <span className=" text-[14px] font-josefin text-[#C5CBE3]">
            Mirpur Dhaka - 1200
          </span>
          <hr />
        </div>
        <div className="my-6">
          <span className=" text-[14px] font-josefin text-[#C5CBE3]">
            Postal Code
          </span>
          <hr />
        </div>
        {/* Checkout Button */}
        <div>
          <button className="w-[179px] h-[41px] text-[16px] font-josefin text-[#FFFFFF] rounded bg-[#FB2E86]">
            Calculate Shipping
          </button>
        </div>
      </div>
    </div>
  );
}

