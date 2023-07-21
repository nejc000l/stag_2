import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
type NavLink = {
  href: string;
  key: string;
  text: string;
  shouldUnderline?: boolean;
};

function TitleNavigation() {
  return (
    <div className="h-screen paddings relative flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center p-24 flex-wrap ">
        <div className="  font-semibold text-center absolute md:top-24 top-[16%]">
          <h6 className="md:text-4xl text-sm  text-[#173b19] font-bold">
            {" "}
            LOVSKA DRUŽINA{" "}
          </h6>{" "}
          <h1 className="text-[4rem] md:text-[8rem]  drop-shadow-lg 	 text-[#aa730e]">
            Pugled{" "}
          </h1>
        </div>
        <span className=" pt-[5rem] m-[1rem] flex flex-col  text-[12px] gap-[2px] items-center">
          <HiOutlineMail className="w-[20px] h-[20px]" />

          {NavLinks.map((link) => (
            <span className="" key={link.key}>
              <a>{link.email} </a>
            </span>
          ))}
          {
            NavLinks.map((link) => (
              <span key={link.key}>
                {link.vodja}
              </span>
            ))
          }
        </span>
        <ul className="relative text-center  text-white flex flex-col font-light ">
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
