import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";


function Footer() {
  return (
    <footer className=" flex flex-start footer  relative  ">
      <div className="">
        <div className="flex items-start flex-col">
          Vidergarjeva ulica 13 Ljubljana 1261 LJUBLJANA-DOBRUNJE
        </div>
        <div className="flex flex-wrap gap-16 ">
        {NavLinks.map((link) => (
            
          <Link href={link.href} key={link.key}>
          <li className="list-none	">{link.text}</li>
        </Link>
      ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;