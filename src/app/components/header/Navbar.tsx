import React from 'react'
import SearchField from '../common/header/SearchField'
import colors from '@/app/utils/constants/colors'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="w-full  md:max-w-[1920px] h-auto flex flex-wrap items-center justify-around font-lato mx-auto px-4 mb-5 mt-5">
      {/* Brand */}
      <div className="font-josefin text-[28px] sm:text-[34px] font-bold mb-4 sm:mb-0">
        <span>Hekto</span>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-5 sm:gap-10">
          <li className="flex items-center" style={{ color: colors.pink }}>
            Home <RiArrowDropDownLine size={20} />
          </li>
          <li>Pages</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Search Field */}
      <div className="w-full sm:w-auto mt-3 sm:mt-0">
        <SearchField />
      </div>
    </div>
  );
}

export default Navbar
