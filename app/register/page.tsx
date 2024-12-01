import React from "react";
import Image from "next/image";
import CardRegist from "../components/CardRegist";
import LingkaranAtas from "/public/EllipseTop.png";
import LingkaranBawah from "/public/EllipseBottom.png";

export default function Register() {
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
          <CardRegist />
        </div>
      </div>
    </>
  );
}
