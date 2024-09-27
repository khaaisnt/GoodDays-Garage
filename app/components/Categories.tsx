import React from "react";
import Image from "next/image";
import Acc from "/public/accessories.png";
import Jeans from "/public/jeans.png";
import Shirt from "/public/t-shirt.png";
import Short from "/public/short.png";
import Outwear from "/public/outwear.png";

export default function Categories() {
  return (
    <>
      <div className="mx-[160px] pb-[125px]">
        <div className="w-full max-h-[355px] bg-[#D9D9D9]">
          <h1 className="text-center font-semibold text-[32px] pt-[28px] pb-[44px]">
            Categories
          </h1>
          <div className="flex items-center gap-x-[85px] justify-center pb-[64px]">
            <div className="flex flex-col items-center">
              <Image src={Jeans} alt="gambar" className="rounded-full" />
              <h4 className="text-center text-[18px] font-medium pt-[23px]">
                Jeans
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Shirt} alt="gambar" className="rounded-full" />
              <h4 className="text-center text-[18px] font-medium pt-[23px]">
                T-Shirt
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Short} alt="gambar" className="rounded-full" />
              <h4 className="text-center text-[18px] font-medium pt-[23px]">
                Short
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Outwear} alt="gambar" className="rounded-full" />
              <h4 className="text-center text-[18px] font-medium pt-[23px]">
                Outwear
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Acc} alt="gambar" className="rounded-full" />
              <h4 className="text-center text-[18px] font-medium pt-[23px]">
                Accessories
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
