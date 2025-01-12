import React from "react";
import CustomeHeading from "./CustomeHeading";
import { colors } from "@/app/data/sample_data";
import { FilterColorItem } from "./FilterColorItem";

export const FilterColor = () => {
  return (
    <div>
      <CustomeHeading title="Filter By Color" />
    <div className="grid grid-cols-3 gap-2 mt-5">
    {colors.map((color, index) => (
        <FilterColorItem
        colorName={color.colorName}
        bgColor={color.color}
        key={index}
        />
      ))}
      </div>
    </div>
  );
};
