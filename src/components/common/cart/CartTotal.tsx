"use client";

import React from "react";
import { useCartContext } from "@/context/cart_context";
import { useCheckoutContext } from "@/context/checkout_context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const CartTotal = ({ isNavigate }: { isNavigate: boolean }) => {
  const { getCartTotal, dynamicCartItems } = useCartContext() as {
    getCartTotal: () => number;
    dynamicCartItems: [];
  };

  const { handleCheckout } = useCheckoutContext() as {
    handleCheckout: (
      cartItems: {
        id: string;
        name: string;
        price: number;
        quantity: number;
      }[],
      totalPrice: () => number
    ) => Promise<{
      _type: string;
      user: {
        _type: string;
        _ref: string | undefined;
      };
      items: [];
      address: string;
      appartment: string;
      city: string;
      postalCode: string;
      totalPrice: number;
      status: string;
      orderDate: string;
    }>;
  };

  const router = useRouter();

  //  useEffect(() => {
  //    if (router && !router.isReady) {
  //      return;
  //    }
  //   //  console.log(router)
  //  }, [router]);

  const completeCheckout = async () => {
    const order = await handleCheckout(dynamicCartItems, getCartTotal);

    if (order) {
      console.log("Order completed");
      router.push("/pages/order-completed");
      return;
    }

    console.log("Order failed");
  };

  return (
    <div className="ms-14">
      <h2 className="text-[20px] font-josefin text-[#1D3178] text-center my-4">
        Cart Totals
      </h2>
      <div className="w-[371px] h-[284px] bg-[#F4F4FC] p-10 rounded">
        {/* Subtotals */}
        <div className="flex justify-between">
          <h3 className="text-[18px] font-lato font-semibold text-[#1D3178]">
            Subtotals:
          </h3>
          <p className="text-[16px] font-normal font-lato text-[#15245E]">
            ${getCartTotal()}
          </p>
        </div>
        <div className="w-full bg-[#E8E6F1] h-[2px] mt-2"> </div>

        {/* Totals */}
        <div className="flex justify-between mt-10">
          <h3 className="text-[18px] font-lato font-semibold text-[#1D3178]">
            Totals:
          </h3>
          <p className="text-[16px] font-normal font-lato text-[#15245E]">
            ${getCartTotal()}
          </p>
        </div>
        <div className="w-full bg-[#E8E6F1] h-[2px] mt-2"> </div>

        {/* Shipping line */}
        <div className="flex items-center gap-2 my-6">
          <span className="w-[8px] h-[8px] rounded-full bg-[#19D16F]"></span>
          <p className="text-[12px] font-lato font-normal text-[#8A91AB]">
            Shipping & taxes calculated at checkout
          </p>
        </div>

        {/* Checkout Button */}
        <div>
          {isNavigate ? (
            <Link href={"/pages/heckto-demo"}>
              <button className="w-[312px] h-[40px] text-[14px] font-bold text-[#FFFFFF] rounded bg-[#19D16F]">
                Proceed To Checkout
              </button>
            </Link>
          ) : (
            <button
              onClick={completeCheckout}
              className="w-[312px] h-[40px] text-[14px] font-bold text-[#FFFFFF] rounded bg-[#19D16F]"
            >
              Proceed To Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
