import React from 'react';

const ProductFeature = ({ text, color }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <p className="text-[#ACABC3] font-lato text-[16px]">{text}</p>
    </div>
  );
};

export default ProductFeature;