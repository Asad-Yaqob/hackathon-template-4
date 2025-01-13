import React from 'react'

import { cartItems } from '@/app/data/sample_data';
import { CartItem } from './CartItem';

export const CartITemList = () => {
  return (
    <div >
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-[20px] text-left font-josefin text-[#1D3178] px-4 py-2">
              Product
            </th>
            <th className="text-[20px] font-josefin text-[#1D3178] px-4 py-2">
              Price
            </th>
            <th className="text-[20px] font-josefin text-[#1D3178] px-4 py-2">
              Quantity
            </th>
            <th className="text-[20px] font-josefin text-[#1D3178] px-4 py-2">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem
              image={item.image}
              name={item.name}
              price={item.price}
              color={item.color}
              quantity={item.quantity}
              size={item.size}
              total={item.total}
              key={item.name}
            />
          ))}
          <tr>
            <td colSpan={4}>
              <div className="flex items-center justify-between">
                <button className="w-[134px] h-[39px] bg-[#FB2E86] text-[16px] text-[#FFFFFF] rounded">
                  Update Cart
                </button>
                <button className="w-[134px] h-[39px] bg-[#FB2E86] text-[16px] text-[#FFFFFF] rounded">
                  Clear Cart
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


