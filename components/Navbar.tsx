"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const router = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const routeMap: { [key: string]: string } = {
    '/':'/'
  };
  
  let file = routeMap[router];
  return (
    <nav
    className={`justify-between flex sticky top-0 z-[5] items-center text-white ${
      isScrolled ? "navbar" : (file ? "bg-transparent" : (file ? 'no-blur' : "bg-transparent backgroundOverlay2"))
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
      {windowWidth >= 1280 ? (
        <>
          <ul className="xl:flex text-small gap-7">
            {NavLinks.slice(0, 2).map((link) => (
              <Link href={link.href} key={link.key}>
                <li>{link.text}</li>
              </Link>
            ))}
          </ul>
          <div className="transform relative left-[-10%] ">
            <Transition 
              show={isMenuOpen}
              enter="transition duration-200 ease-out"
              enterFrom="transform -translate-y-full opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-full opacity-0"
            >
              <ul className="flex flex-col   my-4 bg-[#0c1607] text-black w-96 fixed top-0 left-0 p-4 transform">
                {NavLinks.slice(2).map((link) => (
                  <Link href={link.href} key={link.key}>
                    <li className="text-white text-[14px]	py-4">{link.text}</li>
                  </Link>
                ))}
              </ul>
            </Transition>
          </div>

          {NavLinks.length > 4 && (
            <button
              className="text-[12px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Pokaži manj" : "Pokaži več"}
            </button>
          )}
        </>
      ) : (
        <>
         <button
              className="text-[12px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Pokaži manj" : "Pokaži več"}
            </button>
          <div>
            <Transition className="w-96 "
              show={isMenuOpen}
              enter="transition duration-200 ease-out "
              enterFrom="transform -translate-y-full opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200 ease-in"
              leaveFrom="transform translate-y-0 opacity-100 "
              leaveTo="transform -translate-y-full opacity-0"
            >
              <ul className="flex flex-col z-10  bg-[#0c1607] text-black  fixed top-0 left-0 p-4 transform ">
                {NavLinks.map((link) => (
                  <Link href={link.href} key={link.key}>
                    <li className="py-2 text-white ">{link.text}</li>
                  </Link>
                ))}
              </ul>
            </Transition>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
