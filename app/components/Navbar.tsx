import React from "react";
import Image from "next/image";
import Logo from "/public/GoodDays-Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="p-[12px] border-b border-[#D9D9D9] border-[2px] shadow-lg sticky top-0 bg-white z-50">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="GoodDays Logo"
            className="w-[120px] mr-[73px]"
          />

          <div>
            <ul className="flex text-[18px] uppercase gap-x-[115px]">
              <li>
                <a href="#" className="duration-200 hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="duration-200 hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="duration-200 hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="duration-200 hover:text-cyan-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
