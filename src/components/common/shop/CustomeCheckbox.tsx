import React from "react";
import { CustomeRatingItem } from "./CustomeRatingItem";

export const CustomeCheckbox = ({
  title,
  bgColor,
  checkedBgColor,
  textColor,
  checkmarkColor,
  borderColor,
  isRating,
}: {
  title: string;
  bgColor: string;
  checkedBgColor: string;
  textColor: string;
  checkmarkColor: string;
  borderColor: string;
  isRating: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2 mt-5 mb-5">
      <input
        type="checkbox"
        defaultChecked={true}
        className={`w-[16px] h-[16px] border rounded appearance-none flex items-center justify-center 
          ${bgColor} ${borderColor} 
          checked:${checkedBgColor} checked:${borderColor} 
          checked:before:content-['✔'] checked:before:${checkmarkColor} 
          checked:before:text-sm checked:before:flex checked:before:items-center 
          checked:before:justify-center`}
      />

      {isRating ?  <p className={`text-[16px] font-lato my-1 font-normal ${textColor}`}>
        {title}
      </p> : <CustomeRatingItem title={title} />}
      
    </div>
  );
};
