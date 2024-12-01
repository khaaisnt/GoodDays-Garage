import React from "react";
import Image from "next/image";
import CardLogin from "../components/CardLogin";
import LingkaranAtas from "/public/EllipseTop.png";
import LingkaranBawah from "/public/EllipseBottom.png";

export default function Login() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute top-0 right-0">
          <Image
            src={LingkaranAtas}
            alt="Lingkaran"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src={LingkaranBawah}
            alt="Lingkaran"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute">
          <CardLogin />
        </div>
      </div>
    </>
  );
}
