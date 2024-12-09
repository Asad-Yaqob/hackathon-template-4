import React from "react";
import { ProductCard } from "./FeaturedProductCard";
import { products } from "../../../data/sample_data";

export function FeaturedProducts() {
  return (
    <section className="py-16 mx-auto">
      <h2 className="text-[42px] text-[#1A0B5B] font-josefin text-center mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-16">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* Sliding Dots */}
      <div className="flex justify-center space-x-2 mt-16 ">
        <div className="w-[24px] h-[4px] bg-[#FB2E86] rounded-full"></div>
        <div className="w-[16px] h-[4px] bg-gray-300 rounded-full"></div>
        <div className="w-[16px] h-[4px] bg-gray-300 rounded-full"></div>
        <div className="w-[16px] h-[4px] bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
