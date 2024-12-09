import React from 'react';
import MButton from "./Button";
import ProductFeature from './ProductFeature';
import Image from 'next/image';

export const ProductShowcase = () => {
  const features = [
    { text: "Minimalist design with clean lines and premium materials", color: "bg-purple-500" },
    { text: "Engineered with durable wood frame, high-grade foam center", color: "bg-blue-500" },
    { text: "Stylish and durable sofa", color: "bg-green-500" },
    { text: "Metal, buckle and seams are structurally reinforced", color: "bg-cyan-500" }
  ];

  return (
    <div className="flex  pt-5 pb-10 ">
      <div className="h-[579px] w-full flex items-center justify-center bg-[#F1F0FF]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Right Image Content */}
          <div className="relative flex-shrink-0">
            {/* Background Circles */}
            <div className="absolute -top-8 -right-8 w-[648px] h-[648px] md:w-[448px] md:h-[448px] bg-[#ECD2FA59] rounded-full"></div>

            <Image
              src="/images/products/club-sofa.png"
              alt="Furniture Chair"
              width={509}
              height={550}
              className="rounded-md md:w-[400px] md:h-[400px]"
            />
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[35px] font-josefin font-bold text-indigo-900">
              Unique Features Of latest & Trending Products
            </h2>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <ProductFeature
                  key={index}
                  text={feature.text}
                  color={feature.color}
                />
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <MButton />
              <div>
                <p className="text-[16px] font-josefin text-[#151875]">
                  B&B Italian Sofa
                </p>
                <p className="text-[#151875] font-lato text-[14px]">$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;