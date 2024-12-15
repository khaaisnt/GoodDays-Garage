import React from "react";
import Image from "next/image";
import Renew from "/public/autorenew.png";
import Support from "/public/support-agent.png";
import Ship from "/public/local-shipping.png";
import Wallet from "/public/wallet.png";

export default function Features() {
  return (
    <>
      <div className="mx-[40px] mb-[60px] md:mx-[80px] md:mb-[80px] lg:mx-[160px] lg:mb-[120px]">
        {/* Fitur - Fitur */}
        <div className="flex flex-wrap gap-x-[40px] gap-y-[20px] items-center justify-center md:gap-x-[60px] lg:gap-x-[120px]">
          <div className="flex flex-col items-center text-center">
            <div className="p-[20px] rounded-full w-[70px] border border-[#DF1F24] mb-[10px] flex justify-center items-center md:p-[25px] md:w-[90px] lg:p-[35px] lg:w-[130px]">
              <Image
                src={Ship}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[12px] font-semibold md:text-[14px] lg:text-[17px]">FREE DELIVERY</h4>
              <p className="text-[10px] text-[#5F5D5D] font-medium md:text-[12px] lg:text-[15px]">
                Indonesian Order Only
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-[20px] rounded-full w-[70px] border border-[#DF1F24] mb-[10px] flex justify-center items-center md:p-[25px] md:w-[90px] lg:p-[35px] lg:w-[130px]">
              <Image
                src={Support}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[12px] font-semibold md:text-[14px] lg:text-[17px]">7/24 SUPPORT</h4>
              <p className="text-[10px] text-[#5F5D5D] font-medium md:text-[12px] lg:text-[15px]">
                Always Support System
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-[20px] rounded-full w-[70px] border border-[#DF1F24] mb-[10px] flex justify-center items-center md:p-[25px] md:w-[90px] lg:p-[35px] lg:w-[130px]">
              <Image
                src={Renew}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[12px] font-semibold md:text-[14px] lg:text-[17px]">
                EASY AND FAST RETURN
              </h4>
              <p className="text-[10px] text-[#5F5D5D] font-medium md:text-[12px] lg:text-[15px]">
                Shop With Confidence
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-[20px] rounded-full w-[70px] border border-[#DF1F24] mb-[10px] flex justify-center items-center md:p-[25px] md:w-[90px] lg:p-[35px] lg:w-[130px]">
              <Image
                src={Wallet}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[12px] font-semibold md:text-[14px] lg:text-[17px]">SECURE PAYMENT</h4>
              <p className="text-[10px] text-[#5F5D5D] font-medium md:text-[12px] lg:text-[15px]">
                100% Secure Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
