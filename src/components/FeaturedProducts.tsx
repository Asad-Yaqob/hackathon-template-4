import React from "react";
import { ProductCard } from "./FeaturedProductCard";
import { products } from "./data/sample_data";

export function FeaturedProducts() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-[42px] text-[#1A0B5B] font-josefin text-center mb-8 lg:mb-12">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* Sliding Dots */}
      <div className="flex justify-center space-x-2 mt-8 lg:mt-16">
        <div className="w-[24px] h-[4px] bg-[#FB2E86] rounded-full"></div>
        <div className="w-[16px] h-[4px] bg-gray-300 rounded-full"></div>
        <div className="w-[16px] h-[4px] bg-gray-300 rounded-full"></div>
        <div className="w-[16px] h-[4px] bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
