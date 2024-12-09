import React from 'react'
import SearchField from '../common/header/SearchField'
import colors from '@/app/utils/constants/colors'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='max-w-[1176px] h-[40px] flex items-center justify-between font-lato my-5 mx-auto'>

            <div className='font-josefin text-[34px] font-bold'>
                <span>Hekto</span>
            </div>

       <div>
        <ul className="flex items-center gap-10 cursor-pointer">
    <li className="flex items-center " style={{color: colors.pink}}>
      Home <RiArrowDropDownLine  size={28}/>
    </li>
    <li className="flex items-center">
      Pages 
    </li>
    <li className="flex items-center ">
      Products 
    </li>
    <li className="flex items-center">
      Blog 
    </li>
    <li className="flex items-center">
        Shop
    </li>
    <li className="flex items-center">
        Contact
    </li>
  </ul>
        </div> 

    
      <SearchField />
    </div>
  )
}

export default Navbar
