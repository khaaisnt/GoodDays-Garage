import React from "react";

export default function Mail() {
  return (
    <>
      <div className="mx-4 mb-8 md:mx-16 lg:mx-28 xl:mx-36 md:mb-16">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            GET 10% OFF YOUR FIRST ORDER
          </h1>
          <h2 className="mt-2 text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8">
            Subscribe to get special offers, free giveaways, and once in a
            lifetime deals
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-black py-2 px-4 placeholder:text-sm w-full md:w-64 lg:w-72 text-sm mb-4 md:mb-0 md:mr-2"
            />
            <button className="py-2 px-4 uppercase text-sm md:text-base bg-gray-700 border border-black hover:bg-red-600 duration-200 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
