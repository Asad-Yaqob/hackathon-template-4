import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { BiHeart } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export const ProductInformationSection = () => {
  return (
    <div>
      <div className="w-[1170px] h-[509px] my-10 mx-auto">
        <div className="flex items-center justify-center">
          {/* Vertical Images */}
          <div className="flex flex-col gap-3">
            <Image
              src={"/images/products/product-detail-1.png"}
              alt="Product Image"
              width={151}
              height={151}
            />
            <Image
              src={"/images/products/product-detail-2.png"}
              alt="Product Image"
              width={151}
              height={151}
            />
            <Image
              src={"/images/products/product-detail-3.png"}
              alt="Product Image"
              width={151}
              height={151}
            />
          </div>

          {/* Main Image */}
          <div className="ms-6">
            <Image
              src={"/images/products/product-detail-4.png"}
              alt="Product Image"
              width={375}
              height={487}
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col ms-10">
            <h2 className="text-[36px] font-josefin text-[#0D134E] font-bold">
              Playwood arm chair
            </h2>
            <div className="flex items-center ">
              <Star color="#FFC416" fill="#FFC416" height={9.48} />
              <Star color="#FFC416" fill="#FFC416" height={9.48} />
              <Star color="#FFC416" fill="#FFC416" height={9.48} />
              <Star color="#FFC416" fill="#FFC416" height={9.48} />
              <Star color="#FFC416" fill="#FFC416" height={9.48} />
              <div className="ms-3">
                <span className="font-josefin text-[14px]">(22)</span>
              </div>
            </div>
            <div className="mt-5">
              <span className="text-[16px] font-josefin text-[#151875] me-3">
                $32.00
              </span>
              <span className="text-[#FB2E86] text-[16px] font-josefin line-through">
                $32.00
              </span>
            </div>
            <h4 className="text-[16px] font-josefin text-[#0D134E] mt-5">
              Color
            </h4>
            <div className="mt-5">
              <p className="text-[16px] font-josefin text-[#A9ACC6] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
            </div>
            <div className="mt-5 flex  items-center gap-5">
              <p className="text-[16px] font-josefin text-[#151875] ">
                Add To Cart
              </p>
              <BiHeart size={31} />
            </div>
            <h4 className="text-[16px] font-josefin text-[#0D134E] mt-5">
              Categories
            </h4>
            <h4 className="text-[16px] font-josefin text-[#0D134E] mt-5">
              Tags
            </h4>

            <div className="flex items-center mt-5 gap-3">
              <h4 className="text-[16px] font-josefin text-[#0D134E]">Share</h4>
              <div className="flex items-center gap-5">
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


