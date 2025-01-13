import { checkoutItems } from "@/app/data/sample_data";
import { CartTotal } from "@/components/common/cart/CartTotal";
import { CheckoutForm } from "@/components/common/checkout/CheckoutForm";
import CheckoutItem from "@/components/common/checkout/CheckoutItem";
import TitleHeader from "@/components/common/header/TitleHeader";


const HecktoDemo = () => {
  return (
    
    <>
      <TitleHeader title="Heckto Demo" />

      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-[24px] text-left text-[#1D3178] font-josefin">
          Heckto Demo Page
        </h2>
        <p className="text-[12px] text-left text-[#1D3178] font-normal font-lato">
          Cart/ Information/ Shipping/ Payment
        </p>
      </div>

      <div className="flex items-center justify-center my-20">
        {/* Header  */}

        {/* Billing and user info form */}
        <CheckoutForm />

        {/* Selected Items */}
        <div className="flex flex-col">
          {checkoutItems.map((item, index) => (
            <CheckoutItem
              price={item.price}
              size={item.size}
              color={item.color}
              image={item.image}
              name={item.name}
              key={index}
            />
          ))}

          <CartTotal />
        </div>

      </div>
    </>
  );
};

export default HecktoDemo;
