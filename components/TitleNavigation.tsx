import { NavLinks } from "@/constants";
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
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[2rem] sm:text-4xl lg:text-8xl text-[#72451f] font-semibold">
          Lovska Družina Pugled
        </h1>
        <ul className="relative text-center flex flex-col py-10 font-light">
        {NavLinks.slice(1).map((link: NavLink) => {
  const linkClass = link.shouldUnderline ? ' py-4 hover:underline' : 'py-4';
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
