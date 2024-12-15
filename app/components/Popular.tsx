import React from "react";
import Image from "next/image";
import Hat from "/public/Hat.png";

export default function Popular() {
  return (
    <>
      <div className="mx-4 md:mx-16 lg:mx-40 mb-12">
        <div className="w-full md:max-h-[489px] rounded-[15px] border border-1 border-black">
          <h1 className="mt-8 mb-12 text-center font-semibold text-2xl md:text-3xl">
            Most Popular
          </h1>
          <div className="flex flex-wrap justify-center items-center mb-10 gap-4">
            <div className="border border-1 border-black rounded-[5px] p-4">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-3 mb-5">
                <h5 className="text-lg font-semibold">Beany Heat</h5>
                <p className="text-sm">Stussy, Cotton</p>
                <p className="text-sm font-semibold">Rp500.00</p>
              </div>
            </div>
            <div className="border border-1 border-black rounded-[5px] p-4">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-3 mb-5">
                <h5 className="text-lg font-semibold">Beany Heat</h5>
                <p className="text-sm">Stussy, Cotton</p>
                <p className="text-sm font-semibold">Rp500.00</p>
              </div>
            </div>
            <div className="border border-1 border-black rounded-[5px] p-4">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-3 mb-5">
                <h5 className="text-lg font-semibold">Beany Heat</h5>
                <p className="text-sm">Stussy, Cotton</p>
                <p className="text-sm font-semibold">Rp500.00</p>
              </div>
            </div>
            <div className="border border-1 border-black rounded-[5px] p-4">
              <Image src={Hat} alt="gambar" />
              <div className="text-center mt-3 mb-5">
                <h5 className="text-lg font-semibold">Beany Heat</h5>
                <p className="text-sm">Stussy, Cotton</p>
                <p className="text-sm font-semibold">Rp500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
