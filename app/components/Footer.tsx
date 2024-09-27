import React from "react";
import Image from "next/image";
import Logo from "/public/GoodDays-Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="px-[200px] border-t border-1 border-black">
        <div className="flex gap-x-[50px]">
          <div>
            <Image src={Logo} alt="gambar" className="mt-[17px]" />
          </div>
          <div className="mt-[72px]">
            <h5 className="text-[18px] font-medium mb-[16px]">Corporate</h5>
            <ul className="text-[18px] text-[#5F5D5D] font-medium">
              <li className="mb-[15px]">
                <a href="">Shiping & Returns</a>
              </li>
              <li className="mb-[15px]">
                <a href="">About us</a>
              </li>
              <li className="mb-[127px]">
                <a href="">Data Preferences</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
