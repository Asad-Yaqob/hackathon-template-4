import React from "react";
import { Truck, Headphones, ShieldCheck, CreditCard } from "lucide-react";
import { shopexOffers } from "../../../data/sample_data";

const icons = {
  truck: Truck,
  headphones: Headphones,
  "shield-check": ShieldCheck,
  "credit-card": CreditCard,
};

export function ShopexOffer() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-[42px] text-[#1A0B5B] font-josefin text-center mb-12">
        What Shopex Offer!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {shopexOffers.map((offer, index) => {

          return (
            <div
              key={index}
              className=" w-[270px] h-[320px] flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-4 flex text-center rounded-full">
                <img
                  src={offer.image}
                  alt="png"
                  className=" w-[65px] h-[65px] object-contain mb-4 "
                />
              </div>
              <div className=" text-center p-3">
                <h3 className="text-[22px] font-josefin text-[#151875] mb-2">
                  {offer.title}
                </h3>
                <p className="text-[16px] text-[#1A0B5B4D]">
                  {offer.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
