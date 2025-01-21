import HeroSection from "../components/common/home/main/HeroSection";
import TopCategories from "../components/common/home/main/TopCategories";

import { FeaturedProducts } from "../components/common/home/main/FeaturedProducts";
import { LatestProducts } from "../components/common/home/main/LatestProducts";
import { ProductShowcase } from "../components/common/home/main/ProductShowcase";
import TrendingProducts from "../components/common/home/main/TrendingProducts";
import { DiscountItem } from "../components/common/home/main/DiscountItem";
import { NewsLetter } from "@/components/common/home/main/NewsLetter";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";
import { BlogSection } from "@/components/common/home/main/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ProductShowcase />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <NewsLetter />
      <BrandsHeader />
      <BlogSection />
     
    </>
  );
}
