'use client'
import { Check } from "lucide-react";
import { ProductTabs } from "../resuable/ProductTabs";
import { useState } from "react";
import Image from "next/image";

export const DiscountItem = () => {
    const tabs = ["Wood Chair", "Plastic Chair ", "Sofa Collection",];
    const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="w-[1214px] h-[597px]  mx-auto relative mb-10">
      <h2 className="font-josefin font-bold text-[42px] mb-8 text-center ">
        Trending Products
      </h2>

      <ProductTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="flex items-center justify-center gap-10 mx-auto">
        <div>
          <h2 className="font-josefin text-[#151875] text-[42px] mb-8">
            20% Discount Of All Products
          </h2>
          <span className="font-josefin text-[#FB2E86] text-[21px] ">
            Eams Sofa Compact
          </span>

          <div className="flex pt-5 gap-10 ">
            <div className="flex flex-col  gap-y-5">
              <div className="flex gap-3">
                <Check /> Material expose like metals
              </div>
              <div className="flex gap-3">
                <Check /> Simple neutral colours.
              </div>
            </div>

            <div className="flex flex-col  gap-y-5">
              <div className="flex gap-3">
                <Check />
                Clear lines and geomatric figures
              </div>
              <div className="flex gap-3">
                <Check />
                Material expose like metals
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* Background Circles */}
          {/* <div className="absolute  w-[648px] h-[648px] md:w-[448px] md:h-[448px] bg-[#ECD2FA59] rounded-full"></div> */}

          <Image
            src="/images/products/discount-chair.png"
            alt="Furniture Chair"
            width={509}
            height={550}
            className="rounded-md md:w-[400px] md:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};














