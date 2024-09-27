import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Maps"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col">
      <div className="w-full border">
        <Map />
      </div>

      <p className="h-[80px] grid place-content-center">
        ©️ Phingaz 2024 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
