import React from "react";

export const FilterColorItem = ({
  colorName,
  bgColor,
}: {
  colorName: string;
  bgColor: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-[14px] h-[14px] ${bgColor} rounded-full`}></div>
      <span className="font-lato text-[15px] font-normal">{colorName}</span>
    </div>
  );
};
