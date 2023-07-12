import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";
type ColumnProps = {
    title:string;
    links: Array<string>
}
const FooterColumn= ({title,links}:ColumnProps)=>(
    <div className="footer_column">
        <h4 className="font-semibold">
            {title}

        </h4>
        <ul className="flex flex-col gap-2 font-normal">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            <li>{link.text}</li>
          </Link>
        ))}
        </ul>
    </div>
)
function Footer() {
  return (
    <footer className="flexStart footer">
      <div className="flex-flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          Vidergarjeva ulica 13 Ljubljana 1261 LJUBLJANA-DOBRUNJE
        </div>
        <div className="flex flex-wrap gap-12">
            <FooterColumn  />
        </div>
      </div>
    </footer>
  );
}

export default Footer;