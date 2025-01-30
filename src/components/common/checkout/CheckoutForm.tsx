import React from "react";
import Link from "next/link";

import { useCheckoutContext } from "@/context/checkout_context";


export const CheckoutForm = () => {
  const {
    firstName,
    lastName,
    email,
    address,
    appartment,
    city,
    postalCode,
    setFirstName,
    setLastName,
    setEmail,
    setAddress,
    setAppartment,
    setCity,
    setPostalCode,
  } = useCheckoutContext();

  
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
          <input
            type="text"
            className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
            placeholder="Email or mobile phone number"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <hr className=" border-[#BFC6E0]" />
        </div>

        <div className="flex items-center gap-2 my-6">
          <span className="w-[8px] h-[8px] rounded-full bg-[#19D16F]"></span>
          <p className="text-[12px] font-lato font-medium text-[#C1C8E1]">
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
            <input
              type="text"
              className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
              placeholder="First name (optional)"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
            <hr className=" border-[#BFC6E0] w-[336px]" />
          </div>
          <div className="mt-6">
            <input
              type="text"
              className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
            <hr className=" border-[#BFC6E0] w-[336px]" />
          </div>
        </div>

        <div>
          <div className="mt-6">
            <input
              type="text"
              className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
            <hr className=" border-[#BFC6E0]" />
          </div>
          <div className="mt-6">
            <input
              type="text"
              className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
              placeholder="Appaetnentment,suit,e.t.c (optinal)"
              onChange={(e) => setAppartment(e.target.value)}
              value={appartment}
              required
            />
            <hr className=" border-[#BFC6E0]" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="mt-6">
            <input
              type="text"
              className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
              placeholder="Bangladesh"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
            <hr className=" border-[#BFC6E0] w-[336px]" />
          </div>
          <div className="mt-6">
            <input
              type="text"
              className="text-[14px] font-lato font-bold text-[#C1C8E1] outline-none w-full p-4 bg-[#F8F8FD]"
              placeholder="Postal Code"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
              required
            />
            <hr className="border-[#BFC6E0] w-[336px]" />
          </div>
        </div>
      </div>

      <div className="mt-36">
        <Link href={"/"}>
          <button className="bg-[#FB2E86] w-[182px] h-[44px] text-[16px] text-[#FFFFFF] font-josefin rounded">
            Continue Shipping
          </button>
        </Link>
      </div>
    </div>
  );
};
