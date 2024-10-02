"use client";
import { scrollItems } from "@/app/constants";
import Image from "next/image";
import React from "react";

const ScrollLogo = () => {
  return (
    <div
      style={{
        mask: "linear-gradient(90deg, transparent, white 20% 80%, transparent)",
        WebkitMask:
          "linear-gradient(90deg, transparent, white 20% 80%, transparent)",
      }}
      className="container p-0 overflow-hidden"
    >
      <ul className="flex gap-5 animate-scroll w-fit">
        {[...scrollItems, ...scrollItems].map((el, i) => {
          return (
            <li
              key={i}
              className="min-w-[100px] h-[100px] flex justify-center flex-col items-center gap-2 border-2 border-black rounded-custom dark:
              0border-white"
            >
              <span>
                <Image
                  src={`/skills/${el.logo}.svg`}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </span>
              <p className="text-sm font-semibold">{el.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScrollLogo;
