import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";

import { ProductInformationSection } from "@/components/common/product/ProductInformationSection";
import { ProductDetailSection } from "@/components/common/product/ProductDetailSection";
import { RelatedProductSection } from "@/components/common/product/RelatedProductSection";


const ProductDetail = () => {
  return (
    <>
      <TitleHeader title="Product Detail" />
      <ProductInformationSection />
      <ProductDetailSection />
      <RelatedProductSection />
    </>
  );
};

export default ProductDetail;
