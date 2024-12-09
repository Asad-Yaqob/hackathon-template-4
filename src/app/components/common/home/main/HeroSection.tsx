// heroSection.js
import colors from "@/app/utils/constants/colors";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0FF] h-[764px] w-full flex items-center justify-center ">
      <div className="container flex items-center justify-center relative ">
        {/* Left Text Content */}
        <div className="flex flex-col space-y-4 max-w-lg">
          <p className="text-[#FB2E86] font-lato text-sm text-[16px]">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-[34px] font-josefin font-bold text-gray-900">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p
            className="font-lato text-base text-[16px]"
            style={{ color: colors.subTextColor }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="px-6 py-3 w-[163px] h-[50px] bg-[#FB2E86] text-white font-lato text-sm rounded hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>

          {/* Lamp Image */}
          <div className="absolute top-[-80px] left-[-150px] md:left-[-80px] md:top-[-180px]">
            <Image
              src="/images/home_banner/lamp.png"
              alt="Lamp"
              width={387}
              height={387}
              className="md:w-[287px] md:h-[287px] "
            />
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative flex-shrink-0">
          {/* Background Circles */}
          <div className="absolute -top-8 -right-8 w-[648px] h-[648px] md:w-[448px] md:h-[448px] bg-[#ECD2FA59] rounded-full"></div>
          <div className="absolute -top-4 -right-4 w-[651px] h-[651px] md:w-[448px] md:h-[451px] bg-[#ECD2FA59] rounded-full"></div>

          {/* Discount Circle */}
          <div className="absolute top-4 right-4 md:right-[-45px] md:top-[5px] bg-[#00C1FE] text-white text-[35px] md:text-[25px] font-josefin font-bold px-6 py-4 rounded-full">
            50% <br /> off
          </div>

          <Image
            src="/images/home_banner/Shell-Shaped-Armchair.png"
            alt="Furniture Chair"
            width={629}
            height={629}
            className="rounded-md md:w-[400px] md:h-[400px]"
          />
        </div>

        {/* Sliding Dots */}
        <div className="flex space-x-2 mt-6 absolute bottom-14">
          <div className="w-[10px] h-[9.89px] bg-[#FB2E86] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
