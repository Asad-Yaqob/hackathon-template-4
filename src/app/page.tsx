import HeroSection from "./components/common/home/HeroSection";
import { FeaturedProducts } from "./components/common/home/FeaturedProducts";
import { LatestProducts } from "./components/common/home/LatestProducts";
import { ProductShowcase } from "./components/common/home/ProductShowcase";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ProductShowcase />
    </div>
  );
}
