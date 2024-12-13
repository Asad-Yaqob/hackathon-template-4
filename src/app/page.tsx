import HeroSection from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { LatestProducts } from "@/components/LatestProducts";
import { ProductShowcase } from "@/components/ProductShowcase";
import TrendingProducts from "@/components/TrendingProducts";
import { DiscountItem } from "@/components/DiscountItem";
import TopCategories from "@/components/TopCategories";
import SubscribeSection from "@/components/SubscribeSection";
import LogoSection from "@/components/LogoSection";
import LatestBlogSection from "@/components/LatestBlogSection";

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
      <SubscribeSection />
      <LogoSection />
      <LatestBlogSection />
    </div>
  );
}
