import React from "react";

const CustomeHeading = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-[20px] text-[#151875] font-josefin">{title}</h3>
      <hr className="w-[134px] bg-[#000000]" />
    </div>
  );
};

export default CustomeHeading;
