import React from "react";
import { executiveChairs, trendingProducts } from "@/app/data/sample_data";
import { LatestProductCard } from "../resuable/LatestProductCard";
import TrendingProductCard from "../resuable/TrendingProductCard";
import Image from "next/image";

const TrendingProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <h2 className="font-josefin font-bold text-2xl md:text-3xl lg:text-[42px] mb-8 text-center text-[#151875]">
        Trending Products
      </h2>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {trendingProducts.map((product, index) => (
          <LatestProductCard key={index} {...product} />
        ))}
      </div>

      {/* Promotional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Discount Section */}
        <div className="bg-[#FFF6FB] p-6 rounded-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-josefin font-bold text-[#151875] mb-4">
              23% off in all products
            </p>
            <a
              href="#"
              className="text-[#FB2E86] text-base font-bold underline"
            >
              Shop now
            </a>
          </div>
          <Image 
            width={213}
            height={217}
            src="/images/products/clock.png"
            alt="clock"
            className="absolute right-0 bottom-0 w-1/2 h-auto object-contain"
          />
        </div>

        {/* Collection Section */}
        <div className="bg-[#EEEFFB] p-6 rounded-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-josefin font-bold text-[#151875] mb-4">
              View Collection
            </p>
            <a
              href="#"
              className="text-[#FB2E86] text-base font-bold underline"
            >
              Shop now
            </a>
          </div>
          <Image
           width={312}
           height={173}
            src="/images/products/image1161.png"
            alt="furniture"
            className="absolute right-0 bottom-0 w-1/2 h-auto object-contain"
          />
        </div>

        {/* Executive Chairs Section */}
        <div className="space-y-4">
          {executiveChairs.map((chair, index) => (
            <TrendingProductCard key={index} {...chair} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
