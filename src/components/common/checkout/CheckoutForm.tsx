import React from 'react'

export const CheckoutForm = () => {
  return (
    <div className="w-[770px] h-[920px] bg-[#F8F8FD] p-10 my-5">
      <div className="flex justify-between items-center">
        <h3 className="text-[18px]  text-[#1D3178] font-josefin">
          Contact Information
        </h3>
        <p className="text-[14px]  text-[#C1C8E1] font-medium font-lato">
          Already have an account? Log in
        </p>
      </div>

      <div className="mt-14">
        <div className="mt-6">
          <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
            Email or mobile phone number
          </span>
          <hr className="mt-3 border-[#BFC6E0]" />
        </div>

        <div className="flex items-center gap-2 my-6">
          <span className="w-[8px] h-[8px] rounded-full bg-[#19D16F]"></span>
          <p className="text-[12px] font-lato font-medium text-[#8A91AB]">
            Keep me up to date on news and excluive offers
          </p>
        </div>
      </div>

      <div className="mt-32">
        <h3 className="text-[18px]  text-[#1D3178] font-josefin">
          Shipping address
        </h3>

        <div className="flex justify-between items-center">
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              First name (optional)
            </span>
            <hr className="mt-3 border-[#BFC6E0] w-[336px]" />
          </div>
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              Last Name
            </span>
            <hr className="mt-3 border-[#BFC6E0] w-[336px]" />
          </div>
        </div>

        <div>
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              Address
            </span>
            <hr className="mt-3 border-[#BFC6E0]" />
          </div>
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              Appaetnentment,suit,e.t.c (optinal)
            </span>
            <hr className="mt-3 border-[#BFC6E0]" />
          </div>
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              City
            </span>
            <hr className="mt-3 border-[#BFC6E0]" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              Bangladesh
            </span>
            <hr className="mt-3 border-[#BFC6E0] w-[336px]" />
          </div>
          <div className="mt-6">
            <span className=" text-[14px] font-lato font-bold text-[#C1C8E1]">
              Postal Code
            </span>
            <hr className="mt-3 border-[#BFC6E0] w-[336px]" />
          </div>
        </div>
      </div>

      <div className="mt-36">
        <button className="bg-[#FB2E86] w-[182px] h-[44px] text-[16px] text-[#FFFFFF] font-josefin rounded">
          Continue Shipping
        </button>
      </div>
    </div>
  );
}

