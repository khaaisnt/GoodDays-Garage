import React from "react";

export default function Mail() {
  return (
    <>
      <div className="mx-[115px] mb-[125px]">
        <div className="text-center">
          <h1 className="text-[40px] font-medium">
            GET 10% OFF YOUR FIRST ORDER
          </h1>
          <h2 className="mt-[11px] text-[32px] mb-[37px]">
            Subscribe to get special offers, free giveaways, and once in a
            lifetime deals
          </h2>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-[1px] border-black py-[15px] px-[20px] placeholder:text-[24px] w-[400px] text-[15px]"
            />
            <button className="py-[15px] px-[30px] uppercase text-[24px] bg-[#5F5D5D] border-[1px] border-black hover:bg-[#DF1F24] duration-200 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
