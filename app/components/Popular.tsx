import React from "react";
import Image from "next/image";
import Hat from "/public/Hat.png";

export default function Popular() {
  return (
    <>
      <div className="mx-[160px] mb-[108px]">
        <div className="w-full max-h-[489px] rounded-[15px] border border-1 border-black">
          <h1 className="mt-[30px] mb-[48px] text-center font-semibold text-[32px]">
            Most Populer
          </h1>
          <div className="flex justify-center items-center mb-[43px] gap-x-[20px]">
            <div className="border border-1 border-black rounded-[5px]">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-[11px] mb-[19px]">
                <h5 className="text-[20px] font-semibold">Beany Heat</h5>
                <p className="text-[15px]">Stussy, Cutton</p>
                <p className="text-[15px] font-semibold">Rp500.00</p>
              </div>
            </div>
            <div className="border border-1 border-black rounded-[5px]">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-[11px] mb-[19px]">
                <h5 className="text-[20px] font-semibold">Beany Heat</h5>
                <p className="text-[15px]">Stussy, Cutton</p>
                <p className="text-[15px] font-semibold">Rp500.00</p>
              </div>
            </div>
            <div className="border border-1 border-black rounded-[5px]">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-[11px] mb-[19px]">
                <h5 className="text-[20px] font-semibold">Beany Heat</h5>
                <p className="text-[15px]">Stussy, Cutton</p>
                <p className="text-[15px] font-semibold">Rp500.00</p>
              </div>
            </div>
            <div className="border border-1 border-black rounded-[5px]">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-[11px] mb-[19px]">
                <h5 className="text-[20px] font-semibold">Beany Heat</h5>
                <p className="text-[15px]">Stussy, Cutton</p>
                <p className="text-[15px] font-semibold">Rp500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
