import React from "react";

export function SecondaryPromotionCard() {
  return (
    <div className="p-6 rounded-lg bg-purple-50">
      <h3 className="text-lg font-semibold mb-4">25% off in all products</h3>
      <div className="aspect-video rounded-lg overflow-hidden">
        <img
          src="/images/products/image-10.png"
          alt="Yellow Cabinet Promotion"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
