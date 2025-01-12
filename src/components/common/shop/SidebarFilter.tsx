import React from "react";
import CustomeHeading from "./CustomeHeading";
import { CustomeCheckbox } from "./CustomeCheckbox";

export const SidebarFilter = ({
  title,
  filtersList,
  bgColor,
  checkedBgColor,
  textColor,
  checkmarkColor,
  borderColor,
  isRating,
}: {
  title: string;
  filtersList: string[];
  bgColor: string;
  checkedBgColor: string;
  textColor: string;
  checkmarkColor: string;
  borderColor: string;
  isRating: boolean;
}) => {
  return (
    <>
      <CustomeHeading title={title} />
      {filtersList.map((filter, index) => (
        <CustomeCheckbox
          title={filter}
          key={index}
          bgColor={bgColor}
          borderColor={borderColor}
          checkedBgColor={checkedBgColor}
          checkmarkColor={checkmarkColor}
          textColor={textColor}
          isRating={isRating}
        />
      ))}
    </>
  );
};
