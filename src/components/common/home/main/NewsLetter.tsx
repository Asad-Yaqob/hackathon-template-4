import React from 'react'

export const NewsLetter = () => {
  return (
    <div
  className="w-full h-[462px] bg-cover bg-center flex items-center justify-center px-4 md:px-8 my-20"
  style={{ backgroundImage: "url('/images/home_banner/news-letter.png')" }}
>
  <div className="text-center">
    <h1 className="text-[#151875] text-[24px] md:text-[30px] lg:text-[35px] font-josefin">
      Get Latest Update By Subscribing
    </h1>
    <p className="mt-2 text-[#151875] text-[20px] md:text-[25px] lg:text-[30px] font-josefin">
      Our Newsletter
    </p>
    <button className="bg-[#FB2E86] w-[140px] md:w-[173px] h-[40px] md:h-[49px] rounded text-[#FFFFFF] text-[14px] md:text-[17px] mt-5">
      Shop Now
    </button>
  </div>
</div>
  )
}

