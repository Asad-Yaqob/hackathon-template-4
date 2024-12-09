import colors from '@/app/utils/constants/colors'
import React from 'react'
import SearchFieldWithSignUp from '../common/footer/SearchFieldWithSignUp'

const Footer = () => {
  return (
    <div className='max-w-[1920px] h-[479px] flex items-center justify-around font-lato mx-auto' style={{
        backgroundColor: colors.skyBlue,
        color: colors.subTextColor,
      }}>
      
      <div className='flex gap-16 '>
      <div >
        <div className='font-josefin text-[38px] pb-5 text-black'>
                <span>Hekto</span>
        </div>
            
        <div className='pb-5'>
            <SearchFieldWithSignUp />
        </div>

        <div className='flex flex-col text-[16px] '>
            <span>Contact Info</span>
            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
        </div>
      </div>

       <div>
        <div className='font-josefin text-[22px] pb-5 text-black'>
                <span>Catagories</span>
        </div>
            

        <div className='flex flex-col text-[16px] gap-y-5 cursor-pointer'>
            <span>Laptops & Computers</span>
            <span>Cameras & Photography</span>
            <span>Smart Phones & Tablets</span>
            <span>Video Games & Consoles</span>
            <span>Waterproof Headphones</span>
        </div>
      </div>


       <div>
        <div className='font-josefin text-[22px] pb-5 text-black'>
                <span>Customer Care</span>
        </div>
            
         <div className='flex flex-col text-[16px]  gap-y-5 cursor-pointer'>
            <span>My Account</span>
            <span>Discount</span>
            <span>Returns</span>
            <span>Orders History</span>
            <span>Order Tracking</span>
        </div>
      </div>

       <div>
        <div className='font-josefin text-[22px] pb-5 text-black'>
                <span>Pages</span>
        </div>
            
         <div className='flex flex-col text-[16px]  gap-y-5 cursor-pointer'>
            <span>Blog</span>
            <span>Browse the Shop</span>
            <span>Category</span>
            <span>Pre-Built Pages</span>
            <span>Visual Composer Elements</span>
            <span>WooCommerce Pages</span>
        </div>
      </div>
</div>
    </div>
  )
}

export default Footer
