import React from "react";
import Image from "next/image";
import Hero from "/public/MobilKuda.png";

export default function Head() {
  return (
    <>
      <div className="mx-[160px] flex justify-center mb-[100px]">
        <div>
          <Image src={Hero} alt="gambar" />
          <div className="flex justify-center">
            <div className="text-center absolute top-[200px]">
              <h3 className="text-[24px]">Discover Lastest Trend</h3>
              <h1 className="text-[32px] pt-[16px] pb-[30px]">
                AUTUMN COLLECTION, 2024
              </h1>
              <button className="py-[10px] px-[30px] bg-[#DF1F24] hover:bg-[#b6262b] duration-200 text-white rounded-[30px] shadow-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
