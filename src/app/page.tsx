import HeroSection from "../components/common/home/main/HeroSection";
import { FeaturedProducts } from "../components/common/home/main/FeaturedProducts";
import { LatestProducts } from "../components/common/home/main/LatestProducts";
import { ProductShowcase } from "../components/common/home/main/ProductShowcase";
import TrendingProducts from "../components/common/home/main/TrendingProducts";
import { DiscountItem } from "../components/common/home/main/DiscountItem";
import TopCategories from "../components/common/home/main/TopCategories";
import Image from "next/image";
import { NewsLetter } from "@/components/common/home/main/NewsLetter";
import { BrandsHeader } from "@/components/common/footer/BrandsHeader";
import { FaPenNib } from "react-icons/fa";
import { CalendarDays } from "lucide-react";
import { homeBlogs } from "./data/sample_data";
import { HomeBlogCard } from "@/components/common/blog/HomeBlogCard";
export default function Home() {
  return (
    < >
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ProductShowcase />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <NewsLetter />
      <BrandsHeader />

      <div className="text-center mt-[200px] mb-[100px]">
        <h1 className="font-josefin text-[42px] text-[#151875]">
         Latest Blogs
        </h1>
      </div>

      <div className="flex items-center justify-center mb-[100px]">
    {homeBlogs.map((blog, index) => <HomeBlogCard isActive={blog.isActive} name={blog.name} date={blog.date} description={blog.description} image={blog.image} writerName={blog.writeName} key={index} />)}
  </div>


    </>
  );
}
