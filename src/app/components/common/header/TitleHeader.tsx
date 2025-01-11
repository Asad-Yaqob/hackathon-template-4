import React from 'react'

interface TitleHeaderProps {
  title: string; 
}

const TitleHeader = ({title}:TitleHeaderProps) => {
  return (
    <div className=" w-full max-w-[1920px] h-[285px] bg-[#F6F5FF]">
      <div className="absolute top-[248px] left-[375px]">
        <span className="font-josefin text-[36px] text-[#101750] ">
          {title}
        </span>
      </div>
    </div>
  );
}

export default TitleHeader
