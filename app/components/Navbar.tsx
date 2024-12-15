"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/GoodDays-Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-[12px] border-b border-[#D9D9D9] border-[2px] shadow-lg sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between">
          <Image
            src={Logo}
            alt="GoodDays Logo"
            className="w-[120px] mr-[73px]"
          />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex ${isOpen ? "block" : "hidden"} md:static absolute top-full left-0 w-full  bg-white md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row text-[18px] uppercase gap-x-[115px] p-4 md:p-0">
              <li className="my-2 md:my-0 border-b md:border-b-0 border-gray-300">
                <a href="#" className="duration-200 hover:text-red-600">
                  Home
                </a>
              </li>
              <li className="my-2 md:my-0 border-b md:border-b-0 border-gray-300">
                <a href="#" className="duration-200 hover:text-yellow-500">
                  About
                </a>
              </li>
              <li className="my-2 md:my-0 border-b md:border-b-0 border-gray-300">
                <a href="#" className="duration-200 hover:text-green-500">
                  Services
                </a>
              </li>
              <li className="my-2 md:my-0 border-b md:border-b-0 border-gray-300">
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
