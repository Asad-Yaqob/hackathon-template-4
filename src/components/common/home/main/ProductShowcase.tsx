import React from "react";
import MButton from "../resuable/Button";
import Image from "next/image";



const ProductFeature = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className={`w-2 h-2 ${color} rounded-full mt-2 flex-shrink-0`} />
      <p className="text-sm md:text-base text-[#B7BACB] font-lato leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export const ProductShowcase = () => {
  const features = [
    {
      text: "Minimalist design with clean lines and premium materials",
      color: "bg-purple-500",
    },
    {
      text: "Engineered with durable wood frame, high-grade foam center",
      color: "bg-blue-500",
    },
    { text: "Stylish and durable sofa", color: "bg-green-500" },
    {
      text: "Metal, buckle and seams are structurally reinforced",
      color: "bg-cyan-500",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="min-h-[400px] md:min-h-[579px] w-full bg-[#F1F0FF]">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around px-4 md:px-8 gap-5">
          {/* Product Image Container */}
          <div className="relative w-full max-w-[509px] flex justify-center">
            {/* Rounded background */}
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[448px] md:h-[448px] bg-[#ECD2FA59] rounded-full" />
            {/* Image */}
            <Image
              width={250}
              height={250}
              src="/images/products/club-sofa.png"
              alt="B&B Italian Sofa"
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[509px] object-contain relative z-10"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 max-w-xl py-4 md:py-8 space-y-4 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-bold text-indigo-900 text-center lg:text-left">
              Unique Features Of Latest & Trending Products
            </h2>

            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <ProductFeature
                  key={index}
                  text={feature.text}
                  color={feature.color}
                />
              ))}
            </div>

            <div className="flex items-center space-x-4 justify-center lg:justify-start">
              <MButton />
              <div>
                <p className="text-sm md:text-base text-[#151875]">
                  B&B Italian Sofa
                </p>
                <p className="text-xs md:text-sm text-[#151875] font-light">
                  $32.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
