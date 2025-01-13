import { relatedProducts } from "@/app/data/sample_data";

import React from "react";
import { RelatedProductCard } from "./RelatedProductCard";
import { BrandsHeader } from "../footer/BrandsHeader";

export const RelatedProductSection = () => {
  return (
    <>
      <div className="flex flex-col items-center my-20">
        <h2 className="text-left text-[36px] font-josefin text-[#101750]">
          Related Products
        </h2>
        <div className="flex justify-center gap-5 my-5">
          {relatedProducts.map((product, index) => (
            <RelatedProductCard {...product} key={index} />
          ))}
        </div>
        <BrandsHeader />
      </div>
    </>
  );
};
