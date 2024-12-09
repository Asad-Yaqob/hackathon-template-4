import React from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import colors from '../../utils/constants/colors'

const HeadingBar = () => {
  return (
    <div
      className="w-full md:max-w-[1920px] h-auto flex flex-wrap items-center justify-around font-josefin px-4 mx-auto"
      style={{
        backgroundColor: colors.violet,
        color: colors.white,
        fontWeight: 600,
        fontSize: 16,
      }}
    >
      {/* Contact Info */}
      <div className="flex flex-wrap gap-3 sm:gap-10 items-center">
        <div className="flex items-center gap-3">
          <FaRegEnvelope />
          <span>mhhasanul@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FiPhoneCall />
          <span>(12345)67890</span>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-2 sm:mt-0 flex flex-wrap items-center gap-3 sm:gap-5">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-5">
          <li className="flex items-center">
            English <RiArrowDropDownLine />
          </li>
          <li className="flex items-center">
            UUS <RiArrowDropDownLine />
          </li>
          <li className="flex items-center">
            Login <IoPersonOutline className="pl-1" />
          </li>
          <li className="flex items-center">
            Wishlist <MdOutlineFavoriteBorder className="pl-1" />
          </li>
          <li className="flex items-center">
            <IoCartOutline size={28} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeadingBar
