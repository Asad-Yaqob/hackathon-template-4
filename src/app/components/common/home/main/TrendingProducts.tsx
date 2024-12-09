import { executiveChairs, trendingProducts } from "@/app/data/sample_data";
import React from "react";
import { ProductCard } from "../resuable/FeaturedProductCard";
import colors from "@/app/utils/constants/colors";
import Image from "next/image";
import TrendingProductCard from "../resuable/TrendingProductCard";

const TrendingProducts = () => {
  return (
    <div className="w-full ">
      <h2 className="font-josefin font-bold text-[42px] mb-8 text-center">
        Trending Products
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mx-auto mb-10">
        {trendingProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mb-10">
        <div className="text-start bg-[#FFF6FB] w-[420px] h-[270px] p-4 relative">
          <p className="text-[26px] font-josefin font-bold text-[#151875]">
            23% off in all products
          </p>
          <span
            className="text-[16px] underline font-bold decoration-[#FB2E86]"
            style={{ color: colors.pink }}
          >
            Shop now
          </span>
          <Image
            src={"/images/products/clock.png"}
            alt="clock"
            width={213}
            height={207}
            className="absolute right-0"
          />
        </div>

        <div className="text-start bg-[#EEEFFB] w-[420px] h-[270px] p-4 relative ">
          <p className="text-[26px] font-josefin font-bold text-[#151875]">
            View Collection
          </p>
          <span
            className="text-[16px] underline font-bold decoration-[#FB2E86]"
            style={{ color: colors.pink }}
          >
            Show now
          </span>
          <Image
            src={"/images/products/image1161.png"}
            alt="clock"
            width={213}
            height={207}
            className="absolute right-10 bottom-0"
          />
        </div>

        <div>{executiveChairs.map((product, index) => (
          <TrendingProductCard key={index} {...product} />
        ))}</div>
      </div>
    </div>
  );
};

export default TrendingProducts;
