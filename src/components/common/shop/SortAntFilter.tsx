import { Grid2x2Icon } from "lucide-react";
import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

export const SortAndFilter = () => {
  return (
    <div className="w-full max-w-[1171px] h-[44px] mt-[100px] mb-[100px]">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-josefin text-[#151875] text-[22px]">
            Ecommerce Acceories & Fashion item
          </h3>
          <p className="font-lato text-[#151875] text-[12px] font-normal">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex items-end ">
          <div className="flex">
            <span className="font-lato text-[#3F509E] text-[16px] font-normal">
              Per Page:
            </span>
            <input
              type="text"
              className=" border w-full max-w-[55px] h-[25px] ms-1"
            />
          </div>
          <div className="flex ms-5 me-5">
            <span className="font-lato text-[#3F509E] text-[16px] font-normal">
              Sort By:
            </span>
            <input
              type="text"
              placeholder="Best Match"
              className=" text-center text-[Best Match] border w-full max-w-[96px] h-[28px] ms-1"
            />
          </div>
          <div className="flex">
            <span className="font-lato text-[#3F509E] text-[16px] font-normal">
              View:
            </span>
            <div className="flex items-center ms-2 me-2">
              <IoGrid height={4} width={4} /> <FaList height={4} width={4} className="ms-2" />
            </div>
            <input
              type="text"
              className=" border w-full max-w-[162px] h-[30px] ms-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
