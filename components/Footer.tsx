import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const FooterColumn= ()=>(
    <div className="footer_column    ">
        <h4 className="font-semibold">

        </h4>
        <ul className="flex flex-col gap-2 font-normal z-[100] ">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            <li className="z-[100]">{link.text}</li>
          </Link>
        ))}
        </ul>
    </div>
)
function Footer() {
  return (
    <footer className="flexStart footer h-auto">
      <div className="flex-flex-col gap-12 w-full z-10">
        <div className="flex items-start flex-col">
          Vidergarjeva ulica 13 Ljubljana 1261 LJUBLJANA-DOBRUNJE
        </div>
        <div className="flex flex-wrap gap-12">
            <FooterColumn/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;