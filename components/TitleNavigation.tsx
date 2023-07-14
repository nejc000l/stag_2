import { NavLinks } from "@/constants";
import Link from "next/link";
import { title } from "process";
import React from "react";

function TitleNavigation() {
  return (
<div className="h-screen paddings relative flex items-center justify-center">
  <div className="flex flex-col items-center justify-center ">
    <h1 className="text-[2rem] sm:text-4xl lg:text-8xl text-[#72451f] font-semibold	">Lovska Družina Pugled</h1>
    <ul className="relative  text-center flex flex-col py-10 font-light	">
      {NavLinks.map((link) => {
        return <Link href={link.href} className="py-4  " key={link.key}>{link.text}</Link>;
      })}
    </ul>
  </div>
</div>
  );
}

export default TitleNavigation;
