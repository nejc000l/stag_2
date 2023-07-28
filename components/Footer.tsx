import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" flex flex-start footer  relative text-[12px] md:text-lg  ">
      <div className="">
        <div className="flex items-start flex-col py-2">
          Vidergarjeva ulica 13 Ljubljana 1261 LJUBLJANA-DOBRUNJE
        </div>
        <div className="flex flex-wrap  ">
          {NavLinks.slice(0, 5).map((link) => (
            <Link className="pr-6" href={link.href} key={link.key}>
              <ul>
                <li className="list-none	">{link.text}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
