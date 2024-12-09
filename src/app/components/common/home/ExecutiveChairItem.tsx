import React from "react";

export function ExecutiveChairItem() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-16 h-16">
        <img
          src="/images/products/image-10.png"
          alt="Executive Seat chair"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium text-indigo-900">
          Executive Seat chair
        </h4>
        <p className="text-sm text-gray-600">$32.00</p>
      </div>
    </div>
  );
}
