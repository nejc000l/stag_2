import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavLink = {
  href: string;
  key: string;
  text: string;
  shouldUnderline?: boolean;
};

function TitleNavigation() {
  return (
    <div className="h-screen paddings relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center  ">
        <div className="  font-semibold text-center  ">
        


        <h6 className="md:text-4xl text-sm  text-[#173b19] font-bold">
            {" "}
            LOVSKA DRUŽINA{" "}
          </h6>{" "}
          <h1 className="text-4xl md:text-8xl drop-shadow-lg 	 text-[#aa730e]">
            Pugled{" "}
          </h1>
        </div>
    <ul className="relative text-center  text-white flex flex-col py-10 font-light ">
          {NavLinks.slice(1).map((link: NavLink) => {
            const linkClass = link.shouldUnderline
              ? " py-4 hover:underline"
              : "py-4";
            return (
              <li key={link.key}>
                <Link href={link.href}>
                  <div className={linkClass}>{link.text}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TitleNavigation;
