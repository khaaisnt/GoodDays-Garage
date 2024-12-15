import React from "react";
import Image from "next/image";
import Logo from "/public/GoodDays-Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="px-4 md:px-16 lg:px-32 xl:px-48 border-t border-1 border-black">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-12">
          <div>
            <Image src={Logo} alt="gambar" className="mt-4 md:mt-6" />
          </div>
          <div className="mt-4 md:mt-18">
            <h5 className="text-lg font-medium mb-4">Corporate</h5>
            <ul className="text-lg text-gray-600 font-medium">
              <li className="mb-4">
                <a href="">Shipping & Returns</a>
              </li>
              <li className="mb-4">
                <a href="">About us</a>
              </li>
              <li className="mb-32">
                <a href="">Data Preferences</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
