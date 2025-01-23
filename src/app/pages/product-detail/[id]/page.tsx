import React from "react";
import TitleHeader from "@/components/common/header/TitleHeader";
import { ProductInformationSection } from "@/components/common/product/ProductInformationSection";
import { ProductDetailSection } from "@/components/common/product/ProductDetailSection";
import { RelatedProductSection } from "@/components/common/product/RelatedProductSection";
import { fetchProductById } from "@/actions/product_actions";
import { Product } from "@/types/product";

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const productId = (await params).id;
  const productData: Product[] = await fetchProductById(productId);
  return (
    <>
      <TitleHeader title="Product Detail" />
      <ProductInformationSection data={productData} />
      <ProductDetailSection />
      <RelatedProductSection />
    </>
  );
};

export default ProductDetail;
