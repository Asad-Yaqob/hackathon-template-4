import HeroSection from "./components/common/home/main/HeroSection";
import { FeaturedProducts } from "./components/common/home/main/FeaturedProducts";
import { LatestProducts } from "./components/common/home/main/LatestProducts";
import { ProductShowcase } from "./components/common/home/main/ProductShowcase";
import TrendingProducts from "./components/common/home/main/TrendingProducts";
import { DiscountItem } from "./components/common/home/main/DiscountItem";
import TopCategories from "./components/common/home/main/TopCategories";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ProductShowcase />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
    </div>
  );
}
