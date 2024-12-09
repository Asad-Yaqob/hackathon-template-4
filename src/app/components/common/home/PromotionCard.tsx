import React from "react";

export function PromotionCard() {
  return (
    <div className="p-6 rounded-lg bg-pink-50">
      <h3 className="text-lg font-semibold mb-4">25% off in all products</h3>
      <div className="aspect-video rounded-lg overflow-hidden">
        <img
          src="/images/products/image-10.png"
          alt="Black Lamp Promotion"
          className="w-full h-full object-cover"
        />
      </div>
      <button className="mt-4 text-sm font-medium text-indigo-900 hover:text-indigo-700">
        Shop Now
      </button>
    </div>
  );
}
