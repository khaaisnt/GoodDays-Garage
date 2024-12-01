"use client";
import React, { useState } from "react";
import Image from "next/image";
import Man from "/public/ManLogin.png";
import User from "/public/User.svg";
import Lock from "/public/lock-circle.svg";
import Eye from "/public/eye.svg";
import EyeOff from "/public/eye-off.svg";
import Logo from "/public/GoodDays-Logo.png";

export default function CardLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-[1212px] h-[700px] flex justify-center gap-x-[200px] items-center rounded-[35px] bg-white shadow-2xl px-[40px] py-[30px] ">
        <div className="relative">
          <div className="absolute top-4 left-4">
            <Image src={Logo} alt="logo" width={100} height={50} />
          </div>
          <div className="max-w-[500px] h-full max-h-[650px]">
            <Image src={Man} alt="man" />
          </div>
        </div>
        <div className="w-[376px]">
          <div className="text-center">
            <h3 className="font-semibold text-[32px]">Login your account</h3>
            <p className="text-darkGray">Hello, welcome back!</p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-y-2">
            {/* input username */}
            <div className="relative">
              <Image
                src={User}
                alt="user"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                id="username"
                type="text"
                className="pl-10 p-[10px] border-darkGray border-2 shadow-inner focus:outline-none rounded-[6px] w-full"
                placeholder="Username"
              />
            </div>

            {/* input password */}
            <div className="relative">
              <Image
                src={Lock}
                alt="lock"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="pl-10 pr-10 p-[10px] border-darkGray invalid:text-red-600 border-2 shadow-inner focus:outline-none rounded-[6px] w-full"
                placeholder="Password"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <Image
                  src={showPassword ? EyeOff : Eye}
                  alt="toggle password visibility"
                />
              </div>
            </div>

            <button
              id="register"
              className="w-full text-white p-[8px] bg-red-600 hover:bg-red-700 transition-all mt-20 rounded-[6px]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
