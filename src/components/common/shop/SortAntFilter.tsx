import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

export const SortAndFilter = () => {
  return (
    <div className="w-full max-w-[1171px] mt-10 mb-10 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 className="font-josefin text-[#151875] text-[18px] sm:text-[22px]">
            Ecommerce Accessories & Fashion Items
          </h3>
          <p className="font-lato text-[#151875] text-[12px] font-normal">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span className="font-lato text-[#3F509E] text-[14px]">
              Per Page:
            </span>
            <input
              type="text"
              className="border w-[55px] h-[25px] text-center"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-lato text-[#3F509E] text-[14px]">
              Sort By:
            </span>
            <input
              type="text"
              placeholder="Best Match"
              className="border w-[96px] h-[28px] text-center"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-lato text-[#3F509E] text-[14px]">View:</span>
            <div className="flex items-center gap-2">
              <IoGrid size={16} /> <FaList size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
