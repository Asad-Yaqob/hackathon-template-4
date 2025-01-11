import React from 'react'

interface TitleHeaderProps {
  title: string; 
}

const TitleHeader = ({title}:TitleHeaderProps) => {
  return (
    <div className=" w-full max-w-[1920px] h-[285px] bg-[#F6F5FF]">
      <div className="absolute top-[248px] left-[375px]">
        <h2 className="font-josefin text-[36px] text-[#101750] ">{title}</h2>
        <p className="font-lato text-[16px] text-[#000000] font-medium">
          Home . Pages . <span className="text-[#FB2E86] text-[16px] font-lato font-medium">{title}</span>
        </p>
      </div>
    </div>
  );
}

export default TitleHeader
