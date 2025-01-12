import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export const ProductDetailSection = () => {
  return (
    <div className="h-[649px] bg-[#F9F8FE] p-20 my-20">
      {/* Tab bar */}
      <div className="flex items-center gap-12">
        <h3 className="text-[24px] font-josefin text-[#151875] underline">
          Description
        </h3>
        <h3 className="text-[24px] font-josefin text-[#151875] ">
          Additional Info
        </h3>
        <h3 className="text-[24px] font-josefin text-[#151875] ">Reviews</h3>
        <h3 className="text-[24px] font-josefin text-[#151875] ">Video</h3>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h3 className="text-[22px] font-josefin text-[#151875] ">
          Varius tempor.
        </h3>
        <p className="text-[16px] font-josefin text-[#A9ACC6] mt-5">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </p>
      </div>

      <div>
        <h3 className="text-[22px] font-josefin text-[#151875] mt-5">
          More details
        </h3>

        <div className="flex items-center gap-3">
          <FaLongArrowAltRight />
          <p className="text-[16px] font-josefin text-[#A9ACC6] mt-5">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaLongArrowAltRight />
          <p className="text-[16px] font-josefin text-[#A9ACC6] mt-5">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaLongArrowAltRight />
          <p className="text-[16px] font-josefin text-[#A9ACC6] mt-5">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaLongArrowAltRight />
          <p className="text-[16px] font-josefin text-[#A9ACC6] mt-5">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>
      </div>
    </div>
  );
}


