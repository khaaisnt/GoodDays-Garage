import React from "react";
import Image from "next/image";
import Renew from "/public/autorenew.png";
import Support from "/public/support-agent.png";
import Ship from "/public/local-shipping.png";
import Wallet from "/public/wallet.png";

export default function Features() {
  return (
    <>
      <div className="mx-[160px] mb-[120px]">
        {/* Fitur - Fitur */}
        <div className="flex gap-x-[120px] items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="p-[30px] rounded-full w-[120px] border border-[#DF1F24] mb-[10px] flex justify-center items-center">
              <Image
                src={Ship}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold">FREE DELIVERY</h4>
              <p className="text-[13px] text-[#5F5D5D] font-medium">
                Indonesian Order Only
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-[30px] rounded-full w-[120px] border border-[#DF1F24] mb-[10px] flex justify-center items-center">
              <Image
                src={Support}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold">7/24 SUPPORT</h4>
              <p className="text-[13px] text-[#5F5D5D] font-medium">
                Always Support System
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-[30px] rounded-full w-[120px] border border-[#DF1F24] mb-[10px] flex justify-center items-center">
              <Image
                src={Renew}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold">
                EASY AND FAST RETURN
              </h4>
              <p className="text-[13px] text-[#5F5D5D] font-medium">
                Shop With Confidence
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-[30px] rounded-full w-[120px] border border-[#DF1F24] mb-[10px] flex justify-center items-center">
              <Image
                src={Wallet}
                alt="gambar"
                className="flex justify-center items-center"
              />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold">SECURE PAYMENT</h4>
              <p className="text-[13px] text-[#5F5D5D] font-medium">
                100% Secure Payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
