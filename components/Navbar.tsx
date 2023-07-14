' @client '
'use client'
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`justify-between flex sticky top-0 z-10 items-center text-white ${
        isScrolled ? "navbar" : "bg-transparent"
      }`}
    >
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/Images/LZS_logo_90.png"
            width={144}
            height={40}
            alt="Flexible"
          />
        </Link>
      </div>
      <ul className="hidden xl:flex text-small gap-7">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            <li>{link.text}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}


export default Navbar;
