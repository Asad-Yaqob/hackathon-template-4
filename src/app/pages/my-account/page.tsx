import { BrandsHeader } from "@/components/common/footer/BrandsHeader";
import TitleHeader from "@/components/common/header/TitleHeader";
import React from "react";

const MyAccount = () => {
  return (
    <>
      <TitleHeader title="My Account" />
      <div className="flex flex-col items-center justify-center  mt-20 mb-32">
        {/* Heading Section */}
        <div className="bg-[#F8F8FB] shadow rounded p-5">
          <div>
            <h2 className="text-[32px] font-josefin text-[#000000] text-center">
              Login
            </h2>
            <p className="text-[17px] font-lato font-normal text-[#9096B2]  text-center">
              Please login using account detail bellow.
            </p>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col  gap-5 my-5">
            <input
              type="text"
              placeholder="Email Address"
              className="w-[432px] h-[52px] bg-[#FFFFFF] text-[#C2C5E1] text-[16px] font-lato font-normal ps-5 border"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-[432px] h-[52px] bg-[#FFFFFF] text-[#C2C5E1] text-[16px] font-lato font-normal ps-5 border"
            />

            <span className="text-[#9096B2] text-[17px] font-lato font-normal text-left">
              Forgot your password?{" "}
            </span>

            {/* Login Button */}
            <button className="w-[432px] h-[47px] bg-[#FB2E86] text-[#FFFFFF] font-lato font-semibold text-[17px] rounded">
              Login
            </button>

            <span className="text-[#9096B2] text-[17px] font-lato font-normal text-center">
              Don’t have an Account?Create account
            </span>

          </div>
        </div>
            <BrandsHeader />
      </div>
    </>
  );
};

export default MyAccount;
